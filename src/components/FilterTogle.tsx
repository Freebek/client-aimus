'use client'

type Props = {
  selected: string
  onChange: (value: string) => void
}

const options = ['Banlar', 'Mutlar']

export default function FilterToggle({ selected, onChange }: Props) {
  return (
    <div className="flex bg-gray-800 rounded-xl p-1 w-max">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-6 py-2 rounded-xl transition-all duration-200 font-medium text-white
            ${selected === option ? 'bg-gray-600' : 'bg-transparent'}`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
