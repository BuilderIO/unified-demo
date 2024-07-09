import ProductHero from "@/components/ProductPage/ProductHero";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface ProductPageProps {
  params: {
    category: string;
  };
}

export default async function ProductPage(props: ProductPageProps) {
  const plpTileModel = "plp-tile";

  const plpTileContent = await builder
    // Get the page content from Builder with the specified options
    .get(plpTileModel, {
      query: {
        data: {
          category: props?.params?.category
        }
      }
    })
    // Convert the result to a promise
    .toPromise();

    // const productDetailsContent = await builder
    // // Get the page content from Builder with the specified options
    // .get("product-details-bottom", {
    //   userAttributes: {
    //     // Use the page path specified in the URL to fetch the content
    //     product: props?.params?.handle,
    //     options: { enrich: true }
    //   },
    // })
    // // Convert the result to a promise
    // .toPromise();

    console.log('Tile Content: ', plpTileContent)

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={plpTileContent} model={plpTileModel}/>
    </>
  );
}