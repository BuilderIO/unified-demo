import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import ProductCard from "@/src/components/Card/ProductCard";

// ❖ ProductCard
interface FigmaProductCardProps extends BaseFigmaProps {
  exampleProduct?: {
    "@type": "@builder.io/core:Reference";
    id: string;
    model: string;
  }
}

figmaMapping({
  componentKey: "d2f114400698059ab75be459a13d26a99d85f47b",
  mapper(figma: FigmaProductCardProps) {
    const exampleProduct = figma.exampleProduct ?? {
      "@type": "@builder.io/core:Reference",
      id: "8b59d811aaf34adea5cf6d117860a826_088c35a5a6914ac68b99a4ea12abba6a",
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
