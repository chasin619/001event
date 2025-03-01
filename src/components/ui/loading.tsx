"use client";

import { useState, useEffect } from "react";
import { gsap, CSSPlugin} from "gsap";
gsap.registerPlugin(CSSPlugin);

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);

    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= 100) {
          clearInterval(count);
          return 100;
        }
        return prevCounter + 1;
      });
    }, 25);

    return () => {
      clearTimeout(timeout);
      clearInterval(count);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-[1000]">
      <div className="animate-spin flex justify-center items-center rounded-full bg-transparent h-[18vw] w-[18vw] border-t-4 border-t-gray-800 border border-gray-500"></div>
      <p className="text-5xl absolute top-[47vh] left-[47vw]">{counter}</p>
      <p className="text-[22px] absolute left-[100px] bottom-[80px] uppercase">
        Loading ...
      </p>
    </div>
  );
}
