"use client";

import "@/app/i18n"; // 💥 просто импортирует, ничего не рендерит

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
