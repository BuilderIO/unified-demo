import { figmaMapping } from "@builder.io/dev-tools/figma";
import { Collection } from "@/src/components/Collection/Collection";

figmaMapping({
  componentKey: "cdd285abc6752847b63424a7d063a968c5e70330",
  mapper(figma) {
    return <Collection collection={figma.Collection || "Featured"} />;
  },
});
