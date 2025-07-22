import Container from "../Container";
import SingleServer from "./SingleServer";
import { Player } from "../modal/ServerInfo";
import { StatsContent } from "../statsContent";

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

const Servers = async () => {
  const responseServers = await fetch("https://panel.aimus.uz/api/servers", {
    next: { revalidate: 30 },
  });
  const responseStats = await fetch("https://panel.aimus.uz/api/stats", {
    next: { revalidate: 30 },
  });

  const data: Server[] = await responseServers.json();
  const statsData = await responseStats.json();

  return (
    <section className="w-full mb-[100px] my-[30px]">
      <Container style="text-center">
        <div className="w-full text-left mb-[20px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {data.map((item: Server, i: number) => (
              <SingleServer data={item} key={i} />
            ))}
          </div>
        </div>
        <StatsContent statsData={statsData} />
      </Container>
    </section>
  );
};

export default Servers;
