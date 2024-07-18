import { Header } from "@/components/Layout/Header";
import { builder } from "@builder.io/sdk";
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";
import "./globals.css";
import Footer from "@/components/Layout/Footer";
import { headers } from 'next/headers';

const headersList = headers();
builder.init(headersList.get('x-env-NEXT_PUBLIC_BUILDER_API_KEY')!);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const headerContent = await builder.get('header-links', {fields: 'data'}).toPromise();
  
  return (
    <html lang="en">
      <body>
        <main>
          <>
            {/* <HydrationOverlay> */}
              <Header headerContent={headerContent} />
              <div className="md:px-16 px-4 mx-auto lg:w-4/5">
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
