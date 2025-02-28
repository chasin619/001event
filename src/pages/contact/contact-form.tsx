import Link from "next/link";
import React from "react";

function contactForm() {
  return (
    <div className="flex md:flex-row flex-col mt-20 w-[90%]">
      <div className="py-10 px-5">
        <div className="relative flex items-center gap-3 w-[300px]">
          <span className="line"></span>
          <p className="prompt text-grey-500 design">Stay connected</p>
        </div>
        <h2 className="title !text-[30px] !tracking-tight mt-[10px]">
          Get in Touch
        </h2>
        <p className="para !text-left mt-5 mb-[30px]">
          At the heart of every brand are the people behind it and those who
          experience it, and we`'re right there—connecting both.
        </p>
        <form action="" className="flex flex-col items-start">
          <div>
            <label className="para !text-greenish" htmlFor="">
              Your name *
            </label>
            <input
              className="form-input"
              type="text"
              placeholder="Type Your Name"
            />
          </div>
          <div>
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
          <input type="button" value="" />
        </form>
      </div>
      <div>
        <h6>Contact</h6>
        <p>+91 8840053337</p>
        <Link href="#">Contact@sarthakkaushik.com</Link>
        <h6>Address</h6>
        <p>Varanasi</p>
        <h6>Follow Me</h6>
        <Link href="www.instagram.com">INSTAGRAM</Link>
        <Link href="www.github.com">Gihub</Link>
      </div>
    </div>
  );
}

export default contactForm;
