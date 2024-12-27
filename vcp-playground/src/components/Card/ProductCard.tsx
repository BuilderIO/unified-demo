import ProductBox from "../ui/productBox";

interface ProductCardProps {
  product: any;
  classes?: string;
  dataSource?: string;
  shopifyProductHandle?: string;
  swellProductHandle?: string;
  commercetoolsProduct?: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  classes,
  dataSource,
}) => {
  if (dataSource === "Builder" && !product) {
    return <h3>Please select a product</h3>;
  }

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
