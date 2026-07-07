export const OPENROUTER_CONFIG = {
  baseURL: 'https://openrouter.ai/api/v1/chat/completions',
  model: 'openai/gpt-4o-mini',
  temperature: 0.7,
  maxTokens: 2000,
};

export function getHeaders() {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY is not defined in environment variables');
  }

  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
    'HTTP-Referer': 'https://startuplunchai.com',
    'X-Title': 'StartupLaunch AI',
  };
}
