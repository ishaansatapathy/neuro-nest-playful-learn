// src/lib/openaiClient.ts
// Stubbable OpenAI client for demo purposes.
// By default: returns canned answers (no external API call).
// Flip VITE_USE_REAL_OPENAI=true in .env.local to enable "real" call (you must implement the actual HTTP call there).

type OpenAIResponse = {
  text: string;
};

const cannedResponses: Record<string, string> = {
  hello: "Hello! I'm NeuroNest's helper — nice to meet you! I can talk about ADHD, Dyslexia, Dyscalculia, and games.",
  hi: "Hi! How are you today? I love telling stories and helping with fun learning games!",
  adhd: "ADHD (Attention-Deficit/Hyperactivity Disorder) often shows as difficulty sustaining attention, impulsiveness, and hyperactivity. In young children it may look like frequent shifting of focus, fast responses, or lots of energy. Early playful screening can highlight attention variability and recommend focused training or further assessment.",
  dyslexia: "Dyslexia primarily affects the way the brain decodes written language. Children may mix letters (b/d/p/q), read slowly, or confuse letter order. It does not reflect low intelligence — often those with dyslexia have strong visual or problem-solving skills. Early screening and targeted literacy practice help a lot.",
  dyscalculia: "Dyscalculia is a learning difference affecting number sense and math reasoning — difficulties with counting, recognizing number patterns, or understanding quantities. With tailored exercises and repeated exposure in playful ways, children can build confidence and skills.",
  math: "Math can be taught like a game: break problems into small steps, use visuals, and practice often. Tiny consistent wins build confidence.",
  school: "School can be tricky — every child learns differently. Our games are designed to discover strengths and guide supportive practice.",
};

function findCannedResponse(prompt: string): string | null {
  const text = prompt.toLowerCase();
  for (const k of Object.keys(cannedResponses)) {
    if (text.includes(k)) return cannedResponses[k];
  }
  // fallback
  return null;
}

export async function generateResponse(prompt: string): Promise<OpenAIResponse> {
  const useReal = import.meta.env.VITE_USE_REAL_OPENAI === "true";

  // 1) Mock path (default) — returns local canned responses
  if (!useReal) {
    const found = findCannedResponse(prompt);
    if (found) {
      return { text: found };
    }
    // generic fallback reply
    return { text: "Hmm, I don't know that yet — but that's a great question! We'll add it to our learning library." };
  }

  // 2) Real API path placeholder — you must implement actual network call
  // Note: this block is intentionally incomplete so you don't accidentally leak keys.
  // If you set VITE_USE_REAL_OPENAI=true, implement the fetch/Axios call here.
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (!apiKey) {
    return { text: "OpenAI key missing. Please set VITE_OPENAI_API_KEY to use the real API." };
  }

  // Example placeholder -- replace with your preferred OpenAI fetch code.
  // return fetch("https://api.openai.com/v1/...", { ... })

  return { text: "REAL API mode is enabled but not implemented in this demo. Please add a real fetch here." };
}
