// src/lib/elevenLabsClient.ts
// Minimal TTS helper: uses browser SpeechSynthesis by default.
// If you enable real ElevenLabs, implement HTTP request here and return audio blob/URL.

export async function speakText(text: string, opts?: { voice?: string; rate?: number; pitch?: number }) {
  const useReal = import.meta.env.VITE_ELEVENLABS_API_KEY && import.meta.env.VITE_USE_REAL_OPENAI === "true";
  // NOTE: we reuse VITE_USE_REAL_OPENAI flag for demo toggle. You can create a separate flag if you prefer.

  if (!useReal) {
    // Browser synth fallback — tweak pitch/rate for a "cuter" voice
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.pitch = opts?.pitch ?? 1.2; // slightly higher pitch for cute tone
    utter.rate = opts?.rate ?? 0.95;
    // choose a nice voice if available
    const voices = speechSynthesis.getVoices();
    // prefer a female/child-like voice if present
    const prefer = voices.find(v => /female|child|young|sarah|karen/i.test(v.name)) ?? voices[0];
    if (prefer) utter.voice = prefer;
    speechSynthesis.speak(utter);
    return;
  }

  // REAL ElevenLabs path (not implemented in demo):
  // - You would POST text to ElevenLabs TTS endpoint with your API key
  // - Receive an audio stream / url and play it
  // For safety, do this on a server (not from client) so you can keep your key secret.
  console.warn("ElevenLabs TTS mode is enabled but not implemented in this stub.");
}
