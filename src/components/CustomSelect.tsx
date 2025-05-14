'use client';

import { useEffect, useRef, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export default function CustomSelect({
  options,
  defaultValue,
  onChange,
}: CustomSelectProps) {
  const [selected, setSelected] = useState<Option>(() => {
    return options.find((opt) => opt.value === defaultValue) || options[0];
  });

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option.value);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      <button
        onClick={toggleDropdown}
        className="w-full text-white flex justify-between items-center bg-backgr border border-primary px-4 h-[52px] rounded-[16px] transition"
      >
        <span className='text-sm'>{selected.label}</span>
        <ExpandMoreIcon
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`absolute z-10 mt-2 w-full border border-primary bg-backgr rounded-[16px] shadow-lg max-h-60 overflow-y-auto transition-all duration-200 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {options.map((option,i) => (
          <div
            key={i}
            onClick={() => handleOptionClick(option)}
            className={`px-4 text-sm py-3 hover:bg-gray-700 transition cursor-pointer text-white ${
              selected.value === option.value ? 'bg-backgr font-medium' : ''
            }`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}
