"use client"
import { Inter } from "next/font/google";
import { Header } from "@/components/Layout/Header";
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from "@/ui/theme";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <ChakraProvider theme={theme}>
            <Header />
            {children}
          </ChakraProvider>
        </main>
      </body>
    </html>
  );
}
