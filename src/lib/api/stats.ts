// src/lib/api/stats.ts

export type ApiStatsPlayer = {
  steam: string;
  name: string;
  value: number;
  rank: number;
  kills: number;
  deaths: number;
  shoots: number;
  hits: number;
  headshots: number;
  assists: number;
  round_win: number;
  round_lose: number;
  playtime: number; // секунды
  lastconnect: number; // unix timestamp (секунды)
  steam_link: string;
  steam64: string;
  avatar: string;
};

export type ApiStatsMeta = {
  total: number;
  page: number;
  limit: number;
  db: string;
};

export type ApiStatsResponse = {
  status_code: number;
  data: {
    success: boolean;
    meta: ApiStatsMeta;
    data: ApiStatsPlayer[];
  };
};

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
  avatar: string;
  steam_link: string;
};

export type GetStatsResult = {
  items: UserData[];
  meta: ApiStatsMeta;
};

type GetStatsParams = {
  page?: number;
  limit?: number;
  host?: string; // db
  search?: string;
};

function formatPlaytime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h === 0 && m === 0) return "0m";
  if (h === 0) return `${m}m`;
  return `${h}h ${m}m`;
}

function formatLastGame(ts: number): string {
  const date = new Date(ts * 1000);
  return date.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getTitleByRank(rank: number): string {
  switch (rank) {
    case 1:
      return "Recruit";
    case 2:
      return "Regular";
    case 3:
      return "Veteran";
    case 4:
      return "Elite";
    case 5:
      return "Legend";
    default:
      return "Player";
  }
}

export async function getStatsBySearch(params: GetStatsParams) {
  const { host, search, page = 1, limit = 20 } = params;

  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/v1/stats`);
  url.searchParams.set("host", host ?? "");
  url.searchParams.set("search", search ?? "");
  url.searchParams.set("page", String(page));
  url.searchParams.set("limit", String(limit));

  const res = await fetch(url.toString(), {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch stats");
  }

  const data: ApiStatsResponse = await res.json();
  return data;
}

export async function getStats({
  page = 1,
  limit = 10,
  host,
  search,
}: GetStatsParams): Promise<GetStatsResult> {
  const params = new URLSearchParams();
  params.set("page", String(page));
  params.set("limit", String(limit));
  if (host) params.set("host", host);
  if (search) params.set("search", search);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/stats?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch stats: ${res.status}`);
  }

  const json: ApiStatsResponse = await res.json();

  const meta = json.data.meta;
  const items: UserData[] = json.data.data.map((p) => {
    const kdr = p.deaths === 0 ? p.kills : p.kills / p.deaths;

    return {
      rank: p.rank,
      username: p.name,
      experience: p.value,
      title: getTitleByRank(p.rank),
      kills: p.kills,
      deaths: p.deaths,
      steam_link: p.steam_link,
      kdr: Number(kdr.toFixed(2)),
      headshots: p.headshots,
      playtime: formatPlaytime(p.playtime),
      lastGame: formatLastGame(p.lastconnect),
      avatar: p.avatar,
    };
  });

  return { items, meta };
}
