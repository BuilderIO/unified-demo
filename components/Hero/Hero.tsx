import { Video,  BuilderBlocks, Image } from '@builder.io/react';
import React, { useState, useEffect } from 'react';

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
//   children: React.FC
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
            <img src={imageSource} alt={imageOptions?.alt} /> 
          )}
        </div>
      );
};

export default Hero;
