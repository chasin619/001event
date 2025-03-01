"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

// Image sources array
const images = [
  {
    path: "/contact",
    src: "/images/hero-bg-one.png",
    title: "Sarthak Kaushik",
    para: "building the future of the web, today.",
    btn: true,
  },
  {
    path: "/",
    label: "BLOG",
    src: "/images/hero-bg-three.png",
    title: "Hiptoro",
    para: "hiptoro begin its journey as a hub for viral content.",
    btn: false,
  },
  {
    path: "/",
    label: "SAAS",
    src: "/images/hero-bg-two.png",
    title: "Vimerse",
    para: "Brand dedicated to solving problems faced by everyday creators and small businesses",
    btn: false,
  },
  {
    path: "/",
    label: "Job-Boarding",
    src: "/images/hero-bg-seven.png",
    title: "Canada Job Back",
    para: "canada job bank work is to empower the  youth by  providing them with employment",
    btn: false,
  },
  {
    path: "/",
    label: "real-state",
    src: "/images/hero-bg-six.png",
    title: "Majordomo",
    para: "help you take quick action by enhancing your home inspection.",
    btn: false,
  },
  {
    path: "/",
    label: "business",
    src: "/images/hero-bg-five.png",
    title: "Gymnastics Queensland",
    para: "reputed brand in queensland for gymnastics athletes",
    btn: false,
  },
  {
    path: "/",
    label: "e-commerce",
    src: "/images/hero-bg-four.jpg",
    title: "Priceay",
    para: "online prefume store",
    btn: false,
  },
];

const Carousel = () => {
  return (
    <Swiper
      modules={[EffectFade]}
      className="w-screen h-screen"
      speed={1000}
      grabCursor={true}
      slidesPerView={1}
      effect="fade"
      scrollbar={{ draggable: true }}
    >
      {images.map((item, index) => (
        <SwiperSlide key={index} className="">
          <Image
            src={item?.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="flex justify-center items-center w-screen h-screen absolute top-0 z-[1000] flex-col">
            <p className="text-white uppercase text-[13px] font-medium tracking-[2px] mb-2">
              {item?.label}
            </p>
            <Link
              href={item.path}
              className="font-Poppins text-[55px] tracking-[2px] font-semibold"
              onMouseEnter={() =>
                gsap.to("#cursor", { scale: 2.6, duration: 0.2 })
              }
              onMouseLeave={() =>
                gsap.to("#cursor", { scale: 1, duration: 0.2 })
              }
            >
              {item?.title}
            </Link>
            <p className="uppercase tracking-[1px] text-grey-500 font-normal text-base pt-[20px] mt-[20px] px-16 text-center border-t-[1.5px] border-custom">
              {item?.para}
            </p>
            <div className="relative w-fit mt-5 flex btn">
              <Link href={item.path} className={`border-x-2 py-4 px-7 ${item.btn ? "block" : "hidden"} `}>
                <div className="top-border"></div>
                <div className="bottom-border"></div>
                <span className="text-[13px] tracking-[3px] uppercase font-medium relative z-10">
                  Contact Me
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-black w-screen h-screen absolute top-0 opacity-60"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
