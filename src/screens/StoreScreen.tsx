import { SearchBar } from '@/components/SearchBar';
import { MedicineCard } from '@/components/MedicineCard';
import { DeviceCard } from '@/components/DeviceCard';
import { medicines, devices } from '@/data/medicines';
import { useState } from 'react';

interface StoreScreenProps {
  onVoiceClick: () => void;
}

export function StoreScreen({ onVoiceClick }: StoreScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMedicines = medicines.filter(
    (med) =>
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDevices = devices.filter(
    (dev) =>
      dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dev.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 pb-32">
      <div className="px-6 pt-16 space-y-12">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold text-white">Browse Store</h1>
          <p className="text-xl text-gray-300">
            Find the medicines and devices you need
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-7xl mx-auto">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        {/* Medicines Section */}
        {filteredMedicines.length > 0 && (
          <div className="max-w-7xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Medicines {searchQuery && `(${filteredMedicines.length})`}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredMedicines.map((medicine) => (
                <MedicineCard
                  key={medicine.id}
                  medicine={medicine}
                  onVoiceOrder={() => onVoiceClick()}
                />
              ))}
            </div>
          </div>
        )}

        {/* Devices Section */}
        {filteredDevices.length > 0 && (
          <div className="max-w-7xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Smart Devices {searchQuery && `(${filteredDevices.length})`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDevices.map((device) => (
                <DeviceCard key={device.id} device={device} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {searchQuery &&
          filteredMedicines.length === 0 &&
          filteredDevices.length === 0 && (
            <div className="max-w-7xl mx-auto text-center py-16">
              <p className="text-2xl text-gray-400">
                No results found for "{searchQuery}"
              </p>
              <p className="text-lg text-gray-500 mt-2">
                Try searching with different keywords
              </p>
            </div>
          )}
      </div>
    </div>
  );
}
