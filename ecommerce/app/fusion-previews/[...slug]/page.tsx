import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/src/components/builder";

export const dynamic = "force-dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    slug: string[];
  };
}

export default async function FusionPreviewPage(props: PageProps) {
  const urlPath = "/fusion-previews/" + (props?.params?.slug?.join("/") || "");

  const content = await builder
    .get("fusion-previews", {
      userAttributes: { urlPath },
    })
    .toPromise();

  return (
    <RenderBuilderContent
      content={content}
      model="fusion-previews"
    />
  );
}
