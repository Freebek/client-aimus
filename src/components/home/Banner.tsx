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
            loop
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            modules={[Autoplay]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            autoHeight
            className="rounded-[25px]"
          >
            <SwiperSlide>
              <div className="relative w-full overflow-hidden rounded-[25px]  aspect-[16/9] md:aspect-[21/9] xl:aspect-[32/9]">
                <Image
                  src="/assets/Profile banner - 1.png"
                  alt="Banner Image 1"
                  fill
                  // НЕ обрезаем — показываем всю картинку
                  className="object-contain"
                  // Подсказка браузеру для выбора правильного источника
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1200px"
                  priority
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full overflow-hidden rounded-[25px]  aspect-[16/9] md:aspect-[21/9] xl:aspect-[32/9]">
                <Image
                  src="/assets/Profile banner - 3.png"
                  alt="Banner Image 2"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1200px"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full overflow-hidden rounded-[25px]  aspect-[16/9] md:aspect-[21/9] xl:aspect-[32/9]">
                <Image
                  src="/assets/Profile banner - 6.png"
                  alt="Banner Image 3"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1200px"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full overflow-hidden rounded-[25px]  aspect-[16/9] md:aspect-[21/9] xl:aspect-[32/9]">
                <Image
                  src="/assets/Profile banner - 9.png"
                  alt="Banner Image 4"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1200px"
                />
              </div>
            </SwiperSlide>

            {/* Прогресс-индикатор */}
            <div
              className="justify-center bg-[#080d1a]/80 absolute top-4 right-4 flex items-center gap-2 z-10 rounded-full p-1"
              slot="container-end"
            >
              <svg viewBox="0 0 48 48" className="w-10 h-10 -rotate-90">
                {/* Фоновая окружность (тонкая) */}
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="4"
                  fill="none"
                />
                {/* Активный прогресс */}
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
