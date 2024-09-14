import { figmaMapping } from "@builder.io/dev-tools/figma";
import ImageHero from "@/components/Hero/ImageHero";

figmaMapping({
  componentKey: "a7cb6769b6c983b9fab8ec86ace80cde205a3e4f",
  mapper(figma) {
    return (
      <ImageHero
        title={
          figma.Title ?? figma.$children[1]?.$children[0]?.$textContent ?? ""
        }
        subTitle="Discover our collection"
        buttonText={
          figma.buttonText ??
          figma.$findOneByName("Shop Now")?.$textContent ??
          ""
        }
        buttonLink="#"
        backgroundImage={figma.$children[0]?.$imageUrl ?? ""}
        alignment="center"
        makeFullBleed={false}
      />
    );
  },
});
