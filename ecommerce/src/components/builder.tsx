"use client"
import { ComponentProps } from "react";
import { BuilderComponent, Builder, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import "../builder-registry";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

export function RenderBuilderContent(props: BuilderPageProps) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();///(Builder.isPreviewing || Builder.isEditing)
  // If "content" has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.

  // If the "content" is falsy and the page is
  // const deleteImage = () => {
  //   console.log('HJREALJWEALJS')
  //   fetch("https://cdn.builder.io/api/v1/assets/edefdb6d81b048bfb27e3975d366a8ae", {
  //     method: "DELETE",
  //     headers: {
  //       // header with private key
  //       // 'Access-Control-Allow-Origin':'*',
  //      "Authorization": "Bearer bpk-8579839ce3ed42fc98036168e024e52c"
  //     },
  //   })
  // }
  https://cdn.builder.io/api/v1/image/assets%2F
  if (props.content || isPreviewing) {
    return (
      <>
        {/* <button onClick={deleteImage}>Delete Image</button> */}
        <BuilderComponent{...props} />
      </>
    );
  }
  // If the "content" is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />;
}
