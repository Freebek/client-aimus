"use client";

import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

export type Stat = {
  name: string;
  count: string;
  icon: ReactNode;
};

interface IProps {
  statsData: {
    admins: string;
    bans: string;
    mutes: string;
    servers: string;
  }
}

export const StatsContent:FC<IProps> = (props) => {
  const { statsData } = props;
  const {t}=useTranslation();

  const statsContnet: Stat[] = [
    {
      name: t("Admins"),
      count: statsData["admins"],
      icon: (
        <svg
          className="absolute top-[5px] right-[-35px] rotate-[15deg] w-[100px] h-[100px] opacity-30 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
    },
    {
      name: t("Bans"),
      count: statsData["bans"],
      icon: (
        <svg
          className="absolute top-[5px] right-[-35px] rotate-[15deg] w-[100px] h-[100px] opacity-30 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
          />
        </svg>
      ),
    },
    {
      name: t("Mutes"),
      count: statsData["mutes"],
      icon: (
        <svg
          className="absolute top-[5px] right-[-35px] rotate-[15deg] w-[100px] h-[100px] opacity-30 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5.736 4.322a1 1 0 0 0-1.414 1.414l13.942 13.942a1 1 0 0 0 1.414-1.414L5.736 4.322Zm12.234 8.677a5.985 5.985 0 0 1-1.753 4.225l-1.415-1.414a3.985 3.985 0 0 0 1.168-2.813h2Zm-2-2V6.025a1.988 1.988 0 0 0-1.987-1.988h-1.992v2h1.992v4.98h2Zm-6.984 0V6.025h-2v1.992h2Zm4.975 9.96v2h-2.987v-2H12Zm-2.988 0v2h-2.988v-2H9.012ZM12 16.98v2h-1.992v-2H12Zm-5.97-4.967a3.985 3.985 0 0 0 1.167 2.813l-1.414 1.414a5.985 5.985 0 0 1-1.753-4.225h2Z" />
        </svg>
      ),
    },
    {
      name: t("Servers"),
      count: statsData["servers"],
      icon: (
        <svg
          className="absolute top-[5px] right-[-35px] rotate-[15deg] w-[100px] h-[100px] opacity-30 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M5 12h14M5 12a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m-2 3h.01M14 15h.01M17 9h.01M14 9h.01"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] mt-[30px]">
          {statsContnet.map((stat, i) => (
            <div
              key={i}
              className="relative bg-backgr px-[25px] py-[20px] rounded-[25px] overflow-hidden"
            >
              <div className="text-left w-full">
                <p className="text-white opacity-50 font-medium text-lg">
                  {stat.name}
                </p>
                <p className="text-[24px] text-primary">{stat.count}</p>
                {stat.icon}
              </div>
            </div>
          ))}
        </div>
  );
}
