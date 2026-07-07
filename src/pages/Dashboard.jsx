import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Swords, Palette, DollarSign, Megaphone, FileText, ArrowRight, RefreshCw, Download, Share2 } from 'lucide-react';
import Card from '../components/ui/Card';
import RadialGauge from '../components/charts/RadialGauge';
import StatCard from '../components/charts/StatCard';
import Button from '../components/ui/Button';
import { dummyStartup, dummyReport } from '../data/dummyData';

const quickActions = [
  { icon: RefreshCw, label: 'Regenerate', color: 'brand' },
  { icon: Download, label: 'Download PDF', color: 'green' },
  { icon: Share2, label: 'Share Report', color: 'cyan' },
];

const statCards = [
  { icon: TrendingUp, label: 'Market Opportunity', value: dummyReport.market.tam, sublabel: `${dummyReport.market.growthRate} growth`, color: 'brand' },
  { icon: Swords, label: 'Competitors Mapped', value: dummyReport.competitors.length.toString(), sublabel: `${dummyReport.competitors.filter(c => c.threat === 'High').length} high threat`, color: 'violet' },
  { icon: Palette, label: 'Brand Score', value: 'A-', sublabel: 'Strong positioning', color: 'amber' },
  { icon: DollarSign, label: 'Projected ARR (Y3)', value: dummyReport.revenue.metrics.arr, sublabel: `${dummyReport.revenue.metrics.grossMargin} gross margin`, color: 'green' },
  { icon: Megaphone, label: 'Marketing Channels', value: dummyReport.marketing.length.toString(), sublabel: 'optimized mix', color: 'cyan' },
  { icon: FileText, label: 'Pitch Ready', value: 'Yes', sublabel: 'Investor-ready', color: 'green' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
        >
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-surface-50">Dashboard</h1>
            <p className="text-surface-400 mt-1">Overview of {dummyStartup.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/generate">
              <Button size="sm" icon={TrendingUp}>New Analysis</Button>
            </Link>
            <Link to={`/report/${dummyStartup.id}`}>
              <Button variant="secondary" size="sm" icon={FileText}>Full Report</Button>
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-1">
            <Card className="flex flex-col items-center justify-center p-8 h-full">
              <RadialGauge value={dummyStartup.score} size={160} strokeWidth={10} label="Overall" sublabel="Score" />
              <h2 className="text-xl font-bold text-surface-50 mt-4">{dummyStartup.name}</h2>
              <p className="text-xs text-surface-500 mt-1">{dummyStartup.industry}</p>
            </Card>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statCards.slice(0, 6).map((stat, i) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card>
              <h3 className="text-lg font-semibold text-surface-50 mb-4">Revenue Projections</h3>
              <div className="space-y-4">
                {dummyReport.revenue.projections.map((proj, i) => (
                  <motion.div
                    key={proj.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <span className="text-sm font-medium text-surface-400 w-16">Year {proj.year}</span>
                    <div className="flex-1 h-3 rounded-full bg-surface-800 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-brand-600 to-frost"
                        initial={{ width: 0 }}
                        animate={{ width: `${(proj.revenue.replace('$', '').replace('M', '') / 25) * 100}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />
                    </div>
                    <span className="text-sm font-medium text-surface-50 w-24 text-right">{proj.revenue}</span>
                    <span className="text-xs text-surface-500 w-16 text-right">{proj.customers} customers</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            {quickActions.map(action => (
              <button
                key={action.label}
                className="w-full p-4 rounded-2xl border border-surface-800/50 bg-surface-900/60 backdrop-blur-xl hover:border-surface-700/50 hover:bg-surface-800/60 transition-all duration-300 flex items-center gap-3 group cursor-pointer"
              >
                <div className={`p-2.5 rounded-xl bg-${action.color}-500/10 text-${action.color}-400`}>
                  <action.icon size={18} />
                </div>
                <span className="flex-1 text-sm font-medium text-surface-200 text-left">{action.label}</span>
                <ArrowRight size={16} className="text-surface-500 group-hover:text-surface-300 transition-colors" />
              </button>
            ))}

            <Link to="/history">
              <Button variant="ghost" size="sm" className="w-full" icon={FileText}>
                View History
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
