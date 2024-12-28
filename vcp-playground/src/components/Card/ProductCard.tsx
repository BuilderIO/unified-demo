import { useEffect, useState } from "react";
import ProductBox from "../ui/productBox";

interface ProductCardProps {
  classes?: string;
  dataSource?: string;
  product?: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  classes,
  dataSource,
  product,
}) => {
  dataSource = dataSource || "Builder";
  const [ productData, setProduct ] = useState(product);

  useEffect(() => {
    console.log('PRODUCT DATA', productData, product);
    async function fetchContent() {
      await fetch("https://cdn.builder.io/api/v3/content/product-data?apiKey=a87584e551b6472fa0f0a2eb10f2c0ff&query.id=088c35a5a6914ac68b99a4ea12abba6a").then
      (async (res) => {
        const data = await res.json();
        console.log('DATA', data.results[0]);
        setProduct(data.results[0]);
      });
      ;
    }
    if (!product) fetchContent();
  }, [product]);


  return (
    <div
      className={`flex flex-col text-base tracking-wider text-center md:self-start self-center ${classes} relative w-72`}
    >
      <ProductBox productData={productData} dataSource={dataSource} />
    </div>
  );
};

export default ProductCard;
