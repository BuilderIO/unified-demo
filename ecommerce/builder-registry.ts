"use client"
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import { Hero } from "./components/Hero/Hero";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    {
      name: 'textPosition',
      type: 'string',
      enum: ['left', 'center', 'right'],
      defaultValue: 'center'
    },
    {
      name: 'theme',
      type: 'string',
      enum: ['light', 'dark'],
      defaultValue: 'dark'
    },
    {
      name: 'text',
      type: 'object',
      subFields: [
        {
          name: 'eyebrow',
          type: 'string',
        },
        {
          name: 'title',
          type: 'string',
          defaultValue: 'Add a title'
        },
        {
          name: 'body',
          type: 'longText'
        },
        {
          name: 'ctaButtonPrimary',
          type: 'object',
          subFields: [
            {
              name: 'text',
              type: 'text'
            },
            {
              name: 'url',
              type: 'url'
            }
          ]
        },
        {
          name: 'ctaButtonSecondary',
          type: 'object',
          subFields: [
            {
              name: 'text',
              type: 'text'
            },
            {
              name: 'url',
              type: 'url'
            }
          ]
        },
      ],
      defaultValue: {
        eyebrow: 'Add some eyebrow text',
        title: 'Add a title',
        body: 'Add some body text here and it can be much  longer',
        ctaButtonPrimary: {
            text: 'Primary',
            url: 'https://builder.io'
        },
        ctaButtonSecondary: {
          text: 'Secondary',
          url: 'https://builder.io'
      },

      }
    },
    {
      name: 'image',
      type: 'object',
      subFields: [
        {
          name: 'imageDesktop',
          type: 'object',
          subFields: [
            {
              name: 'src',
              type: 'file'
            },
            {
              name: 'alt',
              type: 'text'
            }
          ]
        },
        {
          name: 'imageMobile',
          type: 'object',
          subFields: [
            {
              name: 'src',
              type: 'file'
            },
            {
              name: 'alt',
              type: 'text'
            }
          ]
        },
      ]
    }
  ]
})
