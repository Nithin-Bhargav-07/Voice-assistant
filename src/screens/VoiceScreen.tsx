import { VoiceMicrophoneOrb } from '@/components/VoiceMicrophoneOrb';
import { GlassMorphCard } from '@/components/GlassMorphCard';
import { useState } from 'react';
import { AlertCircle, Brain, Repeat, Volume2, X } from 'lucide-react';

type VoiceState = 'idle' | 'listening' | 'processing';

interface VoiceScreenProps {
  onBack?: () => void;
}

export function VoiceScreen({ onBack }: VoiceScreenProps) {
  const [voiceState, setVoiceState] = useState<VoiceState>('idle');
  const [transcript, setTranscript] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [showRecommendation, setShowRecommendation] = useState(false);

  const handleMicClick = () => {
    if (voiceState === 'idle') {
      setVoiceState('listening');
      setTranscript('');
      setAiResponse('What would you like to order today?');
      
      // Simulate listening
      setTimeout(() => {
        setTranscript('I need something for my headache');
        setVoiceState('processing');
        
        // Simulate processing
        setTimeout(() => {
          setShowRecommendation(true);
          setVoiceState('idle');
        }, 1500);
      }, 2000);
    } else if (voiceState === 'listening') {
      setVoiceState('idle');
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 pb-32">
      <div className="max-w-4xl mx-auto px-6 pt-16 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-white">Voice Assistant</h1>
          <p className="text-xl text-gray-300">
            Speak naturally. I'm here to help.
          </p>
        </div>

        {/* Microphone Orb */}
        <div className="flex justify-center">
          <VoiceMicrophoneOrb 
            state={voiceState} 
            onClick={handleMicClick}
          />
        </div>

        {/* Status Indicator */}
        <div className="text-center">
          {voiceState === 'idle' && (
            <p className="text-xl text-gray-400">Tap the microphone to speak</p>
          )}
          {voiceState === 'listening' && (
            <p className="text-xl text-teal-400 animate-pulse">Listening...</p>
          )}
          {voiceState === 'processing' && (
            <div className="flex items-center justify-center gap-3">
              <Brain size={24} className="text-violet-400 animate-pulse" />
              <p className="text-xl text-violet-400 animate-pulse">Processing your request...</p>
            </div>
          )}
        </div>

        {/* AI Response */}
        {aiResponse && (
          <GlassMorphCard className="p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Brain size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-300 mb-2">AI Assistant</p>
                  <p className="text-xl text-white leading-relaxed">{aiResponse}</p>
                </div>
              </div>
            </div>
          </GlassMorphCard>
        )}

        {/* User Transcript */}
        {transcript && (
          <GlassMorphCard className="p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Volume2 size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-teal-300 mb-2">You said</p>
                  <p className="text-xl text-white leading-relaxed">{transcript}</p>
                </div>
              </div>
            </div>
          </GlassMorphCard>
        )}

        {/* Recommendation Card */}
        {showRecommendation && (
          <GlassMorphCard className="p-8">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-5xl">💊</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Paracetamol 650mg</h3>
                    <p className="text-lg text-gray-300 mt-1">Safe for fever and headaches</p>
                  </div>
                </div>
                <span className="text-3xl font-bold text-white">$4.99</span>
              </div>

              {/* Safety Checks */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-teal-300">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                  <span className="text-base">Checking medicine safety</span>
                </div>
                <div className="flex items-center gap-3 text-teal-300">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                  <span className="text-base">Comparing options</span>
                </div>
                <div className="flex items-center gap-3 text-teal-300">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                  <span className="text-base">Preparing recommendation</span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30">
                <div className="w-2 h-2 rounded-full bg-teal-400" />
                <span className="text-base text-teal-300 font-medium">Doctor Trusted</span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <button className="py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Order with Voice
                </button>
                <button className="py-4 rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium text-lg transition-all duration-300">
                  <Repeat size={20} className="inline mr-2" />
                  Repeat
                </button>
              </div>

              <button className="w-full py-4 rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium text-lg transition-all duration-300">
                <Volume2 size={20} className="inline mr-2" />
                Explain More
              </button>
            </div>
          </GlassMorphCard>
        )}

        {/* Emergency Button */}
        <GlassMorphCard className="p-6">
          <button className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-semibold text-lg transition-all duration-300">
            <AlertCircle size={24} />
            <span>Emergency Caregiver Alert</span>
          </button>
        </GlassMorphCard>
      </div>
    </div>
  );
}
