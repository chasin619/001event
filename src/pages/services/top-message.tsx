import React from "react";

const TopMessage = () => {
  return (
    <div className="bg-black">
      <div className="md:w-[calc(100%_-_200px)] w-full m-auto bg-grey-900 ">
        <div className="max-w-[1200px] m-auto  w-[90%]">
          <div className="flex flex-col min-h-[500px] w-full justify-center items-center">
            <h4 className="text-lg  gap-2 relative flex  items-center">
              <span className="line hidden md:block"></span>
              <span className="bg-black px-2 uppercase tracking-wider text-[16px] text-gray-300">
                My Services
              </span>
              <span className="line hidden md:block"></span>
            </h4>
            <h2 className="text-white text-[35px] sm:text-[47px] md:text-[55px] font-bold font-Poppins tracking-[2px] text-center">
              I deliver beautiful <br />
              digital products for you.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMessage;
