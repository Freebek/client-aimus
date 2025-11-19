"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SteamSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  useEffect(() => {
    const oldToken = localStorage.getItem("steam_token");

    if (token) {
      // ✅ Если токен пришёл → сохраняем новый
      localStorage.setItem("steam_token", token);
      router.replace("/steamProfile");
    } else if (oldToken) {
      // ✅ Если токена нет, но пользователь уже авторизован → идём на профиль
      router.replace("/steamProfile");
    } else {
      // ❌ Если вообще нет токена → ошибка
      router.replace("/");
    }
  }, [token, router]);

  return (
    <p className="text-center text-white mt-10">Авторизация через Steam....</p>
  );
}
