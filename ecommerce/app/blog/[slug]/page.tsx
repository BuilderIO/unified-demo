import { builder } from "@builder.io/sdk";
// import { RenderBuilderContent } from "../../components/builder";
import { headers } from 'next/headers';

const headersList = headers();
builder.init(headersList.get('x-env-NEXT_PUBLIC_BUILDER_API_KEY')!);

interface PageProps {
  params: {
    slug: string[];
  };
}

export default async function Page(props: PageProps) {
//   const builderModelName = "page";

//   const content = await builder
//     // Get the page content from Builder with the specified options
//     .get(builderModelName, {
//       userAttributes: {
//         // Use the page path specified in the URL to fetch the content
//         urlPath: "/" + (props?.params?.page?.join("/") || "")
//       },
//     })
//     // Convert the result to a promise
//     .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <div>Welcome to our blog</div>
      {/* <RenderBuilderContent content={content} model={builderModelName} /> */}
    </>
  );
}
