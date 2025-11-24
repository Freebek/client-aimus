"use client";
import Image from "next/image";
import { Server } from "./Servers";
import { useState } from "react";
import Modal from "../modal";

const MIRAGE_WINTER_IMAGES = {
  left: "/assets/de_winter_mirage.jfif", // левая/нижняя часть
  right: "/assets/de_winter_mirage2.jfif", // правая/верхняя часть
};

const SingleServer = ({ data }: { data: Server }) => {
  const [isOpen, setIsOpen] = useState(false);

  const mapImages: Record<string, string> = {
    de_mirage: "/assets/server1.webp",
    aim_usp: "/assets/aim_usp.JPG",
    de_train: "/assets/de_train.jfif",
    de_dust2: "/assets/de_dust2.webp",
    de_inferno: "/assets/de_inferno.webp",
    de_nuke: "/assets/de_nuke.png",
    de_ancient: "/assets/de_ancient.jpeg",
    awp_lego_2: "/assets/awp_lego_2.webp",
    awp_bhop_rocket: "/assets/awp_bhop_rocket.jfif",
    de_anubis: "/assets/de_anubis.webp",
    awp_lego_2_winter: "/assets/awp_lego_2_winter.jpg",
    de_mirage_winter: "/assets/de_winter_mirage.jfif",
  };

  const defaultImage = "/assets/de_dust2.webp";
  const mapImage = mapImages[data.map] || defaultImage;

  const isMirageWinter = data.map === "de_mirage_winter";

  return (
    <>
      <Modal data={data} type={1} isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        onClick={() => setIsOpen(true)}
        className="group server_card relative cursor-pointer border border-transparent hover:border-primary transition-colors duration-200 flex flex-col justify-between text-center col-span-1 h-[210px] overflow-hidden rounded-[25px] p-[15px]"
      >
        <div className="absolute inset-0 z-[-1]">
          {isMirageWinter ? (
            <>
              {/* левая/нижняя половина */}
              <Image
                src={MIRAGE_WINTER_IMAGES.left}
                alt={data.map}
                fill
                className="server_bg_img clip-diagonal-left server_card_img h-full object-cover top-0 left-0 filter brightness-[0.4] absolute z-[-1]"
              />
              {/* правая/верхняя половина */}
              <Image
                src={MIRAGE_WINTER_IMAGES.right}
                alt={data.map}
                fill
                className="server_bg_img clip-diagonal-right server_card_img h-full object-cover top-0 left-0 filter brightness-[0.4] absolute z-[-1]"
              />
            </>
          ) : (
            <Image
              src={mapImage}
              alt={data.map}
              fill
              className="server_card_img h-full object-cover top-0 left-0 filter brightness-[0.4] absolute z-[-1]"
            />
          )}
        </div>

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
          <div className="cursor-pointer relative w-[50px] h-[50px] border rounded-full flex items-center justify-center">
            <div className="play_box absolute bg-white opacity-10 rounded-full w-full h-full z-[-1]" />
            <svg
              className="w-10 h-10 text-black dark:text-white group-hover:text-primary transition-colors duration-200"
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
          </div>
        </div>

        <div className="text-[#b3b3b3] w-full flex items-center justify-between">
          <p className="flex gap-2 items-center">
            {/* иконка ip */}
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
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
            {/* иконка игроков */}
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
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
            style={{ width: `${data.playersPercentage}%` }}
            className="bg-primary left-0 h-full transition-all duration-200"
          />
        </div>
      </div>
    </>
  );
};

export default SingleServer;
