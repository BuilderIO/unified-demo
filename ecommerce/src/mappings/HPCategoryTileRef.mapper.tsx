import { figmaMapping } from "@builder.io/dev-tools/figma";
import ShopByCategory from "@/components/ShopByCategory/ShopByCategory";

figmaMapping({
  componentKey: "64131e8d8ff76b31e823376ddba43c00c4571068",
  mapper(figma) {
    const categories = [
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/5b7b349cc77e808fbb142dd8c3e246bb7c6f1e75ccafe319e6d14b3977178878?apiKey=50b344f9116e4820a020e382058146e0&",
        name: "dresses",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/ba429aa5ff367b5f2d41a48416c1f914d6af034aab3e9c3368b5e7f70703a949?apiKey=50b344f9116e4820a020e382058146e0&",
        name: "Tops",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/8ad2ca50cb421b7a86beaf3d31921b5b09e1f29b54dd5a0b4c6cb946f7fbdee0?apiKey=50b344f9116e4820a020e382058146e0&",
        name: "denim",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/74569b65cb58920933e96187b7db8fe321ddbd3a223bdc6c5954bb3295f9d05a?apiKey=50b344f9116e4820a020e382058146e0&",
        name: "pants",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/4896b4d4809f0775196ba6ec3fe450a99aa1f72ba2d172b08e4daf1d933aca10?apiKey=50b344f9116e4820a020e382058146e0&",
        name: "tees",
      },
      {
        image:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/20598cf5cf8dedd65eee2e1a78bd4bd09e2967d95ccd0f3f981226f611883f65?apiKey=50b344f9116e4820a020e382058146e0&",
        name: "Shoes & Accessories",
      },
    ];
    return (
      <ShopByCategory
        title={figma.$children[0]?.$textContent ?? "Shop By Category"}
        categories={categories}
      />
    );
  },
});
