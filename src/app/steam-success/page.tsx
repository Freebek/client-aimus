import { Suspense } from "react";
import SteamSuccessClient from "./SteamSuccessClient";

export default function SteamSuccessPage() {
  return (
    <Suspense
      fallback={
        <p className="text-center text-white mt-10">
          Авторизация через Steam....
        </p>
      }
    >
      <SteamSuccessClient />
    </Suspense>
  );
}
