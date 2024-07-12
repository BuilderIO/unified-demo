"use client"
/**
 * This code was generated by Builder.io.
 */
import React, { useState, FC } from 'react';
import ProductCard from '@/components/Card/ProductCard';
import { CategoryFilter } from './CategoryFilter';
import { ColorFilter } from './ColorFilter';
import { SizeFilter } from './SizeFilter';
import { Pagination } from './Pagination';
import { RenderBuilderContent } from '../builder';
import { BuilderContent } from '@builder.io/react';
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '@/components/ui/accordion';

type CategoryLandingProps = {
  products: any;
  plpTiles: any;
}

const CategoryLanding: FC<CategoryLandingProps> = ({ products, plpTiles}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  console.log({products, plpTiles})

  return (
    <div className="box-border flex relative flex-col shrink-0">
      <div className="flex flex-col mt-9 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-base tracking-wider text-black max-md:mt-10">
                <Accordion type="multiple" className="w-full" defaultValue={["category", "color", "size"]}>
                  <AccordionItem value="category">
                    <AccordionTrigger>Category
                    </AccordionTrigger>
                    <AccordionContent>
                      <CategoryFilter
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                      />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="color">
                    <AccordionTrigger>Color
                    </AccordionTrigger>
                    <AccordionContent>
                      <ColorFilter
                        selectedColors={selectedColors}
                        setSelectedColors={setSelectedColors}
                      />
                    </AccordionContent>
                  </AccordionItem>
                 <AccordionItem value="size">
                    <AccordionTrigger>Size
                    </AccordionTrigger>
                    <AccordionContent>
                      <SizeFilter
                      selectedSizes={selectedSizes}
                      setSelectedSizes={setSelectedSizes}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-row flex-wrap gap-1.5 justify-center items-center max-md:max-w-full">
                  {products.map((product:BuilderContent, index:any) => (
                    <>
                      <ProductCard
                        key={index}
                        classes="box-border flex relative flex-col shrink-0 mx-auto w-[32%]"
                        product={product}
                      />
                      {index === 3 && plpTiles.length && 
                      <div className="box-border flex relative self-start flex-col shrink-0 mx-auto w-[32%]" >
                        <RenderBuilderContent model="plp-tile" content={plpTiles[0]} />
                      </div>
                      }
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default CategoryLanding;