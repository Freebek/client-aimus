import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full">
      <Container style="bg-backgr rounded-[25px] p-[40px] text-white mb-[20px]">
        {/* <Image className="w-[130px]" src={} alt="logo" width={1000} height={1000}/> */}
        <h1 className="text-[30px] font-bold mb-[20px]">AIMUS</h1>
        <div className="w-full flex justify-between items-center">
          <p>Наши социальные сети</p>
          <div className="flex gap-12">
            <Link
              className="flex items-center gap-1 text-white hover:opacity-100 opacity-70"
              href={"/rules"}
            >
              Правила сервера{" "}
              <svg
                className="w-3 h-3 text-gray-800 dark:text-white"
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
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              className="flex items-center gap-1 text-white hover:opacity-100 opacity-70"
              href={"#"}
            >
              Стать администратором
              <svg
                className="w-3 h-3 text-gray-800 dark:text-white"
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
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="mt-[5px] flex gap-4 items-center justify-start">
          <div className="cursor-pointer w-[25px] h-[25px]">
            <Image
              src="/assets/telegram.png"
              width={1000}
              height={1000}
              alt="Banner Image 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="cursor-pointer w-[25px] h-[25px]">
            <Image
              src="/assets/discord.png"
              width={1000}
              height={1000}
              alt="Banner Image 1"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
