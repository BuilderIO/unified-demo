import { useEffect, useState } from "react";
import ProductBox from "../ui/productBox";

interface ProductCardProps {
  classes?: string;
  dataSource?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  classes,
  dataSource,
}) => {

  const [ product, setProduct ] = useState({});

  useEffect(() => {
    async function fetchContent() {
      await fetch("https://cdn.builder.io/api/v3/content/product-data?apiKey=a87584e551b6472fa0f0a2eb10f2c0ff&query.id=088c35a5a6914ac68b99a4ea12abba6a").then
      (async (res) => {
        const data = await res.json();
        setProduct(data.results[0]);
      });
      ;
    }
    fetchContent();
  }, []);


  return (
    <div
      className={`flex flex-col text-base tracking-wider text-center md:self-start self-center ${classes} relative w-72`}
    >
      {(dataSource === "Builder" || dataSource === "Shopstyle") && (
        <ProductBox productData={product} dataSource={dataSource} />
      )}
    </div>
  );
};

export default ProductCard;
