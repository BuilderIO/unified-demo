import { builder } from "@builder.io/sdk";
import "./globals.css";
import QueryProvider from "@/src/components/QueryProvider";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="./globals.css" />
      </head>
      <body>
        <QueryProvider>
          <main>
            <div className="container">{children}</div>
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
