import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassMorphCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassMorphCard({ children, className, hover = false }: GlassMorphCardProps) {
  return (
    <div
      className={cn(
        'backdrop-blur-xl bg-white/[0.06] rounded-2xl border border-white/10',
        'shadow-2xl shadow-black/20',
        hover && 'transition-all duration-300 hover:bg-white/[0.08] hover:shadow-indigo-500/20 hover:scale-[1.02]',
        className
      )}
    >
      {children}
    </div>
  );
}
