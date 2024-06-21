// "use client"
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";
import { AuthSlider } from "@/components/Layout/AuthSlider";

// Builder Public API Key set in .env file
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
        // Use the page path specified in the URL to fetch the content
        urlPath: "/",
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <div>Hello</div>
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
