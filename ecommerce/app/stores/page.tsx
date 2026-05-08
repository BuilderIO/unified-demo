import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/src/components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Page(props: { params: { page: any[] } }) {
  const content = await builder
    .get("store-page", {
      userAttributes: {
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model="store-page" />
    </>
  );
}
