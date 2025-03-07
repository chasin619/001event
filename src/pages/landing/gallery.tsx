"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    id: "item-1",
    number: "1",
    title: "Comprehensive research",
    content:
      "I do comprehensive research for the project which ensures well-informed decisions, optimized functionality, and user-centric solutions.",
  },
  {
    id: "item-2",
    number: "2",
    title: "Motivated Team",
    content:
      "Our motivated team brings passion and expertise to every project, ensuring high-quality results and innovative solutions.",
  },
  {
    id: "item-3",
    number: "3",
    title: "Result-oriented",
    content:
      "We focus on delivering measurable results and achieving project goals through strategic planning and efficient execution.",
  },
];

const Gallery = () => {
  return (
    <div className="bg-black" id="MyPurpose">

    <div  className="max-w-[1200px] w-[90%] mx-auto bg-black text-white pt-10 px-8 md:px-4">
      <div className="flex flex-wrap items-center py-24 flex-col md:flex-row">
        {/* Left Side: Image */}
        <div className="flex-1 relative md:-top-[120px] w-full">
          <Image
            className="w-full object-cover max-h-[500px] md:max-h-[700px] md:w-full"
            src="/images/plan-project.png"
            alt="A person smiling with a scenic background"
            width={700}
            height={700}
          />
        </div>

        {/* Right Side: Accordion */}
        <div className="flex-1 bg-grey-900 px-8 py-12 md:h-[560px] w-full relative">
          <h1 className="uppercase absolute top-2 z-0 opacity-10 text-[80px] left-10 font-bold">
            Sarthak
          </h1>

          <div className="space-y-8 max-w-xl">
            {/* Section Heading */}
            <div className="space-y-4">
              <p className="text-sm tracking-wider bg-grey-900 text-teal-400">
                <span className="tracking-[-1px] text-teal-400">--------- </span>MY PURPOSE
              </p>
              <h2 className="text-4xl font-bold">I PLAN YOUR PROJECT</h2>
            </div>

            {/* Accordion */}
            <Accordion type="single" defaultValue="item-3" collapsible>
              {accordionItems.map(({ id, number, title, content }) => (
                <AccordionItem key={id} value={id} className="border-b-0">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-400 text-white">
                        {number}
                      </span>
                      <span className="text-xl">{title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-12">
                    {content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Gallery;
