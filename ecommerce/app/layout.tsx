"use client"
import { Header } from "@/components/Layout/Header";
import { builder } from "@builder.io/sdk";
import { BuilderContent } from "@builder.io/react"
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
  const headerContent = await builder.get('header-links', {fields: 'data'}).toPromise();
  
  return (
    <html lang="en">
      <body>
        <main>
          <>
            <HydrationOverlay>
              <BuilderContent model="header-links" content={headerContent}>
                {(data) => {
                  return <Header headerContent={data} />
                }}
              </BuilderContent>
              <div className="px-16">
                {children}
              </div>
            </HydrationOverlay>
          </>
        </main>
      </body>
    </html>
  );
}
