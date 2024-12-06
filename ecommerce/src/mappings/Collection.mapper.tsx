import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Collection } from "@/src/components/Collection/Collection";

// ❖ Collection
interface FigmaCollectionProps extends BaseFigmaProps {
  Collection: string;
}

figmaMapping({
  componentKey: "cdd285abc6752847b63424a7d063a968c5e70330",
  mapper(figma: FigmaCollectionProps) {
    return <Collection collection={figma.Collection || "all"} />;
  },
});
