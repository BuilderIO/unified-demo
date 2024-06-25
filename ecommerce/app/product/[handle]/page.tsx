import ProductHero from "@/components/ProductPage/ProductHero";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface ProductPageProps {
  params: {
    handle: string;
  };
}

export default async function ProductPage(props: ProductPageProps) {
  const builderModelName = "product-details-bottom";
    console.log('HELLO ', props?.params)
  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        product: props?.params?.handle
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
        <ProductHero></ProductHero>
      {content ? 
        <RenderBuilderContent content={content} model={builderModelName} />
        : null}
    </>
  );
}