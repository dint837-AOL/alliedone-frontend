import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

/**
 * Handles incoming chat messages from the frontend ChatWidget and streams back 
 * responses using Google Gemini (or OpenAI if configured).
 * 
 * @param {Request} req - The incoming HTTP request containing the chat history (messages).
 * @returns {Promise<Response>} A text stream response containing the assistant's reply.
 */
export async function POST(req: Request) {
  const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  // If no AI key is configured, return a mock helpful message
  if (!geminiKey && !openaiKey) {
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const message =
          "Hi! The chatbot API key is not yet configured. Please set GEMINI_API_KEY in your environment variables (or .env.local) to enable the AI assistant.";
        const chunks = message.split(" ");
        for (const chunk of chunks) {
          // Vercel AI SDK text stream protocol
          controller.enqueue(encoder.encode(`0:"${chunk} "\n`));
          await new Promise((resolve) => setTimeout(resolve, 50)); // simulate typing delay
        }
        controller.close();
      },
    });
    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  // If a key is present, process the real AI request
  const { messages } = await req.json();

  const formattedMessages = messages.map((m: any) => ({
    role: m.role,
    content: m.content || (m.parts && m.parts[0]?.text) || "",
  }));

  const model = geminiKey
    ? createGoogleGenerativeAI({ apiKey: geminiKey })("gemini-2.0-flash")
    : openai("gpt-4o-mini");

  const result = streamText({
    model,
    system:
      "You are the AlliedOne Assistant, a professional, knowledgeable, and helpful AI chatbot for AlliedOne Limited. AlliedOne provides Enterprise AI Automation, Consulting, Global Trade, and Digital Solutions. Keep your answers concise, helpful, and professional.",
    messages: formattedMessages,
  });

  return result.toTextStreamResponse();
}
