"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { Server } from "@/components/home/Servers";
import Link from "next/link";

export type Player = {
  userId: string;
  name: string;
  avatar: string;
  kills: string;
  score: number;
  steam64: string;
  deaths: string;
};

const ServerInfo = ({
  setIsOpen,
  data,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  data: Server;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`connect ${data.address}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="rounded-[16px] w-full shadow-[0_0_20px_20px_rgba(0,0,0,0.16)] max-w-[495px] h-[535px] bg-backgr text-white register-modal flex flex-col">
      {/* Top image section */}
      <div className="relative object-cover h-[150px] overflow-hidden">
        <Image
          className="object-cover h-full w-full top-0 left-0 rounded-t-[16px]"
          src={"/assets/de_dust2.webp"}
          alt=""
          width={1000}
          height={1000}
        />
        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(0deg,#131c2e,transparent),linear-gradient(0deg,#131c2e,transparent)]"></div>
        <CloseIcon
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-3 cursor-pointer"
        />
        <div className="absolute bottom-10 left-10 leading-[40px]">
          <h3 className="text-sm">Hozirda o‘ynalayotgan xarita</h3>
          <h1 className="text-[36px] font-bold uppercase">{data.map}</h1>
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-col flex-1 px-5 overflow-hidden">
        <div className="mb-1 rounded-[8px] px-5 items-center grid grid-cols-custom3 w-full bg-gray-700 py-[14px]">
          <span className="text-xs">
            Игроки
            <span className="ml-2 py-[2px] px-[10px] rounded-[14px] font-bold bg-primary text-[#080d1a] opacity-75">
              {data.players.length}/{data.maxPlayers}
            </span>
          </span>
          <span className="text-xs">Ochko</span>
          <span className="text-xs">O‘ldirishlar</span>
        </div>

        <div className="h-full flex flex-col justify-between">
          {/* Scrollable list */}
          <div className="scrollbar-hide max-h-[250px] overflow-y-auto flex flex-col gap-1">
            {data.players.length > 0 ? (
              data.players.map((player: Player, i: number) => (
                <div
                  key={i}
                  className="rounded-[8px] px-5 items-center grid grid-cols-custom3 w-full bg-gray-800 py-[14px]"
                >
                  <span className="text-xs">{player.name}</span>
                  <span className="text-xs">{player.score}</span>
                  <span className="text-xs">{player.kills}</span>
                </div>
              ))
            ) : (
              <div className="mt-[100px] gap-5 text-[#d0d0d0] w-full flex items-center justify-center">
                <h1 className="text-xl">O‘yinchilar topilmadi</h1>
                <SearchOffIcon style={{ fontSize: "30px" }}/>
              </div>
            )}
          </div>

          {/* Footer buttons */}
          <div className=" flex w-full gap-3 pb-4 pt-3">
            <button
              onClick={handleCopy}
              className="bg-gray-800 text-sm w-1/2 rounded-[12px] py-[12px] px-[15px] flex items-center justify-center"
            >
              <ContentCopyIcon className="mr-2" style={{ fontSize: "15px" }} />
              {copied ? "Nusxa olindi!" : " IP nusxalash"}
            </button>
            <Link
              href={`steam://connect/${data.address}`}
              target="_blank"
              className="text-center bg-gray-800 text-sm w-1/2 rounded-[12px] py-[12px] px-[15px] flex items-center justify-center"
            >
              <ScreenShareIcon className="mr-2" style={{ fontSize: "15px" }} />
              Qo‘shilish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerInfo;
