"use client";
import "@builder.io/widgets";
import { builder, Builder, withChildren } from "@builder.io/react";
import Accordion from "./components/Accordion/accordion";
import { Button } from "./components/ui/button";
import CloudinaryImage from "./components/Blocks/CloudinaryImage";
import { Collection } from "./components/Collection/Collection";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";
import HeroWithChildren from "./components/Hero/HeroWithChildren";
import IconCard from "./components/Card/IconCard";
import ImageHero from "./components/Hero/ImageHero";
import ProductCard from "./components/Card/ProductCard";
import SplitHero from "./components/Hero/SplitHero";
import TextHero from "./components/Hero/TextHero";
import UpsellPopup from "./components/Popup/UpsellPopup";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.register("editor.settings", {
  styleStrictMode: false,
  allowOverridingTokens: true, // optional
  designTokens: {
    colors: [
      { name: "Primary", value: "var(--color-primary, #000000)" },
      { name: "Secondary", value: "var(--color-secondary, #ffffff)" },
      { name: "Deconstructive", value: "var(--color-deconstructive, #18B4F4)" },
      { name: "Muted", value: "var(--color-muted, #C8E2EE)" },
      { name: "Accent", value: "var(--color-accent, #F35959)" },
      { name: "Energetic", value: "var(--color-energetic, #A97FF2)" },
      { name: "Background", value: "var(--color-background, #ffffff)" },
      { name: "Text", value: "var(--color-primary, #000000)" },
      { name: "Text Muted", value: "var(--color-muted, #e2e8f0)" },
      {
        name: "Background Light",
        value: "var(--color-background-light, #FAFAFA)",
      },
    ],
    spacing: [
      { name: "Large", value: "var(--space-large, 20px)" },
      { name: "Small", value: "var(--space-small, 10px)" },
      { name: "Tiny", value: "5px" },
    ],
    fontFamily: [{ name: "Primary", value: "var(--primary-font, Poppins)" }],
    fontSize: [
      { name: "Small", value: "var(--font-size-small, 12px)" },
      { name: "Medium", value: "var(--font-size-medium, 24px)" },
      { name: "Large", value: "var(--font-size-large, 36px)" },
    ],
    fontWeight: [
      { name: "Light", value: "var(--font-weight-light, 200)" },
      { name: "Normal", value: "var(--font-weight-regular, 400)" },
      { name: "Medium", value: "var(--font-weight-medium, 600)" },
      { name: "Bold", value: "var(--font-weight-bold, 800)" },
    ],
    letterSpacing: [
      { name: "Tight", value: "var(--letter-spacing-tight, -0.02em)" },
      { name: "Normal", value: "var(--letter-spacing-normal, 0em)" },
      { name: "Relaxed", value: "var(--letter-spacing-wide, 0.02em)" },
      { name: "Loose", value: "var(--letter-spacing-wide, 0.04em)" },
    ],
    lineHeight: [
      { name: "None", value: "var(--line-height-none, 1)" },
      { name: "Tight", value: "var(--line-height-tight, 1.2)" },
      { name: "Normal", value: "var(--line-height-normal, 1.5)" },
      { name: "Relaxed", value: "var(--line-height-relaxed, 1.8)" },
      { name: "Loose", value: "var(--line-height-loose, 2)" },
    ],
  },
});
Builder.register("insertMenu", {
  name: "Heros",
  items: [
    { name: "TextHero" },
    { name: "ImageHero" },
    { name: "SplitHero" },
    { name: "HeroWithChildren" },
  ],
  // priority: 2,
});
Builder.register("insertMenu", {
  name: "Cards",
  items: [{ name: "IconCard" }, { name: "ProductCard" }],
  // priority: 3,
});
if (Builder.isBrowser) {
  if (builder.editingModel === "homepage") {
    Builder.register("insertMenu", {
      name: "Layout",
      items: [
        { name: "Columns" },
        { name: "Builder:Carousel" },
        { name: "Collection" },
      ],
    });
  }
}
Builder.register("insertMenu", {
  name: "Popups",
  items: [{ name: "UpsellPopup" }],
});

Builder.registerComponent(Counter, {
  name: "Counter",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F000c4b516154412498592db34d340789",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(SplitHero, {
  name: "SplitHero",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F87697e0b85624a38a7535fff9bdb744b",
  inputs: [
    {
      name: "imageAlignment",
      type: "string",
      defaultValue: "right",
      enum: ["left", "right"],
      required: true,
    },
    {
      name: "textAlignment",
      type: "string",
      defaultValue: "left",
      enum: ["left", "center", "right"],
      required: true,
    },
    {
      name: "splitWidth",
      type: "string",
      defaultValue: "1/2",
      enum: [
        {
          label: "50 : 50",
          value: "1/2",
        },
        {
          label: "1 : 3",
          value: "1/3",
        },
      ],
      required: true,
    },
    {
      name: "image",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F0cde6f8ddd9d482fad53266f8ee0f3ce",
      required: true,
    },
    {
      name: "altText",
      type: "string",
      defaultValue: "blue jeans",
      required: true,
    },
    {
      name: "title",
      type: "longText",
      defaultValue: "OUR COMMITMENT TO SUSTAINABILITY",
      required: true,
    },
    {
      name: "subTitle",
      type: "richText",
      defaultValue:
        "<p>Create impactful, bold silhouettes in our chic, cozy classics</p>",
    },
    {
      name: "hasCTA",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "buttonLink",
      type: "url",
      showIf: (options) => {
        return options.get("hasCTA") == true;
      },
      defaultValue: "/",
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Learn More",
      showIf: (options) => {
        return options.get("hasCTA") == true;
      },
    },
    {
      name: "makeFullBleed",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

Builder.registerComponent(IconCard, {
  name: "IconCard",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2Fa1602969eefa459cbc1cc4e9bff96555",
  inputs: [
    {
      name: "alignment",
      type: "string",
      enum: ["center", "left", "right"],
      defaultValue: "center",
    },
    {
      name: "altText",
      type: "string",
    },
    {
      name: "coloredBackground",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "description",
      type: "richText",
      defaultValue:
        "<p>Give developers and marketers an AI-powered platform to quickly transform designs into optimized web and mobile experiences.</p>",
    },
    {
      name: "icon",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/static/media/builder-logo.bff0faae.png",
      required: true,
    },
    {
      name: "title",
      type: "string",
      defaultValue: "Builder.io",
      required: true,
    },
  ],
});

Builder.registerComponent(TextHero, {
  name: "TextHero",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F6c33301bb9e94d46ad293b704457b991",
  inputs: [
    {
      name: "subTitle",
      type: "richText",
    },
    {
      name: "title",
      type: "string",
      defaultValue: "STEP INTO FRESH STYLES",
      required: true,
    },
  ],
});
// const isProd = (process.env.NEXT_PUBLIC_BUILDER_API_KEY! === "a87584e551b6472fa0f0a2eb10f2c0ff")
// const defaultProductID = `${isProd ? "" : process.env.NEXT_PUBLIC_BUILDER_API_KEY!+"_"}b0196147be5d4e6388bbdff62ee3ae7d`;

Builder.registerComponent(ProductCard, {
  name: "ProductCard",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2Fb408305f7a2b481690ef9bea53e42db1",
  inputs: [
    {
      name: "dataSource",
      type: "text",
      enum: ["Shopify", "Commercetools", "Builder", "Swell"],
      defaultValue: "Builder",
    },
    {
      name: "product",
      type: "reference",
      model: "product-data",
      required: true,
      showIf: function (options: any) {
        return options.get("dataSource") === "Builder";
      },
      // defaultValue: {
      //   "@type": "@builder.io/core:Reference",
      //   "id": defaultProductID,
      //   "model": "product-data"
      // }
    },
    {
      name: "shopifyProductHandle",
      friendlyName: "Shopify Product",
      type: "ShopifyProductHandle",
      required: true,
      showIf: function (options: any) {
        return options.get("dataSource") === "Shopify";
      },
    },
    {
      name: "swellProductHandle",
      friendlyName: "Swell Product",
      type: "SwellProductHandle",
      required: true,
      showIf: function (options: any) {
        return options.get("dataSource") === "Swell";
      },
    },
    {
      name: "commercetoolsProduct",
      friendlyName: "Commercetools Product",
      type: "CommercetoolsProduct",
      required: true,
      showIf: function (options: any) {
        return options.get("dataSource") === "Commercetools";
      },
    },
  ],
});

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

Builder.registerComponent(withChildren(HeroWithChildren), {
  name: "HeroWithChildren",
  canHaveChildren: true,
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F2bbe97f46ba14868a6925faf5cbb8d18",
  inputs: [
    {
      name: "childBlocks",
      type: "uiBlocks",
      hideFromUI: true,
      defaultValue: [],
    },
    {
      name: "header",
      type: "string",
      defaultValue: "WHAT'S DIFFERENT ABOUT SHOPAHOLIC",
    },
    {
      name: "makeFullBleed",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

Builder.registerComponent(withChildren(Button), {
  name: "Button",
  canHaveChildren: true,
  defaultChildren: [
    {
      "@type": "@builder.io/sdk:Element",
      component: { name: "Text", options: { text: "<p>Click Me</p>" } },
    },
  ],
  childRequirements: {
    message: "You can only put Text or Image Icons inside a Button",
    query: {
      "component.name": { $in: ["Text"] },
    },
  },
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F5803f6cb27764a339296458c0056dc33",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "variant",
      type: "string",
      defaultValue: "default",
      enum: ["default", "secondary", "tertiary", "outline", "link"],
    },
  ],
});

Builder.registerComponent(Collection, {
  name: "Collection",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F1ae5db0ccbdb4f3caab13e10dc6d7e0c",
  inputs: [
    {
      name: "collection",
      type: "string",
      defaultValue: "all",
      enum: [
        {
          label: "Featured",
          value: "all",
        },
        {
          label: "Eyewear",
          value: "womens-eyewear",
        },
        {
          label: "Handbags",
          value: "handbags",
        },
      ],
    },
  ],
});

Builder.registerComponent(UpsellPopup, {
  name: "UpsellPopup",
  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2Fec614fc3c6674967a2368226efcf62b9",
  inputs: [
    { name: "title", type: "string", defaultValue: "Special Offer" },
    { name: "subTitle", type: "string", defaultValue: "Save up to 50%" },
    { name: "delay", type: "number", defaultValue: 1000 },
    {
      name: "discountLabel",
      type: "string",
      defaultValue: "Select your discount:",
    },
    {
      name: "discounts",
      type: "list",
      subFields: [
        { name: "label", type: "string" },
        { name: "icon", type: "file" },
        { name: "iconAlt", type: "string" },
      ],
    },
    {
      name: "imageSrc",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F692369ff646645349e68a86b43fc7a38",
    },
    { name: "imageAlt", type: "string", defaultValue: "Promotional Image" },
  ],
});

Builder.registerComponent(CloudinaryImage, {
  name: "CloudinaryImage",
  image:
    "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/Cloud%20Glyph/cloudinary_cloud_glyph_blue_png.png",
  inputs: [
    {
      name: "cloudinaryOptions",
      type: "cloudinaryImageEditor",
    },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(Accordion, {
  name: "Accordion",
  inputs: [
    {
      name: "items",
      type: "list",
      subFields: [
        { name: "title", type: "string", defaultValue: "Accordion Title" },
        {
          name: "content",
          type: "longText",
          defaultValue: "Accordion Content",
        },
      ],
      defaultValue: [
        { title: "Sample Title 1", content: "Sample Content 1" },
        { title: "Sample Title 2", content: "Sample Content 2" },
        { title: "Sample Title 3", content: "Sample Content 3" },
      ],
    },
  ],
});
