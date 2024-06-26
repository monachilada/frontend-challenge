import type { Metadata } from "next";
import SWRProvider from "@/components/swrProvider";
import SortingProvider from "@/components/sortingProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigitalService Bund",
  description: "Front-end coding challenge completed by Mike Pierce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SWRProvider>
      <SortingProvider>
        <html lang="en">
          <body className={inter.className}>
            <main className="flex min-h-screen flex-col items-start justify-between p-24">
              {children}
            </main>
          </body>
        </html>
      </SortingProvider>
    </SWRProvider>
  );
}
