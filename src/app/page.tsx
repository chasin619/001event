"use client"
import React, { useEffect } from "react";
import Hero from "@/pages/landing/hero";
import HowWeAre from "@/pages/landing/how-we-are";
import Services from "@/pages/landing/services";
import Gallery from "@/pages/landing/gallery";
import gsap from "gsap";

function Home() {
  useEffect(() => {
    gsap.to("html", {
      scrollBehavior: "smooth",
      duration: 5,
    });
  }, []);
  return (
    <div>
      <Hero />
      <HowWeAre />
      <Services />
      <Gallery />
    </div>
  );
}

export default Home;
