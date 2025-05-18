"use client";
import Image from "next/image";
import Container from "../Container";
import FilterToggle from "../FilterTogle";
import { useEffect, useState } from "react";

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
  type?: string; // for mutes: GAG or MUTE
}

const formatDuration = (duration: number): string => {
  if (duration === 0) return "Abadiy";
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours > 0 ? `${hours} soat ` : ""}${minutes} daqiqa`;
};

const Banscomms = () => {
  const [selectedLabel, setSelectedLabel] = useState("Banlar");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <section className="mb-[30px]">
      <Container style="">
        {/* <div className="bg-backgr gap-5 flex w-full justify-end items-center rounded-[10px] p-[7px]"></div> */}
        <div className="flex mt-[20px] w-full text-white">
          <aside className="h-full flex items-center justify-center flex-none basis-1/4">
            <div className="bg-backgr px-[20px] py-[15px] w-full rounded-[16px] ">
                <FilterToggle
                  selected={selectedLabel}
                  onChange={setSelectedLabel}
                />
            </div>
          </aside>
          <aside className="pl-5 flex-none basis-3/4">
            <div className="bg-backgr px-[20px] py-[15px] rounded-[16px]">
              <div className="p-[10px] pb-[20px] border-b border-white border-opacity-25">
                <h2>Jazo ro‘yxati</h2>
              </div>
              <div className="mt-[20px] grid grid-cols-custom2 items-center px-[20px] py-[10px] gap-[5px] justify-start">
                <span className="col-span-1 text-xs text-white opacity-60">
                  Turi
                </span>
                <span className="col-span-1 text-xs text-white opacity-60">
                  <svg
                    className="fill-current text-white opacity-60 h-[14px] w-[14px]"
                    viewBox="0 0 512 512"
                  >
                    <path d="M105.4 67.08C118.2 44.81 141.1 31.08 167.7 31.08H344.3C370 31.08 393.8 44.81 406.6 67.08L494.9 219.1C507.8 242.3 507.8 269.7 494.9 291.1L406.6 444.9C393.8 467.2 370 480.9 344.3 480.9H167.7C141.1 480.9 118.2 467.2 105.4 444.9L17.07 291.1C4.206 269.7 4.206 242.3 17.07 219.1L105.4 67.08zM158.3 279.8L107.1 335.9L153.9 416.9C156.7 421.9 161.1 424.9 167.7 424.9H344.3C350 424.9 355.3 421.9 358.1 416.9L413.4 321.2L340.7 233.8C336.2 228.3 329.4 225.1 322.3 225.1C315.2 225.1 308.4 228.3 303.8 233.8L232.2 320L193.3 279.4C188.7 274.6 182.4 271.9 175.7 272C169.1 272.1 162.8 274.9 158.3 279.8V279.8zM192 199.1C214.1 199.1 232 182.1 232 159.1C232 137.9 214.1 119.1 192 119.1C169.9 119.1 152 137.9 152 159.1C152 182.1 169.9 199.1 192 199.1z"></path>
                  </svg>
                </span>
                <span className="col-span-1 text-xs text-white opacity-60">
                  O‘yinchi
                </span>
                <span className="col-span-1 text-xs text-white opacity-60">
                  Sababi
                </span>
                <span className="col-span-1 text-xs text-white opacity-60">
                  Muddati
                </span>
                <span className="col-span-1 text-xs text-white opacity-60">
                  Admin
                </span>
              </div>
              <div className="stats_list overflow-hidden overflow-y-scroll max-h-[527px] mt-[20px] w-full gap-[3px]">
                {data.map((item: Punishment, i) => (
                  <div
                    key={i}
                    className="transition-all cursor-pointer hover:bg-gray-700 grid grid-cols-custom2 items-center justify-start px-[20px] py-[15px] rounded-[12px] gap-[5px]"
                  >
                    <span className="col-span-1">
                      <svg
                        className="fill-current text-red-500 h-5 w-5"
                        x="0"
                        y="0"
                        viewBox="0 0 24 24"
                      >
                        <g>
                          <path d="M6 7.5a5.25 5.25 0 1 1 5.25 5.25A5.26 5.26 0 0 1 6 7.5zM21.92 17a4.68 4.68 0 0 1-1.47 3.42h-.05a4.7 4.7 0 0 1-3.22 1.28 4.73 4.73 0 0 1-3.51-7.92s0-.07.07-.1a4.7 4.7 0 0 1 3.4-1.46A4.75 4.75 0 0 1 21.92 17zm-3.16 2.82-4.41-4.4a3.22 3.22 0 0 0 2.82 4.83 3.18 3.18 0 0 0 1.59-.43zM20.42 17a3.25 3.25 0 0 0-5.06-2.7l4.51 4.51a3.22 3.22 0 0 0 .55-1.81zm-8.37-3.48a.71.71 0 0 0-.57-.27H8.87a6.92 6.92 0 0 0-6.62 5 2.76 2.76 0 0 0 2.65 3.5h7.22a.76.76 0 0 0 .56-.24 1.3 1.3 0 0 0 .1-.15 6.22 6.22 0 0 1-.73-7.84z"></path>
                        </g>
                      </svg>
                    </span>
                    <span className="col-span-1">
                      <Image
                        className="w-[23px] h-[23px]"
                        src={item.admin_avatar || ""}
                        alt=""
                        width={1000}
                        height={1000}
                      />
                    </span>
                    <span className="text-white text-xs col-span-1">
                      {item.player_name}
                    </span>
                    <span className="text-white text-xs col-span-1">
                      {item.reason}
                    </span>
                    <span
                      className={`w-max text-white text-xs col-span-1 ${
                        formatDuration(item.duration) == "Abadiy"
                          ? "bg-red-500"
                          : "bg-gray-800"
                      }  py-[5px] px-[15px] rounded-[20px]`}
                    >
                      {formatDuration(item.duration)}
                    </span>
                    <span className="text-white text-xs col-span-1">
                      {item.admin_name ?? "Ism yo‘q"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default Banscomms;
