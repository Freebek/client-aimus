import { NextResponse } from "next/server";

export async function GET() {
  // ⚠️ Временные фейковые данные, потом заменим реальными
  const profile = {
    personaname: "Shox_098",
    avatar: "https://avatars.cloudflare.steamstatic.com/xxxx_full.jpg",
    steamid: "76561198000000000",
    profileurl: "https://steamcommunity.com/id/shox_098",
  };

  // Редирект на твой фронтенд (localhost:27030)
  const frontend = "http://localhost:27030";

  const redirectUrl =
    `${frontend}/steamProfile` +
    `?personaname=${encodeURIComponent(profile.personaname)}` +
    `&avatar=${encodeURIComponent(profile.avatar)}` +
    `&steamid=${profile.steamid}` +
    `&profileurl=${encodeURIComponent(profile.profileurl)}`;

  console.log("🔄 Redirecting to:", redirectUrl);

  return NextResponse.redirect(redirectUrl);
}
