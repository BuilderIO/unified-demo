/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Image from 'next/image';

interface ProductCardProps {
  image: string;
  brand: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, brand, name, price }) => {
  return (
    <div className="flex flex-col grow text-sm leading-5 text-gray-800 max-md:mt-4">
      <Image loading="lazy" src={image} alt={`${brand} ${name}`} className="w-full aspect-[0.76]" />
      <div className="flex flex-col mt-2">
        <div className="text-xs text-stone-500">{brand}</div>
        <div>{name}</div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;