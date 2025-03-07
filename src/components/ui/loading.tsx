"use client";

import { useState, useEffect } from "react";
import { gsap, CSSPlugin } from "gsap";
gsap.registerPlugin(CSSPlugin);

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2500);

    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= 100) {
          clearInterval(count);
          return 100;
        }
        return prevCounter + 1;
      });
    }, 10);

    return () => {
      clearTimeout(timeout);
      clearInterval(count);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-grey-900 text-white z-[1000]">
      <p className="text-base absolute left-[100px] top-[20px] text-grey-500">Sarthak Kaushik</p>
      <div className="flex justify-center items-center rounded-full bg-transparent h-[18vw] w-[18vw] border-t-4 border-t-gray-800 border border-gray-500">
        <p className="text-[120px]">{counter}</p>
      </div>
      <p className="text-[22px] absolute left-[150px] bottom-[80px] uppercase">
        Loading ...
      </p>
    </div>
  );
}
