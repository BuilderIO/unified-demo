import { Video,  BuilderBlocks } from '@builder.io/react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroProps {
  backgroundType: 'video' | 'image';
  VideoSource: string;
  imageSource: string;
  videoOptions?: {
    autoPlay: boolean;
    loop: boolean;
    controls: boolean;
    muted: boolean;
  };
  imageOptions?: {
    alt: string
  }
block :any []
}

const Hero: React.FC<HeroProps> = ({ backgroundType, VideoSource, imageSource, videoOptions, imageOptions, block }) => {
    return (
        <div >
          {backgroundType === 'video' ? (
          <BuilderBlocks 
          fieldName={VideoSource}
          />
          ) : (
            <Image src={imageSource} alt={imageOptions?.alt ?? 'Image'} width={100} height={100} /> 
          )}
        </div>
      );
};

export default Hero;
