import React from "react";
import { builder } from "@builder.io/sdk";
// See the full code: https://www.builder.io/c/docs/integrate-section-building?codeFramework=nextApp#add-an-announcement-bar-section-to-your-app
import { RenderBuilderContent } from "@/src/components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Page(props: { params: { page: any[] } }) {
  const content = await builder
    .get("help-center", {
      userAttributes: {
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model="help-center" />
    </>
  );
}
