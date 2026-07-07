import { callAI } from '../services/aiService.js';

const SYSTEM_PROMPT = `You are a marketing and GTM strategist. Return a JSON object with a "channels" array. Each channel object:
- channel: marketing channel name
- budget: budget allocation as percentage string (e.g. "35%")
- expected: expected outcome description

Include 4-5 marketing channels. Only return valid JSON, no other text.`;

export async function marketingAgent(idea, industry, country) {
  const prompt = `Startup Idea: "${idea}"
Industry: ${industry}
Country: ${country}

Design a go-to-market strategy for this startup.`;
  return callAI(SYSTEM_PROMPT, prompt);
}
