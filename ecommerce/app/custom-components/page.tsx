import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface CustomComponentsPage {
  params: {
    page: string[];
  };
}

export default async function Page(props: CustomComponentsPage) {
  const builderModelName = "custom-component-showcase";

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent model={builderModelName} />
    </>
  );
}