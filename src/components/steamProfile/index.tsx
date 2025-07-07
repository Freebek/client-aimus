"use client";

import Image from "next/image";
import ProfileBackground from "../../../public/assets/server1.webp";
import ProfilePicture from "../../../public/assets/profile-picture.png";
import WorldIcon from "../../../public/assets/world-icon.svg";
import FaceitIcon from "../../../public/assets/faceit.svg";
import SteamIcon from "../../../public/assets/Steam_icon_logo.svg.png";
import FaceitLevelIcon from "../../../public/assets/faceit-level-none.svg";

import {
  CirclePlus,
  Copy,
  UserCog,
  Scroll,
  Users,
  BanknoteArrowUp,
  MapPin,
  ChartPie,
  AlignLeft,
  Crosshair,
} from "lucide-react";

import Container from "../Container";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  },
});

const tooltipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 5 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const SteamProfile = () => {
  return (
    <section className="my-[30px]">
      <Container style="px-4 lg:px-6 py-4 rounded-[10px] bg-backgr flex flex-col lg:flex-row justify-between gap-4 relative">
        <motion.div
          className="w-full lg:w-1/3"
          initial="hidden"
          animate="show"
          variants={fadeIn(0)}
        >
          <select className="p-4 w-full rounded-xl bg-[#1F2937]">
            <option value="public#1" selected>
              PUBLIC#1
            </option>
          </select>

          <div className="relative">
            <Image
              src={ProfileBackground}
              alt="background"
              className="rounded-xl mt-4 w-full"
            />
            <Image
              src={ProfilePicture}
              alt="profilePicture"
              width={80}
              className="border-4 rounded-full border-gray-500 absolute top-[180px] left-5"
            />
          </div>

          <button className="flex items-center gap-2 font-medium bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-300 px-5 py-2 rounded-xl transition-all duration-200 ml-auto mt-4">
            0 ₽ <CirclePlus />
          </button>

          <motion.div
            className="bg-[#1F2937] p-5 rounded-xl mt-4 font-semibold"
            initial="hidden"
            animate="show"
            variants={fadeIn(0.2)}
          >
            <p className="flex gap-3">
              Name
              <button>
                <Copy size={18} />
              </button>
            </p>
            <p className="text-sm mt-2">Was in game: 07.07.2025 in 10:43</p>
            <hr className="my-3 border-0 h-[2px] bg-backgr" />
            <p>Status</p>
            <p className="text-sm">Not specified</p>
            <hr className="my-3 border-0 h-[2px] bg-backgr" />
            <button className="flex gap-3 text-sm bg-gray-700 px-4 py-2 rounded-full">
              <div className="bg-backgr w-5 h-5 rounded-full"></div> Player
            </button>
            <hr className="my-3 border-0 h-[2px] bg-backgr" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: UserCog, label: "Информация" },
                { icon: Scroll, label: "История" },
                { icon: Users, label: "Игроки" },
                { icon: BanknoteArrowUp, label: "Пополнение" },
              ].map(({ icon: Icon, label }, index) => {
                const [hovered, setHovered] = useState(false);
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="show"
                    variants={fadeIn(0.3 + index * 0.1)}
                    className="relative"
                  >
                    <div className="relative w-full h-full flex justify-center">
                      <button
                        className="bg-backgr flex items-center justify-center py-2 rounded-xl w-full h-full"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                      >
                        <Icon />
                      </button>

                      <AnimatePresence>
                        {hovered && (
                          <motion.div
                            className="absolute bottom-full mb-2 left-1/5 -translate-x-1/2 whitespace-nowrap z-10"
                            variants={tooltipVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          >
                            <motion.div className="bg-[#1C1C2A] text-green-300 text-sm px-4 py-1 rounded-xl relative">
                              {label}
                              <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#1C1C2A] z-[-1]" />
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-2/3 font-semibold p-4"
          initial="hidden"
          animate="show"
          variants={fadeIn(0.4)}
        >
          <p className="text-xl">Player Information</p>
          <hr className="my-3 border-0 h-[2px] bg-gray-600" />

          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-5">
            {[
              {
                title: "Location",
                icon: <MapPin />,
                content: (
                  <div className="grid grid-cols-3 gap-[35px] bg-[#1F2937] rounded-xl p-4 min-h-[120px]">
                    <div className="flex flex-col gap-3">
                      <p className="text-sm">Country</p>
                      <p className="flex gap-2 items-center">
                        <Image src={WorldIcon} alt="World Icon" width={30} />
                        Unknown
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-sm">City</p>
                      <p>Hidden</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-sm">IP Address</p>
                      <p>Hidden</p>
                    </div>
                  </div>
                ),
              },
              {
                title: "Statistics",
                icon: <ChartPie />,
                content: (
                  <div className="grid grid-cols-4 gap-[35px] bg-[#1F2937] rounded-xl p-4 min-h-[120px]">
                    {[
                      ["Rank", "No rating"],
                      ["Experience", "0"],
                      ["Place", "876"],
                      ["Played", "20 h."],
                    ].map(([label, value], i) => (
                      <div className="flex flex-col gap-3" key={i}>
                        <p className="text-sm">{label}</p>
                        <p>{value}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                title: "Steam ID",
                icon: <Image src={SteamIcon} alt="steam icon" width={30} />,
                content: (
                  <div className="grid grid-cols-2 gap-[35px] bg-[#1F2937] rounded-xl p-4 min-h-[120px]">
                    {[
                      ["SteamID32", "Unknown"],
                      ["SteamID3", "Hidden"],
                    ].map(([label, value], i) => (
                      <div className="flex flex-col gap-3" key={i}>
                        <p className="text-sm">{label}</p>
                        <p className="flex gap-2 items-center">
                          <button>
                            <Copy size={18} />
                          </button>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                title: "Faceit Statistics",
                icon: <Image src={FaceitIcon} alt="faceit icon" width={30} />,
                content: (
                  <div className="grid grid-cols-3 gap-[35px] bg-[#1F2937] rounded-xl p-4 min-h-[120px]">
                    <div className="flex flex-col gap-3">
                      <p className="text-sm">Nickname</p>
                      <p>No account</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-sm">Points</p>
                      <p>0</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-sm">Level</p>
                      <Image src={FaceitLevelIcon} alt="faceit level icon" />
                    </div>
                  </div>
                ),
              },
              {
                title: "Efficiency",
                icon: <AlignLeft />,
                content: (
                  <div className="grid grid-cols-5 gap-[35px] bg-[#1F2937] rounded-xl p-4 min-h-[120px]">
                    {[
                      ["Wins", "0%"],
                      ["Rounds", "0"],
                      ["Kills", "0"],
                      ["Deaths", "0"],
                      ["K/D", "0"],
                    ].map(([label, value], i) => (
                      <div className="flex flex-col gap-3" key={i}>
                        <p className="text-sm">{label}</p>
                        <p>{value}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                title: "Accuracy",
                icon: <Crosshair />,
                content: (
                  <div className="grid grid-cols-4 gap-[35px] bg-[#1F2937] rounded-xl p-4 min-h-[120px]">
                    {[
                      ["Assists", "0"],
                      ["Headshots", "0%"],
                      ["Shots", "0"],
                      ["Hits", "0"],
                    ].map(([label, value], i) => (
                      <div className="flex flex-col gap-3" key={i}>
                        <p className="text-sm">{label}</p>
                        <p>{value}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="show"
                variants={fadeIn(0.5 + i * 0.1)}
              >
                <p className="text-xl flex gap-2 items-center mb-3">
                  {section.icon} {section.title}
                </p>
                {section.content}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SteamProfile;
