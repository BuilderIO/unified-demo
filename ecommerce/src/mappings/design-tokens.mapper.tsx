import { figmaMapping } from "@builder.io/dev-tools/figma";

figmaMapping({
  designTokenMapper(token) {
    if (token === "black") {
      return "var(--company-black, #000)";
    }

    // For anything keep the same
    return undefined;
  },
});
