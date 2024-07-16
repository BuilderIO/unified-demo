/**
 * This code was generated by Builder.io.
 */
import React, {ComponentProps } from "react";
import { BuilderBlocks } from "@builder.io/react";

interface HeroWithChildrenProps {
  childBlocks: [],
  header: string,
  makeFullBleed: boolean
}

const HeroWithChildren: React.FC<HeroWithChildrenProps> = (props:any) => {
  return (
    <div className={`flex flex-col justify-between items-center p-20 bg-neutral-50 max-md:px-5 ${props.makeFullBleed ? 'w-screen  ml-[calc(50%-50vw)] max-h-full' : ''}`}>
      <h2 className="mt-6 text-2xl font-semibold text-center text-black tracking-[5.25px] max-md:max-w-full">
        {props.header}
      </h2>
      <BuilderBlocks
        key={props.builderBlock.id}
        child
        parentElementId={props.builderBlock && props.builderBlock.id}
        blocks={props.childBlocks}
        dataPath={`component.options.childBlocks`} />
    </div>
  );
};

export default HeroWithChildren;