import { callAI } from '../services/aiService.js';

const SYSTEM_PROMPT = `You are a competitive intelligence analyst. Return a JSON object with a "competitors" array. Each competitor object:
- name: company name
- funding: funding amount string (e.g. "$100M+")
- strength: number 0-100
- weakness: description of their weakness
- threat: "High", "Medium", or "Low"

Include 3-5 competitors. Only return valid JSON, no other text.`;

export async function competitorAgent(idea, industry, country) {
  const prompt = `Startup Idea: "${idea}"
Industry: ${industry}
Country: ${country}

Identify and analyze the top competitors for this startup idea.`;
  return callAI(SYSTEM_PROMPT, prompt);
}
