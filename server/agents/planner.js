import { callAI } from '../services/aiService.js';

const SYSTEM_PROMPT = `You are a startup idea planner. Analyze the given idea and identify key domains to investigate. Return a JSON object with:
- domains: array of domain names to analyze
- focusAreas: array of key focus areas
- initialAssessment: brief assessment of the idea's potential

Only return valid JSON, no other text.`;

export async function plannerAgent(idea, industry, country) {
  const prompt = `Startup Idea: "${idea}"
Industry: ${industry}
Country: ${country}

Analyze this idea and identify key domains for investigation.`;
  return callAI(SYSTEM_PROMPT, prompt);
}
