"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SteamSuccessClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  useEffect(() => {
    const oldToken = localStorage.getItem("steam_token");

    if (token) {
      localStorage.setItem("steam_token", token);
      router.replace("/steamProfile");
    } else if (oldToken) {
      router.replace("/steamProfile");
    } else {
      router.replace("/");
    }
  }, [token, router]);

  return (
    <p className="text-center text-white mt-10">Авторизация через Steam....</p>
  );
}
