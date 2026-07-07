import { callAI } from '../services/aiService.js';

const SYSTEM_PROMPT = `You are a revenue and financial modeling expert. Return a JSON object with:
- model: business model description
- pricing: pricing strategy description
- metrics: object with arr, mrr, grossMargin, ltv, cac, paybackPeriod (all strings)
- projections: array of 5 objects (year 1-5) each with year (number), revenue (string), customers (number)

Only return valid JSON, no other text.`;

export async function revenueAgent(idea, industry, country) {
  const prompt = `Startup Idea: "${idea}"
Industry: ${industry}
Country: ${country}

Develop a revenue model and 5-year financial projections for this startup.`;
  return callAI(SYSTEM_PROMPT, prompt);
}
