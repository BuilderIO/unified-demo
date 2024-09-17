"use client";
import { builder, Builder } from "@builder.io/react";
import { Collection } from "../components/Collection/Collection";
import Footer from "../components/Layout/Footer";
import { Header } from "../components/Layout/Header";
import HeroWithChildren from "../components/Hero/HeroWithChildren";
import IconCard from "../components/Card/IconCard";
import ImageHero from "../components/Hero/ImageHero";
import ProductCard from "../components/Card/ProductCard";
import SplitHero from "../components/Hero/SplitHero";
import TextHero from "../components/Hero/TextHero";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Collection, {
  name: "Collection",
  inputs: [
    {
      name: "collection",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(HeroWithChildren, {
  name: "HeroWithChildren",
});

Builder.registerComponent(IconCard, {
  name: "IconCard",
  inputs: [
    {
      name: "alignment",
      type: "string",
      enum: ["center", "left", "right"],
    },
    {
      name: "altText",
      type: "string",
      required: true,
    },
    {
      name: "coloredBackground",
      type: "boolean",
    },
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "icon",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(ImageHero, {
  name: "ImageHero",
  inputs: [
    {
      name: "alignment",
      type: "string",
      enum: ["center", "left", "right"],
      required: true,
    },
    {
      name: "backgroundImage",
      type: "string",
      required: true,
    },
    {
      name: "buttonLink",
      type: "string",
      required: true,
    },
    {
      name: "buttonText",
      type: "string",
      required: true,
    },
    {
      name: "makeFullBleed",
      type: "boolean",
      required: true,
    },
    {
      name: "subTitle",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(ProductCard, {
  name: "ProductCard",
  inputs: [
    {
      name: "classes",
      type: "string",
    },
    {
      name: "isShopify",
      type: "boolean",
    },
    {
      name: "product",
      type: "string",
      meta: {
        ts: "any",
      },
      required: true,
    },
    {
      name: "productHandle",
      type: "string",
    },
  ],
});

Builder.registerComponent(SplitHero, {
  name: "SplitHero",
  inputs: [
    {
      name: "altText",
      type: "string",
      required: true,
    },
    {
      name: "buttonLink",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "hasCTA",
      type: "boolean",
      required: true,
    },
    {
      name: "image",
      type: "string",
      required: true,
    },
    {
      name: "imageAlignment",
      type: "string",
      enum: ["left", "right"],
      required: true,
    },
    {
      name: "makeFullBleed",
      type: "boolean",
      required: true,
    },
    {
      name: "splitWidth",
      type: "string",
      enum: ["1/2", "1/3"],
      required: true,
    },
    {
      name: "subTitle",
      type: "string",
      meta: {
        ts: "any",
      },
      required: true,
    },
    {
      name: "textAlignment",
      type: "string",
      enum: ["center", "left", "right"],
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(TextHero, {
  name: "TextHero",
  inputs: [
    {
      name: "subTitle",
      type: "string",
      required: true,
    },
    {
      name: "title",
      type: "string",
      required: true,
    },
  ],
});
