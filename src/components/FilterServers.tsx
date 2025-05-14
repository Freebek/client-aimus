"use client"
import { useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

const filters = [
  'Все',
  'PUBLIC',
  'AWP',
  'ONLY MIRAGE',
  'FPS+ MIRAGE',
  'MIRAGE NIGHT',
  'DUST2',
  'МАНЬЯК',
  'MATCHMAKING 5x5',
];

const FilterServers = () => {
  const [selectedFilter, setSelectedFilter] = useState('Все');

  return (
    <div className="flex items-center justify-between p-[5px] bg-backgr rounded-[12px] mb-5">
      <div className="flex gap-[10px] overflow-x-auto scrollbar-hide">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`py-[10px] text-sm px-[15px] rounded-[12px] font-medium uppercase whitespace-nowrap
              ${selectedFilter === filter
                ? 'bg-gray-700 text-white border border-primary'
                : 'bg-gray-800 text-gray-300'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <button className="bg-gray-800 text-white py-[10px] text-sm px-[15px] rounded-[12px]">
        <RefreshIcon />
      </button>
    </div>
  );
};

export default FilterServers;
