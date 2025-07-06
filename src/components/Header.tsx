"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Steam from "../../public/assets/steam.svg";
import { Wallet } from "lucide-react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const languageChanger = (lng: string) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && menuRef.current.contains(e.target as Node)) return;
      setIsMobileMenuOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const languages = [
    { label: "UZ", code: "uz" },
    { label: "EN", code: "en" },
    { label: "RU", code: "ru" },
  ];

  const navLinkClass = (path: string) =>
    `flex items-center gap-1 py-2 pr-4 pl-3 border-b border-gray-100 lg:border-0 lg:p-0 transition-colors duration-200 
     ${pathname === path ? "text-white" : "text-gray-400"} 
     hover:text-primary dark:hover:text-white`;

  return (
    <header className="sticky z-50 top-0 w-full mt-5">
      <nav>
        <Container style="px-4 lg:px-6 py-4 rounded-[10px] bg-backgr flex flex-wrap items-center justify-between gap-4 relative">
          <div className="w-full flex items-center justify-between lg:hidden">
            <div className="flex-1"></div>
            <button
              className="text-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon fontSize="large" />
              ) : (
                <MenuIcon fontSize="large" />
              )}
            </button>
          </div>

          <div
            ref={menuRef}
            className={`transition-all duration-300 ease-in-out overflow-hidden lg:overflow-visible 
              ${
                isMobileMenuOpen
                  ? "max-h-[800px] opacity-100"
                  : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100"
              } 
              w-full lg:flex lg:items-center lg:w-full lg:gap-10 lg:justify-between`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center w-full lg:space-x-6">
              {/* Main navigation links */}
              <ul className="flex flex-col lg:flex-row lg:items-center w-full lg:w-auto lg:space-x-6">
                <li>
                  <Link href="/" className={navLinkClass("/")}>
                    🏠 {t("Main_Page")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/banscomms"
                    className={navLinkClass("/banscomms")}
                  >
                    🚫 {t("BansAndMute")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://skins.aimus.uz/"
                    target="_blank"
                    className={navLinkClass("/skins")}
                  >
                    🔫 {t("Skins")}
                  </Link>
                </li>
                <li>
                  <Link href="/rules" className={navLinkClass("/rules")}>
                    ⚖️ {t("Rules")}
                  </Link>
                </li>
              </ul>

              {/* Mobile: Language + Buttons */}
              <div className="flex flex-col gap-3 mt-4 lg:hidden">
                <select
                  onChange={(e) => languageChanger(e.target.value)}
                  value={i18n.language}
                  className="bg-gray-700 text-white text-sm rounded-md py-2 pl-3 pr-8 w-full border-none focus:outline-none"
                >
                  {languages.map(({ label, code }) => (
                    <option key={code} value={code}>
                      {label}
                    </option>
                  ))}
                </select>
                <button className="flex items-center justify-center gap-2 font-medium bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-300 px-5 py-2 rounded-xl transition-all duration-200">
                  <Wallet /> {t("Top_Up")}
                </button>
                <button className="flex items-center justify-center gap-2 font-medium bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 px-5 py-2 rounded-xl transition-all duration-200">
                  <Image src={Steam} alt="steam logo" width={20} height={20} />
                  {t("Sign_In_Steam")}
                </button>
              </div>

              {/* Desktop: Language + Buttons */}
              <div className="hidden lg:flex items-center gap-4 absolute right-2">
                <div className="relative">
                  <select
                    onChange={(e) => languageChanger(e.target.value)}
                    value={i18n.language}
                    className="bg-gray-700 text-white text-sm rounded-md py-2 pl-3 pr-8 w-[100px] border-none focus:outline-none"
                  >
                    {languages.map(({ label, code }) => (
                      <option key={code} value={code}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="flex items-center gap-2 font-medium bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-300 px-5 py-2 rounded-xl transition-all duration-200">
                  <Wallet /> {t("Top_Up")}
                </button>
                <button className="flex items-center gap-2 font-medium bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 px-5 py-2 rounded-xl transition-all duration-200">
                  <Image src={Steam} alt="steam logo" width={20} height={20} />
                  {t("Sign_In_Steam")}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* Sub-navigation bar */}
      <nav className="mt-2">
        <Container style="px-4 lg:px-6 py-4 rounded-[10px] bg-backgr flex flex-wrap items-center justify-between gap-4 relative">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" className="w-[100px] flex items-center">
                <Image
                  src="/assets/logo.svg"
                  className="mr-3 object-cover"
                  alt="AIMUS logo"
                  width={1000}
                  height={1000}
                />
              </Link>
              <div className="flex gap-3 items-center text-white">
                <p className="text-sm">{t("Socials")}</p>
                <div className="flex gap-4">
                  <Link href="https://t.me/aimus_chat" target="_blank">
                    <div className="cursor-pointer w-[25px] h-[25px]">
                      <Image
                        src="/assets/telegram.png"
                        width={25}
                        height={25}
                        alt="Telegram"
                      />
                    </div>
                  </Link>
                  <Link href="https://discord.gg/HSuuEJyg" target="_blank">
                    <div className="cursor-pointer w-[25px] h-[25px]">
                      <Image
                        src="/assets/discord.png"
                        width={25}
                        height={25}
                        alt="Discord"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex w-full lg:w-auto items-center justify-end">
              <div className="relative w-full max-w-[600px]">
                <input
                  type="text"
                  className="w-full pl-4 pr-14 py-2.5 text-sm bg-gray-800 rounded-md placeholder-gray-400 text-white"
                  placeholder={t("Search_Placeholder")}
                />
                <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
