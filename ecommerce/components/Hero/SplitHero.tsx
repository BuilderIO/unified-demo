/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import Link from "next/link"
import { Button } from '../ui/button';

interface SplitHeroProps {
  imageAlignment: 'left' | 'right';
  title: string;
  description: any;
  image: string;
  altText: string;
  hasCTA: boolean;
  buttonText?: string;
  buttonLink?: any;
}

const SplitHero: React.FC<SplitHeroProps> = ({ imageAlignment, title, description, image, altText, hasCTA, buttonText, buttonLink }) => {
  const textContent = (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-10 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center max-md:max-w-full">
        <div className="flex flex-col mt-16 text-gray-800 max-md:mt-10 max-md:max-w-full">
          <h1 className="text-5xl font-black leading-[53px] max-md:max-w-full">{title}</h1>
          <span className="mt-3 text-xl leading-8 max-md:max-w-full" dangerouslySetInnerHTML={{ __html: description }}></span>
        </div>
          {hasCTA && 
            <Button variant="secondary" className="self-start my-8" asChild>
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>
          }
        </div>
      </div>
    </div>
  );

  const imageContent = (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          alt={altText}
          className="object-cover w-full aspect-[0.92] max-md:max-w-full"
        />
      </div>
    </div>
  );

  return (
    <div className="justify-center self-stretch mb-6">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {imageAlignment === 'left' ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </div>
    </div>
  );
};

export default SplitHero;