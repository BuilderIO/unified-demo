import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import HeroWithChildren from "@/src/components/Hero/HeroWithChildren";

// ❖ HeroWithChildren
interface FigmaHeroWithChildren extends BaseFigmaProps {
  Header?: string;
}

figmaMapping({
  componentKey: "df1998bf6ffbd4f7a7f4005da8a0ea47b14a85a4",
  mapper(figma: FigmaHeroWithChildren) {
    return (
      <HeroWithChildren
        header={figma.Header ?? figma.$children[0]?.$children[0]?.$textContent}
        childBlocks={[figma.$children[0]?.$children[1]]}
        makeFullBleed={false}
      />
    );
  },
});
