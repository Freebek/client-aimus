"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Container from "../Container";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";

const Banner = () => {
  const circleRef = useRef<SVGCircleElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (_: any, time: number, progress: number) => {
    const circumference = 2 * Math.PI * 20; // 2πr where r = 20
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = `${circumference * progress}`;
    }
    if (textRef.current) {
      textRef.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className="w-full py-4">
      <Container>
        <div className="relative">
          <Swiper
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="rounded-[25px]"
          >
            <SwiperSlide>
              <div className="h-[350px] rounded-[25px] w-full overflow-hidden">
                <Image
                  src="/assets/banner2.png"
                  width={1000}
                  height={1000}
                  alt="Banner Image 1"
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[350px] rounded-[25px] w-full overflow-hidden">
                <Image
                  src="/assets/banner.png"
                  width={1000}
                  height={1000}
                  alt="Banner Image 2"
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>

            {/* Progress Circle */}
            <div
              className="justify-center bg-[#080d1a] absolute top-4 right-4 flex items-center gap-2 z-10 bg-opacity-80 rounded-full p-1"
              slot="container-end"
            >
              <svg
                viewBox="0 0 48 48"
                className="w-10 h-10 transform -rotate-90"
              >
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#"
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  ref={circleRef}
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#00ffcc"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  className="transition-all duration-200 ease-linear"
                />
              </svg>
              <span
                ref={textRef}
                className="mx-auto absolute text-sm font-medium text-white"
              />
            </div>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
