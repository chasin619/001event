"use client";
import React, { useEffect } from "react";
import TestimonialSection from "./sections/testimonalsSection";

const AboutIndex = () => {
  useEffect(() => {
    const className = "bg-black";
    if (!document.body.classList.contains(className)) {
      document.body.classList.add(className);
    }
    return () => {
      document.body.classList.remove(className);
    };
  }, []);

  return (
    <div className="text-white">
      <div className="max-w-[1200px] m-auto w-[90%]">
        <TestimonialSection />
      </div>
    </div>
  );
};

export default AboutIndex;
