import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // ✅ reads from .env.local
  dangerouslyAllowBrowser: true, // required in Vite frontend
});

export async function askAI(message: string) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini", // lightweight & fast for chatbot
    messages: [{ role: "user", content: message }],
  });

  return response.choices[0].message.content;
}
