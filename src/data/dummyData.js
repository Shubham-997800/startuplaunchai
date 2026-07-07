export const agents = [
  { id: 'planner', name: 'Planner', icon: 'ClipboardList', color: '#0ea5e9', description: 'Analyzing your startup idea structure...' },
  { id: 'market', name: 'Market Analyst', icon: 'TrendingUp', color: '#38bdf8', description: 'Researching market size and trends...' },
  { id: 'competitor', name: 'Competitor Intel', icon: 'Swords', color: '#2dd4bf', description: 'Mapping competitive landscape...' },
  { id: 'branding', name: 'Branding Strategist', icon: 'Palette', color: '#14b8a6', description: 'Crafting brand identity...' },
  { id: 'revenue', name: 'Revenue Modeler', icon: 'DollarSign', color: '#06b6d4', description: 'Projecting revenue streams...' },
  { id: 'marketing', name: 'Marketing Guru', icon: 'Megaphone', color: '#0284c7', description: 'Designing go-to-market strategy...' },
  { id: 'pitch', name: 'Pitch Master', icon: 'Presentation', color: '#0e7490', description: 'Synthesizing final pitch deck...' },
];

export const dummyStartup = {
  id: 'proj_001',
  name: 'EcoTrack',
  idea: 'A B2B SaaS platform that uses IoT sensors and AI to track, analyze, and reduce carbon emissions across enterprise supply chains in real-time.',
  industry: 'Climate Tech / SaaS',
  country: 'United States',
  score: 87,
  createdAt: '2026-07-05T14:30:00Z',
  status: 'completed',
};

export const dummyReport = {
  projectId: 'proj_001',
  summary: {
    verdict: 'Strong Go',
    oneLiner: 'EcoTrack is a timely B2B SaaS solving a $12B+ market need with clear monetization and defensible moats.',
    strengths: ['Regulatory tailwind (SEC climate rules)', 'Strong unit economics', 'Experienced founder-market fit'],
    risks: ['Enterprise sales cycles (12-18mo)', 'IoT hardware reliability', 'Data aggregation complexity'],
  },
  market: {
    tam: '$12.4B',
    sam: '$3.8B',
    som: '$420M',
    growthRate: '28.4% CAGR',
    trend: 'Rapidly growing due to SEC climate disclosure rules effective 2025. Fortune 500 companies urgently need Scope 1-3 tracking.',
    competitors: ['Watershed', 'Persefoni', 'Plan A', 'Greenhouse.io'],
    competitiveEdge: 'Real-time IoT integration vs. manual data entry competitors. AI-powered reduction recommendations vs. pure measurement tools.',
  },
  competitors: [
    { name: 'Watershed', funding: '$100M+', strength: 85, weakness: 'No IoT hardware integration', threat: 'High' },
    { name: 'Persefoni', funding: '$150M+', strength: 78, weakness: 'Enterprise-only, expensive', threat: 'Medium' },
    { name: 'Plan A', funding: '$30M', strength: 65, weakness: 'Europe-focused, limited US presence', threat: 'Low' },
    { name: 'Greenhouse.io', funding: '$10M', strength: 55, weakness: 'Early stage, limited features', threat: 'Low' },
  ],
  branding: {
    name: 'EcoTrack',
    tagline: 'Trace. Reduce. Report. Transform.',
    colors: ['#059669', '#10b981', '#34d399', '#047857'],
    tone: 'Professional, urgent, optimistic',
    suggestions: ['Recommend deep green + neutral palette', 'Nature-inspired logo mark', 'Position as "The Carbon OS for Enterprises"'],
  },
  revenue: {
    model: 'SaaS subscription + IoT hardware margin',
    pricing: 'Starter $2K/mo | Growth $8K/mo | Enterprise Custom',
    metrics: { arr: '$8.4M (Year 3)', mrr: '$700K', grossMargin: '82%', ltv: '$95K', cac: '$12K', paybackPeriod: '5 months' },
    projections: [
      { year: 1, revenue: '$1.2M', customers: 15 },
      { year: 2, revenue: '$4.8M', customers: 48 },
      { year: 3, revenue: '$8.4M', customers: 72 },
      { year: 4, revenue: '$14.2M', customers: 110 },
      { year: 5, revenue: '$22.5M', customers: 165 },
    ],
  },
  marketing: [
    { channel: 'LinkedIn Thought Leadership', budget: '35%', expected: 'High-quality leads' },
    { channel: 'Industry Conferences (SXSW, Climate Week)', budget: '25%', expected: 'Enterprise partnerships' },
    { channel: 'Content Marketing (Whitepapers, Case Studies)', budget: '20%', expected: 'SEO-driven inbound' },
    { channel: 'Direct Sales Team', budget: '20%', expected: 'Named account penetration' },
  ],
  pitch: {
    problem: 'Enterprises face regulatory pressure to report carbon emissions but rely on manual spreadsheets and fragmented data sources.',
    solution: 'EcoTrack provides end-to-end IoT-powered carbon tracking with AI-driven reduction recommendations and automated SEC-compliant reporting.',
    market: '$12.4B TAM growing at 28.4% CAGR, driven by SEC climate disclosure rules.',
    traction: '3 pilot customers, LOIs from 12 Fortune 500 companies, $2.3M in pre-seed commitments.',
    team: 'CEO: ex-Google Sustainability lead. CTO: ex-Tesla IoT engineer. Advisory: Former SEC climate counsel.',
    ask: '$3.5M seed round to build out IoT hardware v2, scale engineering team, and land 25 enterprise customers.',
  },
};

export const dummyHistory = [
  { id: 'proj_001', name: 'EcoTrack', industry: 'Climate Tech', score: 87, date: '2026-07-05', status: 'completed' },
  { id: 'proj_002', name: 'HealthSync', industry: 'HealthTech', score: 73, date: '2026-07-04', status: 'completed' },
  { id: 'proj_003', name: 'EduFlow', industry: 'EdTech', score: 91, date: '2026-07-03', status: 'completed' },
  { id: 'proj_004', name: 'FinBridge', industry: 'FinTech', score: 68, date: '2026-07-02', status: 'completed' },
  { id: 'proj_005', name: 'AgriSense', industry: 'AgriTech', score: 82, date: '2026-07-01', status: 'completed' },
  { id: 'proj_006', name: 'SpaceView', industry: 'Aerospace', score: 58, date: '2026-06-30', status: 'failed' },
];

export const industries = [
  'Climate Tech / SaaS',
  'HealthTech',
  'FinTech',
  'EdTech',
  'AgriTech',
  'Aerospace',
  'E-Commerce',
  'AI / ML',
  'Biotech',
  'Clean Energy',
  'PropTech',
  'LegalTech',
  'HR Tech',
  'Cybersecurity',
  'Gaming',
  'FoodTech',
];

export const countries = [
  'United States', 'United Kingdom', 'Canada', 'Germany', 'France',
  'Australia', 'Japan', 'Singapore', 'India', 'Brazil',
  'Netherlands', 'Sweden', 'Israel', 'UAE', 'South Korea',
];
