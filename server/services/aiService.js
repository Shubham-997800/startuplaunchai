import { OPENROUTER_CONFIG, getHeaders } from '../config/openrouter.js';

export async function callAI(systemPrompt, userPrompt, options = {}) {
  const {
    model = OPENROUTER_CONFIG.model,
    temperature = OPENROUTER_CONFIG.temperature,
    maxTokens = OPENROUTER_CONFIG.maxTokens,
  } = options;

  const body = {
    model,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature,
    max_tokens: maxTokens,
    response_format: { type: 'json_object' },
  };

  let lastError;

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(OPENROUTER_CONFIG.baseURL, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        throw new Error(`OpenRouter API error ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;

      if (!content) {
        throw new Error('Empty response from OpenRouter');
      }

      return JSON.parse(content);
    } catch (error) {
      lastError = error;
      if (attempt < 2) {
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise((r) => setTimeout(r, delay));
      }
    }
  }

  throw new Error(`AI service failed after 3 retries: ${lastError.message}`);
}
