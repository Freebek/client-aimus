import { NextResponse } from "next/server";

const STEAM_OPENID_URL = "https://steamcommunity.com/openid/login";

export async function GET() {
  const returnUrl = process.env.STEAM_RETURN_URL!;

  const params = new URLSearchParams({
    "openid.ns": "http://specs.openid.net/auth/2.0",
    "openid.mode": "checkid_setup",
    "openid.return_to": returnUrl,
    "openid.realm": process.env.NEXT_PUBLIC_SITE_URL!,
    "openid.identity": "http://specs.openid.net/auth/2.0/identifier_select",
    "openid.claimed_id": "http://specs.openid.net/auth/2.0/identifier_select",
  });

  return NextResponse.redirect(`${STEAM_OPENID_URL}?${params.toString()}`);
}
