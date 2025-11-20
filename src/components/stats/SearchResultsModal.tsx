"use client";

import Image from "next/image";
import { ApiStatsPlayer } from "@/lib/api/stats";
import { useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  results: ApiStatsPlayer[];
  isLoading: boolean;
  error?: string | null;
};

export function SearchResultsModal({
  isOpen,
  onClose,
  results,
  isLoading,
  error,
}: Props) {
  const [t] = useTranslation();
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isOpen]);

  const MAX_RANK_IMAGE = 30;

  function getRankImage(rank: number) {
    if (rank < 1 || rank > MAX_RANK_IMAGE || !Number.isFinite(rank)) {
      return "/for-lr-web/1t.svg";
    }

    return `/for-lr-web/${rank}t.svg`;
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 top-[160px] z-40 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-7xl max-h-[80vh] rounded-2xl bg-[#0b0b0f] p-4 shadow-xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-sm text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="mb-4 text-lg font-semibold">
          {t("Stats.ResultOfSearch")}
        </h2>

        {isLoading && (
          <p className="text-sm text-gray-300">
            {t("Stats.SearchingForPlayers")}
          </p>
        )}

        {error && <p className="text-sm text-red-400 mb-3">{error}</p>}

        {!isLoading && !error && results.length === 0 && (
          <p className="text-sm text-gray-300">{t("Stats.SeachError")}</p>
        )}

        {!isLoading && results.length > 0 && (
          <div className="mt-2">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] items-center px-6 py-3 text-xs font-semibold text-[#0ef0c9] border border-[#0ef0c9]/40 rounded-t-xl bg-[#05060a]">
              <span>PLAYER</span>
              <span className="text-center">POINT</span>
              <span className="text-center">RANK</span>
              <span className="text-center">KILLS</span>
              <span className="text-center">DEATHS</span>
              <span className="text-center">HEADSHOTS</span>
            </div>

            <ul className="max-h-[60vh] overflow-y-auto custom-scroll">
              {results.map((player) => (
                <li key={player.steam}>
                  <Link
                    href={player.steam_link}
                    target="_blank"
                    className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] items-center px-6 py-3 text-sm border-x border-b border-white/5 bg-[#10121b] hover:bg-[#151824] transition-colors"
                  >
                    {/* PLAYER */}
                    <div className="flex items-center gap-3">
                      <div className="relative h-9 w-9 overflow-hidden rounded-full bg-gray-700">
                        <Image
                          src={player.avatar}
                          alt={player.name}
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium text-[#0ef0c9]">
                        {player.name}
                      </span>
                    </div>

                    {/* POINT */}
                    <span className="text-center text-sm font-medium">
                      {player.value}
                    </span>

                    <div className="flex justify-center">
                      <div className="relative w-[64px] h-[35px]">
                        <Image
                          src={getRankImage(player.rank)}
                          fill
                          sizes="64px"
                          alt="rank"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* KILLS */}
                    <span className="text-center text-sm">{player.kills}</span>

                    {/* DEATHS */}
                    <span className="text-center text-sm">{player.deaths}</span>

                    {/* HEADSHOTS */}
                    <span className="text-center text-sm">
                      {player.headshots}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
