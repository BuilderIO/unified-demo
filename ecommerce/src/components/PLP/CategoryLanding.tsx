"use client"
/**
 * This code was generated by Builder.io.
 */
import React, { useState, FC } from 'react';
import ProductCard from '@/src/components/Card/ProductCard';
import { CategoryFilter } from './CategoryFilter';
import { ColorFilter } from './ColorFilter';
import { SizeFilter } from './SizeFilter';
import { Pagination } from './Pagination';
import { RenderBuilderContent } from '../builder';
import { BuilderContent } from '@builder.io/react';
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '@/src/components/ui/accordion';

type CategoryLandingProps = {
  products: any;
  plpTiles: any;
}

const CategoryLanding: FC<CategoryLandingProps> = ({ products, plpTiles }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  return (
    <div className="box-border flex relative flex-col shrink-0">
      <div className="flex flex-col mt-4 w-full md:px-5 md:mt-10 md:max-w-full">
        <div className="md:max-w-full">
          <div className="flex gap-5 md:gap-8 max-sm:flex-col">
            <div className="flex flex-col  w-[31%] sm:min-w-56 lg:max-w-80 max-sm:w-full shrink-0">
              <div className="flex flex-col text-base tracking-wider text-black">
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
            <div className="flex flex-col max-sm:w-full">
              <div className="flex flex-col grow md:max-w-full">
                <div className="flex flex-row flex-wrap gap-3 justify-start items-start md:max-w-full">
                  {products.map((product: BuilderContent, index: any) => {
                    return (
                      <>
                        <ProductCard
                          key={index}
                          classes="box-border relative basis-1/2-gap-3 lg:basis-1/3-gap-3 shrink-1 grow-1"
                          product={product}
                        />
                        {index === 3 && plpTiles.length &&
                          <div
                            key={`${index}-ad-tile`}
                            className="flex flex-col text-base tracking-wider text-center box-border relative basis-1/2-gap-3 lg:basis-1/3-gap-3 shrink-1 grow-1" >
                            <RenderBuilderContent model="plp-tile" content={plpTiles[0]} />
                          </div>
                        }
                      </>
                    )
                  })}
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