import { figmaMapping } from "@builder.io/dev-tools/figma";
import ImageHero from "@/src/components/Hero/ImageHero";

figmaMapping({
  componentKey: "4bd6da0f53b73a462b070b55dd055ce6a4cb3eca",
  mapper(figma) {
    return (
      <ImageHero
        alignment="right"
        backgroundImage={figma.$children[0]?.$imageUrl}
        buttonLink="#"
        makeFullBleed={false}
        buttonText={
          figma.buttonText ??
          figma.$findOneByName("Button")?.$children[0]?.$textContent ??
          ""
        }
        title={
          figma.Title ?? figma.$children[1]?.$children[0]?.$textContent ?? ""
        }
      />
    );
  },
});
