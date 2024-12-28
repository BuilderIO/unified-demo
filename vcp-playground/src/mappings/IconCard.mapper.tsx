import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import IconCard from "@/src/components/Card/IconCard";

// ❖ IconCard
interface FigmaIconCardProps extends BaseFigmaProps {
  Icon?: string;
  Title?: string;
  Description?: string;
  Alignment: "center" | "left" | "right";
}

figmaMapping({
  componentKey: "41d8f0857eeaf8760328fdfc07620326f1f761e4",
  mapper(figma: FigmaIconCardProps) {
    return (
      <IconCard
        icon={figma.Icon ?? "https://cdn.builder.io/static/media/builder-logo.bff0faae.png"}
        title={figma.Title ?? ""}
        description={figma.Description ?? ""}
        altText={figma.Title ?? ""}
        alignment={figma.Alignment ?? "center"}
      />
    );
  },
});
