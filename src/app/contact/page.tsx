import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="md:w-[calc(100%_-_200px)] w-full m-auto flex justify-center items-center flex-col mt-[210px]">
      <Image
        className="absolute left-0 top-0 w-[210px] opacity-40"
        src="/images/circle-dotted.png"
        alt="background image"
        height={100}
        width={100}
      />
      <div className="flex gap-4 mb-5">
        <span className="text-grey-900">------</span>
        <p className="px-[10px] bg-grey-900 text-grey-500">SARTHAK KAUSHIK</p>
        <span className="text-grey-900">------</span>
      </div>
      <h1 className="title uppercase text-center max-w-[800px] mb-[15px]">
        Take a Look around everything is evolving.
      </h1>
      <p className="box-border leading-[25.6px] max-w-[570px] text-center text-[rgb(187,187,187)] font-normal bg-black mt-[15px] mb-0 mx-[236.875px]">
        Ready for a change? Starting a partnership is easy! Get a free
        consultation or request a callback. We`'re always available and excited
        to collaborate with you.
      </p>
    </div>
  );
}

export default page;
