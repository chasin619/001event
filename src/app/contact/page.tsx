import Image from "next/image";
import React from "react";
import ContactForm from "@/pages/contact/contact-form";

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
      <div className="flex items-center gap-4 mb-5">
        <span className="line"></span>
        <p className="px-[10px] bg-grey-900 text-grey-500">SARTHAK KAUSHIK</p>
        <span className="line"></span>
      </div>
      <h1 className="title uppercase text-center max-w-[800px] mb-[15px]">
        Take a Look around everything is evolving.
      </h1>
      <p className="para mt-[15px] mb-0">
        Ready for a change? Starting a partnership is easy! Get a free
        consultation or request a callback. We`'re always available and excited
        to collaborate with you.
      </p>
      <ContactForm />
    </div>
  );
}

export default page;
