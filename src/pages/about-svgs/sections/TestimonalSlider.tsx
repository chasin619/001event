import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from './types';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

const TestimonialSlider = ({ 
  testimonials, 
  autoPlayInterval = 7000 
}: TestimonialSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  }, [testimonials.length, isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  }, [testimonials.length, isAnimating]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlayInterval <= 0) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [handleNext, autoPlayInterval]);

  return (
    
    <div className="testimonial-slider ">
      <div className="max-w-[1200px] m-auto w-[90%] relative min-h-[500px] ">

      {/* Corner decorations */}
      <div className="slider-corner top-left border-white"></div>
      <div className="slider-corner top-right border-white"></div>
      <div className="slider-corner bottom-left border-white"></div>
      <div className="slider-corner bottom-right border-white"></div>
      
      {/* Testimonial slides */}
      <div className="relative min-h-[280px] md:max-h-[240px]  flex justify-center items-center py-10">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`testimonial-slide ${index === activeIndex ? 'active animate-fade-in' : ''}`}
          >
            {index === activeIndex && (
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="flex flex-col items-center space-y-1">
                  <h3 className="text-xl font-semibold text-white">{testimonial.author}</h3>
                  <p className="text-greenish text-lg font-medium">{testimonial.company}</p>
                </div>
                <div className="w-0.5 h-8 bg-greenish"></div>
                <p className="text-gray-300 max-w-3xl text-center leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Navigation controls */}
      <div className="flex items-center justify-between mt-10 w-[80%] mx-auto ">
        <button 
          onClick={handlePrev} 
          className="testimonial-arrow-button"
          aria-label="Previous testimonial"
          disabled={isAnimating}
        >
          <ChevronLeft size={30} />
          <div className="line2 left-[10px]"></div>
        </button>
        
        <div className="flex items-center space-x-1">
          {testimonials.map((_, index) => (
            <div 
              key={index} 
              className={`testimonial-indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => !isAnimating && setActiveIndex(index)}
            />
          ))}
        </div>
        
        <button 
          onClick={handleNext} 
          className="testimonial-arrow-button"
          aria-label="Next testimonial"
          disabled={isAnimating}
        >
          <div className="line2 right-[10px]"></div>
          <ChevronRight size={30} />
        </button>
      </div>
      </div>

    </div>
  );
};

export default TestimonialSlider;