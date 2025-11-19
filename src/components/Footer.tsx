"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="w-full">
      <Container style="bg-backgr rounded-[25px] px-6 py-10 text-white mb-[20px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <Link href="/" className="w-[150px] flex items-center">
            <Image
              src="/assets/logo.svg"
              priority
              className="mr-3 object-cover"
              alt="AIMUS logo"
              width={1000}
              height={1000}
            />
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
            <Link
              className="flex items-center gap-1 text-white hover:opacity-100 opacity-70"
              href="/rules"
            >
              {t("Server_Rules")}
              <svg
                className="w-3 h-3 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </Link>

            <Link
              className="flex items-center gap-1 text-white hover:opacity-100 opacity-70"
              href="#"
            >
              {t("Become_Admin")}
              <svg
                className="w-3 h-3 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <p className="text-sm sm:text-base">{t("Socials")}</p>
          <div className="flex gap-4">
            <Link href="https://t.me/aimus_chat" target="_blank">
              <div className="cursor-pointer w-[25px] h-[25px]">
                <Image
                  src="/assets/telegram.png"
                  width={1000}
                  height={1000}
                  alt="Telegram"
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
            <Link href="https://discord.gg/HSuuEJyg" target="_blank">
              <div className="cursor-pointer w-[25px] h-[25px]">
                <Image
                  src="/assets/discord.png"
                  width={1000}
                  height={1000}
                  alt="Discord"
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
