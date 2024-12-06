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

  if (!storeData) {
    return <div>Store not found</div>;
  }

  return (
    <div className="flex overflow-hidden flex-col self-stretch pb-7 my-auto rounded-lg border border-solid bg-zinc-100 border-zinc-300 min-w-[240px] w-[372px]">
      <img
        loading="lazy"
        src={storeData?.data?.storeImage}
        alt={storeData?.data?.storeName}
        className="object-contain w-full aspect-[1.69]"
      />
      <div className="flex flex-col items-start pr-9 pl-9 mt-6 w-full max-md:px-5">
        <div className="text-2xl font-semibold text-right text-black tracking-[4.83px]">
          {storeData?.data?.location}
        </div>
        <div className="flex gap-4 mt-3.5 text-lg text-black">
          <div className="w-[260px]">
            {storeData?.data?.address?.split("\n").map((line:string, index:number) => (
              <div key={index}>
                {line}
                {index < storeData.data.address.split("\n").length - 1 && (
                  <br />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {storeData && (
        <RenderBuilderContent content={storeData} model="store-data" />
      )}
    </div>
  );
}
