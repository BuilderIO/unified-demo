import ShopifyProduct from "@/src/components/ShopifyProduct/ShopifyProduct";
import CommercetoolsProduct from "../CommercetoolsProduct/CommercetoolsProduct";
import ProductBox from "../ui/productBox";
import SwellProduct from "../SwellProduct/SwellProduct";
import SearchComponent from "../AlgoliaSearch/AlgoliaSearch";

interface ProductCardProps {
  product: any;
  classes?: string;
  dataSource?: string;
  shopifyProductHandle?: string;
  swellProductHandle?: string;
  commercetoolsProduct?: any;
  algoliaSearch?: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  classes,
  dataSource,
  shopifyProductHandle,
  commercetoolsProduct,
  swellProductHandle,
  algoliaSearch
}) => {
  // console.log("Algolia Search:", algoliaSearch);
  if (dataSource === "Algolia" && !algoliaSearch) {
    return (
      <div>
        <h3>Search Our Collection</h3>
        <SearchComponent />
      </div>
    );
  }

  if (dataSource==="Builder" && !product) {
    return <h3>Please select a product</h3>;
  }
  
  if (dataSource==="Shopify" && !shopifyProductHandle) {
    return <h3>Product handle is required for Shopify products.</h3>;
  }

  if (dataSource==="Swell" && !swellProductHandle) {
    return <h3>Product handle is required for Swell products.</h3>
  }

  if (dataSource==="Commercetools" && !commercetoolsProduct) {
    return <h3>Please select a Commercetools product</h3>;
  }

  return (
    <div
      className={`flex flex-col text-base tracking-wider text-center md:self-start self-center ${classes} relative w-72`}
    >
      {dataSource === "Algolia" && (
        <div>
          <h1>Search Our Collection</h1>
          <SearchComponent />
        </div>
      )}

      {dataSource === "Shopify" && (
        <ShopifyProduct
          shopifyProductHandle={
            shopifyProductHandle ? shopifyProductHandle : product?.handle
          }
        />
      )}
      {dataSource === "Swell" && (
        <SwellProduct
          swellProductHandle={
            swellProductHandle ? swellProductHandle : product?.handle
          }
        />
      )}
      {dataSource === "Commercetools" && (
        <CommercetoolsProduct commercetoolsProduct={commercetoolsProduct} />
      )}
      {(dataSource === "Builder" || dataSource === "Shopstyle") && (
        <ProductBox productData={product} dataSource={dataSource} />
      )}
    </div>
  );
};

export default ProductCard;
