import Button from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function contactForm() {
  return (
    <div className="grid md:grid-cols-2  mt-20 md:max-w-[1200px] mx-auto py-[80px]  w-[90%] gap-[30px]">
      <div className="md:col-span-1 py-10 px-16 border border-grey-900 min-h-[600px] grid items-center ">
        <div className="relative flex items-center gap-3 w-[300px] ">
          <span className="line"></span>
          <p className="prompt text-grey-500 design">Stay connected</p>
        </div>
        <h2 className="text-white text-[40px] tracking-[2px] !font-bold mt-[10px]">
          Get in Touch
        </h2>
        <p className="para !text-left mt-5 mb-[30px]">
          At the heart of every brand are the people behind it and those who
          experience it, and we`'re right there—connecting both.
        </p>
        <form action="" className="flex flex-col items-start">
          <div className="mb-4">
            <label className="para !text-greenish" htmlFor="">
              Your name *
            </label>
            <input
              className="form-input"
              type="text"
              placeholder="Type Your Name"
            />
          </div>
          <div className="my-4">
            <label className="para !text-greenish" htmlFor="">
              Your E-Mail *
            </label>
            <input
              className="form-input"
              type="text"
              placeholder="Type Your Email Address"
            />
          </div>
          <label className="para !text-greenish" htmlFor="">
            What's up?
          </label>
          <textarea
            className="form-input"
            name=""
            id=""
            placeholder="Tell us about you and the world"
          ></textarea>
          <div className="relative w-full mt-5 flex btn justify-end">
            <Link href={""}>
            <button className="text-white  py-[20px] px-[30px] tracking-[2px] border border-grey-900  uppercase hover:translate-x-2 transition-all ">Send Message</button>
            </Link>
            </div>
        </form>
      </div>
      <div className="md:col-span-1 flex flex-col justify-center text-gray-300">
        <h6 className="text-[20px] font-Poppins tracking-[2px] mb-[15px] text-white font-bold">Contact</h6>
        <p className="pt-4">+91 8840053337</p>
        <Link href="#" className="pb-8 uppercase underline">Contact@sarthakkaushik.com</Link>
        <h6 className="text-[20px] font-Poppins tracking-[2px] mb-[15px] text-white font-bold">Address</h6>
        <p className="pb-8 pt-4 text-[16px]">Varanasi</p>
        <h6 className="text-[20px] font-Poppins tracking-[2px] mb-[15px] text-white font-bold">Follow Me</h6>
        <Link href="www.instagram.com" className="uppercase tracking-[2px] font-semibold">INSTAGRAM</Link>
        <Link href="www.github.com" className="uppercase tracking-[2px] font-semibold">Gihub</Link>
      </div>
    </div>
  );
}

export default contactForm;
