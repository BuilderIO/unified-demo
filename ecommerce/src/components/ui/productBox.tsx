'use client';

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

  return (
    <div className="w-full h-[300px] perspective">
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
          height: 100%;
        }

        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-container.flipped .flip-inner {
          transform: rotateY(180deg);
        }

        .flip-front,
        .flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.375rem;
          border: 1px solid #e4e4e7;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .flip-back {
          transform: rotateY(180deg);
          background: white;
        }
      `}</style>

      <div
        className={`flip-container ${isFlipped ? 'flipped' : ''}`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className="flip-inner">
          <div className="flip-front overflow-hidden relative">
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
            <div className="w-full h-full flex flex-col justify-between p-6 text-center">
              <p className="font-semibold text-2xl text-black">
                ${product?.price}
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsFlipped(false);
                }}
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <a className="block w-full mt-3" href={`/product/${product?.handle}`}>
        <div className="flex gap-3 justify-between w-full text-black text-left">
          <div className="text-ellipsis overflow-hidden break-words">
            {productName}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductBox;
