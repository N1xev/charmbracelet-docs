import { ProvideLinksToolSchema } from '../../../lib/chat/inkeep-qa-schema';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { convertToModelMessages, streamText } from 'ai';

export const runtime = 'edge';

const google = createGoogleGenerativeAI({
  apiKey: process.env.AI_API_KEY,
  baseURL: 'https://generativelanguage.googleapis.com/v1beta',
});

export async function POST(req: Request) {
  const reqJson = await req.json();

  const result = streamText({
    model: google('gemini-2.0-flash'),
    tools: {
      provideLinks: {
        inputSchema: ProvideLinksToolSchema,
      },
    },
    messages: convertToModelMessages(reqJson.messages, {
      ignoreIncompleteToolCalls: true,
    }),
    toolChoice: 'auto',
  });

  return result.toUIMessageStreamResponse();
}
