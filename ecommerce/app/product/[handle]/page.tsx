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
  const builderProductDataModel = "product-details-bottom";
  const builderProductDetailsModel = "product-details-bottom";

  const productData = await builder
    // Get the page content from Builder with the specified options
    .get("product-data", {
      query: {
        data: {
          handle: props?.params?.handle
        }
      }
    })
    // Convert the result to a promise
    .toPromise();

    const productDetailsContent = await builder
    // Get the page content from Builder with the specified options
    .get("product-details-bottom", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        product: props?.params?.handle
      },
    })
    // Convert the result to a promise
    .toPromise();

    console.log('PRODUCT DATA: ', productData)

  return (
    <>
      {/* Render the Builder page */}
        <ProductHero productData={productData?.data}></ProductHero>
      {productDetailsContent ? 
        <RenderBuilderContent content={productDetailsContent} model={builderProductDetailsModel} />
        : null}
    </>
  );
}