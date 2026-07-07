import { motion } from 'framer-motion';
import Card from '../ui/Card';

export default function StatCard({ icon: Icon, label, value, sublabel, color = 'brand', trend, className = '' }) {
  const colors = {
    brand: 'bg-brand-500/10 text-brand-400',
    green: 'bg-emerald-500/10 text-emerald-400',
    violet: 'bg-violet-500/10 text-violet-400',
    amber: 'bg-amber-500/10 text-amber-400',
    cyan: 'bg-cyan-500/10 text-cyan-400',
    red: 'bg-red-500/10 text-red-400',
  };

  return (
    <Card className={`p-5 ${className}`}>
      <div className="flex items-start justify-between mb-3">
        {Icon && (
          <div className={`p-2.5 rounded-xl ${colors[color] || colors.brand}`}>
            <Icon size={20} />
          </div>
        )}
        {trend !== undefined && (
          <span className={`text-xs font-medium ${trend >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {trend >= 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <motion.p
        className="text-2xl font-bold text-surface-50"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {value}
      </motion.p>
      <p className="text-sm text-surface-400 mt-0.5">{label}</p>
      {sublabel && <p className="text-xs text-surface-500 mt-0.5">{sublabel}</p>}
    </Card>
  );
}
