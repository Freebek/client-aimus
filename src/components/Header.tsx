"use client";
import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import RuleIcon from "@mui/icons-material/Rule";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClass = (path: string) =>
    `flex items-center gap-1 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ${
      pathname === path ? "dark:text-white" : "dark:text-gray-400"
    } lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`;

  return (
    <header className="fixed z-[10] top-0 w-full mt-[20px]">
      <nav>
        <Container style="px-4 lg:px-6 py-4 rounded-[10px] bg-backgr flex flex-wrap items-center justify-between gap-4 relative">
          <div className="flex items-center justify-between w-full lg:w-auto gap-4">
            <Link href="/" className="w-[100px] flex items-center">
              <Image
                src={"/assets/logo.svg"}
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
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } w-full flex-col lg:flex lg:flex-row lg:items-center lg:w-auto lg:gap-[40px]`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 w-full lg:w-auto">
              <li>
                <Link href="/" className={navLinkClass("/")}>
                  <svg
                    className="w-[18px] h-[18px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                    />
                  </svg>
                  Bosh sahifa
                </Link>
              </li>

              {/* <li>
                <Link
                  href="/stats"
                  className={`flex items-center gap-1 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ${
                    pathname == "/stats"
                      ? "dark:text-white"
                      : "dark:text-gray-400"
                  }  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  <svg
                    className="w-[18px] h-[18px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"
                    />
                  </svg>
                  Статистика
                </Link>
              </li> */}

              <li>
                <Link href="/banscomms" className={navLinkClass("/banscomms")}>
                  <svg
                    className="w-[18px] h-[18px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                    />
                  </svg>
                  Banlar va mutlar
                </Link>
              </li>

              <li>
                <Link href="/rules" className={navLinkClass("/rules")}>
                  <RuleIcon sx={{ fontSize: "20px" }} />
                  Qoidalar
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex max-w-[450px] w-full lg:w-auto items-center justify-end">
            <div className="relative w-full">
              <SearchIcon className="absolute right-2.5 top-2.5 text-gray-400" />
              <input
                type="text"
                className="w-full pl-4 pr-8 py-3 ps-10 text-sm bg-gray-700 outline-none rounded-[5px] placeholder-gray-400 text-white"
                placeholder="O‘yinchi niki / havola / STEAMID"
                required
              />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
