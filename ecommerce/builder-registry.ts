"use client";
import "@builder.io/widgets";
import { builder, Builder, withChildren } from "@builder.io/react";
import { Button } from "./components/ui/button";
import { Collection } from "./components/Collection/Collection";
import Counter from "./components/Counter/Counter";
import { Header } from "./components/Layout/Header";
import HeroWithChildren from "./components/Hero/HeroWithChildren";
import IconCard from "./components/Card/IconCard";
import ImageHero from "./components/Hero/ImageHero";
import ProductCard from "./components/Card/ProductCard";
import SplitHero from "./components/Hero/SplitHero";
import TextHero from "./components/Hero/TextHero";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.register("editor.settings", {
  styleStrictMode: false,
  allowOverridingTokens: true, // optional
  models: ["page"],
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
      { name: "Medium", value: "var(--font-size-medium, 14px)" },
      { name: "Large", value: "var(--font-size-large, 16px)" },
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

Builder.registerComponent(Counter, {
  name: "Counter",
  image:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRpZmYiPjxwYXRoIGQ9Ik0xMiAzdjE0Ii8+PHBhdGggZD0iTTUgMTBoMTQiLz48cGF0aCBkPSJNNSAyMWgxNCIvPjwvc3ZnPg==",
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
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvbHVtbnMtMiI+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSIzIiByeD0iMiIvPjxwYXRoIGQ9Ik0xMiAzdjE4Ii8+PC9zdmc+",
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
      name: "subTitle",
      type: "richText",
      defaultValue:
        "<p>Create impactful, online storefronts with a foundational React and Next.js design system and UI library for modern composable commerce websites.</p>",
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
      defaultValue: "Lets Get Started!",
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
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2stdXNlciI+PHBhdGggZD0iTTQgMTkuNXYtMTVBMi41IDIuNSAwIDAgMSA2LjUgMkgyMHYyMEg2LjVhMi41IDIuNSAwIDAgMSAwLTVIMjAiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjIiLz48cGF0aCBkPSJNMTUgMTNhMyAzIDAgMSAwLTYgMCIvPjwvc3ZnPg==",
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
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFsaWduLWNlbnRlciI+PGxpbmUgeDE9IjIxIiB4Mj0iMyIgeTE9IjYiIHkyPSI2Ii8+PGxpbmUgeDE9IjE3IiB4Mj0iNyIgeTE9IjEyIiB5Mj0iMTIiLz48bGluZSB4MT0iMTkiIHgyPSI1IiB5MT0iMTgiIHkyPSIxOCIvPjwvc3ZnPg==",
  inputs: [
    {
      name: "subTitle",
      type: "richText",
    },
    {
      name: "title",
      type: "string",
      defaultValue: "Composable UI Features",
      required: true,
    },
  ],
});

Builder.registerComponent(ProductCard, {
  name: "ProductCard",
  image:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNxdWFyZS1nYW50dC1jaGFydCI+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSIzIiByeD0iMiIvPjxwYXRoIGQ9Ik05IDhoNyIvPjxwYXRoIGQ9Ik04IDEyaDYiLz48cGF0aCBkPSJNMTEgMTZoNSIvPjwvc3ZnPg==",
  inputs: [
    {
      name: "product",
      type: "reference",
      model: "product-data",
      required: true,
      defaultValue: {
        "@type": "@builder.io/core:Reference",
        id: "b0196147be5d4e6388bbdff62ee3ae7d",
        model: "product-data",
      },
    },
    // {
    //   name: "product",
    //   type: "object",
    //   required: true,
    //   showIf: (options)
    //   subFields: [
    //     {
    //       name: "color",
    //       type: "string",
    //       required: true,
    //       defaultValue: "Jordan",
    //     },
    //     {
    //       name: "image",
    //       type: "file",
    //       required: true,
    //       defaultValue:
    //         "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F5c249595e3d44970a88805b335f91953",
    //     },
    //     {
    //       name: "name",
    //       type: "string",
    //       required: true,
    //       defaultValue: "Long Sleeve Sweatshirt in White",
    //     },
    //     {
    //       name: "price",
    //       type: "string",
    //       required: true,
    //       defaultValue: "$99",
    //     }
    //   ]
    // },
  ],
});

Builder.registerComponent(ImageHero, {
  name: "ImageHero",
  image:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWltYWdlIj48cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiByeT0iMiIvPjxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSIyIi8+PHBhdGggZD0ibTIxIDE1LTMuMDg2LTMuMDg2YTIgMiAwIDAgMC0yLjgyOCAwTDYgMjEiLz48L3N2Zz4=",
  inputs: [
    {
      name: "title",
      type: "string",
      required: true,
      defaultValue: "Let's Talk",
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
        "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F6d6fd240dcb6499cbab6cd138c125261",
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
      defaultValue: "Contact Us",
    },
    {
      name: "subTitle",
      type: "richText",
      defaultValue:
        "<p>Reach out to us for more information or with questions about Composable UI.</p>",
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
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFsaWduLXZlcnRpY2FsLXNwYWNlLWFyb3VuZCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjYiIHg9IjciIHk9IjkiIHJ4PSIyIi8+PHBhdGggZD0iTTIyIDIwSDIiLz48cGF0aCBkPSJNMjIgNEgyIi8+PC9zdmc+",
  inputs: [
    {
      name: "childBlocks",
      type: "uiBlocks",
      hideFromUI: true,
    },
    {
      name: "header",
      type: "string",
      defaultValue: "",
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
  image:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNxdWFyZS1hcnJvdy1kb3duLXJpZ2h0Ij48cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIi8+PHBhdGggZD0ibTggOCA4IDgiLz48cGF0aCBkPSJNMTYgOHY4SDgiLz48L3N2Zz4=",
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
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdhbGxlcnktaG9yaXpvbnRhbCI+PHBhdGggZD0iTTIgM3YxOCIvPjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxOCIgeD0iNiIgeT0iMyIgcng9IjIiLz48cGF0aCBkPSJNMjIgM3YxOCIvPjwvc3ZnPg==",
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

Builder.registerComponent(Header, {
  name: "Header",
});
