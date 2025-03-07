"use client"
import React, { useEffect } from "react";
import TestimonialSection from "./sections/testimonalsSection";

const AboutIndex = () => {
  // Apply dark theme to the body
  useEffect(() => {
    document.body.classList.add('bg-black');
    return () => {
      document.body.classList.remove('bg-black');
    };
  }, []);

  return (
    <div className=" bg-black text-white">
      {/* Hero Section (placeholder) */}
      <div className="max-w-[1200px] m-auto w-[90%] ">

     
      <TestimonialSection />
      </div>
      
      {/* Testimonials */}
    </div>
  );
};

export default AboutIndex;