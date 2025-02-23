"use client";
import { useEffect, useState, useRef } from "react";

export default function CustomScrollbar() {
  const [scroll, setScroll] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(50);
  const scrollbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateThumbSize = () => {
      const contentHeight = document.documentElement.scrollHeight;
      const visibleHeight = window.innerHeight;
      const scrollbarHeight = scrollbarRef.current?.clientHeight || 0;

      // Ensure thumb is proportional to page size
      const calculatedThumbHeight = Math.max(
        (visibleHeight / contentHeight) * scrollbarHeight,
        50 // Minimum thumb height
      );

      setThumbHeight(calculatedThumbHeight);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollbarRef.current) {
        const scrollbarHeight = scrollbarRef.current.clientHeight;
        const maxThumbMove = scrollbarHeight - thumbHeight; // Correct max movement

        const progress = scrollTop / maxScroll;
        setScroll(progress * maxThumbMove); // Moves from 0px to maxThumbMove
      }
    };

    updateThumbSize();
    window.addEventListener("resize", updateThumbSize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateThumbSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [thumbHeight]);

  return (
    <div
      ref={scrollbarRef}
      className="custom-scrollbar fixed right-4 top-0 h-full w-2 bg-transparent rounded-full"
    >
      <div
        className="custom-scrollbar-thumb bg-gray-600 rounded-full"
        style={{
          transform: `translateY(${scroll}px)`, // Moving in pixels
          height: `${thumbHeight}px`,
        }}
      />
    </div>
  );
}
