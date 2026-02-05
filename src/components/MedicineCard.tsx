import { Mic } from 'lucide-react';
import { GlassMorphCard } from './GlassMorphCard';
import { TrustBadge } from './TrustBadge';
import type { Medicine } from '@/data/medicines';

interface MedicineCardProps {
  medicine: Medicine;
  onVoiceOrder?: (medicine: Medicine) => void;
}

export function MedicineCard({ medicine, onVoiceOrder }: MedicineCardProps) {
  return (
    <GlassMorphCard hover className="p-6 min-w-[320px]">
      <div className="flex items-start gap-4">
        {/* Medicine Icon */}
        <div className="text-5xl flex-shrink-0">{medicine.emoji}</div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-white mb-2">{medicine.name}</h3>
          <p className="text-gray-300 text-base mb-3 leading-relaxed">
            {medicine.description}
          </p>

          {/* Badge */}
          <div className="mb-4">
            <TrustBadge text={medicine.badge} variant="teal" />
          </div>

          {/* Price and Action */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-bold text-white">
              ${medicine.price.toFixed(2)}
            </span>
            <button
              onClick={() => onVoiceOrder?.(medicine)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
            >
              <Mic size={18} />
              <span className="text-base">Order</span>
            </button>
          </div>
        </div>
      </div>
    </GlassMorphCard>
  );
}
