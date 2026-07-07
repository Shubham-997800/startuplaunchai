import { motion } from 'framer-motion';
import Card from '../ui/Card';

export default function ReportSection({ title, icon: Icon, children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <Card className={className}>
        {title && (
          <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-surface-800/50">
            {Icon && (
              <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400">
                <Icon size={18} />
              </div>
            )}
            <h2 className="text-lg font-semibold text-surface-50">{title}</h2>
          </div>
        )}
        {children}
      </Card>
    </motion.div>
  );
}
