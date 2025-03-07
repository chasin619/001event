import React from "react";

const numberCards = [
  {
    num: "50",
    txt: "Happy Clients",
    CustomBorder: "md:border-r-2",
  },
  {
    num: "463",
    txt: "Working hours were spent",
    CustomBorder: "md:border-r-2",
  },
  {
    num: "94",
    txt: "Succeeded Projects",
    CustomBorder: "md:border-r-2",
  },
  {
    num: "43",
    txt: "Finished Tearly Project",
    CustomBorder: "",
  },
];

const WhatIDo = () => {
  return (
    <div className="bg-black ">
      <div className="md:w-[calc(100%_-_200px)] w-full mx-auto  ">
        <div className="max-w-[1200px] mx-auto  w-[90%]">
          <div className="grid md:grid-cols-12 ] pt-[120px]">
            <div className="md:col-span-8 flex flex-col justify-center items-start h-full w-full">
              <h4 className="bg-grey-900">
                <span className="text-gray-300 p-3 tracking-[2px] capitalize">
                  What I do
                </span>
              </h4>
              <p className="text-[25px] font-semibold text-white tracking-[2px]  my-2 font-Poppins">
                I’m a web developer and mobile app designer specializing in the
                MERN stack and PHP. I build APIs, WordPress plugins, and themes,
                focusing on Next.js, Gatsby, database management, and
                performance optimization with robust error handling.
              </p>
            </div>
            <div className="md:col-span-4 ">
              <div className="flex flex-col  h-full w-full px-6 ">
                <h4 className="bg-grey-900 w-fit mb-3">
                  <span className="text-gray-300 p-3 tracking-[2px] capitalize ">
                    My Services
                  </span>
                </h4>
                <p className="text-gray-400 tracking-[1px] my-1">
                  Web Design and development
                </p>
                <p className="text-gray-400 tracking-[1px] my-1">
                  App Designs and development
                </p>
                <p className="text-gray-400 tracking-[1px] my-1 capitalize">
                  Social media Marketing
                </p>
              </div>
            </div>
          </div>

          {/* now numbers section */}

          <div className="grid sm:grid-cols-2 md:grid-cols-4 min-h-[400px] pb-[20px] justify-center  items-center">
            {numberCards.map((item, index) => (
              <div
                key={index}
                className="col-span-1 flex w-full  relative h-[200px] justify-center items-center  border-grey-900 border-r-2 [`${item.CustomBorder}`]"
              >
                <h2 className="absolute text-greenish numbers_in_service tracking-[2px] ">
                  <span>{item.num}</span>
                </h2>
                <h2 className="text-white text-[16px] font-Poppins tracking-[1px] font-bold">
                  {item.txt}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
