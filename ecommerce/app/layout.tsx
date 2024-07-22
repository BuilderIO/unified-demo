
import { builder } from "@builder.io/sdk";
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";
import { Header } from "@/components/Layout/Header";
import "./globals.css";
import Footer from "@/components/Layout/Footer";
import { RenderBuilderContent } from "@/components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerContent = await builder.get('header-links', {fields: 'data'}).toPromise();
  const bannerContent = await builder.get('banner').toPromise();
  
  return (
    <html lang="en">
      <body>
        <main>
          <>
            {/* <HydrationOverlay> */}
              <RenderBuilderContent model="banner" content={bannerContent} />
              <Header headerContent={headerContent} />
              <div className="container">
                {children}
              </div>
              <Footer />
            {/* </HydrationOverlay> */}
          </>
        </main>
      </body>
    </html>
  );
}
