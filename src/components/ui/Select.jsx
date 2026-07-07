import { forwardRef } from 'react';

const Select = forwardRef(({ label, error, icon: Icon, options = [], placeholder, className = '', ...props }, ref) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-surface-300">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-500 pointer-events-none">
            <Icon size={18} />
          </div>
        )}
        <select
          ref={ref}
          className={`
            w-full rounded-xl border bg-surface-900/50 px-4 py-2.5 text-sm text-surface-100
            transition-all duration-200 cursor-pointer appearance-none
            focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50
            ${Icon ? 'pl-10' : ''}
            ${error ? 'border-red-500/50' : 'border-surface-700'}
            ${className}
          `}
          {...props}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map(opt => (
            <option key={opt} value={opt} className="bg-surface-900">{opt}</option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-500 pointer-events-none">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
});

Select.displayName = 'Select';
export default Select;
