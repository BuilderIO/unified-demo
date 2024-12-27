import { Builder } from "@builder.io/react";
import ImageHero from "./components/ImageHero";

Builder.registerComponent(ImageHero, {
    name: "ImageHero",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F1da6aa719e0648b481ccd964186a4bcb",
    inputs: [
      {
        name: "title",
        type: "string",
        required: true,
        defaultValue: "SHOP ESSENTIALS",
      },
      {
        name: "alignment",
        type: "string",
        enum: ["center", "left", "right"],
        required: true,
        defaultValue: "center",
      },
      {
        name: "backgroundImage",
        type: "file",
        required: true,
        defaultValue:
          "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F61c4f304ac9448b1ad741b83de17e48a",
      },
      {
        name: "buttonLink",
        type: "url",
        required: true,
        defaultValue: "/",
      },
      {
        name: "buttonText",
        type: "string",
        required: true,
        defaultValue: "Shop Now",
      },
      {
        name: "subTitle",
        type: "richText",
        defaultValue: "<p>Shoppable essentials for your every day life.</p>",
      },
      {
        name: "makeFullBleed",
        type: "boolean",
        defaultValue: false,
      },
    ],
  });