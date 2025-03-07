import Image from "next/image";
import React from "react";
import AboutBg from "@/../public/images/about-bg.png";
import AboutCover1 from "@/../public/images/about-cover1.png";
import AboutCover2 from "@/../public/images/about-cover2.png";
import InnovativeConcept from "@/pages/about-svgs/inoovative-concept-icon";
import ExceptionalThinker from "@/pages/about-svgs/exceptiona-thinker";
import BusinessPlanning from "@/pages/about-svgs/business-planning";
import AwardsHonors from "@/pages/about-svgs/award&honors";
import Clients from "@/components/ui/clients";
import AboutIndex from "@/pages/about-svgs/about-testimonals";
import Checksvg from "@/pages/about-svgs/sections/check";

const ServiceCards = [
  {
    Serial: "01",
    Icon: <InnovativeConcept />,
    title: "Innovative Concept",
    discription:
      "I bring innovative concepts to life, transforming your ideas into unique digital solutions that engage users and drive meaningful results for your business.",
  },
  {
    Serial: "02",
    Icon: <ExceptionalThinker />,
    title: "Exceptional Creative Thinker",
    discription:
      "Driven by high creative minds, I craft unique digital solutions that push boundaries and deliver exceptional experiences for your brand.",
  },
  {
    Serial: "03",
    Icon: <BusinessPlanning />,
    title: "Business Planning",
    discription:
      "Strategizing innovative pathways for sustainable business growth and success.",
  },
];

const coverImages = [
  {
    alter: "about cover 1",
    path: AboutCover1,
  },
  {
    alter: "about cover 2",
    path: AboutCover2,
  },
];

function page() {
  return (
    <div className="bg-black">
      <div className="w-[90%] md:w-[80%] mx-auto h-[600px] flex flex-col justify-center">
        <h4 className="text-lg   gap-3 relative flex  items-center">
          <span className="bg-grey-900 px-1 capitalize tracking-wider text-gray-400">
            Sarthak kaushik
          </span>
          <span className="line"></span>
        </h4>
        <h2 className="text-[55px] font-bold my-3 tracking-[2px] text-white">
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
        <div className="flex flex-col w-full min-h-[500px] justify-center ">
          <div className="w-full grid md:grid-cols-2  gap-2 justify-center items-end md:h-[200px]  pb-10 md:pb-14 border-b border-gray-700">
            <div className="md:col-span-1 flex flex-col ">
              <h4 className="text-lg  gap-2 relative flex  items-center">
                <span className="line"></span>
                <span className="bg-grey-900 px-2 capitalize tracking-wider text-gray-400">
                  What I do
                </span>
              </h4>
              <h1 className="text-[25px] font-semibold mb-4 md:font-bold my-2 text-white">
                Protect Your Business and Guarantee Continuous Availability
              </h1>
            </div>
            <div className=" md:col-span-1">
              <p className="text-[16px] text-gray-400">
                Ensure the security and seamless operation of your business with
                robust solutions that safeguard your data, maintain high uptime,
                and provide continuous availability, no matter the challenge.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between pt-4 md:py-14 text-[20px] font-semibold text-white">
            <h2 className="flex py-3">
            <Checksvg/>
              Backend + Fronted
            </h2>
            <h2 className="flex py-3">
            <Checksvg/>
              SEO Optimised
            </h2>
            <h2 className="flex py-3">
              <Checksvg/>
              
              Responsive Design
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 my-8 pb-4">
            {coverImages.map((item, index) => (
              <div key={index} className="col-span-1 ">
                <div className="image w-full">
                  <Image
                    className="w-full h-[100%] max-h-[268px] md:min-h-[500px] md:max-h-[750px]"
                    width={100000}
                    height={100000}
                    src={item.path}
                    alt={item.alter}
                  />
                </div>
              </div>
            ))}
            <div className="col-span-1"></div>
          </div>
        </div>

        {/* service card section */}

        <div className="bg-grey-900   py-24 ">
          <div className="my-10">
            <h4 className="text-lg  gap-2 relative flex  items-center my-3 text-gray-400">
              <span className="line"></span> My
              <span className="bg-black px-2 capitalize tracking-wider text-gray-400">
                Services
              </span>
            </h4>
            <h2 className="text-[30px] sm:text-[40px] font-Poppins font-bold text-white sm:tracking-[2px]">
              I create stunning digital experiences tailored to your needs.
            </h2>
          </div>

          {ServiceCards.map((Item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:h-[150px] gap-10  p-3 sm:p-0 sm:border-b border-gray-600"
            >
              <div className="flex-grow sm:min-w-[50px] hidden sm:flex h-full justify-center items-center">
                <span className="text-gray-400">{Item.Serial}/</span>
              </div>
              <div className="flex-grow  sm:min-w-[100px] flex sm:justify-center items-center ">
                {Item.Icon}
              </div>
              <div className="flex-grow w-full flex flex-col justify-center md:py-2 text-white ">
                <h2 className="text-[20px] font-Poppins py-2 font-bold tracking-[2px]">
                  {Item.title}
                </h2>
                <p className="text-[16px] text-gray-300 leading-6">
                  {Item.discription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AwardsHonors />
      <AboutIndex />
      <Clients />
    </div>
  );
}

export default page;
