import { ReactNode } from "react";
import Container from "../Container";
// import FilterServers from "../FilterServers";
import { Player } from "../modal/ServerInfo";
import SingleServer from "./SingleServer";

// colors for dynamic progress
// #d8374 -- red color
// #ffc046 -- yellow color

export type Server = {
  address: string;
  game: string;
  hostname: string;
  id: string;
  map: string;
  maxPlayers: number;
  players: Player[];
  playersPercentage: number;
  vac: boolean;
  serverIp: string;
};

export type Stat = {
  name: string;
  count: string;
  icon: ReactNode;
};

const Servers = async () => {
  const responseServers = await fetch("https://panel.aimus.uz/api/servers");
  const responseStats = await fetch("https://panel.aimus.uz/api/stats");
  const data: Server[] = await responseServers.json();

  const statsData = await responseStats.json();

  const statsContnet: Stat[] = [
    {
      name: "Adminlar",
      count: statsData["admins"],
      icon: (
        <svg
          className="absolute top-[5px] right-[-35px] rotate-[15deg] w-[100px] h-[100px] opacity-30 dark:text-white"
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
            strokeWidth="2"
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
    },
    {
      name: "Banlar",
      count: statsData["bans"],
      icon: (
        <svg
          className="absolute top-[5px] right-[-35px] rotate-[15deg] w-[100px] h-[100px] opacity-30 dark:text-white"
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
            strokeWidth="2"
            d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
          />
        </svg>
      ),
    },
    {
      name: "Mutlar",
      count: statsData["mutes"],
      icon: (
        <svg
          className="absolute top-[5px] right-[-35px] rotate-[15deg] w-[100px] h-[100px] opacity-30 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.97 9.012a1 1 0 1 0-2 0h2Zm-1 2.988 1 .001V12h-1Zm-8.962 4.98-.001 1h.001v-1Zm-3.52-1.46.708-.708-.707.707ZM5.029 12h-1v.001l1-.001Zm3.984 7.963a1 1 0 1 0 0 2v-2Zm5.975 2a1 1 0 0 0 0-2v2ZM7.017 8.017a1 1 0 1 0 2 0h-2Zm6.641 4.862a1 1 0 1 0 .667 1.886l-.667-1.886Zm-7.63-2.87a1 1 0 1 0-2 0h2Zm9.953 5.435a1 1 0 1 0 1 1.731l-1-1.731ZM12 16.979h1a1 1 0 0 0-1-1v1ZM5.736 4.322a1 1 0 0 0-1.414 1.414l1.414-1.414Zm12.528 15.356a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM17.97 9.012V12h2V9.012h-2Zm0 2.987a3.985 3.985 0 0 1-1.168 2.813l1.415 1.414a5.985 5.985 0 0 0 1.753-4.225l-2-.002Zm-7.962 3.98a3.985 3.985 0 0 1-2.813-1.167l-1.414 1.414a5.985 5.985 0 0 0 4.225 1.753l.002-2Zm-2.813-1.167a3.985 3.985 0 0 1-1.167-2.813l-2 .002a5.985 5.985 0 0 0 1.753 4.225l1.414-1.414Zm3.808-10.775h1.992v-2h-1.992v2Zm1.992 0c1.097 0 1.987.89 1.987 1.988h2a3.988 3.988 0 0 0-3.987-3.988v2Zm1.987 1.988v4.98h2v-4.98h-2Zm-5.967 0c0-1.098.89-1.988 1.988-1.988v-2a3.988 3.988 0 0 0-3.988 3.988h2Zm-.004 15.938H12v-2H9.012v2Zm2.988 0h2.987v-2H12v2ZM9.016 8.017V6.025h-2v1.992h2Zm5.967 2.987a1.99 1.99 0 0 1-1.325 1.875l.667 1.886a3.989 3.989 0 0 0 2.658-3.76h-2ZM6.03 12v-1.992h-2V12h2Zm10.774 2.812a3.92 3.92 0 0 1-.823.632l1.002 1.731a5.982 5.982 0 0 0 1.236-.949l-1.415-1.414ZM4.322 5.736l13.942 13.942 1.414-1.414L5.736 4.322 4.322 5.736ZM12 15.98h-1.992v2H12v-2Zm-1 1v3.984h2V16.98h-2Z"
          />
        </svg>
      ),
    },
    {
      name: "Serverlar",
      count: statsData["servers"],
      icon: (
        <svg
          className="absolute top-[5px] right-[-35px] rotate-[15deg] w-[100px] h-[100px] opacity-30 dark:text-white"
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
            strokeWidth="2"
            d="M5 12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M5 12h14M5 12a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m-2 3h.01M14 15h.01M17 9h.01M14 9h.01"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full mb-[100px] my-[30px]">
      <Container style="text-center">
        <div className="w-full text-left mb-[20px]">
          <h2 className="text-white text-xl mb-[20px]">
            Bizning serverlarimiz
          </h2>
          {/* <FilterServers /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {data.map((item: Server, i: number) => {
              return <SingleServer data={item} key={i} />;
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] mt-[30px]">
          {statsContnet?.map((stat: Stat, i: number) => (
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
      </Container>
    </section>
  );
};

export default Servers;
