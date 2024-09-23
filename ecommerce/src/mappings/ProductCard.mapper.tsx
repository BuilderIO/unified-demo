import { figmaMapping } from "@builder.io/dev-tools/figma";
import ProductCard from "@/components/Card/ProductCard";

const isProd = (process.env.NEXT_PUBLIC_BUILDER_API_KEY! === "a87584e551b6472fa0f0a2eb10f2c0ff")
const defaultProductID = `${isProd ? "" : process.env.NEXT_PUBLIC_BUILDER_API_KEY!+"_"}b0196147be5d4e6388bbdff62ee3ae7d`;

figmaMapping({
  componentKey: "d2f114400698059ab75be459a13d26a99d85f47b",
  mapper(figma) {
    return (
      <ProductCard
        product={""}
        dataSource={"Builder"}
        shopifyProductHandle={
          figma.$children[1]?.$children[1]?.$textContent
            ?.toLowerCase()
            .replace(/\s+/g, "-") ?? ""
        }
        commercetoolsProduct={''}
      />
    );
  },
});
