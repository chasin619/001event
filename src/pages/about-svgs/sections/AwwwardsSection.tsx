import Image from "next/image";
import React from "react";
import AwardCard from "./AwardCard";
import CSSDesignLogo from "./CSSDesignLogo";
import AwarSectionImage from "@/../public/images/AwardsSectionImage.png";

const AwardsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16">
      <div className="section-fade-in">
        <div className="space-y-6">
          <h4 className="text-lg  gap-2 relative flex  items-center">
            <span className="line"></span>
            <span className="bg-grey-900 px-2 capitalize tracking-wider text-gray-400">
              What I do
            </span>
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
            The awards won by our project.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 ">
            <AwardCard
              number="4"
              title="AWWWARDS"
              subtitle="WEBSITE OF THE DAY"
              className="aspect-square my-auto border border-grey-900"
            />

            <div className="grid grid-cols-1 gap-6">
              <AwardCard
                number="6"
                title="UI Design"
                subtitle="Award"
                logo={<CSSDesignLogo />}
                className="border border-grey-900 mb-3"
              />

              <AwardCard
                number="7"
                title="AWWWARDS"
                subtitle="STAR AWARD"
                className="border border-grey-900 min-h-[250px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full h-full section-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="relative rounded-md overflow-hidden w-full h-full">
          <Image
            className="w-full h-[100%] object-cover"
            src={AwarSectionImage}
            alt="Sarthak Kaushik"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
