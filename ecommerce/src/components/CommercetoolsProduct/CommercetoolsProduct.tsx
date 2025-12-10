import ProductBox from "../ui/productBox";

const CommercetoolsProduct = ({ commercetoolsProduct }: { commercetoolsProduct: any }) => {
    const product = commercetoolsProduct?.data?.masterData?.current
    const productData = {
        data: {
        images: product?.masterVariant?.images?.map(
            (image: { url: string; altText?: string }) => ({
            image: image.url,
            altText: image.altText || "Product image",
            })
        ),
        productName: product?.name["en-US"],
        price: product?.masterVariant?.prices?.[0]?.value?.centAmount,
        },
    };
    return (
        <div className="commercetools-product">
        <ProductBox
            // classes="w-72" // Ensure consistent width
            productData={productData}
            dataSource="Commercetools"
        />
        </div>
    );
};

export default CommercetoolsProduct;
