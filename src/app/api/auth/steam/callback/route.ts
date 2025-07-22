import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const claimedId = searchParams.get("openid.claimed_id");
    console.log("🔄 CALLBACK params:", searchParams.toString());
    console.log("✅ claimed_id:", claimedId);

    if (!claimedId) {
      return NextResponse.json(
        { error: "Steam не вернул claimed_id" },
        { status: 400 }
      );
    }

    // ✅ Парсим SteamID
    const steamIdMatch = claimedId.match(/\d+$/);
    const steamId = steamIdMatch ? steamIdMatch[0] : null;

    if (!steamId) {
      return NextResponse.json(
        { error: "Не удалось извлечь SteamID" },
        { status: 400 }
      );
    }

    console.log("✅ SteamID:", steamId);

    // ✅ Запрашиваем профиль через Web API
    const apiKey = process.env.STEAM_API_KEY;
    if (!apiKey) {
      throw new Error("❌ STEAM_API_KEY не установлен в .env.local");
    }

    const response = await fetch(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=${steamId}`
    );

    if (!response.ok) {
      throw new Error(`❌ Steam API вернул ${response.status}`);
    }

    const data = await response.json();
    const player = data?.response?.players?.[0];

    if (!player) {
      throw new Error("❌ Steam API не вернул player");
    }

    console.log("✅ Steam Profile:", player);

    const params = new URLSearchParams({
      personaname: player.personaname,
      avatar: player.avatarfull,
      steamid: player.steamid,
      profileurl: player.profileurl,
    });

    return NextResponse.redirect(`/steamProfile?${params.toString()}`);
  } catch (err: any) {
    console.error("❌ Ошибка в Steam callback:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
