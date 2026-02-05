import { Mic } from 'lucide-react';
import { useState } from 'react';

type OrbState = 'idle' | 'listening' | 'processing';

interface VoiceMicrophoneOrbProps {
  state?: OrbState;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export function VoiceMicrophoneOrb({ 
  state = 'idle', 
  onClick,
  size = 'lg' 
}: VoiceMicrophoneOrbProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 48
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${sizeClasses[size]} rounded-full relative flex items-center justify-center cursor-pointer transition-all duration-500 group`}
    >
      {/* Outer glow rings */}
      {state === 'idle' && (
        <>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-xl animate-pulse" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 blur-lg" />
        </>
      )}

      {state === 'listening' && (
        <>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/40 to-teal-500/40 blur-xl animate-ping" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-400/30 blur-lg animate-pulse" />
        </>
      )}

      {state === 'processing' && (
        <>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/40 to-fuchsia-500/40 blur-xl animate-spin-slow" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-violet-400/30 to-fuchsia-400/30 blur-lg animate-pulse" />
        </>
      )}

      {/* Main orb */}
      <div
        className={`
          relative z-10 rounded-full flex items-center justify-center
          ${sizeClasses[size]}
          ${state === 'idle' ? 'bg-gradient-to-br from-indigo-600 to-purple-700' : ''}
          ${state === 'listening' ? 'bg-gradient-to-br from-emerald-600 to-teal-700' : ''}
          ${state === 'processing' ? 'bg-gradient-to-br from-violet-600 to-fuchsia-700 animate-pulse' : ''}
          ${isHovered ? 'scale-110' : 'scale-100'}
          transition-transform duration-300
          shadow-2xl
        `}
      >
        <Mic size={iconSizes[size]} className="text-white" />
      </div>

      {/* Hover ring */}
      {isHovered && (
        <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
      )}
    </button>
  );
}
