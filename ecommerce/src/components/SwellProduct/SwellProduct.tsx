import React, { useState, useEffect } from "react";
import { getProduct } from "@/lib/swell/api";
import ProductBox from "../ui/productBox";

const SwellProduct = ({
  swellProductHandle,
}: {
  swellProductHandle: string;
}) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const fetchedProduct = await getProduct({
          handle: swellProductHandle,
        });
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("fetching product error", error);
      } finally {
        setLoading(false);
      }
    };

    if (swellProductHandle) {
      fetchProduct();
    }
  }, [swellProductHandle]);

  if (loading) return <div>Loading Swell product...</div>;
  if (!product) return <div>No product found. </div>;

  const productData = {
    data: {
      images: product.images.map(
        (image: { file: { url: string }; altText: string }) => ({
          image: image.file.url,
          altText: image.altText || "Product image",
        })
      ),
      productName: product.name,
      price: Math.round(product.price),
    },
  };

  return (
    <div className="swell-product">
      <ProductBox productData={productData} dataSource="Swell"/>
    </div>
  );
};

export default SwellProduct;
