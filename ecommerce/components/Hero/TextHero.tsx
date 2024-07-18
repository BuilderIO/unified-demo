/**
 * This code was generated by Builder.io.
 */
import React from 'react';

interface TextHeroProps {
  title: string;
  subTitle: string;
}

const TextHero: React.FC<TextHeroProps> = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col justify-center px-16 mt-8 w-full text-gray-800 max-md:px-5 max-md:max-w-full">
      <h2 className="self-center text-3xl leading-8">{title}</h2>
      <div className="mt-3 text-xl leading-8 text-center max-md:max-w-full" dangerouslySetInnerHTML={{ __html: subTitle }}></div>
      {/* <div className="mt-3 text-xl leading-8 text-center max-md:max-w-full">{subTitle}</div> */}

    </div>
  );
};

export default TextHero;