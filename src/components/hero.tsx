import React from "react";
import Carousel from "./carousel";

function Hero() {
  return (
    <div className=" relative">
      <Carousel />
      <div className="absolute left-0 top-0 flex flex-col justify-between items-center h-full pt-[22px] pb-[85px] w-[100px]">
        <a href="/">SARTHAK</a>
        <p>Menu</p>
        <p>Share</p>
      </div>
      <div className="absolute right-0 top-0 flex flex-col justify-between h-1/2">
        <p>Contact</p>
        <p>Slider</p>
      </div>
    </div>
  );
}

export default Hero;
