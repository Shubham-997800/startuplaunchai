import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-gradient-to-r from-brand-600 to-frost hover:from-brand-500 hover:to-frost-light text-white shadow-lg shadow-brand-500/25',
  secondary: 'bg-surface-800 hover:bg-surface-700 text-surface-100 border border-surface-700',
  ghost: 'hover:bg-surface-800/50 text-surface-300 hover:text-surface-100',
  danger: 'bg-red-600 hover:bg-red-500 text-white',
  outline: 'border border-brand-500/50 text-brand-400 hover:bg-brand-500/10',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
  xl: 'px-8 py-4 text-lg',
};

export default function Button({ children, variant = 'primary', size = 'md', icon: Icon, className = '', disabled, loading, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        inline-flex items-center justify-center gap-2 rounded-xl font-medium
        transition-all duration-200 cursor-pointer
        disabled:opacity-40 disabled:cursor-not-allowed
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : Icon ? (
        <Icon size={16} />
      ) : null}
      {children}
    </motion.button>
  );
}
