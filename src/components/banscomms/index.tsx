"use client";
import Image from "next/image";
import Container from "../Container";
import FilterToggle from "../FilterTogle";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type PunishmentType = "bans" | "mutes";

export interface Punishment {
  id: number;
  reason: string;
  status: string;
  duration: number;
  created: string;
  ends: string;
  player_name: string;
  player_steamid: string;
  player_avatar: string | null;
  admin_avatar: string | null;
  admin_name: string | null;
  type?: string; // BAN / MUTE / GAG
}

const formatDuration = (duration: number): string => {
  if (duration === 0) return "Abadiy";
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours > 0 ? `${hours} soat ` : ""}${minutes} daqiqa`;
};

const Banscomms = () => {
  const [selectedLabel, setSelectedLabel] = useState("Banlar");
  const [data, setData] = useState<Punishment[]>([]);
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();

  const type = selectedLabel === "Banlar" ? "bans" : "mutes";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/punishments?type=${type}`);
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error("Ma’lumotlarni olishda xatolik yuz berdi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  const renderIcon = (type: string | undefined) => {
    switch (type) {
      case "MUTE":
        return (
          <svg
            className="fill-current text-yellow-400 h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path d="M1 9v6h4l5 5V4L5 9H1z" />
          </svg>
        );
      case "GAG":
        return (
          <svg
            className="fill-current text-blue-400 h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path d="M2 6h20v2H2V6zm0 5h20v2H2v-2zm0 5h20v2H2v-2z" />
          </svg>
        );
      default:
        return (
          <svg
            className="fill-current text-red-500 h-5 w-5"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 15h2v2h-2v-2zm0-10h2v8h-2V7z" />
          </svg>
        );
    }
  };

  return (
    <section className="mb-[30px]">
      <Container style="">
        <div className="flex flex-col lg:flex-row mt-[20px] w-full text-white gap-5">
          <aside className="w-full lg:w-1/4">
            <div className="bg-backgr px-[20px] py-[15px] w-full rounded-[16px]">
              <FilterToggle
                selected={selectedLabel}
                onChange={setSelectedLabel}
              />
            </div>
          </aside>
          <aside className="w-full lg:w-3/4">
            <div className="bg-backgr px-[20px] py-[15px] rounded-[16px]">
              <div className="p-[10px] pb-[20px] border-b border-white border-opacity-25">
                <h2 className="text-lg font-semibold">
                  {t("bancomms.Punishment_List")}
                </h2>
              </div>

              <div className="mt-[20px] overflow-x-auto">
                <table className="min-w-[700px] w-full text-left text-xs">
                  <thead>
                    <tr className="text-white opacity-60">
                      <th className="px-4 py-2">{t("bancomms.Type")}</th>
                      <th className="px-4 py-2">{t("bancomms.Icon")}</th>
                      <th className="px-4 py-2">{t("bancomms.Player")}</th>
                      <th className="px-4 py-2">{t("bancomms.Сause")}</th>
                      <th className="px-4 py-2">{t("bancomms.Term")}</th>
                      <th className="px-4 py-2">{t("bancomms.Admin")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {data.map((item, i) => (
                      <tr key={i} className="hover:bg-gray-700 transition-all">
                        <td className="px-4 py-3">{renderIcon(item.type)}</td>
                        <td className="px-4 py-3">
                          <Image
                            className="w-[23px] h-[23px] rounded-full"
                            src={item.admin_avatar || "/default-avatar.png"}
                            alt="admin"
                            width={23}
                            height={23}
                          />
                        </td>
                        <td className="px-4 py-3 text-white truncate">
                          {item.player_name}
                        </td>
                        <td className="px-4 py-3 text-white truncate">
                          {item.reason}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`text-white text-xs px-3 py-1 rounded-full ${
                              item.duration === 0 ? "bg-red-500" : "bg-gray-800"
                            }`}
                          >
                            {item.duration === 0
                              ? t("bancomms.Forever")
                              : formatDuration(item.duration)}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-white truncate">
                          {item.admin_name ?? t("bancomms.No_Name")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default Banscomms;
