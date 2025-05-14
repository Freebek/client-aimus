"use client";
import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import RuleIcon from "@mui/icons-material/Rule";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed z-[10] top-0 w-full mt-[20px]">
      <nav className=" ">
        <Container style="px-4 lg:px-6 py-4 rounded-[10px] bg-backgr flex flex-wrap justify-between items-center">
          <div id="mobile-menu-2" className="hidden lg:flex gap-[80px]">
            <Link href="/" className="flex items-center">
              <Image
              src={"/assets/logo.png"}
              className="mr-3 h-8 w-10 object-cover sm:h-9"
              alt="AIMUS logo"
              width={1000}
              height={1000}
            />
              <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
                AIMUS
              </span>
            </Link>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/"
                  className={`flex items-center gap-1 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ${
                    pathname == "/" ? "dark:text-white" : "dark:text-gray-400"
                  } lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                  aria-current="page"
                >
                  <svg
                    className="w-[18px] h-[18px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                  Главная
                </Link>
              </li>
              <li>
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
                    width="24"
                    height="24"
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
              </li>
              <li>
                <Link
                  href="/banscomms"
                  className={`flex items-center gap-1 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ${
                    pathname == "/banscomms"
                      ? "dark:text-white"
                      : "dark:text-gray-400"
                  }  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  <svg
                    className="w-[18px] h-[18px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                  Баны и муты
                </Link>
              </li>
              <li>
                <Link
                  href="/rules"
                  className={`flex items-center gap-1 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ${
                    pathname == "/banscomms"
                      ? "dark:text-white"
                      : "dark:text-gray-400"
                  }  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
                >
                  <RuleIcon />
                  Правила
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-2/5 flex gap-[20px] items-center justify-end">
            <div className="relative w-full max-w-[450px]">
              <SearchIcon className="absolute right-2.5 top-2.5 text-gray-400" />
              <input
                type="text"
                id="default-search"
                className="w-full pl-4 pr-8 py-3 ps-10 text-sm bg-gray-700 outline-none rounded-[5px] placeholder-gray-400 text-white"
                placeholder="Ник игрока / ссылка / STEAMID"
                required
              />
            </div>
            {/* <a
              href="#"
              className="text-white hover:text-black hover:bg-primary border border-primary focus:ring-4 font-medium rounded-[5px] text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none focus:ring-gray-800"
            >
              Войти
            </a>
            <a
              href="#"
              className="text-black bg-primary hover:bg-secondary focus:ring-4 focus:ring-primary-300 font-medium rounded-[5px] text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Регистрация
            </a> */}
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
