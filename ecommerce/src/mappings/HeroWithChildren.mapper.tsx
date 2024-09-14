import { figmaMapping } from "@builder.io/dev-tools/figma";
import HeroWithChildren from "@/components/Hero/HeroWithChildren";

figmaMapping({
  componentKey: "df1998bf6ffbd4f7a7f4005da8a0ea47b14a85a4",
  mapper(figma) {
    return (
      <HeroWithChildren
        header={figma.Header ?? figma.$children[0]?.$children[0]?.$textContent}
        childBlocks={[figma.$children[0]?.$children[1]]}
        makeFullBleed={false}
      />
    );
  },
});
