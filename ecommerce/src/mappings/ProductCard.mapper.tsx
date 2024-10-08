import { figmaMapping } from "@builder.io/dev-tools/figma";
import ProductCard from "@/src/components/Card/ProductCard";

figmaMapping({
  componentKey: "d2f114400698059ab75be459a13d26a99d85f47b",
  mapper(figma) {
    const exampleProduct = {
      "@type": "@builder.io/core:Reference",
      id: "088c35a5a6914ac68b99a4ea12abba6a",
      model: "product-data",
    };
    return (
      <ProductCard
        commercetoolsProduct=""
        dataSource="Builder"
        product={exampleProduct}
        shopifyProductHandle=""
      />
    );
  },
});
