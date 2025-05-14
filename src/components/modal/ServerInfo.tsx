"use client";
import React, { Dispatch, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";

const ServerInfo = ({
  setIsOpen,
  data
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  data: any
}) => {
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
          <h3 className="text-sm">Сейчас играется карта</h3>
          <h1 className="text-[36px] font-bold uppercase">{data.map}</h1>
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-col flex-1 px-5 overflow-hidden">
        <div className="mb-1 rounded-[8px] px-5 items-center grid grid-cols-custom3 w-full bg-gray-700 py-[14px]">
          <span className="text-xs">
            Игроки
            <span className="ml-2 py-[2px] px-[10px] rounded-[14px] font-bold bg-primary text-[#080d1a] opacity-75">
              {data.players}/{data.maxPlayers}
            </span>
          </span>
          <span className="text-xs">Очки</span>
          <span className="text-xs">Время игры</span>
        </div>

        {/* Scrollable list */}
        <div className="scrollbar-hide flex flex-col gap-1 overflow-y-scroll">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="rounded-[8px] px-5 items-center grid grid-cols-custom3 w-full bg-gray-800 py-[14px]"
            >
              <span className="text-xs">очкастый черт</span>
              <span className="text-xs">2</span>
              <span className="text-xs">08:56</span>
            </div>
          ))}
        </div>
        <div className="flex w-full gap-3 pb-4 pt-3">
          <button className="bg-gray-800 text-sm w-1/2 rounded-[12px] py-[12px] px-[15px]">
            <ContentCopyIcon className="mr-2" style={{ fontSize: "15px" }} />
            Скопировать IP{" "}
          </button>
          <button className="bg-gray-800 text-sm w-1/2 rounded-[12px] py-[12px] px-[15px]">
            <ScreenShareIcon className="mr-2" style={{ fontSize: "15px" }} />
            Присоединиться{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerInfo;
