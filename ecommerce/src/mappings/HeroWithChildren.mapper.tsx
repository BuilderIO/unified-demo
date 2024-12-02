import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import HeroWithChildren from "@/src/components/Hero/HeroWithChildren";

// ❖ HeroWithChildren
interface FigmaHeroWithChildrenProps extends BaseFigmaProps {
  Header?: string;
  childBlocks?: any[];
  makeFullBleed?: boolean;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "df1998bf6ffbd4f7a7f4005da8a0ea47b14a85a4",
  mapper(figma: FigmaHeroWithChildrenProps) {
    return (
      <HeroWithChildren 
        header={figma.Header ?? figma.$children[0]?.$children[0]?.$textContent}
        childBlocks={[figma.$children[0]?.$children[1]]}
        makeFullBleed={false} />
    );
  },
});
