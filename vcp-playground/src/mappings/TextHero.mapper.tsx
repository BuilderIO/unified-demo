import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import TextHero from "@/src/components/Hero/TextHero";

// ❖ TextHero
interface FigmaTextHeroProps extends BaseFigmaProps {
  Title?: string;
}

figmaMapping({
  componentKey: "9fe4060f538441a94effbb4fc38caf7989e7b66d",
  mapper(figma: FigmaTextHeroProps) {
    return (
      <TextHero title={figma.Title ?? figma.$children[0]?.$textContent ?? ""} />
    );
  },
});
