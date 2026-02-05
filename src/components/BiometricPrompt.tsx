import { GlassMorphCard } from './GlassMorphCard';
import { Fingerprint, Mic, X } from 'lucide-react';

interface BiometricPromptProps {
  onEnable: () => void;
  onSkip: () => void;
}

export function BiometricPrompt({ onEnable, onSkip }: BiometricPromptProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
      <GlassMorphCard className="max-w-md w-full p-8">
        <div className="space-y-6">
          {/* Close button */}
          <button
            onClick={onSkip}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-xl animate-pulse" />
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <Mic size={40} className="text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">
              Enable Voice Authentication
            </h2>
            <p className="text-lg text-gray-300">
              For faster, safer checkout
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-2 h-2 rounded-full bg-teal-400" />
              <span className="text-base">Secure biometric verification</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-2 h-2 rounded-full bg-teal-400" />
              <span className="text-base">One-tap voice ordering</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-2 h-2 rounded-full bg-teal-400" />
              <span className="text-base">Protected by encryption</span>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-4">
            <button
              onClick={onEnable}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-indigo-500/50"
            >
              Enable Voice Auth
            </button>
            <button
              onClick={onSkip}
              className="w-full py-3 text-gray-400 hover:text-white font-medium transition-colors"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </GlassMorphCard>
    </div>
  );
}
