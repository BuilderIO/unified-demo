import { Inter } from "next/font/google";
import { Header } from "@/components/Layout/Header";
import { builder } from "@builder.io/sdk";
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
  const headerContent = await builder.get('header-links', {fields: 'data'}).toPromise();
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <>
            <HydrationOverlay>
              <Header headerContent={headerContent.data} />
              {children}
            </HydrationOverlay>
          </>
        </main>
      </body>
    </html>
  );
}
