import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { headers } from 'next/headers';


interface CustomComponentsPage {
  params: {
    page: string[];
  };
}

export default async function Page(props: CustomComponentsPage) {
  const headersList = headers();
  builder.init(headersList.get('x-env-NEXT_PUBLIC_BUILDER_API_KEY')!);
  const builderModelName = "custom-component-showcase";

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent model={builderModelName} />
    </>
  );
}