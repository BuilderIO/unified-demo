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
  const apiKey = headersList.get('x-env-NEXT_PUBLIC_BUILDER_API_KEY')!
  builder.init(apiKey || process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

  const builderModelName = "custom-component-showcase";

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent model={builderModelName} />
    </>
  );
}