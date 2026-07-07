import { callAI } from '../services/aiService.js';

const SYSTEM_PROMPT = `You are a pitch deck consultant. Return a JSON object with:
- problem: description of the problem being solved
- solution: description of the solution
- market: market opportunity description
- traction: traction and milestones
- team: team description
- ask: funding ask description

Only return valid JSON, no other text.`;

export async function pitchAgent(idea, industry, country) {
  const prompt = `Startup Idea: "${idea}"
Industry: ${industry}
Country: ${country}

Create an investor pitch summary for this startup.`;
  return callAI(SYSTEM_PROMPT, prompt);
}
