import Image from "next/image";
import { useState } from "react";

interface ProductBoxProps {
  productData: any;
}

function getLocalizedText(value: any) {
  if (!value || typeof value !== "object") {
    return value ?? "";
  }

  return value["en-US"] ?? value.Default ?? Object.values(value).find((item) => typeof item === "string") ?? "";
}

const ProductBox: React.FC<ProductBoxProps> = ({ productData }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  let product = productData?.data || productData?.value?.data;

  const image = product?.images?.[0];
  const productName = getLocalizedText(product?.productName);

  if (!image?.image) {
    return null;
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Added to cart:", productName);
  };

  return (
    <div className="w-full">
      <style>{`
        @keyframes flipCard {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(180deg);
          }
        }
        @keyframes flipCardBack {
          from {
            transform: rotateY(180deg);
          }
          to {
            transform: rotateY(0deg);
          }
        }
        .flip-container {
          perspective: 1000px;
          cursor: pointer;
        }
        .flip-inner {
          position: relative;
          width: 100%;
          height: 300px;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-inner.flipped {
          animation: flipCard 0.6s ease-in-out forwards;
        }
        .flip-inner.unflipped {
          animation: flipCardBack 0.6s ease-in-out forwards;
        }
        .flip-front, .flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          border: 1px solid rgb(212, 212, 216);
          border-radius: 0.375rem;
          overflow: hidden;
        }
        .flip-back {
          transform: rotateY(180deg);
          background: white;
          padding: 1.5rem;
        }
        .flip-back-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          width: 100%;
        }
      `}</style>

      <div
        className="flip-container"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className={`flip-inner ${isFlipped ? "flipped" : "unflipped"}`}>
          <div className="flip-front">
            <Image
              src={image.image}
              alt={image.altText || productName || "Product image"}
              fill={true}
              style={{ objectFit: "cover" }}
              loading="lazy"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
            />
          </div>

          <div className="flip-back">
            <div className="flip-back-content">
              <div className="text-center">
                <p className="font-semibold text-lg text-black">
                  ${product?.price}
                </p>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-3 w-full">
        <div className="text-ellipsis overflow-hidden break-words text-black text-left">
          {productName}
        </div>
        <p className="mt-1 text-left text-stone-500">
          {product?.colors?.[0]?.label}
        </p>
      </div>
    </div>
  );
};

export default ProductBox;
