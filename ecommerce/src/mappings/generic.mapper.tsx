import { figmaMapping } from "@builder.io/dev-tools/figma";

figmaMapping({
  genericMapper(figma) {
    if (figma.$type === "FRAME" && figma.$name === "Section") {
      // If we have a FRAME node named "Section" then we will render it as a <section> element.
      return <section>{figma.$children}</section>;
    }

    // For other nodes, do not apply the generic
    // mapper and keep the default rendering behavior
    return undefined;
  },
});
