import { Home, Mic, ShoppingBag, CreditCard, Users } from 'lucide-react';
import { GlassMorphCard } from './GlassMorphCard';

type NavItem = 'home' | 'voice' | 'store' | 'checkout' | 'caregiver';

interface NavigationBarProps {
  active: NavItem;
  onNavigate: (item: NavItem) => void;
}

export function NavigationBar({ active, onNavigate }: NavigationBarProps) {
  const items = [
    { id: 'home' as NavItem, icon: Home, label: 'Home' },
    { id: 'voice' as NavItem, icon: Mic, label: 'Voice' },
    { id: 'store' as NavItem, icon: ShoppingBag, label: 'Store' },
    { id: 'checkout' as NavItem, icon: CreditCard, label: 'Cart' },
    { id: 'caregiver' as NavItem, icon: Users, label: 'Care' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-md">
      <GlassMorphCard className="p-3">
        <div className="flex items-center justify-around">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  relative flex flex-col items-center gap-1.5 px-4 py-2.5 rounded-xl transition-all duration-300
                  ${isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'}
                `}
              >
                {/* Active glow */}
                {isActive && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-sm" />
                )}
                
                {/* Icon */}
                <div className="relative z-10">
                  <Icon size={24} className={isActive ? 'drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]' : ''} />
                </div>

                {/* Label */}
                <span className={`relative z-10 text-xs font-medium ${isActive ? 'text-white' : ''}`}>
                  {item.label}
                </span>

                {/* Active indicator dot */}
                {isActive && (
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                )}
              </button>
            );
          })}
        </div>
      </GlassMorphCard>
    </div>
  );
}
