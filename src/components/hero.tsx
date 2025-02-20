"use client"
import React from "react";
import Carousel from "./carousel";
import gsap from "gsap";

function Hero() {
  return (
    <div className=" relative">
      <Carousel />
      <div className="absolute z-40 left-0 top-0 flex flex-col justify-between items-center h-full pt-[22px] pb-[85px] w-[100px]">
        <a
          onMouseEnter={() => gsap.to("#cursor", { scale: 2.6, duration: 0.2 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 1.2 })}
          href="/"
        >
          SARTHAK
        </a>
        <p>Menu</p>
        <p>Share</p>
      </div>
      <div className="absolute z-40 right-0 top-0 flex flex-col justify-between h-1/2">
        <p>Contact</p>
        <p>Slider</p>
      </div>
    </div>
  );
}

export default Hero;
