"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useUser } from "@/context/UserContext";
import { usePathname } from "next/navigation";

export default function Oferta() {
  const pathname = usePathname();
  const isRulesPage = pathname === "/rules";

  const { user } = useUser();
  const { t } = useTranslation();

  const [token, setToken] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (isRulesPage) return;
    if (user && !user.oferta_read) setOpen(true);
  }, [user, isRulesPage]);

  const shouldShow = useMemo(() => {
    if (isRulesPage) return false;
    return !!user && !user.oferta_read && open;
  }, [user, open, isRulesPage]);

  useEffect(() => {
    setToken(localStorage.getItem("steam_token"));
  }, []);

  useEffect(() => {
    if (!shouldShow) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [shouldShow]);

  async function confirmOferta() {
    if (pending) return;
    setPending(true);
    setErr(null);

    try {
      const res = await fetch("/v1/oferta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ oferta_read: true }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed: ${res.status}`);
      }

      setOpen(false);
    } catch (e: any) {
      setErr(e?.message || "Failed to confirm oferta");
    } finally {
      setPending(false);
    }
  }

  if (!shouldShow) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-sm rounded-2xl bg-backgr p-6 text-center shadow-xl">
        <h2 className="text-lg font-semibold">{t("modal.title")}</h2>

        <p className="mt-3 text-sm text-slate-300">{t("modal.description")}</p>

        {err && <p className="mt-3 text-sm text-red-400">{err}</p>}

        <Link
          href="/rules"
          target="_blank"
          className="mt-5 inline-block text-sm text-blue-400 hover:text-blue-300"
        >
          {t("modal.rulesLink") || "Open rules"}
        </Link>

        <button
          onClick={confirmOferta}
          disabled={pending}
          className={[
            "mt-4 w-full rounded-xl px-4 py-2 font-medium transition",
            pending
              ? "bg-blue-600/60 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700",
          ].join(" ")}
        >
          {pending ? t("modal.loading") || "Saving..." : t("modal.button")}
        </button>
      </div>
    </div>
  );
}
