import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import Head from "next/head";
import ChildComponent from "@/components/child/child";

// export const dynamic = "force-dynamic";
// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
interface PageProps {
  params: {
    page: string[];
  };
}
export const revalidate = 0;


export default async function Page(props: PageProps) {
  const builderModelName = "page";

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

    const data= 'data'
  return (
      <>
      <RenderBuilderContent content={content} model={builderModelName} context={data}  />
      </>
  );
}