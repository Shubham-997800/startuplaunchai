import mongoose from 'mongoose';

const competitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  funding: { type: String, default: '' },
  strength: { type: Number, default: 0 },
  weakness: { type: String, default: '' },
  threat: { type: String, default: 'Medium' },
}, { _id: false });

const projectionSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  revenue: { type: String, required: true },
  customers: { type: Number, required: true },
}, { _id: false });

const marketingSchema = new mongoose.Schema({
  channel: { type: String, required: true },
  budget: { type: String, required: true },
  expected: { type: String, default: '' },
}, { _id: false });

const reportSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
    unique: true,
  },
  summary: {
    verdict: { type: String, default: '' },
    oneLiner: { type: String, default: '' },
    strengths: [{ type: String }],
    risks: [{ type: String }],
  },
  market: {
    tam: { type: String, default: '' },
    sam: { type: String, default: '' },
    som: { type: String, default: '' },
    growthRate: { type: String, default: '' },
    trend: { type: String, default: '' },
    competitors: [{ type: String }],
    competitiveEdge: { type: String, default: '' },
  },
  competitors: [competitorSchema],
  branding: {
    name: { type: String, default: '' },
    tagline: { type: String, default: '' },
    colors: [{ type: String }],
    tone: { type: String, default: '' },
    suggestions: [{ type: String }],
  },
  revenue: {
    model: { type: String, default: '' },
    pricing: { type: String, default: '' },
    metrics: {
      arr: { type: String, default: '' },
      mrr: { type: String, default: '' },
      grossMargin: { type: String, default: '' },
      ltv: { type: String, default: '' },
      cac: { type: String, default: '' },
      paybackPeriod: { type: String, default: '' },
    },
    projections: [projectionSchema],
  },
  marketing: [marketingSchema],
  pitch: {
    problem: { type: String, default: '' },
    solution: { type: String, default: '' },
    market: { type: String, default: '' },
    traction: { type: String, default: '' },
    team: { type: String, default: '' },
    ask: { type: String, default: '' },
  },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform(_, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
});

export default mongoose.model('Report', reportSchema);
