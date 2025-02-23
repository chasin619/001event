"use client";
import { useEffect } from "react";
import React from "react";
import gsap from "gsap";

function Cursor() {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to("#cursor", {
        css: {
          top: clientY + "px",
          left: clientX + "px",
        },
        duration: 0.8,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div id="cursor" className="cursor-style"></div>;
}

export default Cursor;
