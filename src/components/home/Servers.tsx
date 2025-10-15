import Container from "../Container";
import ClientGrid from "./ServersGridClient";
import { StatsContent } from "../statsContent";
import { Player } from "../modal/ServerInfo";
import EmptyState from "./EmptyState";

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

export default async function Servers() {
  const [responseServers, responseStats] = await Promise.all([
    fetch("https://panel.aimus.uz/api/servers", { next: { revalidate: 30 } }),
    fetch("https://panel.aimus.uz/api/stats", { next: { revalidate: 30 } }),
  ]);

  const data: Server[] = await responseServers.json().catch(() => []);
  const statsData = await responseStats.json().catch(() => null);
  const isEmpty = !data?.length;

  return (
    <section className="w-full mb-[100px] my-[30px]">
      <Container style="text-center">
        {isEmpty ? (
          <EmptyState />
        ) : (
          <>
            <ClientGrid data={data} />
            {statsData && <StatsContent statsData={statsData} />}
          </>
        )}
      </Container>
    </section>
  );
}
