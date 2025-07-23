"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion, Variants, AnimatePresence } from "framer-motion";

import Container from "../Container";
import ProfileBackground from "../../../public/assets/server1.webp";
import ProfilePicture from "../../../public/assets/profile-picture.png";
import WorldIcon from "../../../public/assets/world-icon.svg";
import SteamIcon from "../../../public/assets/Steam_icon_logo.svg.png";
import BansList from "@/components/steamProfile/BansList";

import {
  CirclePlus,
  Copy,
  UserCog,
  Scroll,
  Users,
  BanknoteArrowUp,
  MapPin,
} from "lucide-react";
import React from "react";

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

function TooltipCard({
  Icon,
  label,
  onClick,
}: {
  Icon: any;
  label: string;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn(0.3)}
      className="relative"
    >
      <div className="relative w-full h-full flex justify-center">
        <button
          className="bg-backgr flex items-center justify-center py-2 rounded-xl w-full h-full hover:bg-gray-700 transition"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={onClick}
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
}

export default function SteamProfile() {
  const { t } = useTranslation();
  const { user: apiUser, loading } = useUser(); // ✅ берём из контекста
  const router = useRouter(); // ✅ роутер для редиректа
  const [copiedField, setCopiedField] = React.useState<string | null>(null);

  const [activeTab, setActiveTab] = React.useState<"profile" | "bans">(
    "profile"
  );

  const handleCopy = (value: string | undefined, field: string) => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  };

  const tooltipVariantsCopy = {
    hidden: { opacity: 0, y: -5, scale: 0.95 },
    visible: { opacity: 1, y: -10, scale: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -5, scale: 0.95, transition: { duration: 0.2 } },
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[50vh] text-gray-300">
        ⏳ {t("Loading...")}
      </div>
    );

  if (!loading && !apiUser) {
    router.push("/");
    return null;
  }

  return (
    <section className="my-[30px]">
      <Container style="px-4 lg:px-6 py-4 rounded-[10px] bg-backgr flex flex-col lg:flex-row justify-between gap-4 relative">
        {/* ✅ Левая колонка */}
        <motion.div
          className="w-full lg:w-1/3"
          initial="hidden"
          animate="show"
          variants={fadeIn(0)}
        >
          {/* <select className="p-4 w-full rounded-xl bg-[#1F2937]">
            <option value="public#1">PUBLIC#1</option>
          </select> */}

          <div className="relative">
            <Image
              src={ProfileBackground}
              alt="background"
              className="rounded-xl mt-4 w-full"
            />
            <img
              src={apiUser?.steam_avatar || ProfilePicture.src}
              alt="Steam Avatar"
              width={80}
              height={80}
              className="border-4 rounded-full border-gray-500 absolute top-[180px] left-5 max-sm:top-[135px] max-md:top-[150px]"
            />
          </div>

          {/* <button className="flex items-center gap-2 font-medium bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-300 px-5 py-2 rounded-xl transition-all duration-200 ml-auto mt-4">
            0 ₽ <CirclePlus />
          </button> */}

          <motion.div
            className="bg-[#1F2937] p-5 rounded-xl mt-14 font-semibold"
            initial="hidden"
            animate="show"
            variants={fadeIn(0.2)}
          >
            {/* ✅ Имя */}
            <p className="flex gap-3">
              {apiUser?.steam_name || t("Steam_profile.Player_Inf.Name")}
              {apiUser?.steam_name && (
                <button
                  onClick={() => handleCopy(apiUser?.steam_name, "steam_name")}
                >
                  <Copy size={18} />
                </button>
              )}
            </p>

            {/* ✅ Был в игре */}
            {/* <p className="text-sm mt-2">
              {t("Steam_profile.Player_Inf.Was_In_Game")}: {" "}
              {apiUser?.last_login_at
                ? new Date(
                    parseInt(apiUser.last_login_at) * 1000
                  ).toLocaleString()
                : "???"}
            </p> */}
            <hr className="my-3 border-0 h-[2px] bg-backgr" />

            {/* ✅ Статус */}
            {/* <p>{t("Steam_profile.Player_Inf.Status")}</p>
            <p className="text-sm">
              {t("Steam_profile.Player_Inf.Not_Specified")}
            </p>
            <hr className="my-3 border-0 h-[2px] bg-backgr" /> */}

            {/* ✅ Роль */}
            {/* <button className="flex gap-3 text-sm bg-gray-700 px-4 py-2 rounded-full">
              <div className="bg-backgr w-5 h-5 rounded-full"></div>{" "}
              {t("Steam_profile.Player_Inf.Player")}
            </button>
            <hr className="my-3 border-0 h-[2px] bg-backgr" /> */}

            {/* ✅ Нижние кнопки с переключением вкладок */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              <TooltipCard
                Icon={UserCog}
                label={t("Steam_profile.Player_Inf.Cards_Names.Information")}
                onClick={() => setActiveTab("profile")}
              />
              <TooltipCard
                Icon={Scroll}
                label={t("Steam_profile.Player_Inf.Cards_Names.ban&mute")}
                onClick={() => setActiveTab("bans")}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* ✅ Правая колонка - переключение контента */}
        <motion.div
          className="w-full lg:w-2/3 font-semibold p-4"
          initial="hidden"
          animate="show"
          variants={fadeIn(0.4)}
        >
          {/* ✅ Вкладка Профиль */}
          {activeTab === "profile" && (
            <>
              <p className="text-xl">
                {t("Steam_profile.Player_Stats.Location_Inf.Title")}
              </p>
              <hr className="my-3 border-0 h-[2px] bg-gray-600" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* ✅ Локация */}
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={fadeIn(0.5)}
                >
                  <p className="text-xl flex gap-2 items-center mb-3">
                    <MapPin />{" "}
                    {t("Steam_profile.Player_Stats.Location_Inf.Location")}
                  </p>
                  <div className="flex flex-col gap-[15px] bg-[#1F2937] rounded-xl p-4 min-h-[120px]">
                    <div className="flex justify-between gap-2">
                      <p className="text-sm">
                        {t("Steam_profile.Player_Stats.Location_Inf.Country")}
                      </p>
                      <p className="flex gap-2 items-center flex-wrap">
                        <Image src={WorldIcon} alt="World Icon" width={30} />
                        {apiUser?.country ||
                          t(
                            "Steam_profile.Player_Stats.Hidden&Unknown.Unknown"
                          )}
                      </p>
                    </div>
                    <div className="flex justify-between gap-2">
                      <p className="text-sm">
                        {t("Steam_profile.Player_Stats.Location_Inf.City")}
                      </p>
                      <p>
                        {apiUser?.city ||
                          t("Steam_profile.Player_Stats.Hidden&Unknown.Hidden")}
                      </p>
                    </div>
                    <div className="flex justify-between gap-2">
                      <p className="text-sm">
                        {t(
                          "Steam_profile.Player_Stats.Location_Inf.IP_ADDRESS"
                        )}
                      </p>
                      <p>
                        {t("Steam_profile.Player_Stats.Hidden&Unknown.Hidden")}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* ✅ Steam ID */}
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={fadeIn(0.6)}
                >
                  <p className="text-xl flex gap-2 items-center mb-3">
                    <Image src={SteamIcon} alt="steam icon" width={30} /> Steam
                    ID
                  </p>
                  <div className="flex flex-col gap-4 bg-[#1F2937] rounded-xl p-4 min-h-[120px]">
                    {/* SteamID64 */}
                    <div className="flex justify-between gap-2 relative">
                      <p className="text-sm">SteamID64</p>
                      <div className="flex items-center gap-2 relative">
                        <button
                          onClick={() =>
                            handleCopy(apiUser?.steam_id_64, "steamid64")
                          }
                          className="relative hover:text-blue-400 transition"
                        >
                          <Copy size={18} />
                          <AnimatePresence>
                            {copiedField === "steamid64" && (
                              <motion.div
                                variants={tooltipVariantsCopy}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded-md shadow-md"
                              >
                                ✅ Скопировано!
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                        <span className="break-all text-sm">
                          {apiUser?.steam_id_64 || "N/A"}
                        </span>
                      </div>
                    </div>

                    {/* SteamID32 */}
                    <div className="flex justify-between gap-2 relative">
                      <p className="text-sm">SteamID32</p>
                      <div className="flex items-center gap-2 relative">
                        <button
                          onClick={() =>
                            handleCopy(apiUser?.steam_id_32, "steamid32")
                          }
                          className="relative hover:text-blue-400 transition"
                        >
                          <Copy size={18} />
                          <AnimatePresence>
                            {copiedField === "steamid32" && (
                              <motion.div
                                variants={tooltipVariantsCopy}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded-md shadow-md"
                              >
                                ✅ Скопировано!
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                        <span className="break-all text-sm">
                          {apiUser?.steam_id_32 || "N/A"}
                        </span>
                      </div>
                    </div>

                    {/* SteamID3 */}
                    <div className="flex justify-between gap-2 sm:col-span-2 relative">
                      <p className="text-sm">SteamID3</p>
                      <div className="flex items-center gap-2 relative overflow-hidden">
                        <button
                          onClick={() =>
                            handleCopy(apiUser?.steam_id_3, "steamid3")
                          }
                          className="relative hover:text-blue-400 transition"
                        >
                          <Copy size={18} />
                          <AnimatePresence>
                            {copiedField === "steamid3" && (
                              <motion.div
                                variants={tooltipVariantsCopy}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded-md shadow-md"
                              >
                                ✅ Скопировано!
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                        <span className="truncate max-w-[200px] sm:max-w-[400px]">
                          {apiUser?.steam_id_3 || "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}

          {/* ✅ Вкладка Bans & Mutes */}
          {activeTab === "bans" && <BansList />}
        </motion.div>
      </Container>
    </section>
  );
}
