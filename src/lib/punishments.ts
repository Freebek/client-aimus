// lib/punishments.ts
export type Punishment = {
    player: string;
    reason: string;
    duration: string;
    admin: string;
    avatar: string;
    type: "BAN" | "MUTE" | "GAG";
  };
  
  const formatDuration = (duration: number): string => {
    if (duration === 0) return "Навсегда";
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours > 0 ? `${hours}ч ` : ""}${minutes}м`;
  };
  
  export async function getPunishments(): Promise<Punishment[]> {
    const [bansRes, mutesRes] = await Promise.all([
      fetch("https://panel.aimus.uz/api/bans?page=1&rows=10&query=", { cache: "no-store" }),
      fetch("https://panel.aimus.uz/api/mutes?page=1&rows=10&query=", { cache: "no-store" }),
    ]);
  
    const bansData = await bansRes.json();
    const mutesData = await mutesRes.json();
  
    const bans = bansData.results.map((item: any) => ({
      player: item.player_name,
      reason: item.reason,
      duration: formatDuration(item.duration),
      admin: item.admin_name || "Неизвестно",
      avatar: item.player_avatar || "/assets/profile-picture.png",
      type: "BAN" as const,
    }));
  
    const mutes = mutesData.results.map((item: any) => ({
      player: item.player_name,
      reason: item.reason,
      duration: formatDuration(item.duration),
      admin: item.admin_name || "Неизвестно",
      avatar: item.player_avatar || "/assets/profile-picture.png",
      type: item.type === "GAG" ? "GAG" : "MUTE",
    }));
  
    return [...bans, ...mutes];
  }
  