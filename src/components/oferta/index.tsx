"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Oferta() {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function Modal({ onConfirm }: { onConfirm: () => void }) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
        <div className="w-full max-w-sm rounded-2xl bg-backgr p-6 text-center shadow-xl">
          <h2 className="text-lg font-semibold">{t("modal.title")}</h2>

          <p className="mt-3 text-sm text-slate-300">
            {t("modal.description")}
          </p>

          <Link href={"/rules"} target="_blank">
            <button
              onClick={onConfirm}
              className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition"
            >
              {t("modal.button")}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return <>{open && <Modal onConfirm={() => setOpen(false)} />}</>;
}
