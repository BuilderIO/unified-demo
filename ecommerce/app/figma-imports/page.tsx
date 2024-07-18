import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import { headers } from 'next/headers';


interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const headersList = headers();
  const apiKey = headersList.get('x-env-NEXT_PUBLIC_BUILDER_API_KEY')!
  builder.init(apiKey || process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
  const builderModelName = "figma-imports";

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} options={{enrich: true}}/>
    </>
  );
}
