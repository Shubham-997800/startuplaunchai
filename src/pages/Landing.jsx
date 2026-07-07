import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Palette, DollarSign, Globe, Shield, Users } from 'lucide-react';
import Button from '../components/ui/Button';

const features = [
  { icon: TrendingUp, title: 'Market Analysis', desc: 'AI-powered market sizing, trend detection, and opportunity scoring in seconds.' },
  { icon: Shield, title: 'Competitor Intel', desc: 'Deep competitive landscape mapping with threat assessment and positioning gaps.' },
  { icon: Palette, title: 'Brand Strategy', desc: 'Data-driven brand identity recommendations including naming, tone, and visual direction.' },
  { icon: DollarSign, title: 'Revenue Modeling', desc: 'Multi-scenario financial projections with unit economics and pricing optimization.' },
  { icon: Globe, title: 'Marketing Plan', desc: 'Channel strategy, budget allocation, and GTM timeline tailored to your industry.' },
  { icon: Users, title: 'Pitch Ready', desc: 'Investor-ready pitch deck synthesis with problem, solution, traction, and ask.' },
];

const steps = [
  { step: '01', title: 'Describe Your Idea', desc: 'Tell us about your startup idea, industry, and target market in plain language.' },
  { step: '02', title: 'AI Agents Take Over', desc: 'Seven specialized agents analyze your idea from every angle — market, competition, branding, and more.' },
  { step: '03', title: 'Get Your Report', desc: 'Receive a comprehensive validation report with scores, insights, and a pitch-ready summary.' },
];

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-600/10 via-frost/10 to-brand-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6">
              <Sparkles size={14} className="text-brand-400" />
              <span className="text-sm text-brand-300 font-medium">Multi-Agent Startup Validation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-surface-50 leading-tight">
              Turn Your Idea Into a{' '}
              <span className="text-gradient">Startup Report</span>
              {' '}in Minutes
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-surface-400 max-w-2xl mx-auto leading-relaxed">
              Seven specialized AI agents analyze your startup idea — market, competitors, branding, revenue, and more — and deliver a comprehensive validation report.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/generate">
                <Button size="xl" icon={Sparkles}>
                  Validate Your Idea
                </Button>
              </Link>
              <Link to="/history">
                <Button variant="secondary" size="xl">
                  View Examples
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">
              Everything You Need to Validate
            </h2>
            <p className="text-surface-400 max-w-2xl mx-auto">
              Seven specialized AI agents work together to give you a complete picture of your startup's potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-surface-800/50 bg-surface-900/40 backdrop-blur-xl p-6 hover:border-surface-700/50 hover:bg-surface-900/60 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-brand-500/10 text-brand-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-surface-50 mb-2">{feature.title}</h3>
                <p className="text-sm text-surface-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-50 mb-4">
              How It Works
            </h2>
            <p className="text-surface-400 max-w-2xl mx-auto">
              Three simple steps from idea to validation report.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-brand-600 to-frost flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-white">{step.step}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[calc(80%)] h-px bg-gradient-to-r from-brand-500/50 to-transparent" />
                )}
                <h3 className="text-lg font-semibold text-surface-50 mb-2">{step.title}</h3>
                <p className="text-sm text-surface-400 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/generate">
              <Button size="lg" icon={ArrowRight}>Start Your Validation</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
