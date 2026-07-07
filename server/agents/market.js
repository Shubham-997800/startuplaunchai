import { callAI } from '../services/aiService.js';

const SYSTEM_PROMPT = `You are a market research analyst. Analyze the startup idea and return a JSON object with:
- tam: total addressable market (string with $ and B/M)
- sam: serviceable addressable market (string with $ and B/M)
- som: serviceable obtainable market (string with $ and B/M)
- growthRate: market growth rate (string with %)
- trend: paragraph describing market trends
- competitors: array of competitor company names
- competitiveEdge: paragraph describing competitive advantage

Only return valid JSON, no other text.`;

export async function marketAgent(idea, industry, country) {
  const prompt = `Startup Idea: "${idea}"
Industry: ${industry}
Country: ${country}

Conduct a thorough market analysis for this startup idea.`;
  return callAI(SYSTEM_PROMPT, prompt);
}
