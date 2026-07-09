"use client";

import React, { useEffect, useState } from "react";
import { BuilderBlockComponent } from "@builder.io/react";

interface HeroCarouselProps {
  carouselName?: string;
  autoAdvanceSeconds?: number;
  builderBlock?: any;
}

const HeroCarousel: React.FC<HeroCarouselProps> = (props) => {
  const slides = props.builderBlock?.children || [];
  const slideCount = slides.length;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex >= slideCount) {
      setActiveIndex(0);
    }
  }, [slideCount, activeIndex]);

  useEffect(() => {
    if (!props.autoAdvanceSeconds || props.autoAdvanceSeconds <= 0 || slideCount <= 1) {
      return;
    }
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, props.autoAdvanceSeconds * 1000);
    return () => clearInterval(timer);
  }, [props.autoAdvanceSeconds, slideCount]);

  const goTo = (index: number) => {
    setActiveIndex(((index % slideCount) + slideCount) % slideCount);
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      aria-roledescription="carousel"
      aria-label={props.carouselName || "Carousel"}
    >
      {slideCount === 0 ? (
        <div className="flex min-h-[320px] w-full items-center justify-center border-2 border-dashed border-zinc-300 bg-zinc-50 text-center text-sm text-zinc-500">
          Drag a hero component here to add a slide to &ldquo;
          {props.carouselName || "Carousel"}&rdquo;
        </div>
      ) : (
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((block: any, index: number) => (
            <div key={block.id || index} className="w-full shrink-0">
              <BuilderBlockComponent block={block} index={index} child />
            </div>
          ))}
        </div>
      )}

      {slideCount > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-lg text-black shadow hover:bg-white"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-lg text-black shadow hover:bg-white"
          >
            ›
          </button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/30 px-3 py-2">
            {slides.map((_: any, index: number) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HeroCarousel;
