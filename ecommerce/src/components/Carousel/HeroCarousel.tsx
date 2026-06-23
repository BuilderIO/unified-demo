"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { BuilderBlocks } from "@builder.io/react";

interface Slide {
  blocks: any[];
}

interface HeroCarouselProps {
  slides?: Slide[];
  autoAdvanceInterval?: number;
  builderBlock?: any;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  slides = [],
  autoAdvanceInterval = 0,
  builderBlock,
}) => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const count = slides.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (!autoAdvanceInterval || count < 2) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % count);
    }, autoAdvanceInterval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoAdvanceInterval, count]);

  if (count === 0) {
    return (
      <div className="relative w-full min-h-[442px] flex items-center justify-center bg-muted/30 border-2 border-dashed border-muted-foreground/30 rounded-lg">
        <p className="text-muted-foreground text-sm">
          Add slides in Builder to get started
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`w-full transition-opacity duration-500 ${
            i === current ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          <BuilderBlocks
            child
            parentElementId={builderBlock?.id}
            blocks={slide.blocks ?? []}
            dataPath={`component.options.slides.${i}.blocks`}
          />
        </div>
      ))}

      {/* Navigation — dots and arrows */}
      {count > 1 && (
        <div className="flex items-center justify-center gap-4 py-4">
          <button
            aria-label="Previous slide"
            onClick={() => goTo(current - 1)}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-foreground/20 bg-background hover:bg-foreground/5 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="10 4 6 8 10 12" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-3 h-3 bg-foreground"
                    : "w-2 h-2 bg-foreground/30 hover:bg-foreground/60"
                }`}
              />
            ))}
          </div>

          <button
            aria-label="Next slide"
            onClick={() => goTo(current + 1)}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-foreground/20 bg-background hover:bg-foreground/5 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 4 10 8 6 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
