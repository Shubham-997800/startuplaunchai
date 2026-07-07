import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, glow = false, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`
        rounded-2xl border border-surface-800/50 bg-surface-900/60 backdrop-blur-xl p-6
        ${hover ? 'hover:border-surface-700/50 transition-all duration-300' : ''}
        ${glow ? 'shadow-lg shadow-brand-500/5' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}
