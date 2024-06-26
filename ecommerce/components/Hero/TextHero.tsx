/**
 * This code was generated by Builder.io.
 */
import React from 'react';

interface TextHeroProps {
  title: string;
  description: string;
}

const TextHero: React.FC<TextHeroProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-center px-16 mt-20 w-full text-gray-800 max-md:px-5 max-md:max-w-full">
      <h1 className="self-center text-3xl font-black leading-8">{title}</h1>
      <div className="mt-3 text-xl leading-8 text-center max-md:max-w-full" dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
};

export default TextHero;