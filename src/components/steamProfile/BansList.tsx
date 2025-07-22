"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BansList() {
  const [bans, setBans] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("/api/proxy/api/bans?page=1&rows=10&query=", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setBans(data.results || []))
      .finally(() => setLoading(false));
  }, []);

  // ✅ карточка одного бана
  const BanCard = ({ ban }: { ban: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#1F2937] rounded-xl p-4 flex flex-col gap-3 hover:bg-gray-700 transition"
    >
      {/* Верхняя часть с аватаром */}
      <div className="flex items-center gap-3">
        <img
          src={ban.player_avatar || "/assets/profile-picture.png"}
          alt={ban.player_name}
          className="w-12 h-12 rounded-full border border-gray-500"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{ban.player_name}</span>
          <span className="text-xs text-gray-400">{ban.player_steamid}</span>
        </div>
      </div>

      {/* Причина и статус */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-yellow-300">🚨 {ban.reason || "Неизвестно"}</span>
        {ban.status === "ACTIVE" ? (
          <span className="text-red-400 flex items-center gap-1">
            🔒 ACTIVE
          </span>
        ) : (
          <span className="text-green-400 flex items-center gap-1">
            ✅ Unbanned
          </span>
        )}
      </div>

      {/* Дата */}
      <div className="text-xs text-gray-400">
        ⏳ {new Date(ban.created).toLocaleString()}
      </div>
    </motion.div>
  );

  return (
    <div className="w-full">
      <p className="text-xl mb-3">🚨 Bans</p>
      <hr className="my-3 border-0 h-[2px] bg-gray-600" />

      {loading && <p className="text-gray-400">⏳ Загрузка...</p>}

      {!loading && bans.length === 0 && (
        <p className="text-gray-400">✅ Нет активных банов</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bans.map((ban, idx) => (
          <BanCard key={idx} ban={ban} />
        ))}
      </div>
    </div>
  );
}
