import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Snow from "@/components/Snow";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Oferta from "@/components/oferta";
import I18nProvider from "@/app/providers/I18nProvider";

import localFont from "next/font/local";
import { UserProvider } from "@/context/UserContext";

const aimusFont = localFont({
  src: "./fonts/ethnocentric-rg.ttf",
  variable: "--font-aimus",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://aimus.uz"),
  title: {
    default: "AIMUS",
    template: "%s | AIMUS",
  },
  description: "Gaming community",
  icons: { icon: "/favicon.png" },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${aimusFont.variable} dark`}>
      <body className="antialiased bg-[#080D1A] text-white">
        <Snow />
        <I18nProvider>
          <UserProvider>
            <Header />
            {children}
            <Oferta />
            <Footer />
          </UserProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
