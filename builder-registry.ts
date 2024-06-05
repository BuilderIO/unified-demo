"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import Hero from "@/components/Hero/Hero";
import { RegisteredComponent, register } from "@builder.io/sdk-react";
import SocialProof from "@/components/SocialProof/page";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


export const customComponents:RegisteredComponent[] = []


register("Counter", {
  name: Counter,
  items: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

// Builder.registerComponent(Counter, {
//   name: "Counter",
//   inputs: [
//     {
//       name: "initialCount",
//       type: "number",
//     },
//   ],
// });

register("editor.settings", {
  strictMode: true, // optional
  designTokens: {
    colors: [
      { name: "Brand Blue", value: "rgba(93, 150, 255, 1)" },
      { name: "Brand Red", value: "var(--red, #ff0000)" },
    ],
    spacing: [
      { name: "Large", value: "var(--space-large, 20px)" },
      { name: "Small", value: "10px" },
      { name: "Tiny", value: "5px" },
    ],
    fontFamily: [
      { name: 'Primary Font', value: 'Roboto, sans-serif' },
      { name: 'Serif Font', value: 'var(--serif-font, Times, serif)' },
    ]
  },
});

Builder.registerComponent(Header, {
  name: "Header",
  friendlyName:"Header Light",
  inputs: [
    {
      name: "logo",
      friendlyName:"Logo212",
      type: "file",
      allowedFileTypes: ["jpg", "jpeg", "png", "gif", "svg"],
      defaultValue: "https://via.placeholder.com/150",
    },
    {
      name: "title",
      type: "string",
      defaultValue: "My Blog",
    },
    {
      name: "description",
      type: "string",
      defaultValue: "My Blog Description",
    },
  ],
});

Builder.registerComponent(SocialProof, {
  name: "SocialProof",
  inputs: [
    {
      name: "partnerLogos",
      type: "list",
      subFields: [
        {
          name: "src",
          type: "file",
          allowedFileTypes: ["jpg", "jpeg", "png", "gif", "svg"],
        },
        {
          name: "alt",
          type: "string",
        },
        {
          name: "aspectRatio",
          type: "string",
        },
        {
          name: "width",
          type: "string",
        },
      ],
    },
  ],
});
// export const Tooltip: RegisteredComponent[]= [{
//   component: Tooltip,
//   name: "Tooltip",
//   inputs: [
//     {
//       name: "text",
//       type: "text",
//     },
//   ],
// }]
register("Footer", {
  name: Footer,
  items: [{ name: "Hero" }, { name: "Double Columns" }],
});

export const headerComponent: RegisteredComponent[] = [
  {
    component: Header,
    name: "Header",
    defaults: {
      bindings: {
        "component.options.logo": "state.header[0]",
      },
    },
    inputs: [
      {
        name: "logo",
        type: "file",
        allowedFileTypes: ["jpg", "jpeg", "png", "gif", "svg"],
      },
    ],
  },
];

const HerowithBuilderChildren = withChildren(Hero);

Builder.registerComponent(HerowithBuilderChildren, {
  name: "Hero",

  image:
    "https://cdn.builder.io/api/v1/image/assets%2Fba97271b72fa43f090695e7644d621f0%2F21cb5a9bad7d4a2f8f764cf389c408cd",
  inputs: [
    {
      name: "backgroundType",
      type: "enum",
      enum: [
        { label: "Video", value: "video" },
        { label: "Image", value: "image" },
      ],
      defaultValue: "image",
    },
    {
      name: "VideoSource",
      type: "file",
      allowedFileTypes: ["mp4", "webm", "ogv"],
      defaultValue: "",
      helperText: "Upload or select a file. Supports videos.",
      showIf: (options) => options.get("backgroundType") === "video",
    },
    {
      name: "videoOptions",
      type: "object",
      subFields: [
        { name: "autoPlay", type: "boolean", defaultValue: true },
        { name: "loop", type: "boolean", defaultValue: true },
        { name: "controls", type: "boolean", defaultValue: false },
        { name: "muted", type: "boolean", defaultValue: true },
      ],
      showIf: (options) => options.get("backgroundType") === "video",
    },
    {
      name: "imageSource",
      type: "file",
      allowedFileTypes: ["jpg", "jpeg", "png", "gif", "svg"],
      helperText: "Upload or select a file. Supports images",
      showIf: (options) => options.get("backgroundType") === "image",
    },
    {
      name: "imageOptions",
      type: "object",
      subFields: [
        { name: "alt", type: "text", defaultValue: "Hero background" },
      ],
      showIf: (options) => options.get("backgroundType") === "image",
    },
  ],
});

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "backgroundType",
      type: "string",
      enum: ["image", "video"],
      required: true,
    },
    {
      name: "block",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "any[]",
      },
      required: true,
    },
    {
      name: "imageOptions",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ alt: string; }",
      },
    },
    {
      name: "imageSource",
      type: "string",
      required: true,
    },
    {
      name: "videoOptions",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ autoPlay: boolean; loop: boolean; controls: boolean; muted: boolean; }",
      },
    },
    {
      name: "VideoSource",
      type: "string",
      required: true,
    },
  ],
});
