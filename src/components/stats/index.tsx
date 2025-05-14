import Image from "next/image";
import Container from "../Container";
import { userData } from "@/data";
import CustomSelect from "../CustomSelect";

export type UserData = {
  rank: number;
  username: string;
  experience: number;
  title: string;
  kills: number;
  deaths: number;
  kdr: number;
  headshots: number;
  playtime: string;
  lastGame: string;
};

const servers = [
  { label: "PUBLIC#1", value: "1" },
  { label: "AWP LEGO", value: "1" },
  { label: "ONLY MIRAGE", value: "1" },
  { label: "PUBLIC#2", value: "1" },
];

const Stats = () => {
  return (
    <section className="mb-[30px]">
      <Container style="flex">
        <aside className="flex flex-col gap-[15px] flex-none basis-1/4 pr-[10px]">
          <CustomSelect
            options={servers}
            defaultValue="1"
            // onChange={(val) => console.log("Selected:", val)}
          />
          <div className="p-[20px] gap-[15px] flex flex-col rounded-[16px] bg-backgr ">
            <div className="flex items-center justify-between">
              <div className="flex gap-[15px] items-center">
                <Image
                  className="w-[46px] h-[46px]"
                  src={"/assets/profile-picture.png"}
                  alt=""
                  width={1000}
                  height={1000}
                />
                <p className="text-white text-lg font-bold flex flex-col justify-between">
                  <span className="font-bold text-[13px] text-[#ffdb5c]">
                    1st place
                  </span>
                  how
                </p>
              </div>
              <Image
                className="w-auto h-[46px]"
                src={"/assets/1.svg"}
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <hr className="opacity-20" />
            <div className="flex justify-between items-center">
              <Image
                className="w-[100px] h-auto"
                src={"/assets/5.svg"}
                alt=""
                width={1000}
                height={1000}
              />
              <div className="text-sm flex flex-col text-right">
                <p className="text-primary">5 Уровень</p>
                <p className="text-white">115 243 Опыт</p>
              </div>
            </div>
          </div>
          <div className="p-[20px] gap-[15px] flex flex-col rounded-[16px] bg-backgr ">
            <div className="flex items-center justify-between">
              <div className="flex gap-[15px] items-center">
                <Image
                  className="w-[46px] h-[46px]"
                  src={"/assets/profile-picture.png"}
                  alt=""
                  width={1000}
                  height={1000}
                />
                <p className="text-white text-lg font-bold flex flex-col justify-between">
                  <span className="font-bold text-[13px] text-[#bfe0ff]">
                    2nd place
                  </span>
                  Pompo
                </p>
              </div>
              <Image
                className="w-auto h-[46px]"
                src={"/assets/2.svg"}
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <hr className="opacity-20" />
            <div className="flex justify-between items-center">
              <Image
                className="w-[100px] h-auto"
                src={"/assets/5.svg"}
                alt=""
                width={1000}
                height={1000}
              />
              <div className="text-sm flex flex-col text-right">
                <p className="text-primary">5 Уровень</p>
                <p className="text-white">115 243 Опыт</p>
              </div>
            </div>
          </div>
          <div className="p-[20px] gap-[15px] flex flex-col rounded-[16px] bg-backgr ">
            <div className="flex items-center justify-between">
              <div className="flex gap-[15px] items-center">
                <Image
                  className="w-[46px] h-[46px]"
                  src={"/assets/profile-picture.png"}
                  alt=""
                  width={1000}
                  height={1000}
                />
                <p className="text-white text-lg font-bold flex flex-col justify-between">
                  <span className="font-bold text-[13px] text-[#f8a785]">
                    3rd place
                  </span>
                  Estet
                </p>
              </div>
              <Image
                className="w-auto h-[46px]"
                src={"/assets/3.svg"}
                alt=""
                width={1000}
                height={1000}
              />
            </div>
            <hr className="opacity-20" />
            <div className="flex justify-between items-center">
              <Image
                className="w-[100px] h-auto"
                src={"/assets/5.svg"}
                alt=""
                width={1000}
                height={1000}
              />
              <div className="text-sm flex flex-col text-right">
                <p className="text-primary">5 Уровень</p>
                <p className="text-white">115 243 Опыт</p>
              </div>
            </div>
          </div>
        </aside>
        <aside className="flex-none basis-3/4 pl-[5px]">
          <div className="mb-[15px] border border-primary grid items-center grid-cols-custom rounded-[12px] h-[52px] px-[20px] w-full bg-backgr">
            <span className="col-span-1">
              <svg
                className="fill-current text-primary opacity-60 h-[14px] w-[14px]"
                viewBox="0 0 384 512"
              >
                <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80s80-35.8 80-80zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"></path>
              </svg>
            </span>
            <span className="col-span-1">
              <svg
                className="fill-current text-primary opacity-60 h-[14px] w-[14px]"
                viewBox="0 0 512 512"
              >
                <path d="M105.4 67.08C118.2 44.81 141.1 31.08 167.7 31.08H344.3C370 31.08 393.8 44.81 406.6 67.08L494.9 219.1C507.8 242.3 507.8 269.7 494.9 291.1L406.6 444.9C393.8 467.2 370 480.9 344.3 480.9H167.7C141.1 480.9 118.2 467.2 105.4 444.9L17.07 291.1C4.206 269.7 4.206 242.3 17.07 219.1L105.4 67.08zM158.3 279.8L107.1 335.9L153.9 416.9C156.7 421.9 161.1 424.9 167.7 424.9H344.3C350 424.9 355.3 421.9 358.1 416.9L413.4 321.2L340.7 233.8C336.2 228.3 329.4 225.1 322.3 225.1C315.2 225.1 308.4 228.3 303.8 233.8L232.2 320L193.3 279.4C188.7 274.6 182.4 271.9 175.7 272C169.1 272.1 162.8 274.9 158.3 279.8V279.8zM192 199.1C214.1 199.1 232 182.1 232 159.1C232 137.9 214.1 119.1 192 119.1C169.9 119.1 152 137.9 152 159.1C152 182.1 169.9 199.1 192 199.1z"></path>
              </svg>
            </span>
            <span className="col-span-1 text-xs uppercase text-primary opacity-60">
              Игрок
            </span>
            <span className="col-span-1 text-xs uppercase text-primary opacity-60">
              Опыт
            </span>
            <span className="col-span-1 text-xs uppercase text-primary opacity-60">
              Звание
            </span>
            <span className="col-span-1 text-xs uppercase text-primary opacity-60">
              Убийства
            </span>
            <span className="col-span-1 text-xs uppercase text-primary opacity-60">
              Смерти
            </span>
            <span className="col-span-1 text-xs uppercase text-primary opacity-60">
              К/Д
            </span>
            <span className="col-span-1 text-xs uppercase text-primary opacity-60">
              В голову
            </span>
            <span className="col-span-1 text-xs uppercase text-primary opacity-60">
              Наиграл
            </span>
            <span className="col-span-1 text-right text-xs text-primary opacity-60">
              Последняя игра:
            </span>
          </div>
          <div className="stats_list max-h-[571px] overflow-hidden overflow-y-scroll">
            {userData.map((item, i) => (
              <div
                key={i}
                className="mb-1 grid items-center grid-cols-custom rounded-[12px] py-[17px] px-[20px] w-full bg-backgr"
              >
                <span className="text-xs text-white col-span-1">
                  {item.rank}
                </span>
                <span className="col-span-1">
                  <Image
                    className="w-[26px] h-[26px]"
                    src={"/assets/profile-picture.png"}
                    alt=""
                    width={1000}
                    height={1000}
                  />
                </span>
                <span className="col-span-1 text-xs text-primary ">
                  {item.username}
                </span>
                <span className="col-span-1 text-xs text-white ">
                  {item.experience}
                </span>
                <span className="col-span-1 text-xs text-white ">
                  <Image
                    className="w-[64px] h-auto"
                    src={"/assets/4.svg"}
                    alt=""
                    width={1000}
                    height={1000}
                  />
                </span>
                <span className="col-span-1 text-xs text-white ">
                  {item.kills}
                </span>
                <span className="col-span-1 text-xs text-white ">
                  {item.deaths}
                </span>
                <span className="col-span-1 text-xs text-white ">
                  {item.kdr}
                </span>
                <span className="col-span-1 text-xs text-white ">
                  {item.headshots}
                </span>
                <span className="col-span-1 text-xs text-white ">
                  {item.playtime}
                </span>
                <span className="col-span-1 text-right text-xs text-white ">
                  {item.lastGame}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </Container>
    </section>
  );
};

export default Stats;
