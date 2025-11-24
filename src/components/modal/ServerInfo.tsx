"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { Server } from "@/components/home/Servers";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export type Player = {
  userId: string;
  playerName: string;
  avatar: string;
  kills: string;
  score: number;
  steam64: string;
  deaths: string;
};

const MIRAGE_WINTER_IMAGES = {
  left: "/assets/de_winter_mirage.jfif", // левая/нижняя часть
  right: "/assets/de_winter_mirage2.jfif", // правая/верхняя часть
};

const ServerInfo = ({
  setIsOpen,
  isOpen,
  data,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  data: Server;
}) => {
  const { t } = useTranslation();
  const [serverData, setServerData] = useState<Server>(data);
  const [copied, setCopied] = useState(false);

  const mapImages: Record<string, string> = {
    de_mirage: "/assets/server1.webp",
    de_dust2: "/assets/de_dust2.webp",
    aim_usp: "/assets/aim_usp.JPG",
    de_train: "/assets/de_train.jfif",
    de_inferno: "/assets/de_inferno.webp",
    de_nuke: "/assets/de_nuke.png",
    de_ancient: "/assets/de_ancient.jpeg",
    awp_lego_2: "/assets/awp_lego_2.webp",
    awp_bhop_rocket: "/assets/awp_bhop_rocket.jfif",
    de_anubis: "/assets/de_anubis.webp",
    awp_lego_2_winter: "/assets/awp_lego_2_winter.jpg",
    de_mirage_winter: "/assets/de_winter_mirage.jfif",
  };

  const defaultImage = "/assets/default_map.webp";
  const mapImage = mapImages[data.map] || defaultImage;

  const isMirageWinter = data.map === "de_mirage_winter";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`connect ${serverData.address}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch("https://panel.aimus.uz/api/servers");
        const json = await res.json();
        const updated = json.find((s: Server) => s.address === data.address);
        if (updated) setServerData(updated);
      } catch (err) {
        console.error("Ошибка при обновлении данных сервера:", err);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isOpen, data.address]);

  return (
    <div className="rounded-[16px] w-full sm:max-w-[495px] min-h-[535px] sm:h-[535px] max-h-screen shadow-[0_0_20px_20px_rgba(0,0,0,0.16)] bg-backgr text-white register-modal flex flex-col mx-auto">
      <div className="relative object-cover h-[150px] overflow-hidden">
        {isMirageWinter ? (
          <>
            <Image
              src={MIRAGE_WINTER_IMAGES.left}
              alt={data.map}
              fill
              className="object-cover clip-diagonal-left rounded-t-[16px]"
            />
            <Image
              src={MIRAGE_WINTER_IMAGES.right}
              alt={data.map}
              fill
              className="object-cover clip-diagonal-right rounded-t-[16px]"
            />
          </>
        ) : (
          <Image
            className="object-cover h-full w-full top-0 left-0 rounded-t-[16px]"
            src={mapImage}
            alt={data.map}
            width={1000}
            height={1000}
          />
        )}

        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(0deg,#131c2e,transparent),linear-gradient(0deg,#131c2e,transparent)]"></div>
        <CloseIcon
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-3 cursor-pointer"
        />
        <div className="absolute bottom-10 left-6 sm:left-10 leading-[40px]">
          <h3 className="text-sm">{t("Active_Playing_Map")}</h3>
          <h1 className="text-[28px] sm:text-[36px] font-bold uppercase">
            {serverData.map}
          </h1>
        </div>
      </div>

      <div className="flex flex-col flex-1 px-4 sm:px-5 overflow-hidden">
        <div className="mb-1 rounded-[8px] px-3 sm:px-5 items-center grid grid-cols-3 w-full bg-gray-700 py-[14px]">
          <span className="text-xs">
            {t("Players")}
            <span className="ml-2 py-[2px] px-[10px] rounded-[14px] font-bold bg-primary text-[#080d1a] opacity-75">
              {serverData.players.length}/{serverData.maxPlayers}
            </span>
          </span>
          <span className="text-xs"> {t("Point")}</span>
          <span className="text-xs"> {t("KillAndDeath")}</span>
        </div>

        <div className="h-full flex flex-col justify-between">
          <div className="scrollbar-hide max-h-[250px] overflow-y-auto flex flex-col gap-1">
            {serverData.players.length > 0 ? (
              serverData.players.map((player: any, i: number) => (
                <div
                  key={i}
                  className="rounded-[8px] px-3 items-center w-full bg-gray-800 py-2 flex gap-3"
                >
                  <Image
                    src={player.avatar}
                    alt={player.playerName}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                  <div className="flex items-center w-full">
                    <p className="text-sm font-semibold ">
                      {player.playerName}
                    </p>
                    <div className="flex items-center justify-around w-full text-xs text-gray-400">
                      <span className="font-medium text-white">
                        {player.score}
                      </span>
                      <span className="font-medium text-white pr-3">
                        {player.kills} / {player.deaths}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="mt-[100px] gap-5 text-[#d0d0d0] w-full flex items-center justify-center">
                <h1 className="text-xl">{t("PlayersError")}</h1>
                <SearchOffIcon style={{ fontSize: "30px" }} />
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row w-full gap-3 pb-4 pt-3">
            <button
              onClick={handleCopy}
              className="bg-gray-800 text-sm w-full sm:w-1/2 rounded-[12px] py-[12px] px-[15px] flex items-center justify-center"
            >
              <ContentCopyIcon className="mr-2" style={{ fontSize: "15px" }} />
              <span>{copied ? t("Сopied") : t("CopyIp")}</span>
            </button>
            <Link
              href={`steam://connect/${serverData.address}`}
              className="text-center bg-gray-800 text-sm w-full sm:w-1/2 rounded-[12px] py-[12px] px-[15px] flex items-center justify-center"
            >
              <ScreenShareIcon className="mr-2" style={{ fontSize: "15px" }} />
              {t("Join")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerInfo;
