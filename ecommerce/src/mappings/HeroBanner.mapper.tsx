import { figmaMapping } from "@builder.io/dev-tools/figma";
import HeroBanner from "@/components/HeroBanner/HeroBanner";

figmaMapping({
  componentKey: "c93589866792b34d70f9d632f7bf0b49e3cba13f",
  mapper(figma) {
    return (
      <HeroBanner
        title={
          figma.$findOneByName("Title")?.$children[0]?.$textContent ??
          "pit stop essentials"
        }
        introText={
          figma.$findOneByName("Intro Text")?.$textContent ??
          "An in-and-out trip to grab alcohol typically for  immediate consumption, and gas, tobacco, or snacks."
        }
        statistics={[
          {
            value:
              figma.$findOneByName("stat1")?.$findOneByName("copy")
                ?.$children[0]?.$textContent ?? "27%",
            label:
              figma.$findOneByName("stat1")?.$findOneByName("copy")
                ?.$children[1]?.$textContent ?? "of Trips",
          },
          {
            value:
              figma.$findOneByName("stat2")?.$findOneByName("copy")
                ?.$children[0]?.$textContent ?? "17%",
            label:
              figma.$findOneByName("stat2")?.$findOneByName("copy")
                ?.$children[1]?.$textContent ?? "of Alc Spend",
          },
        ]}
        highlightedText={figma.highlightedText ?? ""}
      />
    );
  },
});
