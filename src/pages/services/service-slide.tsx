import Image from "next/image";
import React from "react";
import ServiceCard1 from "@/../public/images/ServiceCard1.png";
import { CheckIcon } from "lucide-react";

const ServiceBullets1 =[
    {
        pros:"Fully Responsive"
    },
    {
        pros:"SEO Optimised"
    },
    {
        pros:"Email Integration"
    },
    {
        pros:"Lead Generation"
    },
] 
interface ServiceSlideProps {
    field:string;
  pic: string;
  sub_title: string;
  slogan: string;
  ServiceBullets: 'Array';
  
}
const ServiceSlide = ({field,pic,sub_title,slogan,ServiceBullets} : ServiceSlideProps) => {
  return (
    <div className="bg-black">
      <div className="md:w-[calc(100%_-_200px)] w-full mx-auto  bg-grey-900">
        <div className="max-w-[1200px] mx-auto  w-[90%]">
          <div className="grid md:grid-cols-2 relative md:min-h-[550px] justify-center items-center gap-[20px]">
            <h1 className="text-white uppercase absolute top-10 z-0  opacity-10 text-[80px] right-8 font-bold">
              Web <br /> development
            </h1>
            <div className="md:col-span-1 max-h-[320px]  w-full bg-yellow-50">
              <Image
                className="w-full h-[320px] max-h-[400px]"
                width={100000}
                height={100000}
                src={ServiceCard1}
                alt="Room"
              />
            </div>
            <div className="md:col-span-1 relative text-white">
              <h4 className="bg-black w-fit">
                <span className="text-gray-300 p-3 tracking-[2px] ">
                  We make Digital
                </span>
              </h4>
              <h2 className=" pb-6  text-[40px] font-Poppins font-bold tracking-[2px]">
                Create a stunning websites
              </h2>
              <div className="grid md:grid-cols-2 border-gray-600 border-t min-h-[100px] pt-6">
                {ServiceBullets1.map((item,index)=>(

                
                <p key={index} className="md:col-span-1 flex py-4 text-gray-400 justify-center w-fit items-center text-[20px]">
                  <CheckIcon
                    className="bg-greenish rounded-full h-4 w-4"
                    fill="black"
                  />
                  <span className="ps-3">{item.pros}</span>
                </p>
   ))}              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlide;
