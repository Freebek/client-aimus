"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export default function BansMutesBlock() {
  const [t] = useTranslation();
  // Пока данные пустые, делаем статический вариант
  const bans: any[] = [];
  const mutes: any[] = [];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* === Блок банов === */}
      <div className="bg-slate-900 rounded-xl p-4 flex flex-col gap-3">
        {/* Заголовок */}
        <div className="flex items-center gap-2 text-green-200 text-lg font-medium">
          <span className="flex items-center gap-1">
            <span>👤</span> {t("Steam_profile.Bans&Mutes.Last_Bans")} (
            {bans.length})
          </span>
        </div>

        {/* Содержимое */}
        {bans.length === 0 ? (
          <p className="text-center text-green-400 font-semibold py-4">
            {t("Steam_profile.Bans&Mutes.No_Bans")}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bans.map((ban, idx) => (
              <div
                key={idx}
                className="bg-[#14351d] p-4 rounded-lg flex flex-col gap-2 text-green-100"
              >
                {/* Здесь потом карточки банов */}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* === Блок мютов === */}
      <div className="bg-slate-900 rounded-xl p-4 flex flex-col gap-3 ">
        {/* Заголовок */}
        <div className="flex items-center gap-2 text-green-200 text-lg font-medium">
          <span className="flex items-center gap-1">
            <span>🔇</span> {t("Steam_profile.Bans&Mutes.Last_Mutes")} (
            {mutes.length})
          </span>
        </div>

        {/* Содержимое */}
        {mutes.length === 0 ? (
          <p className="text-center text-green-400 font-semibold py-4">
            {t("Steam_profile.Bans&Mutes.No_Mutes")}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mutes.map((mute, idx) => (
              <div
                key={idx}
                className="bg-[#14351d] p-4 rounded-lg flex flex-col gap-2 text-green-100"
              >
                {/* Здесь потом карточки мютов */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
