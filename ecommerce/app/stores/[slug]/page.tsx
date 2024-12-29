import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/src/components/builder";
import React from "react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function StorePage(props: PageProps) {
  const { slug: storeSlug } = props.params;

  const storeData = await builder
    .get("store-data", {
      query: { "data.slug": storeSlug },
      prerender: false,
    })
    .toPromise();

  const storeLocations = await builder
    .get("store-locations", {
      userAttributes: {
        urlPath: `/${storeSlug}`,
      },
      prerender: false,
    })
    .toPromise();

  if (!storeData) {
    return <div>Store not found</div>;
  }

  return (
    <>
      <div>
        {storeData && (
          <RenderBuilderContent content={storeData} model="store-data" />
        )}
      </div>
      {storeLocations && (
        <RenderBuilderContent
          content={storeLocations}
          model="store-locations"
          data={{
            storeImage: storeData?.data?.storeImage,
            storeLocation: storeData?.data?.location,
            storeAddress: storeData?.data?.address,
            storeAbbreviation: storeData?.data?.abbreviation,
            storePhoneNumber: storeData?.data?.phoneNumber,
          }}
        />
      )}
    </>
  );
}
