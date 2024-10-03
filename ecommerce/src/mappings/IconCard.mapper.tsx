import { figmaMapping } from "@builder.io/dev-tools/figma";
import IconCard from "@/components/Card/IconCard";

figmaMapping({
  componentKey: "62dfa5b948acd53bc482428547a0f955a42885ac",
  mapper(figma) {
    return (
      <IconCard
        icon={figma.Icon}
        title={figma.Title ?? ""}
        description={figma.Description}
        altText={figma.Title}
      />
    );
  },
});
{figma.$children[0]?.$imageUrl}
        title={figma.Title ?? ""}
      />
    );
  },
});
