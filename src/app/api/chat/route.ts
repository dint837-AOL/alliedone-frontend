import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

/**
 * Handles incoming chat messages from the frontend ChatWidget and streams back 
 * responses using the Vercel AI SDK and OpenAI's GPT models.
 * 
 * @param {Request} req - The incoming HTTP request containing the chat history (messages).
 * @returns {Promise<Response>} A text stream response containing the assistant's reply.
 */
export async function POST(req: Request) {
  // If the user hasn't set up their OpenAI API key yet, return a mock streaming response
  if (!process.env.OPENAI_API_KEY) {
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const message = "Hi! You currently do not have an OpenAI API key configured. To activate my AI brain, please create an account at platform.openai.com, generate an API key, and add it to your `.env.local` file as `OPENAI_API_KEY=sk-...`. Once you do that, I'll be fully functional!";
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

  // If the key is present, process the real AI request
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system:
      "You are the AlliedOne Assistant, a professional, knowledgeable, and helpful AI chatbot for AlliedOne Limited. AlliedOne provides Enterprise AI Automation, Consulting, and Digital Marketing. Keep your answers brief, professional, and friendly.",
    messages,
  });

  return result.toTextStreamResponse();
}
