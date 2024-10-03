import { figmaMapping } from "@builder.io/dev-tools/figma";
import SplitHero from "@/src/components/Hero/SplitHero";

figmaMapping({
  componentKey: "1143d39901c24e64dd2a65188ff027054138033f",
  mapper(figma) {
    return (
      <SplitHero
        altText="Jeans image"
        buttonText={
          figma.ButtonText ?? figma.$findOneByName("Button")?.$textContent
        }
        buttonLink="#"
        makeFullBleed={false}
        hasCTA={!!figma.$findOneByName("Button")}
        image={figma.$findOneByName("Jeans")?.$imageUrl ?? ""}
        imageAlignment="right"
        splitWidth="1/3"
        subTitle={
          figma.Subtitle ?? figma.$children[0]?.$children[1]?.$textContent
        }
        textAlignment="left"
        title={figma.Title ?? figma.$children[0]?.$children[0]?.$textContent}
      />
    );
  },
});
