import { figmaMapping } from "@builder.io/dev-tools/figma";
import IconCard from "@/components/Card/IconCard";

figmaMapping({
  componentKey: "41d8f0857eeaf8760328fdfc07620326f1f761e4",
  mapper(figma) {
    return (
      <IconCard
        alignment={
          figma.Alignment?.toLowerCase() as "center" | "left" | "right"
        }
        altText={figma.Title ?? ""}
        description={figma.Description}
        icon={figma.$children[0]?.$imageUrl}
        title={figma.Title ?? ""}
      />
    );
  },
});
