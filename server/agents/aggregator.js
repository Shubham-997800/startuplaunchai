export function aggregatorAgent(planner, market, competitor, branding, revenue, marketing, pitch) {
  const strengths = [];
  const risks = [];

  if (market?.trend) strengths.push('Addressing a growing market with favorable trends');
  if (competitor?.competitors?.length > 0 && competitor.competitors.some((c) => c.threat === 'Low')) {
    strengths.push('Low competitive threat from key players');
  }
  if (revenue?.metrics?.grossMargin) {
    const margin = parseInt(revenue.metrics.grossMargin);
    if (margin > 70) strengths.push(`High gross margin of ${revenue.metrics.grossMargin}`);
  }
  if (pitch?.problem) strengths.push('Clear problem-solution fit');
  risks.push('Market adoption depends on effective GTM execution');

  const score = calculateScore(market, competitor, revenue);

  const competitorNames = competitor?.competitors?.map((c) => c.name) || [];

  return {
    summary: {
      verdict: score >= 80 ? 'Strong Go' : score >= 60 ? 'Cautious Go' : 'Reconsider',
      oneLiner: branding?.tagline || pitch?.solution?.slice(0, 100) || '',
      strengths,
      risks,
    },
    market: {
      tam: market?.tam || '',
      sam: market?.sam || '',
      som: market?.som || '',
      growthRate: market?.growthRate || '',
      trend: market?.trend || '',
      competitors: competitorNames,
      competitiveEdge: market?.competitiveEdge || '',
    },
    competitors: competitor?.competitors || [],
    branding: branding || {},
    revenue: revenue || {},
    marketing: marketing?.channels || [],
    pitch: pitch || {},
    score,
  };
}

function calculateScore(market, competitor, revenue) {
  let score = 60;

  if (market?.tam) score += 5;
  if (market?.growthRate) {
    const g = parseFloat(market.growthRate);
    if (g > 20) score += 10;
    else if (g > 10) score += 5;
  }
  if (competitor?.competitors) {
    const highThreats = competitor.competitors.filter((c) => c.threat === 'High').length;
    if (highThreats === 0) score += 10;
    else if (highThreats <= 2) score += 5;
  }
  if (revenue?.metrics?.arr) score += 5;
  if (revenue?.projections?.length >= 3) score += 5;
  if (revenue?.metrics?.grossMargin) {
    const m = parseInt(revenue.metrics.grossMargin);
    if (m > 80) score += 5;
  }

  return Math.min(score, 100);
}
