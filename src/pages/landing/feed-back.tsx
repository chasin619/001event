import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jagrit",
    company: "Hiptoro",
    content:
      "Working with Sarthak has been an absolute pleasure. He transformed our outdated website into a sleek, modern platform with a flawless user experience. His expertise in the MERN stack was evident throughout the project. Highly recommended!",
  },
  {
    id: 2,
    name: "Alexandra",
    company: "TechForward",
    content:
      "The attention to detail and technical expertise demonstrated throughout our project was exceptional. The final product exceeded our expectations in every way.",
  },
  {
    id: 3,
    name: "Michael",
    company: "InnovateNow",
    content:
      "An outstanding experience from start to finish. The perfect blend of technical prowess and creative vision resulted in a product that truly stands out.",
  },
];

export const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="  flex-col px-4 py-6">
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-12">
        <div className="mb-16 md:mb-24 md:col-span-5 md:relative">
          <h1 className="text-5xl md:text-5xl font-bold text-white text-left md:w-full md:relative md:top-[-140px]">
            Feedback from
            <br />
            my clients.
          </h1>
        </div>

        <div className="md:grid  md:gap-12 items-start md:col-span-7 md:w-full">
          <div className="relative">
            <div className="overflow-hidden">
              <div className="transition-all duration-500 ease-in-out">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl text-white font-medium mb-8">
                    {testimonials[currentIndex].name}
                  </h2>
                  <p className="text-[#00ffcc] text-lg">
                    {testimonials[currentIndex].company}
                  </p>
                  <p className="text-gray-300 text-lg md:text-sm leading-relaxed h-[60px]">
                    {testimonials[currentIndex].content}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-12">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-gray-600 text-white hover:bg-gray-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-[#00ffcc]"
                        : "w-2 bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-gray-600 text-white hover:bg-gray-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
