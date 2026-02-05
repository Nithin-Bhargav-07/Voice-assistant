import { VoiceMicrophoneOrb } from '@/components/VoiceMicrophoneOrb';
import { SearchBar } from '@/components/SearchBar';
import { MedicineCard } from '@/components/MedicineCard';
import { DeviceCard } from '@/components/DeviceCard';
import { Shield, Heart, Users } from 'lucide-react';
import { medicines, devices } from '@/data/medicines';

interface HomeScreenProps {
  onVoiceClick: () => void;
  onBrowseClick: () => void;
}

export function HomeScreen({ onVoiceClick, onBrowseClick }: HomeScreenProps) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 pb-32">
      {/* Hero Section */}
      <div className="relative px-6 pt-16 pb-20">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Microphone Orb */}
          <div className="flex justify-center">
            <VoiceMicrophoneOrb state="idle" onClick={onVoiceClick} />
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Just Speak.
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                We'll Handle the Rest.
              </span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              AI-powered pharmacy built for safety, independence, and peace of mind.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onVoiceClick}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-indigo-500/50 min-w-[240px]"
            >
              Start Voice Shopping
            </button>
            <button
              onClick={onBrowseClick}
              className="px-8 py-4 rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium text-xl transition-all duration-300 min-w-[240px]"
            >
              Browse Store
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            <div className="flex items-center gap-2 text-gray-300">
              <Shield size={20} className="text-teal-400" />
              <span className="text-base">Doctor Trusted</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Heart size={20} className="text-rose-400" />
              <span className="text-base">Safety Verified</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Users size={20} className="text-indigo-400" />
              <span className="text-base">Caregiver Connected</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 pb-12">
        <SearchBar />
      </div>

      {/* Most Ordered Medicines */}
      <div className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Most Ordered Medicines</h2>
          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-6">
              {medicines.map((medicine) => (
                <MedicineCard
                  key={medicine.id}
                  medicine={medicine}
                  onVoiceOrder={() => onVoiceClick()}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Smart Health Devices */}
      <div className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Smart Health Devices</h2>
          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-6">
              {devices.map((device) => (
                <DeviceCard
                  key={device.id}
                  device={device}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
