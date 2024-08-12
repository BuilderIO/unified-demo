import React, { useState, useEffect } from "react";
import ProductCard from "../Card/ProductCard";
import { getProduct } from "@/lib/shopify/api";
import shopifyConfig from "@/config/shopify";

const ShopifyProduct = ({ productHandle }: { productHandle: string }) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const fetchedProduct = await getProduct(shopifyConfig, {
          handle: productHandle,
        });
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (productHandle) {
      fetchProduct();
    }
  }, [productHandle]);

  if (loading) return <div>Loading Shopify product...</div>;
  if (!product) return <div>No product found.</div>;

  const productData = {
    data: {
      images: product.images.map(
        (image: { src: string; altText: string }) => ({
          image: image.src,
          altText: image.altText || "Product image",
        })
      ),
      productName: product.title,
      price: Math.round(product.variants[0].priceV2.amount),
    },
  };

  return (
    <div className="shopify-product">
      <ProductCard
        classes="w-72" // Ensure consistent width
        product={productData}
      />
    </div>
  );
};

export default ShopifyProduct;
