import ShopifyProduct from "@/src/components/ShopifyProduct/ShopifyProduct";
import CommercetoolsProduct from "../CommercetoolsProduct/CommercetoolsProduct";
import ProductBox from "../ui/productBox";

interface ProductCardProps {
  product: any;
  classes?: string;
  dataSource?: string;
  shopifyProductHandle?: string;
  commercetoolsProduct?: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  classes,
  dataSource,
  shopifyProductHandle,
  commercetoolsProduct,
}) => {
  // Retrieve product data from either the direct data binding or visual editor repeat
  

  if (dataSource==="Builder" && !product) {
    return <h3>Please select a product</h3>;
  }
  
  if (dataSource==="Shopify" && !shopifyProductHandle) {
    return <h3>Product handle is required for Shopify products.</h3>;
  }

  if (dataSource==="Commercetools" && !commercetoolsProduct) {
    return <h3>Please select a Commercetools product</h3>;
  }

  return (
    <div
      className={`flex flex-col text-base tracking-wider text-center md:self-start self-center ${classes} relative w-72`}
    >
      {(dataSource==="Shopify" && 
        <ShopifyProduct
          shopifyProductHandle={shopifyProductHandle ? shopifyProductHandle : product?.handle}
        />
      )
      }
      {(dataSource==="Commercetools") &&
        <CommercetoolsProduct
          commercetoolsProduct={commercetoolsProduct}
        />
      }
      {(dataSource==="Builder" || dataSource==="Shopstyle") && 
        <ProductBox productData={product} dataSource={dataSource} />
      }
    </div>
  );
};

export default ProductCard;
