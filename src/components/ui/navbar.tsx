"use client";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Share from "../icons/share";
import LinkedIn from "../icons/linkedIn";
import Instagram from "../icons/instagram";
import Github from "../icons/github";
import { usePathname } from "next/navigation";
import { useSidebar } from "./sidebarContext";

const onPageLinks = [
  {
    href: "#howWeAre",
    text: "How we are",
  },
  {
    href: "#MyServices",
    text: "my services",
  },
  {
    href: "#testimonials",
    text: "testimonials",
  },
  {
    href: "#MyPurpose",
    text: "my services",
  },
  {
    href: "#MyClients",
    text: "My Clients",
  },
];

function Navbar() {
  const words = ["Menu", "Open"];
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);
  const Pathname = usePathname();

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.children;
    gsap.fromTo(
      letters,
      { rotateX: 90, opacity: 0 },
      {
        rotateX: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  }, [index]);

  const handleMouseEnter = () => {
    if (!textRef.current) return;
    const letters = textRef.current.children;

    gsap.to(letters, {
      rotateX: -90,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      onComplete: () => {
        setIndex((prev) => (prev + 1) % words.length);
      },
    });
  };

  const { toggleSidebar } = useSidebar();
  return (
    <div>
      <div className="relative md:flex hidden">
        <div className="fixed z-40 left-0 top-0 flex flex-col justify-between items-center h-full pt-[22px] pb-[85px] w-[100px] border-r border-[hsla(0,_0%,_100%,_.07);]">
          <a
            className="text-light text-[15px] font-normal"
            onMouseEnter={() =>
              gsap.to("#cursor", { scale: 2.6, duration: 0.2 })
            }
            onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.2 })}
            href="/"
          >
            SARTHAK
          </a>
          <div
            onClick={toggleSidebar}
            onMouseEnter={handleMouseEnter}
            className="text-sm font-bold text-white cursor-pointer flex justify-center"
          >
            <span ref={textRef}>
              {words[index].split("").map((char, i) => (
                <span key={i} className="inline-block w-5 text-center">
                  {char}
                </span>
              ))}
            </span>
          </div>
          <div className="w-[18px] h-[18px] relative group">
            <div className="top-[-100px] pb-10 absolute w-3 h-[120px] flex flex-col gap-5">
              <Link
                onMouseEnter={() =>
                  gsap.to("#cursor", { scale: 2.6, duration: 0.2 })
                }
                onMouseLeave={() =>
                  gsap.to("#cursor", { scale: 1, duration: 0.2 })
                }
                className="translate-x-[-10px] group-hover:translate-x-[3px] group-hover:opacity-100 opacity-0 transition-all duration-500 delay-200 link"
                href="/www.github.com"
              >
                <span>
                  <Github />
                </span>
              </Link>
              <Link
                onMouseEnter={() =>
                  gsap.to("#cursor", { scale: 2.6, duration: 0.2 })
                }
                onMouseLeave={() =>
                  gsap.to("#cursor", { scale: 1, duration: 0.2 })
                }
                className="translate-x-[-10px] group-hover:translate-x-[3px] group-hover:opacity-100 opacity-0 transition-all duration-500 delay-100"
                href="/www.linkedin.com"
              >
                <LinkedIn />
              </Link>
              <Link
                onMouseEnter={() =>
                  gsap.to("#cursor", { scale: 2.6, duration: 0.2 })
                }
                onMouseLeave={() =>
                  gsap.to("#cursor", { scale: 1, duration: 0.2 })
                }
                className="translate-x-[-10px] group-hover:translate-x-[3px] group-hover:opacity-100 opacity-0 transition-all duration-500"
                href="/www.Instagram.com"
              >
                <Instagram />
              </Link>
            </div>
            <Share />
          </div>
        </div>
        <div className="fixed z-40 right-0 top-0 flex flex-col justify-between items-center h-full pt-[22px] pb-[85px] w-[100px] border-l border-[hsla(0,_0%,_100%,_.07);]">
          {Pathname === "/" && (
            <>
              <div className="rotate-[-90deg] text-[13px] tracking-[5px] uppercase pe-20 flex justify-center items-center">
                <Link
                  href="/contact"
                  className="text-[13px] tracking-[5px] uppercase"
                >
                  Contact
                </Link>
                <span className="ms-1 h-[11px] w-[11px] rounded-full border border-white"></span>
              </div>
              <div className="flex flex-col gap-3 relative">
                {onPageLinks.map((item, index) => (
                  <div key={index} className="w-[1.5px] h-7 flex group">
                    <div className="absolute w-[100px] h-7 group"></div>
                    <a
                      href={item.href}
                      className="w-[1.5px] h-7 bg-white rounded-full hover:rounded-none uppercase relative transition-all duration-500"
                    >
                      <span className="w-0 h-7 group-hover:inline text-black text-center group-hover:w-[170px] absolute hover:right-[-20px] group-hover:right-[-20px] right-0 bg-white transition-all duration-500 overflow-hidden leading-[28px] text-[13px] tracking-[2px]">
                        {item.text}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
              <p></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
