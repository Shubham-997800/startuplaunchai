const colors = {
  green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  blue: 'bg-brand-500/10 text-brand-400 border-brand-500/20',
  violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  red: 'bg-red-500/10 text-red-400 border-red-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
};

export default function Badge({ children, color = 'blue', className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-xs font-medium border ${colors[color]} ${className}`}>
      {children}
    </span>
  );
}
