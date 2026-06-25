'use client';

import React, { useState, useEffect } from 'react';

interface CarouselProps {
  name?: string;
  autoAdvanceTimer?: number;
  children?: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ 
  name = "Carousel",
  autoAdvanceTimer = 0,
  children 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const childArray = React.Children.toArray(children);

  useEffect(() => {
    if (autoAdvanceTimer && autoAdvanceTimer > 0 && childArray.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % childArray.length);
      }, autoAdvanceTimer * 1000);
      return () => clearInterval(interval);
    }
  }, [autoAdvanceTimer, childArray.length]);

  const nextSlide = () => {
    if (childArray.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % childArray.length);
    }
  };

  const prevSlide = () => {
    if (childArray.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + childArray.length) % childArray.length);
    }
  };

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden rounded-lg bg-gray-100 min-h-96">
        {childArray.length === 0 ? (
          <div className="flex items-center justify-center h-96 text-gray-500">
            <p>Drag hero sections here to create slides</p>
          </div>
        ) : (
          <div className="relative w-full h-full">
            {childArray.map((child, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {child}
              </div>
            ))}
          </div>
        )}
      </div>

      {childArray.length > 0 && (
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={prevSlide}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {childArray.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-black' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
