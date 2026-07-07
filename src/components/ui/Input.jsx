import { forwardRef } from 'react';

const Input = forwardRef(({ label, error, icon: Icon, className = '', ...props }, ref) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-surface-300">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-500">
            <Icon size={18} />
          </div>
        )}
        <input
          ref={ref}
          className={`
            w-full rounded-xl border bg-surface-900/50 px-4 py-2.5 text-sm text-surface-100
            placeholder:text-surface-500 transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50
            ${Icon ? 'pl-10' : ''}
            ${error ? 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50' : 'border-surface-700'}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
