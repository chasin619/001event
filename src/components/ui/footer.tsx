import Link from "next/link";
import React from "react";

function footer() {
  return (
    <div className="bg-black">

    <div className="bg-grey-900 border-t border-custom text-white md:w-[calc(100%_-_200px)] w-full m-auto">
      <footer className="py-[30px] max-w-[1200px] m-auto  w-[90%] flex flex-col md:flex-row justify-between gap-7 items-center] font-Poppins">
        <div className="flex gap-[15px] justify-center">
          <Link
            className="text-[13px] tracking-[2px] font-normal"
            href="www.github.com"
          >
            Github.
          </Link>
          <Link
            className="text-[13px] tracking-[2px] font-normal"
            href="www.instagram.com"
          >
            Instagram.
          </Link>
          <Link
            className="text-[13px] tracking-[2px] font-normal"
            href="www.linkedin.com"
          >
            Linkedin.
          </Link>
        </div>
        <a className="md:block hidden" href="#top">
          Scroll on Top
        </a>
        <div>
          <p className="text-[13px] tracking-[2px] font-normal text-center">
            2025 &copy; Made with ❤️ by <Link href="/">Shehbaz</Link>
          </p>
        </div>
      </footer>
    </div>
    </div>

  );
}

export default footer;
