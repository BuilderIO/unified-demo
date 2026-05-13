import { useQuery } from "@tanstack/react-query";
import ProductCard from "../Card/ProductCard";

export function Collection(props: {
  // Faked for now
  collection: string;
}) {
  const useShopStyle = !(!props.collection || props.collection === "all");

  const products = useQuery<any[]>({
    queryKey: ["products", props.collection],
    retry: false,
    queryFn: async () => {
      try {
        if (useShopStyle) {
          const params = new URLSearchParams({ cat: props.collection });
          const response = await fetch(`/api/shopstyle?${params}`);
          if (!response.ok) return [];
          return (await response.json()).products ?? [];
        }

        const params = new URLSearchParams({
          apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY ?? "",
          includeRefs: "true",
          fields: "data",
          limit: "10",
        });
        const response = await fetch(
          `https://cdn.builder.io/api/v3/content/product-data?${params}`
        );
        if (!response.ok) return [];
        return (await response.json()).results ?? [];
      } catch {
        return [];
      }
    },
  });
  // Scrolling flex row of product cards
  return (
    <div className="flex flex-row overflow-auto min-h-96">
      {products.data?.map((product, index) => (
        <ProductCard
          classes="w-64 shrink-0 m-1 object-contain"
          key={`${product.id}-${index}`}
          dataSource={useShopStyle ? "Shopstyle" : "Builder"}
          product={
            useShopStyle
              ? {
                data: {
                  images: [{ image: product.image.sizes.Best.url }],
                  productName: product.name,
                  price: product.price,
                  colors: [{ label: product.color }],
                  handle: product.id,
                }
              }
              : product
          }
        />
      ))}
    </div>
  );
}
