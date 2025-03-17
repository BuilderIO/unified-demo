import { useEffect, useState } from "react";
import { getProduct } from "../../../lib/emproix/api";
import emporixConfig from "../../../config/emporix";
import ProductBox from "../ui/productBox";

interface EmporixProductProps {
  // Update prop name to match what's being passed
  emporixProductHandle?: string;
}

const EmporixProduct: React.FC<EmporixProductProps> = ({ 
  emporixProductHandle 
}) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      if (!emporixProductHandle) {
        // Update variable name throughout the component
        console.error("[EmporixProduct] No product handle provided");
        setError("No product handle provided");
        setLoading(false);
        return;
      }
      
      const cleanProductId = emporixProductHandle.replace(/[^a-zA-Z0-9]/g, '');
      
      setLoading(true);
      try {
        const data = await getProduct(emporixConfig, cleanProductId);
        setProduct(data);
      } catch (err) {
        console.error("[EmporixProduct] Error fetching Emporix product:", err);
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [emporixProductHandle]);

  if (loading) {
    return <div className="w-full text-center py-4">Loading product...</div>;
  }

  if (error || !product) {
    return <div className="w-full text-center py-4 text-red-500">Error loading product: {error || "Unknown error"}</div>;
  }

  // Extract price from potential locations in the product data
  let price = 0;
  try {
    // Try to find price in various possible locations
    if (product.mixins?.pricing?.price?.value) {
      price = product.mixins.pricing.price.value;
    } else if (product.mixins?.price?.value) {
      price = product.mixins.price.value;
    } else if (product.mixins?.productPrice?.value) {
      price = product.mixins.productPrice.value;
    } else {
      // Default fallback price if we can't find it
      price = 9999;
    }
  } catch (e) {
    console.warn("[EmporixProduct] Could not extract price from product data:", e);
    price = 9999; // Fallback price
  }

  // Process media items
  const processedMedia = product.media?.map((media: any) => {
    // Ensure URLs are HTTPS
    let imageUrl = media.url;
    if (imageUrl && imageUrl.startsWith('http:')) {
      imageUrl = imageUrl.replace('http:', 'https:');
    }
    
    return {
      image: imageUrl,
      altText: media.altText || product.name || "Product image",
    };
  }) || [];

  // If no media was found, add a placeholder
  if (processedMedia.length === 0) {
    processedMedia.push({
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, sans-serif' font-size='14' fill='%23999'%3ENo Image%3C/text%3E%3C/svg%3E",
      altText: "No product image available"
    });
  }

  const productData = {
    data: {
      handle: product.id || product.code,
      images: processedMedia,
      productName: product.name,
      price: price,
      colors: [],
      description: product.description,
    },
  };

  return (
    <div className="emporix-product">
      <ProductBox
        productData={productData}
        dataSource="Emporix"
      />
    </div>
  );
};

export default EmporixProduct; 