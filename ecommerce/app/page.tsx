import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Homepage(props: PageProps) {
  const builderModelName = "homepage";
  let loggedIn = true;

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/",
        options: {
          enrich: true
        }
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} options={{ enrich: true }} data={{loggedIn, partnerName: "United Airlines", programID: "12340"}}/>
    </>
  );
}

