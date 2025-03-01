"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useSidebar } from "./sidebarContext";
import gsap from "gsap";

const Navlinks = [
  {
    Serial: "01",
    name: "Home",
    link: "/",
  },
  {
    Serial: "02",
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    Serial: "03",
    name: "Service",
    link: "/services",
  },
  {
    Serial: "04",
    name: "Blog",
    link: "/blog",
  },
  {
    Serial: "05",
    name: "About",
    link: "/about",
  },
  {
    Serial: "06",
    name: "Contact",
    link: "/contact",
  },
];

function Sidebar() {
  const { isOpen } = useSidebar();
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(sidebarRef.current, { y: 0, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(sidebarRef.current, {
        y: "200%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);
  return (
    <div
      className="bg-black fixed top-0 w-screen h-screen z-[40]"
      ref={sidebarRef}
    >
      <div className="border-t border-custom md:w-[calc(100%_-_200px)] w-full m-auto">
        <div className="py-[30px] max-w-[1200px] h-[100vh] m-auto w-[90%] flex justify-center gap-7 items-center font-Poppins ">
          <h1 className=" text-gray-700 text-[8rem] text-center md:text-[14rem] font-bold absolute md:left-24 z-[-1] opacity-[0.1]">
            Menu
          </h1>
          <div className="flex text-gray-300 flex-col items-center md:items-start text-center md:text-left md:justify-center md:w-[70%]">
            <ol className="">
              {Navlinks.map((Item, index) => (
                <li className="py-4" key={index}>
                  <small className="hidden md:block text-gray-600 tracking-wider pe-1 text-sm">
                    {Item.Serial}.
                  </small>
                  <Link href={Item.link}>
                    <span className="text-4xl tracking-widest">
                      {Item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          <div className="hidden  md:flex border-s border-gray-700  min-h-[500px] w-[30%] justify-center items-center ">
            <div className="cmd  h-[200px]  flex justify-start items-center"></div>
            <div className="details text-start mx-auto ps-8">
              <h1 className="text-yellow-700 py-2">Contact</h1>
              <p className="text-white pt-3">+91 8840053337</p>
              <p className="text-white uppercase pb-3">
                contact@sarthakkaushik.com
              </p>

              <h1 className="text-yellow-700 py-2">Follow me</h1>
              <p className="text-white">
                <span className="pe-3">Github.</span>
                <span className="pe-3">Linkedin.</span>
                <span className="">Instagram.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
