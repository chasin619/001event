import React from 'react';
import TestimonialSlider from './TestimonalSlider';
import { Testimonial } from './types';

// Sample testimonial data
const testimonialData: Testimonial[] = [
  {
    author: 'Jagrit',
    company: 'Hiploro',
    content: 'Working with Sarthak has been an absolute pleasure. He transformed our outdated website into a sleek, modern platform with a flawless user experience. His expertise in the MERN stack was evident throughout the project. Highly recommended!'
  },
  {
    author: 'Subhesh Boss',
    company: 'Canada Job Bank',
    content: 'I approached Sarthak with a complex requirement for a custom WordPress plugin, and he delivered beyond my expectations. The REST API he created for managing custom post types was intuitive and fast, making our content management seamless. His attention to detail and ability to handle edge cases is remarkable.'
  },
  {
    author: 'Minh Hoang',
    company: 'Tiktok',
    content: 'He is very knowledgeable. I got trouble with my javascript site but he just knows what the issues are right away! '


  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 z-0"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-start max-w-5xl mx-auto mb-12">
        <h4 className="text-lg  gap-2 relative flex  items-center my-3">
                <span className="line"></span>
                <span className="bg-grey-900 px-2 capitalize tracking-wider text-gray-400">
                  Feedback
                </span>
              </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-white">What Clients Say</h2>
        </div>
        
        <TestimonialSlider testimonials={testimonialData} />
      </div>
    </section>
  );
};

export default TestimonialSection;