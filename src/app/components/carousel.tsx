"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const images = [
  {
    src: "/images/hero-bg-one.png",
    alt: "Slide 1",
  },
  {
    src: "/images/hero-bg-two.png",
    alt: "Slide 2",
  },
  {
    src: "/images/hero-bg-three.png",
    alt: "Slide 3",
  },
  {
    src: "/images/hero-bg-four.jpg",
    alt: "Slide 4",
  },
  {
    src: "/images/hero-bg-five.png",
    alt: "Slide 5",
  },
  {
    src: "/images/hero-bg-six.png",
    alt: "Slide 6",
  },
  {
    src: "/images/hero-bg-seven.png",
    alt: "Slide 7",
  },
];

const Carousel = () => {
  return (
    <Swiper
      grabCursor
      modules={[EffectFade]}
      effect="fade"
      className="hero-carousel"
      speed={1000}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
    >
      {images.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
