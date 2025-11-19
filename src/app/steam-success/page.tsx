import { Suspense } from "react";
import SteamSuccessClient from "./SteamSuccessClient";

export default function SteamSuccessPage() {
  return (
    <Suspense fallback={<p className="text-center text-white mt-10">Loading...</p>}>
      <SteamSuccessClient />
    </Suspense>
  );
}
