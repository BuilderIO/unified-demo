import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/src/components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Homepage(props: PageProps) {
  const builderModelName = "homepage";

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        loggedIn: true,
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} options={{ enrich: true }} />
    </>
  );
}

