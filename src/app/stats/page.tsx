// src/app/stats/page.tsx
import Stats from "@/components/stats";
import { getStats } from "@/lib/api/stats";

type StatsSearchParams = {
  page?: string;
  host?: string;
  search?: string;
};

const DEFAULT_HOST = "MIX 5x5 (1)";
const DEFAULT_LIMIT = 10;

export default async function StatsPage({
  searchParams,
}: {
  searchParams: Promise<StatsSearchParams>;
}) {
  const sp = await searchParams;
  const page = Number(sp?.page ?? 1);
  const host = sp?.host ?? DEFAULT_HOST;
  const search = sp?.search ?? undefined;

  const { items, meta } = await getStats({
    page,
    limit: DEFAULT_LIMIT,
    host,
    search,
  });

  const totalPages = Math.ceil(meta.total / meta.limit);

  return (
    <Stats
      data={items}
      page={meta.page}
      totalPages={totalPages}
      currentHost={host}
    />
  );
}
