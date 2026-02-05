import { ShoppingCart, Sparkles } from 'lucide-react';
import { GlassMorphCard } from './GlassMorphCard';
import type { Device } from '@/data/medicines';

interface DeviceCardProps {
  device: Device;
  onAddToCart?: (device: Device) => void;
}

export function DeviceCard({ device, onAddToCart }: DeviceCardProps) {
  return (
    <GlassMorphCard hover className="p-8 min-w-[340px]">
      <div className="flex flex-col">
        {/* Device Icon */}
        <div className="text-7xl mb-6 flex justify-center">{device.emoji}</div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-3 text-center">{device.name}</h3>
          <p className="text-gray-300 text-lg mb-4 text-center leading-relaxed">
            {device.description}
          </p>

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30">
              <Sparkles size={14} className="text-violet-300" />
              <span className="text-sm text-violet-200 font-medium">{device.badge}</span>
            </div>
          </div>

          {/* Price */}
          <div className="text-center mb-6">
            <span className="text-4xl font-bold text-white">
              ${device.price.toFixed(2)}
            </span>
          </div>

          {/* Action */}
          <button
            onClick={() => onAddToCart?.(device)}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-violet-500/50"
          >
            <ShoppingCart size={22} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </GlassMorphCard>
  );
}
