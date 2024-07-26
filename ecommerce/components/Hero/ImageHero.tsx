/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface ImageHeroProps {
  title: string;
  subTitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  alignment: 'left' | 'center' | 'right';
  makeFullBleed: boolean;
}

const ImageHero: React.FC<ImageHeroProps> = ({
  title,
  subTitle,
  buttonText,
  buttonLink,
  backgroundImage,
  alignment,
  makeFullBleed
}) => {
  const alignmentClasses = {
    left: 'md:items-start md:text-left',
    center: 'md:items-center md:text-center',
    right: 'md:items-end md:text-right',
  };

  return (
    <div className={`flex overflow-hidden rounded-md mt-4 relative flex-col justify-center ${alignmentClasses[alignment]} w-full min-h-[442px] max-md:pr-5 max-md:max-w-full ${makeFullBleed ? 'w-screen  ml-[calc(50%-50vw)] max-h-full' : ''}`}>
      <img
        loading="lazy"
        src={backgroundImage}
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className={`flex relative flex-col justify-center md:px-16 py-20 max-w-full md:w-2/3 max-md:px-5 items-center text-center ${alignmentClasses[alignment]}`}>
        <div className={`flex flex-col mt-8 mb-2.5 shadow-sm max-md:mr-1 max-md:max-w-full items-center text-center ${alignmentClasses[alignment]}`}>
          <div className="flex flex-col text-white max-md:max-w-full">
            <h2 className="mt-6 text-2xl tracking-[5.25px] max-md:max-w-full font-medium">
              {title}
            </h2>
            <p className="mt-2 text-2xl leading-9 max-md:max-w-full" dangerouslySetInnerHTML={{ __html: subTitle }}>
            </p>
          </div>
          <Button className="flex flex-col justify-center mt-8 max-w-full w-[134px]" variant="secondary" size="lg" asChild>
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageHero;