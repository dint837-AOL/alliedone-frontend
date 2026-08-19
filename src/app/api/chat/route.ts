import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

function createFallbackUIMessageResponse(text: string) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      controller.enqueue(encoder.encode(`data: {"type":"start"}\n\n`));
      controller.enqueue(encoder.encode(`data: {"type":"start-step"}\n\n`));
      controller.enqueue(encoder.encode(`data: {"type":"text-start","id":"0"}\n\n`));

      const words = text.split(" ");
      for (const word of words) {
        const delta = JSON.stringify({ type: "text-delta", id: "0", delta: `${word} ` });
        controller.enqueue(encoder.encode(`data: ${delta}\n\n`));
        await new Promise((resolve) => setTimeout(resolve, 25));
      }

      controller.enqueue(encoder.encode(`data: {"type":"text-end","id":"0"}\n\n`));
      controller.enqueue(encoder.encode(`data: {"type":"finish-step"}\n\n`));
      controller.enqueue(encoder.encode(`data: {"type":"finish","finishReason":"stop"}\n\n`));
      controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}

/**
 * Handles incoming chat messages from the frontend ChatWidget and streams back 
 * responses using Google Gemini (or OpenAI if configured) via the UI Message Stream protocol.
 * 
 * @param {Request} req - The incoming HTTP request containing the chat history (messages).
 * @returns {Promise<Response>} A UI Message Stream response containing the assistant's reply.
 */
export async function POST(req: Request) {
  try {
    const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    // If no AI key is configured, return a mock helpful message in UI stream format
    if (!geminiKey && !openaiKey) {
      return createFallbackUIMessageResponse(
        "Hi! The chatbot API key is not yet configured. Please set GEMINI_API_KEY in your environment variables to enable the AI assistant."
      );
    }

    const { messages } = await req.json();

    const formattedMessages = (messages || []).map((m: any) => ({
      role: m.role,
      content:
        m.content ||
        (Array.isArray(m.parts)
          ? m.parts
              .map((p: any) => (p.type === "text" ? p.text : ""))
              .join("")
          : "") ||
        "",
    }));

    const model = geminiKey
      ? createGoogleGenerativeAI({ apiKey: geminiKey })("gemini-3.6-flash")
      : openai("gpt-4o-mini");

    const result = streamText({
      model,
      system:
        "You are the AlliedOne Assistant, a professional, knowledgeable, and helpful AI chatbot for AlliedOne Limited. AlliedOne provides Enterprise AI Automation, Consulting, Global Trade, and Digital Solutions. Keep your answers concise, helpful, and professional.",
      messages: formattedMessages,
    });

    return result.toUIMessageStreamResponse();
  } catch (error: any) {
    console.error("Chat API error:", error);
    return createFallbackUIMessageResponse(
      "I'm sorry, I encountered a temporary connection issue. Please try asking again in a moment."
    );
  }
}
