"use client";
import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { UserData } from "@/lib/api/stats";

const hosts = [
  { label: "MIX 5x5 (1)", value: "1" },
  { label: "MIX 5x5 (2)", value: "1" },
  { label: "MIX 5x5 (3)", value: "1" },
  { label: "RETAKE (1)", value: "1" },
  { label: "RETAKE (2)", value: "1" },
  { label: "RETAKE (3)", value: "1" },
  { label: "Arena USP", value: "1" },
  { label: "5x5 MIX Surprise Round", value: "1" },
  { label: "AWP LEGO", value: "1" },
];

const MAX_RANK_IMAGE = 30;

function getRankImage(rank: number) {
  if (rank < 1 || rank > MAX_RANK_IMAGE || !Number.isFinite(rank)) {
    return "/for-lr-web/1.png";
  }

  return `/for-lr-web/${rank}.png`;
}

type StatsProps = {
  data: UserData[];
  page: number;
  totalPages: number;
  currentHost: string;
};

const MAX_SIBLINGS = 1;

function getPaginationRange(
  current: number,
  total: number
): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const range: (number | "...")[] = [];
  const left = Math.max(2, current - MAX_SIBLINGS);
  const right = Math.min(total - 1, current + MAX_SIBLINGS);

  range.push(1);

  if (left > 2) {
    range.push("...");
  }

  for (let page = left; page <= right; page++) {
    range.push(page);
  }

  if (right < total - 1) {
    range.push("...");
  }

  range.push(total);

  return range;
}

const Stats = ({ data, page, totalPages, currentHost }: StatsProps) => {
  const { t } = useTranslation();
  const paginationRange = getPaginationRange(page, totalPages);

  return (
    <section className="my-[50px]">
      <Container style="flex flex-col gap-6 lg:flex-row">
        <aside className="w-full lg:w-1/4 lg:flex-none flex flex-col gap-3 lg:pr-[10px]">
          <h1 className="font-semibold text-lg">{t("Stats.Our_Servers")}</h1>
          {hosts.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <Link
                href={{
                  pathname: "/stats",
                  query: {
                    host: item.label,
                    page: 1,
                  },
                }}
                className={`bg-backgr p-3 rounded-xl text-sm sm:text-base cursor-pointer transition-all duration-300 ease-in hover:bg-emerald-500 ${
                  item.label === currentHost ? "bg-emerald-500" : ""
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </aside>
        <aside className="w-full lg:w-3/4 lg:flex-none lg:pl-[5px]">
          <div className="w-full overflow-x-auto">
            <div className="inline-block min-w-[900px] align-top">
              <div
                className="
  mb-[15px]
  border border-primary
  grid items-center
  grid-cols-[40px_2fr_repeat(5,minmax(0,1fr))]
  rounded-[12px] h-[52px] px-[20px] bg-backgr
"
              >
                <span className="col-span-1 text-center">#</span>
                <span className="col-span-1 text-xs uppercase text-primary opacity-60 text-center">
                  {t("Stats.Player")}
                </span>
                <span className="col-span-1 text-xs uppercase text-primary opacity-60 text-center">
                  {t("Stats.Score")}
                </span>
                <span className="col-span-1 text-xs uppercase text-primary opacity-60 text-center">
                  {t("Stats.Rank")}
                </span>
                <span className="col-span-1 text-xs uppercase text-primary opacity-60 text-center">
                  {t("Stats.Kills")}
                </span>
                <span className="col-span-1 text-xs uppercase text-primary opacity-60 text-center">
                  {t("Stats.Deaths")}
                </span>
                <span className="col-span-1 text-xs uppercase text-primary opacity-60 text-center">
                  {t("Stats.Headshots")}
                </span>
              </div>

              <div className="stats_list max-h-[400px] lg:max-h-[571px] overflow-y-auto pr-2">
                {data.map((item, i) => (
                  <Link
                    href={item.steam_link}
                    target="_blank"
                    key={item.username + i}
                    className="
                        mb-1
                        grid items-center
                        grid-cols-[40px_2fr_repeat(5,minmax(0,1fr))]
                        rounded-[12px] py-[17px] px-[20px] bg-backgr
                      "
                  >
                    <span className="col-span-1 text-center">{i + 1}</span>
                    <span className="col-span-1 flex items-center gap-2 justify-center">
                      <Image
                        className="w-[26px] h-[26px] rounded-full object-cover"
                        src={item.avatar || "/assets/profile-picture.png"}
                        alt={item.username}
                        width={26}
                        height={26}
                      />

                      <span
                        className="
                         font-aimus
                         text-primary/80
                         text-[9px] 
                         tracking-[0.16em]
                         "
                      >
                        {item.username}
                      </span>
                    </span>

                    <span className="col-span-1 text-xs text-white text-center">
                      {item.experience}
                    </span>
                    <div className="relative w-[64px] h-[35px] overflow-visible mx-auto">
                      <Image
                        src={getRankImage(item.rank)}
                        fill
                        sizes="64px"
                        alt="rank"
                        className="object-contain"
                      />
                    </div>

                    <span className="col-span-1 text-xs text-white text-center">
                      {item.kills}
                    </span>
                    <span className="col-span-1 text-xs text-white text-center">
                      {item.deaths}
                    </span>
                    <span className="col-span-1 text-xs text-white text-center">
                      {item.headshots}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-3 items-center justify-between sm:flex-row">
                <p className=" text-primary/60 text-center sm:text-left">
                  {t("Stats.Page")} {page} {t("Stats.Of")} {totalPages}
                </p>

                <nav className="hidden sm:flex items-center gap-1">
                  {/* В начало */}
                  <Link
                    href={{
                      pathname: "/stats",
                      query: { host: currentHost, page: 1 },
                    }}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-backgr hover:border-emerald-500/70 transition ${
                      page === 1 ? "opacity-40 pointer-events-none" : ""
                    }`}
                  >
                    ««
                  </Link>

                  {/* Назад */}
                  <Link
                    href={{
                      pathname: "/stats",
                      query: { host: currentHost, page: Math.max(1, page - 1) },
                    }}
                    className={`flex h-8 w-8 items-center justify-center rounded-full  border border-primary/20 bg-backgr hover:border-emerald-500/70 transition ${
                      page === 1 ? "opacity-40 pointer-events-none" : ""
                    }`}
                  >
                    ‹
                  </Link>

                  {/* Номера страниц + ... */}
                  {paginationRange.map((item, idx) => {
                    if (item === "...") {
                      return (
                        <span
                          key={`dots-${idx}`}
                          className="px-2 text-xs text-primary/50 select-none"
                        >
                          ...
                        </span>
                      );
                    }

                    const p = item as number;

                    return (
                      <Link
                        key={p}
                        href={{
                          pathname: "/stats",
                          query: { host: currentHost, page: p },
                        }}
                        className={`flex h-8 min-w-8 text-xs items-center justify-center rounded-full border  transition ${
                          p === page
                            ? "bg-emerald-500 text-white border-emerald-500"
                            : "bg-backgr text-primary border-primary/20 hover:border-emerald-500/60"
                        }`}
                      >
                        {p}
                      </Link>
                    );
                  })}

                  {/* Вперёд */}
                  <Link
                    href={{
                      pathname: "/stats",
                      query: {
                        host: currentHost,
                        page: Math.min(totalPages, page + 1),
                      },
                    }}
                    className={`flex h-8 w-8 items-center justify-center rounded-full  border border-primary/20 bg-backgr hover:border-emerald-500/70 transition ${
                      page === totalPages
                        ? "opacity-40 pointer-events-none"
                        : ""
                    }`}
                  >
                    ›
                  </Link>

                  {/* В конец */}
                  <Link
                    href={{
                      pathname: "/stats",
                      query: { host: currentHost, page: totalPages },
                    }}
                    className={`flex h-8 w-8 items-center justify-center rounded-full  border border-primary/20 bg-backgr hover:border-emerald-500/70 transition ${
                      page === totalPages
                        ? "opacity-40 pointer-events-none"
                        : ""
                    }`}
                  >
                    »»
                  </Link>
                </nav>

                {/* Мобильная версия */}
                <nav className="flex sm:hidden items-center gap-2">
                  <Link
                    href={{
                      pathname: "/stats",
                      query: { host: currentHost, page: Math.max(1, page - 1) },
                    }}
                    className={`px-3 py-1 rounded-full  border border-primary/20 bg-backgr hover:border-emerald-500/70 transition ${
                      page === 1 ? "opacity-40 pointer-events-none" : ""
                    }`}
                  >
                    {t("Stats.Prev")}
                  </Link>

                  <span className="text-xs text-primary/70">
                    {page} / {totalPages}
                  </span>

                  <Link
                    href={{
                      pathname: "/stats",
                      query: {
                        host: currentHost,
                        page: Math.min(totalPages, page + 1),
                      },
                    }}
                    className={`px-3 py-1 rounded-full  border border-primary/20 bg-backgr hover:border-emerald-500/70 transition ${
                      page === totalPages
                        ? "opacity-40 pointer-events-none"
                        : ""
                    }`}
                  >
                    {t("Stats.Next")}
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
};

export default Stats;
