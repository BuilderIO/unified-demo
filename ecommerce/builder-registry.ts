"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import FullImageHero from "./components/Hero/FullImageHero";
import { Header } from "./components/Layout/Header";
import IconCard from "./components/Card/IconCard";
import ProductCard from "./components/Card/ProductCard";
import SplitHero from "./components/Hero/SplitHero";
import TextHero from "./components/Hero/TextHero";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

if (Builder.isBrowser) {
  if (builder.editingModel === 'homepage') {
    Builder.register('insertMenu',{
      name: 'Layout',
      items: [
        { name: 'Columns' }
      ],
    });
  }
}
Builder.register('insertMenu',{
  name: 'Heros',
  items: [
    { name: 'TextHero' },
    { name: 'FullImageHero' },
    { name: 'SplitHero' }
  ],
  priority: 2
});

Builder.register('insertMenu',{
  name: 'Cards',
  items: [
    { name: 'IconCard' },
    { name: 'ProductCard' }
  ],
  priority: 3
});

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(SplitHero, {
  name: "SplitHero",
  inputs: [
    {
      name: "imageAlignment",
      type: "string",
      defaultValue: "right",
      enum: ["left", "right"],
      required: true,
    },
    {
      name: "image",
      type: "file",
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7a4e831734a935f7272a7299c88ec9fc5b196c12930a374ab8772a8dcb8d9456?placeholderIfAbsent=true",
      required: true,
    },
    {
      name: "altText",
      type: "string",
      defaultValue: "Composable UI Open Source Storefront",
      required: true,
    },
    {
      name: "title",
      type: "longText",
      defaultValue: "Composable UI Open Source Storefront",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      defaultValue:
        "<p>Create impactful, online storefronts with a foundational React and Next.js design system and UI library for modern composable commerce websites.</p>",
      required: true,
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
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Lets Get Started!",
      showIf: (options) => {
        return options.get("hasCTA") == true;
      },
    },
  ],
});

Builder.registerComponent(IconCard, {
  name: "IconCard",
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
      required: true,
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
  inputs: [
    {
      name: "description",
      type: "html",
      required: true,
      defaultValue:
        "<p>Spin it up, extend it, make it your own. Composable UI Storefront is the fastest and easiest way for architects and developers to learn the best patterns for delivering composable commerce experiences.</p>",
    },
    {
      name: "title",
      type: "string",
      required: true,
      defaultValue: "Composable UI Features",
    },
  ],
});

Builder.registerComponent(ProductCard, {
  name: "ProductCard",
  inputs: [
    {
      name: "brand",
      type: "string",
      required: true,
      defaultValue: "Jordan",
    },
    {
      name: "image",
      type: "file",
      required: true,
      defaultValue:
        "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F5c249595e3d44970a88805b335f91953",
    },
    {
      name: "name",
      type: "string",
      required: true,
      defaultValue: "Long Sleeve Sweatshirt in White",
    },
    {
      name: "price",
      type: "string",
      required: true,
      defaultValue: "$99",
    },
  ],
});

Builder.registerComponent(FullImageHero, {
  name: "FullImageHero",
  inputs: [
    {
      name: "alignment",
      type: "string",
      enum: ["center", "left", "right"],
      required: true,
      defaultValue: "center"
    },
    {
      name: "backgroundImage",
      type: "file",
      required: true,
      defaultValue: "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F6d6fd240dcb6499cbab6cd138c125261"
    },
    {
      name: "buttonLink",
      type: "url",
      required: true,
      defaultValue: '/'
    },
    {
      name: "buttonText",
      type: "string",
      required: true,
      defaultValue: "Contact Us"
    },
    {
      name: "description",
      type: "string",
      required: true,
      defaultValue: "Reach out to us for more information or with questions about Composable UI."
    },
    {
      name: "title",
      type: "string",
      required: true,
      defaultValue: "Let's Talk"
    },
  ],
});