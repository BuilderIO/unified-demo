import { builder } from "@builder.io/sdk";
import { Header } from "@/src/components/Layout/Header";
import "./globals.css";
import Footer from "@/src/components/Layout/Footer";
import { RenderBuilderContent } from "@/src/components/builder";
import QueryProvider from "@/src/components/QueryProvider";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerContent = await builder
    .get("header-links", { fields: "data" })
    .toPromise();
  const bannerContent = await builder.get("banner").toPromise();
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <main>
            {bannerContent && <RenderBuilderContent model="banner" content={bannerContent} />}
            <Header headerContent={headerContent} />
            <div className="container">{children}</div>
            <Footer />
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
