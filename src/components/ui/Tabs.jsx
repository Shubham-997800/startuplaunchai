import { motion } from 'framer-motion';

export default function Tabs({ tabs, activeTab, onChange, className = '' }) {
  return (
    <div className={`flex gap-1 p-1 rounded-xl bg-surface-900/80 border border-surface-800/50 ${className}`}>
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`
            relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer
            ${activeTab === tab ? 'text-white' : 'text-surface-400 hover:text-surface-200'}
          `}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-brand-600/30 to-frost/30 border border-brand-500/20"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}
