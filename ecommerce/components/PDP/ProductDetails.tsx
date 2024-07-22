"use client"
/**
 * This code was generated by Builder.io.
 */
import { FC, useState } from "react";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { rgbaToHex, capitalizeWord } from "../../lib/utils";
import { BuilderContent } from "@builder.io/react";
import Link from 'next/link';

type ColorOption = {
  label: string;
  color: string;
};

type SizeOption = {
  label: string;
};

type ImageOption = {
  image: string;
  altText: string;
};

type SpecificationItem = {
  material: string;
  care: string;
  details: string;
};

type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const ProductImage: FC<ProductImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

type ColorSelectorProps = {
  options: ColorOption[];
  selectedColor: string;
  onColorChange: (color: string) => void;
};

const ColorSelector: FC<ColorSelectorProps> = ({
  options,
  selectedColor,
  onColorChange,
}) => (
  <RadioGroup
    value={selectedColor}
    onValueChange={onColorChange}
    className="flex gap-3 items-center self-start mt-5"
  >
    {options?.map((option, index) => (
      <div key={index} className="flex items-center space-x-2">
        <RadioGroupItem
          value={option.label}
          id={`color-${option.label}`}
          className="sr-only"
        />
        <Label
          htmlFor={`color-${option.label}`}
          style={{backgroundColor: rgbaToHex(option.color)}}
          className={`w-10 h-10 rounded-full bg-[${rgbaToHex(option.color)}] cursor-pointer ${
            selectedColor === option.label
              ? "ring-2 ring-offset-2 ring-black"
              : ""
          }`}
        />
      </div>
    ))}
  </RadioGroup>
);

type ImageSelectorProps = {
  options: ImageOption[];
  selectedImage: {image: string, altText?: string};
  onImageChange: (image: string) => void;
};

const ImageSelector: FC<ImageSelectorProps> = ({
  options,
  selectedImage,
  onImageChange,
}) => {
  return (
  <RadioGroup
  // @ts-ignore
    value={selectedImage}
    onValueChange={onImageChange}
    className="flex grow gap-5 justify-start max-md:flex-wrap"
  >
    {options?.map((option, index) => (
      <div key={index} className={`shrink-0 rounded-lg flex overflow-hidden justify-center border-solid h-[119px] w-[136px] cursor-pointer ${
        selectedImage?.image == option.image ? "border border-black border-solid" : ""}`}>
        <RadioGroupItem 
        id={`image-${option.image}`}
        // @ts-ignore
        value={option}
        className="sr-only" >
        </RadioGroupItem>
        <Label
        htmlFor={`image-${option.image}`}
        className="flex align-center cursor-pointer">
          <img
            src={option.image}
            alt={option.altText}
          />
        </Label>
      </div>
    ))}
  </RadioGroup>
);
}

type SizeSelectorProps = {
  options: SizeOption[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
};

const SizeSelector: FC<SizeSelectorProps> = ({
  options,
  selectedSize,
  onSizeChange,
}) => (
  <RadioGroup
    value={selectedSize}
    onValueChange={onSizeChange}
    className="flex gap-3 mt-7 text-lg text-black whitespace-nowrap max-md:flex-wrap max-md:pr-5"
  >
    {options?.map((option, index) => (
      <div key={index}>
        <RadioGroupItem
          value={option.label}
          id={`size-${option.label}`}
          className="sr-only"
        />
        <Label
          htmlFor={`size-${option.label}`}
          className={`px-6 py-2.5 bg-zinc-100 cursor-pointer ${
            selectedSize === option.label
              ? "border border-black border-solid"
              : ""
          }`}
        >
          {option.label}
        </Label>
      </div>
    ))}
  </RadioGroup>
);

type SpecificationListProps = {
  details: SpecificationItem;
};

const SpecificationList: FC<SpecificationListProps> = ({ details = {} }) => (
  <div className="flex flex-col self-end lg:pl-8 mt-20 max-w-full text-black w-[474px] max-md:mt-10">
    <div className="text-xl font-semibold tracking-[4.2px] max-md:max-w-full">
      Features & Specifications
    </div>
    {Object.entries(details).map(([label, value], index) => {
      return(
      <div
        key={index}
        className={`flex gap-5 justify-between px-7 py-3 ${
          index % 2 === 0 ? "bg-zinc-100" : "bg-white"
        } max-md:flex-wrap max-md:px-5 max-md:max-w-full`}
      >
        <div className="text-lg font-medium tracking-wider">{capitalizeWord(label)}</div>
        <div className="my-auto text-base tracking-wide text-right">
          {value}
        </div>
      </div>
    )})}
  </div>
);

type ProductDetailsProps = {
  product: any;
};


const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product?.data?.colors?.[0]?.label || null);
  const [selectedSize, setSelectedSize] = useState(product?.data?.sizes?.[0]?.label || null);
  const [selectedImage, setSelectedImage] = useState(product?.data?.images?.[0]);
  
  
  return (
    <BuilderContent model="product-data" content={product}>
      {(productData) => {
        const colorOptions: ColorOption[] = productData?.colors;
        const sizeOptions: SizeOption[] = productData?.sizes;
        const specificationDetails: SpecificationItem = productData?.details;
        const imageOptions: ImageOption[] = productData?.images;

        return (
          <div className="flex flex-col mb-10">
            <div className="w-full max-md:max-w-full">
                <div className="flex gap-3 text-base text-neutral-400 m-2">
                  <Button variant="link" asChild>
                    <Link href={`/category/${productData?.category}`}>{capitalizeWord(productData?.category)}
                    </Link>
                    </Button>
                  {productData?.subCategory && <Button variant="link" className="flex-auto my-auto">/ {capitalizeWord(productData?.subCategory)}</Button>}
                  
                </div>
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col max-md:ml-0 md:w-1/2 w-full lg:max-h-80 relative">
                  <ProductImage
                    src={selectedImage?.image}
                    alt={selectedImage?.altText || ''}
                    className="border border-solid aspect-auto h-full border-zinc-300 max-md:max-w-full object-cover"
                  />
                   <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full mt-5">
                  <ImageSelector
                    options={imageOptions}
                    selectedImage={selectedImage}
                    onImageChange={setSelectedImage}
                  />
                </div>
                </div>
                <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-5 mt-2 md:mt-10 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[86%] md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow">
                            
                            <div className="text-2xl font-semibold text-center text-black tracking-[5.04px] mt-8">
                              {productData?.productName}
                            </div>
                            {/* Implement product reviews that can use the write api ? <div className="flex gap-3.5 mt-5">
                              <div className="flex gap-1.5 self-start">
                                <ProductImage
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c243aaf1171355040f420012a75a3459a8495c68440d34f5b7a0dc41d2675660?apiKey=a87584e551b6472fa0f0a2eb10f2c0ff&"
                                  alt="Star rating"
                                  className="shrink-0 border-2 border-black border-solid aspect-[1.09] fill-black stroke-[2px] stroke-black w-[13px]"
                                />
                                <ProductImage
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c243aaf1171355040f420012a75a3459a8495c68440d34f5b7a0dc41d2675660?apiKey=a87584e551b6472fa0f0a2eb10f2c0ff&"
                                  alt="Star rating"
                                  className="shrink-0 border-2 border-black border-solid aspect-[1.09] fill-black stroke-[2px] stroke-black w-[13px]"
                                />
                                <ProductImage
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3c69c7be7cb6d5258f4bdaef52927dad131960b8e7c1f7bdbda6a540afd3cd1?apiKey=a87584e551b6472fa0f0a2eb10f2c0ff&"
                                  alt="Star rating"
                                  className="shrink-0 w-3 border-2 border-black border-solid aspect-square fill-black stroke-[2px] stroke-black"
                                />
                                <ProductImage
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c243aaf1171355040f420012a75a3459a8495c68440d34f5b7a0dc41d2675660?apiKey=a87584e551b6472fa0f0a2eb10f2c0ff&"
                                  alt="Star rating"
                                  className="shrink-0 border-2 border-black border-solid aspect-[1.09] fill-black stroke-[2px] stroke-black w-[13px]"
                                />
                                <ProductImage
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a6be99470e82e897dda04321cb3bba54636160087ce1043f1c1591761fa095b?apiKey=a87584e551b6472fa0f0a2eb10f2c0ff&"
                                  alt="Star rating"
                                  className="shrink-0 border-2 border-black border-solid aspect-[1.09] stroke-[1.5px] stroke-black w-[13px]"
                                />
                              </div>
                              <div className="my-auto text-sm text-black">4.0</div>
                              <div className="flex-auto text-sm text-neutral-400">
                                (217 Reviews)
                              </div>
                            </div> */}
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[14%] max-md:ml-0 max-md:w-full">
                          <div className="self-stretch my-auto text-2xl font-semibold text-center text-black tracking-[5.04px] mt-8">
                            ${productData?.price}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-14 text-lg text-black max-md:mt-10 max-md:max-w-full" dangerouslySetInnerHTML={{ __html: productData?.description }}>
                    </div>
                    {selectedColor &&
                    <>
                      <div className="flex gap-5 justify-between self-start mt-11 text-black max-md:mt-10">
                        <div className="text-xl font-semibold tracking-[4.2px]">
                          Color
                        </div>
                        <div className="text-lg">{selectedColor}</div>
                      </div>
                      <ColorSelector
                        options={colorOptions}
                        selectedColor={selectedColor}
                        onColorChange={setSelectedColor}
                      />
                    </>}
                    {selectedSize &&
                    <>
                      <div className="flex gap-5 justify-between self-start mt-14 text-black whitespace-nowrap max-md:mt-10">
                        <div className="text-xl font-semibold tracking-[4.2px]">
                          Size
                        </div>
                        <div className="text-lg">{selectedSize}</div>
                      </div>
                      <SizeSelector
                        options={sizeOptions}
                        selectedSize={selectedSize}
                        onSizeChange={setSelectedSize}
                      />
                    </>}
                    <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
                  <Button
                    className="grow justify-center items-center px-5 py-4 mt-16 w-full text-lg font-semibold text-white bg-black tracking-[3.78px] max-md:mt-10 max-md:max-w-full"
                    onClick={() => {
                      console.log("Add to cart clicked");
                    }}
                  >
                    ADD TO CART
                  </Button>
                </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mt-1 w-full max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
               
                
              </div>
            </div> */}
            <SpecificationList details={specificationDetails} />
          </div>
        )
      }}
    </BuilderContent>
  );
};

export default ProductDetails;