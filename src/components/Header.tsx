"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import RuleIcon from "@mui/icons-material/Rule";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Pistol from "../../public/assets/pistol-gun.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const languageChanger = (lng: string) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const languages = [
    { label: "UZ", code: "uz" },
    { label: "ENG", code: "en" },
    { label: "RU", code: "ru" },
  ];

  const navLinkClass = (path: string) =>
    `flex items-center gap-1 py-2 pr-4 pl-3 border-b border-gray-100 lg:border-0 lg:p-0 transition-colors duration-200 
     ${pathname === path ? "text-white" : "text-gray-400"} 
     hover:text-primary dark:hover:text-white`;

  return (
    <header className="fixed z-50 top-0 w-full mt-5">
      <nav>
        <Container style="px-4 lg:px-6 py-4 rounded-[10px] bg-backgr flex flex-wrap items-center justify-between gap-4 relative">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link href="/" className="w-[100px] flex items-center">
              <Image
                src="/assets/logo.svg"
                className="mr-3 object-cover"
                alt="AIMUS logo"
                width={1000}
                height={1000}
              />
            </Link>
            <button
              className="lg:hidden text-white"
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
              w-full lg:flex lg:flex-row lg:items-center lg:w-auto lg:gap-10`}
          >
            <ul className="flex flex-col lg:flex-row w-full lg:w-auto lg:space-x-6">
              <li>
                <Link href="/" className={navLinkClass("/")}>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                    />
                  </svg>
                  {t("Main_Page")}
                </Link>
              </li>
              <li>
                <Link href="/banscomms" className={navLinkClass("/banscomms")}>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                    />
                  </svg>
                  {t("BansAndMute")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://skins.aimus.uz/"
                  target="_blank"
                  className={navLinkClass("/skins")}
                >
                  <Image src={Pistol} alt="knife logo" width={20} height={20} />
                  {t("Skins")}
                </Link>
              </li>
              <li>
                <Link href="/rules" className={navLinkClass("/rules")}>
                  <RuleIcon sx={{ fontSize: "20px" }} />
                  {t("Rules")}
                </Link>
              </li>
            </ul>

            <div className="relative mt-4 px-3 lg:hidden">
              <select
                onChange={(e) => languageChanger(e.target.value)}
                value={i18n.language}
                className="bg-gray-700 text-white text-sm rounded-md py-2 pl-3 pr-8 appearance-none w-full dark:bg-gray-800 border-none focus:outline-none cursor-pointer"
              >
                {languages.map(({ label, code }) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
                ▼
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <select
              onChange={(e) => languageChanger(e.target.value)}
              value={i18n.language}
              className="bg-gray-700 text-white text-sm rounded-md py-2 pl-3 pr-8 appearance-none w-[100px] dark:bg-gray-800 border-none focus:outline-none cursor-pointer"
            >
              {languages.map(({ label, code }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
              ▼
            </div>
          </div>

          <div className="hidden lg:flex max-w-[450px] w-full lg:w-auto items-center justify-end">
            <div className="relative w-full">
              <SearchIcon className="absolute right-2.5 top-2.5 text-gray-400" />
              <input
                type="text"
                className="w-full pl-4 pr-8 py-3 ps-10 text-sm bg-gray-700 outline-none rounded-[5px] placeholder-gray-400 text-white"
                placeholder={t("Search_Placeholder")}
              />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
