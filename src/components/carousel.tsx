"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

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
      <SwiperSlide>
        <img
          src="/images/hero-bg-one.png"
          alt="Slide 1"
          className="w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/hero-bg-two.png"
          alt="Slide 2"
          className="w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/hero-bg-three.png"
          alt="Slide 3"
          className="w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/hero-bg-four.jpg"
          alt="Slide 3"
          className="w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/hero-bg-five.png"
          alt="Slide 3"
          className="w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/hero-bg-six.png"
          alt="Slide 3"
          className="w-full h-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/images/hero-bg-seven.png"
          alt="Slide 3"
          className="w-full h-auto"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
