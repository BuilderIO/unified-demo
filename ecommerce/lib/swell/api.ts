import swell from "swell-js";

swell.init(
  process.env.NEXT_PUBLIC_SWELL_STORE_ID as string,
  process.env.NEXT_PUBLIC_SWELL_PUBLIC_KEY as string
);

interface Product {
  id?: string;
  name?: string;
  slug?: string;
  price?: number;
  images?: any[];
}

export async function getAllProducts(limit?: number): Promise<Product[]> {
  const response = await swell.products.list({ limit });
  return response.results.filter((product: Product) => product.id);
}

export async function getAllProductPaths(limit?: number): Promise<string[]> {
  const response = await swell.products.list({ limit });
  return response.results
    .map((product) => product.slug)
    .filter((slug): slug is string => slug !== undefined);
}

export async function getProduct(options: {
  id?: string;
  handle?: string;
}): Promise<Product | null> {
  const product = options.handle
    ? await swell.products.get(options.handle)
    : options.id
    ? await swell.products.get(options.id)
    : null;

  if (!product) throw new Error("A product ID or handle is required");
  return product;
}
