import Image from "next/image";

interface ProductBoxProps {
  productData: any;
  dataSource: string;
}

const ProductBox: React.FC<ProductBoxProps> = ({ productData, dataSource }) => {
  let product = productData?.data || productData?.value?.data;
  return (
    <a href={`/product/${product?.handle}`}>
      <div className="w-[200px] h-[300px] border border-zinc-300 rounded-md overflow-hidden relative">
        <Image
          src={product?.images?.[0]?.image}
          alt={product?.images?.[0]?.altText}
          fill={true}
          objectFit={dataSource==="Shopstyle" ? "contain" : "cover"}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col mt-5 w-full">
        <div className="flex gap-5 justify-between w-full text-black text-left">
          <div className="text-ellipsis overflow-hidden break-words">
            {product?.productName}
          </div>
          <p className="font-semibold">${product?.price}</p>
        </div>
        <p className="mt-2 text-left text-stone-500">
          {product?.colors?.[0]?.label}
        </p>
      </div>
    </a>
  );
};

export default ProductBox;
