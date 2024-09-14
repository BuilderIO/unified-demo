import React from "react";
import ShopifyProduct from "@/components/ShopifyProduct/ShopifyProduct";
import Image from "next/image";

interface ProductCardProps {
  product: any;
  classes?: string;
  isShopify?: boolean;
  productHandle?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  classes,
  isShopify = false,
  productHandle,
}) => {
  // Retrieve product data from either the direct data binding or visual editor repeat
  let productData = product?.data || product?.value?.data;

  if (!product) {
    return <h3>Please select a product</h3>;
  }

  if (isShopify && !productHandle) {
    console.warn("Shopify productHandle is missing");
    return <h3>Product handle is required for Shopify products.</h3>;
  }

  return (
    <div
      className={`flex flex-col text-base tracking-wider text-center self-center ${classes} relative w-72`}
    >
      {isShopify ? (
        <ShopifyProduct
          productHandle={productHandle ? productHandle : productData?.handle}
        />
      ) : (
        <a href={`/product/${productData?.handle}`}>
          <div className="w-full aspect-[0.81] border-zinc-300 rounded-md overflow-hidden relative">
            <Image
              src={productData?.images[0]?.image}
              alt={productData?.images[0]?.altText}
              layout="fill"
              objectFit="cover"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col mt-5 w-full">
            <div className="flex gap-5 justify-between w-full text-black text-left">
              <div className="text-ellipsis overflow-hidden break-words">
                {productData?.productName}
              </div>
              <p className="font-semibold">${productData?.price}</p>
            </div>
            <p className="mt-2 text-left text-stone-500">
              {productData?.colors?.[0]?.label}
            </p>
          </div>
        </a>
      )}
    </div>
  );
};

export default ProductCard;
