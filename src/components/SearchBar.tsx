import { Search } from 'lucide-react';
import { GlassMorphCard } from './GlassMorphCard';
import { useState } from 'react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <GlassMorphCard className="w-full max-w-3xl mx-auto">
      <div className="flex items-center gap-4 px-6 py-4">
        <Search size={24} className="text-gray-400 flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search medicines, devices, vitamins..."
          className="flex-1 bg-transparent text-white text-lg placeholder:text-gray-500 outline-none"
        />
      </div>
    </GlassMorphCard>
  );
}
