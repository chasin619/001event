"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  { amount: "50", name: "Clients" },
  { amount: "150+", name: "Satisfied Customers" },
];

const HowWeAre = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const textEl = textRef.current;
    const imageEl = imageRef.current;

    // Pin the image container while scrolling through text

    // Animate text on scroll

    // Move image inside container as user scrolls
    gsap.fromTo(
      imageEl,
      { y: "-30%" }, // Starts from the top
      {
        y: "30%", // Moves down as user scrolls
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="bg-black text-white py-20 relative">
      <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col md:flex-row">
        
        {/* Left Section - Image (Moves Inside Container) */}
        <div ref={imageContainerRef} className="md:w-1/2 md:h-screen sticky top-0 flex items-center justify-center">
          <div className="relative w-full max-w-md overflow-hidden h-[400px] md:h-[500px] rounded-lg">
            <div ref={imageRef} className="absolute inset-0">
              <Image
                className="w-full h-full object-cover"
                src="/images/profile.jpg"
                alt="Sarthak Kaushik"
                width={400}
                height={500}
              />
            </div>
            <div className="absolute left-5 bottom-5 bg-black bg-opacity-50 p-3 rounded-lg">
              <p className="text-white text-4xl font-bold">5+</p>
              <p className="text-white text-sm font-semibold">Years of Digital Experience</p>
            </div>
          </div>
        </div>

        {/* Right Section - Moving Text */}
        <div ref={textRef} className="md:w-1/2 space-y-12 py-10 md:py-20 pl-8">
          <h2 className="text-3xl md:text-4xl font-bold uppercase">Hi, I am <span className="text-teal-400">Sarthak Kaushik</span></h2>
          <p className="text-lg font-bold">Building creative and functional websites, one line of code at a time!</p>
          <p className="text-gray-400 text-[14px] leading-6">
            Started in 2020, I embarked on my journey as a passionate web developer, 
            crafting dynamic and engaging digital experiences for modern web solutions.
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 gap-6">
            {data.map((item, index) => (
              <div key={index} className="border border-gray-700 p-4 flex items-center rounded-lg">
                <span className="text-4xl font-bold pr-2">{item.amount}</span>
                <span className="tracking-wide text-lg">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeAre;
