"use client";
import React, { useEffect, useRef, useState } from "react";

interface CarouselProps {
  name?: string;
  autoAdvance?: boolean;
  autoAdvanceInterval?: number;
  children?: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({
  name = "Carousel",
  autoAdvance = true,
  autoAdvanceInterval = 5000,
  children,
}) => {
  const slides = React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const goTo = (index: number) => {
    setActiveIndex(((index % slides.length) + slides.length) % slides.length);
  };

  useEffect(() => {
    if (activeIndex >= slides.length) {
      setActiveIndex(0);
    }
  }, [slides.length, activeIndex]);

  useEffect(() => {
    if (!autoAdvance || slides.length <= 1) {
      return;
    }
    timerRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, Math.max(autoAdvanceInterval, 1000));
    return () => clearInterval(timerRef.current);
  }, [autoAdvance, autoAdvanceInterval, slides.length]);

  if (slides.length === 0) {
    return (
      <div className="flex min-h-[240px] w-full items-center justify-center border border-dashed border-zinc-300 bg-zinc-50 text-center text-sm text-zinc-500">
        Drag Hero components here to build the &ldquo;{name}&rdquo; carousel
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label={name}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            aria-hidden={index !== activeIndex}
          >
            {slide}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(activeIndex - 1)}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black shadow hover:bg-white"
          >
            &#8249;
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(activeIndex + 1)}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-black shadow hover:bg-white"
          >
            &#8250;
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex}
                onClick={() => goTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
