import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import IconCard from "@/src/components/Card/IconCard";

// ❖ IconCard
interface FigmaIconCardProps extends BaseFigmaProps {
  Icon?: string;
  Title?: string;
  Description?: string;
}

figmaMapping({
  componentKey: "62dfa5b948acd53bc482428547a0f955a42885ac",
  mapper(figma: FigmaIconCardProps) {
    return (
      <IconCard
        icon={figma.Icon ?? "https://cdn.builder.io/static/media/builder-logo.bff0faae.png"}
        title={figma.Title ?? ""}
        description={figma.Description ?? ""}
        altText={figma.Title ?? ""}
      />
    );
  },
});
