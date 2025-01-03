import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import ImageHero from "@/src/components/Hero/ImageHero";

// ❖ Hero
interface FigmaHeroProps extends BaseFigmaProps {
  buttonText?: string;
  Title?: string;
}

figmaMapping({
  componentKey: "4bd6da0f53b73a462b070b55dd055ce6a4cb3eca",
  mapper(figma: FigmaHeroProps) {
    return (
      <ImageHero
        alignment="right"
        backgroundImage={
          figma.$findOneByName("Jeans")?.$imageUrl ??
          "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2Fe142f1995377427894ebe1d9be635214"
        }
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
  }
});
