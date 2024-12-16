import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Header } from "@/src/components/Layout/Header";

// ❖ Header
interface FigmaHeaderProps extends BaseFigmaProps {
}

figmaMapping({
  componentKey: "bf08eba01818598edd0d7ca65a48372fa4395184",
  mapper(figma: FigmaHeaderProps) {
    return <Header></Header>;
  },
});
