import Image from "next/image";
import React from "react";
import AboutBg from "@/../public/images/about-bg.png";

function page() {
  return (
    <div className="bg-black">
      <div className="w-[90%] md:w-[84%] mx-auto h-[450px] flex flex-col justify-center">
        <h4 className="text-lg   gap-3 relative flex  items-center">
          <span className="bg-grey-900 px-1 capitalize tracking-wider text-gray-400">
            Sarthak kaushik
          </span>
          <span className="line"></span>
        </h4>
        <h2 className="text-[55px] font-bold my-3 tracking-[2px]">
          FULL STACK <br />
          WEB DEVELOPER
        </h2>
      </div>
      <div className="w-[calc(100%_-_200px)] m-auto h-full opacity-50">
        <Image
          className="w-full h-full"
          width={10000}
          height={10000}
          src={AboutBg}
          alt="background"
        />
      </div>
      <div className="py-[30px] max-w-[1200px] m-auto w-[90%] flex flex-col font-Poppins">
        <div className="flex flex-col w-full">
          <div className="w-full grid grid-cols-2 gap-2 justify-center items-end h-[200px] border-b pb-14 border-gray-700">
            <div className="col-span-1 flex flex-col ">
              <h4 className="text-lg   gap-3 relative flex  items-center">
                <span className="line"></span>
                <span className="bg-grey-900 px-2 capitalize tracking-wider text-gray-400">
                  What I do
                </span>
              </h4>
              <h1 className="text-[25px] my-2">
                Protect Your Business and Guarantee Continuous Availability
              </h1>
            </div>
            <div className=" col-span-1">
              <p className="text-[16px]">
                Ensure the security and seamless operation of your business with
                robust solutions that safeguard your data, maintain high uptime,
                and provide continuous availability, no matter the challenge.
              </p>
            </div>
          </div>
          <div className="flex justify-between py-14 text-[20px] font-semibold">
            <h2>Backend + Fronted</h2>
            <h2>SEO Optimised</h2>
            <h2>Responsive Design</h2>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="col-span-1 "></div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
