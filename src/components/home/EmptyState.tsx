"use client";

import { useTranslation } from "react-i18next";

export default function EmptyState() {
  const { t } = useTranslation();
  return (
    <div className="w-full text-center py-20">
      <p className="text-lg font-semibold mb-3">{t("ServerBugInfo.text")}</p>
    </div>
  );
}
