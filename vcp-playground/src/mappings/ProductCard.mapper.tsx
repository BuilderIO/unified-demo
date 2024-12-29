import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import ProductCard from "@/src/components/Card/ProductCard";

// ❖ ProductCard
interface FigmaProductCardProps extends BaseFigmaProps {
}

figmaMapping({
  componentKey: "d2f114400698059ab75be459a13d26a99d85f47b",
  mapper(figma: FigmaProductCardProps) {
    
    return (
      <ProductCard />
    );
  },
});
