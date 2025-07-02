"use client";
import { useTranslation } from "react-i18next";

type Props = {
  selected: string;
  onChange: (value: string) => void;
};

export default function FilterToggle({ selected, onChange }: Props) {
  const { t } = useTranslation();

  const options = [
    { label: t("bancomms.Bans"), value: "Banlar" },
    { label: t("bancomms.Mutes"), value: "Mutlar" },
  ];

  return (
    <div className="flex bg-gray-800 rounded-xl p-1 w-max">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`px-6 py-2 rounded-xl transition-all duration-200 font-medium text-white ${
            selected === option.value ? "bg-gray-600" : "bg-transparent"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
