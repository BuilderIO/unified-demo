"use server"
import ProductDetails from "@/components/PDP/ProductDetails";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface ProductPageProps {
  params: {
    handle: string;
  };
}

export default async function ProductPage(props: ProductPageProps) {
  const builderProductDataModel = "product-data";
  const builderProductDetailsModel = "product-details-bottom";


  const productData = await builder
    // Get the page content from Builder with the specified options
    .get(builderProductDataModel, {
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
    .get(builderProductDetailsModel, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        product: props?.params?.handle,
        options: { enrich: true }
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
        <ProductDetails product={productData}></ProductDetails>
      {productDetailsContent ? 
        <RenderBuilderContent content={productDetailsContent} model={builderProductDetailsModel} options={{enrich: true}}/>
        : null}
    </>
  );
}