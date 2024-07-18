import { builder } from "@builder.io/sdk";
import CategoryLanding from "@/components/PLP/CategoryLanding";
import { capitalizeWord } from "@/lib/utils";
import { headers } from 'next/headers';


interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage(props: CategoryPageProps) {
  const headersList = headers();
  builder.init(headersList.get('x-env-NEXT_PUBLIC_BUILDER_API_KEY')!);
  const plpTileModel = "plp-tile";
  const plpProductDataModel = "product-data";

  const plpTileContent = await builder
    // Get the page content from Builder with the specified options
    .getAll(plpTileModel, {
      userAttributes: {
        category: props?.params?.category.toLowerCase()
      }
    })

    const productDetailsContent = await builder
    // Get the page content from Builder with the specified options
    .getAll(plpProductDataModel, {
      query: {
        data: {
          category: props?.params?.category.toLowerCase()
        }
      }
    })

    console.log('Tile Content: ', plpTileContent)

  return (
    <>
      {/* Render the Builder page */}
        <div className="flex gap-3 self-center mt-5 mr-auto text-base text-neutral-400">
          <div className="grow">{capitalizeWord(props?.params?.category)}</div>
        </div>
        <div className="self-center mt-5 text-4xl font-semibold text-black tracking-[7.14px] max-md:max-w-full">
          {props?.params?.category.toUpperCase()}
        </div>
      <CategoryLanding products={productDetailsContent} plpTiles={plpTileContent}/>
    </>
  );
}