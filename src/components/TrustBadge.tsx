import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface TrustBadgeProps {
  icon?: LucideIcon;
  text: string;
  variant?: 'teal' | 'indigo' | 'violet' | 'rose' | 'amber';
}

export function TrustBadge({ icon: Icon, text, variant = 'teal' }: TrustBadgeProps) {
  const variants = {
    teal: 'bg-teal-500/20 border-teal-400/30 text-teal-300',
    indigo: 'bg-indigo-500/20 border-indigo-400/30 text-indigo-300',
    violet: 'bg-violet-500/20 border-violet-400/30 text-violet-300',
    rose: 'bg-rose-500/20 border-rose-400/30 text-rose-300',
    amber: 'bg-amber-500/20 border-amber-400/30 text-amber-300'
  };

  const dotVariants = {
    teal: 'bg-teal-400',
    indigo: 'bg-indigo-400',
    violet: 'bg-violet-400',
    rose: 'bg-rose-400',
    amber: 'bg-amber-400'
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${variants[variant]}`}>
      {Icon ? (
        <Icon size={14} />
      ) : (
        <div className={`w-1.5 h-1.5 rounded-full ${dotVariants[variant]}`} />
      )}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
