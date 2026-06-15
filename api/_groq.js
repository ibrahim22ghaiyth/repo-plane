// Shared helper that calls Groq's OpenAI-compatible chat API and returns a
// response shaped like the Anthropic Messages API: { content: [{ type: "text", text }] }

export async function groqChat({ system, messages, max_tokens }) {
  const key = process.env.GROQ_API_KEY;
  if (!key) throw new Error("Missing GROQ_API_KEY env variable");

  const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
      max_tokens: max_tokens || 1000,
      messages: [
        ...(system ? [{ role: "system", content: system }] : []),
        ...(messages || []),
      ],
    }),
  });

  const data = await r.json();
  if (!r.ok) {
    const err = new Error(data?.error?.message || `Groq API error (${r.status})`);
    err.status = r.status;
    throw err;
  }

  const text = data.choices?.[0]?.message?.content || "";
  return { content: [{ type: "text", text }] };
}
