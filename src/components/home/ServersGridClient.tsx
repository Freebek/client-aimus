"use client";
import SingleServer from "./SingleServer";
import type { Server } from "./Servers";

export default function ClientGrid({ data }: { data: Server[] }) {
  return (
    <div className="w-full text-left mb-[20px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {data.map((item, i) => (
          <SingleServer data={item} key={item.id ?? i} />
        ))}
      </div>
    </div>
  );
}
