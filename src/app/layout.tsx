import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import I18nProvider from "@/app/providers/I18nProvider";

// ✅ Подключаем наш контекст пользователя
import { UserProvider } from "@/context/UserContext";

export const metadata: Metadata = {
  title: "AIMUS",
  description: "Gaming community",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#080D1A] text-white">
        <I18nProvider>
          {/* ✅ Теперь все компоненты будут видеть user */}
          <UserProvider>
            <Header />
            {children}
            <Footer />
          </UserProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
