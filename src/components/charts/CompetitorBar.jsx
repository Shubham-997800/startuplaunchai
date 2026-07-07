import { motion } from 'framer-motion';

export default function CompetitorBar({ name, strength, funding, threat, color = '#6366f1' }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-surface-200 font-medium">{name}</span>
        <div className="flex items-center gap-3 text-xs text-surface-400">
          <span>{funding}</span>
          <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
            threat === 'High' ? 'bg-red-500/10 text-red-400' :
            threat === 'Medium' ? 'bg-amber-500/10 text-amber-400' :
            'bg-surface-800 text-surface-400'
          }`}>{threat}</span>
        </div>
      </div>
      <div className="relative h-2 rounded-full bg-surface-800 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={{ width: `${strength}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
