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
import UserMenu from "./UserMenu";
import { useRouter } from "next/navigation";

import { useUser } from "@/context/UserContext";

const Header = () => {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();

  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const { user: steamUser, logout } = useUser();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

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

  const handleSteamLogin = () => {
    setLoginLoading(true);
    window.location.href = "https://api.aimus.uz/v1/auth/steam";
  };

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
        <Container style="px-4 lg:px-6 py-4 rounded-[10px] bg-backgr flex flex-wrap items-center justify-between lg:gap-4 relative">
          {/* === Мобильное меню === */}
          <div className="w-full flex items-center justify-between lg:hidden">
            {/* === Sub-navigation bar === */}
            <nav>
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
                  {/* <div className="flex items-center text-white">
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
                  </div> */}
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
            </nav>
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

          {/* === Навигация === */}
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
              {/* Основные ссылки */}
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

              {/* === Mobile: язык + кнопка входа === */}
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

                {/* ✅ Если залогинен → показываем инфо */}
                {steamUser ? (
                  <div>
                    <Link href={"/steamProfile"}>
                      <div className="flex items-center justify-between bg-gray-800 p-2 rounded-lg">
                        <div className="flex gap-3">
                          <img
                            src={steamUser?.steam_avatar}
                            alt="avatar"
                            className="w-10 h-10 rounded-full border border-gray-500"
                          />
                          <div>
                            <p className="text-white">
                              {steamUser?.steam_name}
                            </p>
                            <p className="text-gray-400 text-sm">
                              {t("Steam_profile.Header_Dropdown.Balance")}: 0 ₽
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={handleLogout}
                          className="text-red-400 hover:text-red-300"
                        >
                          🔴 {t("Steam_profile.Header_Dropdown.Logout")}
                        </button>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <button
                    disabled={loginLoading}
                    onClick={handleSteamLogin}
                    className={`flex items-center gap-2 font-medium px-5 py-2 rounded-xl transition-all duration-200 ${
                      loginLoading
                        ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                        : "bg-blue-500/10 hover:bg-blue-500/20 text-blue-300"
                    }`}
                  >
                    {loginLoading ? (
                      <span className="animate-spin border-2 border-blue-300 border-t-transparent rounded-full w-4 h-4"></span>
                    ) : (
                      <Image
                        src={Steam}
                        alt="steam logo"
                        width={20}
                        height={20}
                      />
                    )}
                    {loginLoading ? "Redirecting..." : t("Sign_In_Steam")}
                  </button>
                )}
              </div>

              {/* === Desktop: язык + меню пользователя === */}
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

                {/* ✅ Если залогинен → аватар с модалкой */}
                {steamUser ? (
                  <div className="relative">
                    <button
                      onClick={() => setUserMenuOpen((prev) => !prev)}
                      className="flex items-center"
                    >
                      <img
                        src={steamUser.steam_avatar}
                        alt="user avatar"
                        className="w-10 h-10 rounded-full border border-gray-500"
                      />
                    </button>

                    <UserMenu
                      isOpen={userMenuOpen}
                      onClose={() => setUserMenuOpen(false)}
                      user={{
                        avatar: steamUser.steam_avatar,
                        name: steamUser.steam_name,
                        balance: 0,
                      }}
                    />
                  </div>
                ) : (
                  <button
                    disabled={loginLoading}
                    onClick={handleSteamLogin}
                    className={`flex items-center gap-2 font-medium px-5 py-2 rounded-xl transition-all duration-200 ${
                      loginLoading
                        ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                        : "bg-blue-500/10 hover:bg-blue-500/20 text-blue-300"
                    }`}
                  >
                    {loginLoading ? (
                      <span className="animate-spin border-2 border-blue-300 border-t-transparent rounded-full w-4 h-4"></span>
                    ) : (
                      <Image
                        src={Steam}
                        alt="steam logo"
                        width={20}
                        height={20}
                      />
                    )}
                    {loginLoading ? "Redirecting..." : t("Sign_In_Steam")}
                  </button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* === Sub-navigation bar === */}
      <nav className="mt-2 max-lg:hidden">
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
