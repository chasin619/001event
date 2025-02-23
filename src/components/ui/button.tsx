"use client";
import React from "react";

const Button = () => {
  return (
    <div className="relative group w-fit flex overflow-hidden">
      <div className="absolute w-5 h-44 bg-grey-900 top-[-60px]  rotate-[-20deg] right-[80px] group-hover:w-1 group-hover:rotate-[-70deg] transition-all duration-500 pointer-events-none"></div>
      <a href="" className="border py-4 px-7 rounded-full">
        <span className="text-[13px] tracking-[3px] uppercase font-normal relative z-10">
          Contact Me
        </span>
      </a>
    </div>
  );
};

export default Button;
