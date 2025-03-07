import React from "react";
import Button from "./button";

function Footer() {
  return (
    <div className="bg-black">

    <div className="bg-grey-900 md:w-[calc(100%_-_200px)] w-full m-auto text-white">
      <div className="max-w-[1200px] w-[90%] m-auto flex md:flex-row flex-col justify-between md:items-center md:py-[120px] py-[80px] gap-10">
        <h2 className="md:text-[40px] text-[30px] font-semibold font-Poppins tracking-tight max-w-[750px]">
          Would you like additional information or clarification?
        </h2>
        <Button />
      </div>
    </div>
    </div>

  );
}

export default Footer;
