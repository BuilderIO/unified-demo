import { useQuery } from "@tanstack/react-query";
import ProductCard from "../Card/ProductCard";

export function Collection(props: {
  // Faked for now
  collection: string;
}) {
  const useShopStyle = !(!props.collection || props.collection === "all");

  const products = useQuery<any[]>({
    queryKey: ["products", props.collection],
    queryFn: async () => {
      if (useShopStyle) {
        const defaultParams = {
          abbreviatedCategoryHistogram: "true",
          limit: "20",
          cat: props.collection,
          view: "web",
          useElasticsearch: "true",
          sorts: "Popular",
          pid: "shopstyle",
        };

        const url = "https://api.shopstyle.com/api/v2/products";
        const params = new URLSearchParams(defaultParams);
        return (await fetch(`${url}?${params}`).then((res) => res.json()))
          .products;
      }
      return (
        await fetch(
          "https://cdn.builder.io/api/v3/content/product-data?apiKey=f5348105e75441b59830f1e489577801&includeRefs=true&fields=data&limit=10"
        ).then((res) => res.json())
      ).results;
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