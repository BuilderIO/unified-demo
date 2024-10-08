/**
 * This code was generated by Builder.io.
 */
// "use client"
import React from "react";

interface ProductCardProps {
  product: any,
  classes: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, classes }) => {
 // product.data if its in a visual editor repeat, otherwise for a straight
 // data binding, use product.value.data
  let productData = product?.data || product?.value?.data;
  return (
    <div className={`flex flex-col grow text-sm leading-5 text-gray-800 m-2 max-md:mt-4 ${classes}`}>
      <a href={`/product/${productData?.handle}`} >
        <img loading="lazy" src={productData?.images[0]?.image} alt={`${productData?.images[0]?.altText}`} className="w-full aspect-[0.76] object-cover" />
        <div className="flex flex-col mt-2 h-full">
          <div className="mt-1">{productData?.productName}</div>
          <div className="text-xs text-stone-500 mt-1">{productData?.colors?.[0]?.label}</div>
          <div className="mt-1 justify-self-end">${productData?.price}</div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;