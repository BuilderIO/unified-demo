"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { BuilderBlocks } from "@builder.io/react";

interface Slide {
  blocks: any[];
}

interface HeroCarouselProps {
  slides: Slide[];
  autoAdvanceInterval: number;
  builderBlock?: { id: string };
}

const HeroCarousel: React.FC<HeroCarouselProps> = (props) => {
  const { slides = [], autoAdvanceInterval = 0, builderBlock } = props;
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = slides.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % count) + count) % count);
    },
    [count]
  );

  const prev = () => goTo(current - 1);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (autoAdvanceInterval > 0 && count > 1) {
      timerRef.current = setInterval(next, autoAdvanceInterval * 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoAdvanceInterval, count, next]);

  if (count === 0) {
    return (
      <div className="relative w-full min-h-64 flex items-center justify-center bg-muted/20 border-2 border-dashed border-muted text-muted-foreground text-sm">
        Drag hero sections here to add slides
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`w-full transition-opacity duration-500 ${
            index === current ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          <BuilderBlocks
            child
            parentElementId={builderBlock?.id}
            blocks={slide.blocks}
            dataPath={`component.options.slides.${index}.blocks`}
            className="w-full"
          />
        </div>
      ))}

      {count > 1 && (
        <>
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === current
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/75"
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
