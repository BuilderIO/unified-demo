/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Accordion from "@/src/components/Accordion/accordion";
import AlgoliaSearchBox from "@/src/components/AlgoliaSearchBox/AlgoliaSearchBox";
import BynderImage from "@/src/components/Blocks/BynderImage";
import CloudinaryImage from "@/src/components/Blocks/CloudinaryImage";
import IconCard from "@/src/components/Card/IconCard";
import ProductCard from "@/src/components/Card/ProductCard";
import { Collection } from "@/src/components/Collection/Collection";
import Counter from "@/src/components/Counter/Counter";
import CustomText from "@/src/components/CustomText";
import HeroCarousel from "@/src/components/HeroCarousel/HeroCarousel";
import HeroWithChildren from "@/src/components/Hero/HeroWithChildren";
import ImageHero from "@/src/components/Hero/ImageHero";
import SplitHero from "@/src/components/Hero/SplitHero";
import TextHero from "@/src/components/Hero/TextHero";
import UpsellPopup from "@/src/components/Popup/UpsellPopup";
import { Button } from "@/src/components/ui/button";

const heroImage =
  "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F61c4f304ac9448b1ad741b83de17e48a";
const denimImage =
  "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F0cde6f8ddd9d482fad53266f8ee0f3ce";
const builderLogo =
  "https://cdn.builder.io/static/media/builder-logo.bff0faae.png";
const headerLogo =
  "https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F692369ff646645349e68a86b43fc7a38";

const sampleProduct = {
  data: {
    handle: "gallery-sample-product",
    productName: "Studio Denim Jacket",
    price: 128,
    colors: [{ label: "Light wash" }],
    images: [
      {
        image: denimImage,
        altText: "Denim jacket product preview",
      },
    ],
  },
};

const navSections = [
  {
    title: "Heros",
    items: ["ImageHero", "SplitHero", "TextHero", "HeroWithChildren", "HeroCarousel"],
  },
  {
    title: "Cards",
    items: ["IconCard", "ProductCard"],
  },
  {
    title: "Commerce",
    items: ["Collection", "AlgoliaSearchBox"],
  },
  {
    title: "Media",
    items: ["CloudinaryImage", "BynderImage"],
  },
  {
    title: "Utility",
    items: ["Accordion", "Counter", "UpsellPopup", "Core:Button"],
  },
  {
    title: "Text",
    items: ["Custom Text"],
  },
];

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function ComponentSection({
  name,
  group,
  description,
  inputs,
  children,
}: {
  name: string;
  group: string;
  description: string;
  inputs: string;
  children: React.ReactNode;
}) {
  return (
    <section id={slugify(name)} className="scroll-mt-6 border-b border-zinc-200 bg-white">
      <div className="border-b border-zinc-200 bg-white px-5 py-4">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span>{group}</span>
          <span>/</span>
          <h2 className="text-2xl font-semibold text-black tracking-tight">{name}</h2>
        </div>
        <p className="mt-4 text-sm text-zinc-600">{description}</p>
        <p className="mt-2 text-xs uppercase tracking-[2px] text-zinc-500">
          Inputs <span className="normal-case tracking-normal text-zinc-700">{inputs}</span>
        </p>
      </div>
      <div className="bg-zinc-50 px-5 py-3 text-xs font-medium text-zinc-700">
        <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300 bg-white text-[10px]">
          1
        </span>
        Example
      </div>
      <div className="p-5">{children}</div>
    </section>
  );
}

function PlaceholderPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[180px] items-center justify-center rounded-md border border-dashed border-zinc-300 bg-white p-6 text-center text-sm text-zinc-500">
      {children}
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="mb-12 flex min-h-screen rounded-md border border-zinc-200 bg-white">
      <aside className="hidden w-64 shrink-0 border-r border-zinc-200 bg-zinc-50 md:block">
        <div className="sticky top-0 p-5">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[2px] text-rose-500">
              Builder CMS
            </p>
            <p className="text-xs text-zinc-500">Component Gallery</p>
          </div>
          <nav className="space-y-7" aria-label="Component gallery">
            {navSections.map((section) => (
              <div key={section.title}>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[2px] text-zinc-500">
                  {section.title}
                </p>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <a
                      key={item}
                      href={`#${slugify(item)}`}
                      className="block border-l-2 border-transparent px-3 py-1.5 text-sm font-medium text-zinc-700 hover:border-rose-500 hover:bg-rose-50 hover:text-rose-600"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <div className="border-b border-zinc-200 bg-white px-5 py-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[3px] text-zinc-500">Sections</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight">Component Gallery</h1>
              <p className="mt-3 max-w-3xl text-sm text-zinc-600">
                Live examples of the custom components registered in this repo for Builder.io content authoring.
              </p>
            </div>
            <span className="w-fit rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-600">
              16 components
            </span>
          </div>
        </div>

        <ComponentSection
          name="ImageHero"
          group="Heros"
          description="Full-width image hero with headline, rich text subtitle, alignment options, and a CTA button."
          inputs="title, alignment, backgroundImage, buttonText, buttonLink, subTitle, makeFullBleed"
        >
          <ImageHero
            title="SHOP ESSENTIALS"
            subTitle="<p>Shoppable essentials for your every day life.</p>"
            buttonText="Shop Now"
            buttonLink="/category/accessories"
            backgroundImage={heroImage}
            alignment="right"
            makeFullBleed={false}
          />
        </ComponentSection>

        <ComponentSection
          name="SplitHero"
          group="Heros"
          description="Two-column hero pairing editorial text with an image, configurable image side, split width, text alignment, and CTA."
          inputs="imageAlignment, textAlignment, splitWidth, image, altText, title, subTitle, hasCTA, buttonText, buttonLink, makeFullBleed"
        >
          <SplitHero
            imageAlignment="left"
            textAlignment="left"
            splitWidth="1/2"
            title="OUR COMMITMENT TO SUSTAINABILITY"
            subTitle="<p>Create impactful, bold silhouettes in our chic, cozy classics.</p>"
            image={denimImage}
            altText="Blue denim apparel"
            hasCTA={true}
            buttonText="Learn More"
            buttonLink="/about"
            makeFullBleed={false}
          />
        </ComponentSection>

        <ComponentSection
          name="TextHero"
          group="Heros"
          description="Centered text-only hero for short editorial statements or page introductions."
          inputs="title, subTitle"
        >
          <TextHero
            title="STEP INTO FRESH STYLES"
            subTitle="<p>Lightweight layers, polished basics, and accessories made for everyday wear.</p>"
          />
        </ComponentSection>

        <ComponentSection
          name="HeroWithChildren"
          group="Heros"
          description="Hero wrapper that accepts up to three Builder child blocks underneath a header."
          inputs="header, childBlocks, makeFullBleed"
        >
          <HeroWithChildren
            header="WHAT'S DIFFERENT ABOUT SHOPAHOLIC"
            childBlocks={[]}
            makeFullBleed={false}
          />
        </ComponentSection>

        <ComponentSection
          name="HeroCarousel"
          group="Heros"
          description="Empty carousel shell that Hero components can be dragged into. Renders dots and arrows for navigation and supports a configurable name and auto-advance timer."
          inputs="carouselName, autoAdvanceSeconds"
        >
          <HeroCarousel carouselName="Homepage Hero Carousel" autoAdvanceSeconds={5} />
        </ComponentSection>

        <ComponentSection
          name="IconCard"
          group="Cards"
          description="Small marketing card with icon, title, rich text description, alignment, and optional colored background."
          inputs="icon, altText, title, description, alignment, coloredBackground"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <IconCard
              icon={builderLogo}
              altText="Builder.io logo"
              title="Composable Content"
              description="<p>Give teams reusable blocks that match the storefront experience.</p>"
              alignment="center"
              coloredBackground={false}
            />
            <IconCard
              icon={builderLogo}
              altText="Builder.io logo"
              title="Visual Editing"
              description="<p>Preview components exactly as shoppers will see them.</p>"
              alignment="left"
              coloredBackground={true}
            />
            <IconCard
              icon={builderLogo}
              altText="Builder.io logo"
              title="Reusable Systems"
              description="<p>Build pages from well-defined component primitives.</p>"
              alignment="right"
              coloredBackground={false}
            />
          </div>
        </ComponentSection>

        <ComponentSection
          name="ProductCard"
          group="Cards"
          description="Product tile that can render products from Builder, Shopify, Swell, Commercetools, or Emporix."
          inputs="dataSource, product, shopifyProductHandle, swellProductHandle, commercetoolsProduct, emporixProductHandle"
        >
          <div className="max-w-xs">
            <ProductCard product={sampleProduct} dataSource="Builder" />
          </div>
        </ComponentSection>

        <ComponentSection
          name="Collection"
          group="Commerce"
          description="Horizontally scrolling product collection sourced from Builder product data and filtered by collection."
          inputs="collection"
        >
          <Collection collection="all" />
        </ComponentSection>

        <ComponentSection
          name="AlgoliaSearchBox"
          group="Commerce"
          description="Algolia-powered product search with category, color, and size refinements."
          inputs="none"
        >
          <AlgoliaSearchBox />
        </ComponentSection>

        <ComponentSection
          name="CloudinaryImage"
          group="Media"
          description="Custom image block that renders a selected Cloudinary asset from Builder's Cloudinary image editor input."
          inputs="cloudinaryOptions"
        >
          <div className="max-w-sm rounded-md border border-zinc-200 bg-white p-6">
            <CloudinaryImage
              cloudinaryOptions={{
                url: "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/Cloud%20Glyph/cloudinary_cloud_glyph_blue_png.png",
                width: 160,
                height: 120,
                alt: "Cloudinary logo",
                name: "Cloudinary logo",
              }}
            />
          </div>
        </ComponentSection>

        <ComponentSection
          name="BynderImage"
          group="Media"
          description="Custom image block that renders a selected Bynder asset with configurable image fit."
          inputs="bynderAsset, imageFit"
        >
          <div className="max-w-md overflow-hidden rounded-md border border-zinc-200 bg-white">
            <BynderImage
              imageFit="cover"
              bynderAsset={{
                assets: [
                  {
                    description: "Builder storefront asset",
                    files: {
                      webImage: {
                        url: heroImage,
                        width: 900,
                        height: 600,
                      },
                    },
                  } as any,
                ],
              }}
            />
          </div>
        </ComponentSection>

        <ComponentSection
          name="Accordion"
          group="Utility"
          description="Simple expandable content list for FAQs or dense page sections."
          inputs="items"
        >
          <Accordion
            items={[
              { title: "What can be edited?", content: "Titles, body content, images, and layout options." },
              { title: "Where is it registered?", content: "This component is registered in src/builder-registry.ts." },
              { title: "How is it used?", content: "Add it from Builder's insert menu and configure the item list." },
            ]}
          />
        </ComponentSection>

        <ComponentSection
          name="Counter"
          group="Utility"
          description="Interactive counter component with a configurable initial value."
          inputs="initialCount"
        >
          <Counter initialCount={3} />
        </ComponentSection>

        <ComponentSection
          name="UpsellPopup"
          group="Utility"
          description="Timed promotional modal with discount options, image, title, subtitle, and dismiss action."
          inputs="title, subTitle, delay, discountLabel, discounts, imageSrc, imageAlt"
        >
          <PlaceholderPreview>
            This component renders as a timed modal. The live modal is included here with a long delay so it does not interrupt browsing the gallery.
          </PlaceholderPreview>
          <UpsellPopup
            title="Special Offer"
            subTitle="Save up to 50%"
            delay={9999999}
            discountLabel="Select your discount:"
            discounts={[{ label: "15% Off" }, { label: "Free Shipping" }]}
            imageSrc={headerLogo}
            imageAlt="Builder.io logo"
          />
        </ComponentSection>

        <ComponentSection
          name="Core:Button"
          group="Utility"
          description="Project-styled Button override registered for Builder content with common storefront variants."
          inputs="variant, children"
        >
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="link">Link</Button>
          </div>
        </ComponentSection>

        <ComponentSection
          name="Custom Text"
          group="Text"
          description="Rich text renderer that rewrites configured placeholder links to referenced product URLs."
          inputs="text, links"
        >
          <div className="rounded-md border border-zinc-200 bg-white p-6 text-base leading-7">
            <CustomText
              text={'<p>Build content with inline product links like <a href="#featured-product">this featured product</a>.</p>'}
              links={[
                {
                  key: "featured-product",
                  label: "Studio Denim Jacket",
                  target: "_self",
                  product: { value: { data: { handle: "gallery-sample-product" } } },
                },
              ]}
            />
          </div>
        </ComponentSection>
      </main>
    </div>
  );
}
