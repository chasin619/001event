"use client";
import React from "react";
import Innovative from "@/components/icons/innovative";
import TestimonialSlider from "./feed-back";

const cards = [
  // card 1
  {
    icon: Innovative,
    title: "Innovative Concept",
    para: "I bring innovative concepts to life, transforming your ideas into unique digital solutions that engage users and drive meaningful results for your business.",
  },
  // card 2
  {
    icon: Innovative,
    title: "Exceptional Creative Thinker",
    para: "Driven by high creative minds, I craft unique digital solutions that push boundaries and deliver exceptional experiences for your brand.",
  },
  // card 3
  {
    icon: Innovative,
    title: "Business Planning",
    para: "Strategizing innovative pathways for sustainable business growth and success.",
  },
  // card 4
  {
    icon: Innovative,
    title: "Web Development",
    para: "Building responsive, scalable, and user-centric websites to drive digital success.",
  },
  // card 5
  {
    icon: Innovative,
    title: "Program management",
    para: "Streamlining complex initiatives with strategic oversight and seamless execution for achieving impactful results.",
  },
  // card 6
  {
    icon: Innovative,
    title: "Mobile App Design",
    para: "Crafting intuitive and visually stunning mobile app experiences tailored for user engagement and functionality",
  },
];
function services() {
  return (
    <div id="MyServices" className="bg-black">
      <div className="max-w-[1200px] mx-auto p-[50px] md:p-x-4 ">
        <div className="text-center">
          <span className="tracking-wide text-gray-300 bg-grey-900 p-2  ">My Services </span>
        </div>
        <div className=" md:w-[80%] mx-auto ">
          <p className="text-center text-[17px] font-bold md:text-[40px] md:my-3 p-3 leading-16 text-white tracking-[2px]">
            We create stunning <br /> digital experiences tailored to yourneeds.
          </p>
        </div>
        <div className="card-container grid  sm:grid-cols-12 justify-center  md:gap-x-[80px]  my-6 mt-[50px]">
          {cards.map((item, index) => (
            <div
              key={index}
              className={`text-light md:col-span-4 sm:col-span-6 w-full ${index == 1 || index == 4 ? "pt-16" : ""} ${index == 4 ? "pt-0" : ""}` }
            >
              <div className="p-4  w-full relative">
                <span className="absolute top-[-25px] left-4 text-white">0{++index}</span>
                <div className="__line__ bg-white top-0"></div>
                <div className="card-line-t top-0 bg-grey-900"></div>
                <div className="card_line right-0 bg-grey-900"></div>
                <div className="card-line-t bottom-0 bg-grey-900"></div>
                <div className="card_line left-0 bg-grey-900"></div>
                <div className=" bg-grey-900  p-4 rounded-lg w-[100%] relative">
                  <div className="text-lg w-[70px] ">
                    <item.icon />
                  </div>
                  <div className="flex items-center mb-4"></div>
                  <h2 className="text-[20px] font-bold mb-2 font-Poppins text-white tracking-[1px]">{item.title}</h2>
                  <p className="text-gray-300 text-[16px] tracking-[0.5px]">{item.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-grey-900 py-8 md:pb-[60px] md:h-[50vh] h-min w-full md:mt-[120px] px-[30px] relative">
          <div className="grid w-full md:grid-cols-12 justify-center items-center mx-auto relative md:top-[-20px]">
            <div className="md:col-span-12 relative md:top-[80px] ">
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services;
