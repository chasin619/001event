"use client";
import React from "react";
import Carousel from "./carousel";
import gsap from "gsap";

function Hero() {
  return (
    <div className=" relative">
      <Carousel />
      <div className="absolute z-40 left-0 top-0 flex flex-col justify-between items-center h-full pt-[22px] pb-[85px] w-[100px] border-r border-[hsla(0,_0%,_100%,_.07);]">
        <div className="absolute w-[4px] h-screen top-0 right-[-3px] mix-blend-exclusion">
          <div className="absolute w-[4px] h-[99px] top-0 bg-white right-0 rounded-full"></div>
        </div>
        <a className="text-light text-[15px] font-normal"
          onMouseEnter={() => gsap.to("#cursor", { scale: 2.6, duration: 0.2 })}
          onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.2 })}
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
