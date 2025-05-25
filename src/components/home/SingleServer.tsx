"use client";
import Image from "next/image";
import { Server } from "./Servers";
import { useState } from "react";
import Modal from "../modal";

const SingleServer = ({ data }: { data: Server }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const percent = Math.round((data.players.length * 100) / data.maxPlayers).toString() + "%";
  return (
    <>
      <Modal data={data} type={1} isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        onClick={() => setIsOpen(true)}
        className="server_card cursor-pointer border border-transparent hover:border-primary flex flex-col justify-between text-center col-span-1 h-[210px] overflow-hidden rounded-[25px] p-[15px] relative"
      >
        <Image
          className="server_card_img h-full object-cover top-0 left-0 filter brightness-[0.4] absolute z-[-1]"
          src={`/assets/de_dust2.webp`}
          alt=""
          width={1000}
          height={1000}
        />
        <h2 className="text-white text-xl">AIMUS ● {data.hostname}</h2>
        <div className="w-full flex justify-center items-center gap-2">
          <Image
            className="w-[20px] h-[20px]"
            src={"/assets/_de_dust2.webp"}
            alt=""
            width={1000}
            height={1000}
          />
          <span className="text-white">{data.map}</span>
        </div>
        <div className="my-[10px] w-full flex justify-center">
          <div className="cursor-pointer relative w-[50px] h-[50px] flex items-center justify-center">
            <div className="play_box absolute bg-white opacity-10 rounded-full w-full h-full z-[-1]"></div>
            <svg
              className="play_icon w-10 h-10 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 22 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M8 18V6l8 6-8 6Z"
              />
            </svg>
            <svg
              className="arrow_icon hidden w-7 h-7 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
              />
            </svg>
          </div>
        </div>
        <div className="text-[#b3b3b3] w-full flex items-center justify-between">
          <p className="flex gap-2 items-center">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"
              />
            </svg>
            {data.address}
          </p>
          <p className="flex gap-2 items-center">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            {data.players.length}/{data.maxPlayers}
          </p>
        </div>
        <div className="relative w-full h-[6px] overflow-hidden rounded-[10px] bg-[#191919]">
          <div
            style={{ width: data.playersPercentage.toString() + "%" }}
            className={`bg-primary left-0 h-full`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SingleServer;
