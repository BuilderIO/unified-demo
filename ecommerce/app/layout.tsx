import { builder } from "@builder.io/sdk";
import { Header } from "@/src/components/Layout/Header";
import "./globals.css";
import Footer from "@/src/components/Layout/Footer";
import { RenderBuilderContent } from "@/src/components/builder";
import QueryProvider from "@/src/components/QueryProvider";
import Link from "next/link";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await import('isolated-vm');
  const locale="en-US"

  const headerContent = await builder
    .get("header-links", { fields: "data" , options: { locale }})
    .toPromise();

  const bannerContent = await builder.get("banner", {
    userAttributes: {loggedIn: true},
    options: {
      locale
    }
  }).toPromise();
  
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <main>
            {bannerContent && <RenderBuilderContent model="banner" content={bannerContent} data={{username: "superUser123"}} />}
            <Header headerContent={headerContent} />
            <nav style={{ display: "flex", gap: "12px", padding: "16px" }}>
              <Link href="/first">
                <button>First</button>
              </Link>

              <Link href="/second">
                <button>Second</button>
              </Link>

              <Link href="/third">
                <button>Third</button>
              </Link>

              <Link href="/fourth">
                <button>Fourth</button>
              </Link>
            </nav>
            {/* <div className="container">{children}</div> */}
            <Footer />
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
