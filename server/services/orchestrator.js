import { plannerAgent } from '../agents/planner.js';
import { marketAgent } from '../agents/market.js';
import { competitorAgent } from '../agents/competitor.js';
import { brandingAgent } from '../agents/branding.js';
import { revenueAgent } from '../agents/revenue.js';
import { marketingAgent } from '../agents/marketing.js';
import { pitchAgent } from '../agents/pitch.js';
import { aggregatorAgent } from '../agents/aggregator.js';

export async function runPipeline(idea, industry, country) {
  const planner = await plannerAgent(idea, industry, country);
  const market = await marketAgent(idea, industry, country);
  const competitor = await competitorAgent(idea, industry, country);
  const branding = await brandingAgent(idea, industry, country);
  const revenue = await revenueAgent(idea, industry, country);
  const marketing = await marketingAgent(idea, industry, country);
  const pitch = await pitchAgent(idea, industry, country);

  const report = aggregatorAgent(planner, market, competitor, branding, revenue, marketing, pitch);
  return report;
}
