import { callAI } from '../services/aiService.js';

const SYSTEM_PROMPT = `You are a branding strategist. Return a JSON object with:
- name: suggested startup name
- tagline: a compelling tagline
- colors: array of 3-4 hex color codes
- tone: description of brand tone
- suggestions: array of branding recommendations

Only return valid JSON, no other text.`;

export async function brandingAgent(idea, industry, country) {
  const prompt = `Startup Idea: "${idea}"
Industry: ${industry}
Country: ${country}

Create a brand identity for this startup.`;
  return callAI(SYSTEM_PROMPT, prompt);
}
