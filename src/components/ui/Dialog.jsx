import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Dialog({ open, onClose, title, children, className = '' }) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`relative w-full max-w-lg rounded-2xl border border-surface-800/50 bg-surface-900 backdrop-blur-xl p-6 shadow-2xl ${className}`}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-surface-50">{title}</h2>
              <button onClick={onClose} className="p-1 rounded-lg hover:bg-surface-800 text-surface-400 hover:text-surface-100 transition-colors cursor-pointer">
                <X size={18} />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
