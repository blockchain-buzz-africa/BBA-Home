import type { Metadata } from "next";
import { Tienne } from "next/font/google"; // Import Tienne
import "./globals.css";
import ThemeProvide from "@/context/ThemeProvider";
import ScrollUp from "@/components/ScrollUp";
import { CryptoProvider } from "@/context/CryptoContext";
import { TrendingProvider } from "@/context/TrendingContext";
import { StorageProvider } from "@/context/StorageContext";

const tienne = Tienne({
  subsets: ["latin"],
  weight: "400", // Default weight, consider this a workaround
});

export const metadata: Metadata = {
  title: "BBA App",
  description: "Blockchain Buzz Africa Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CryptoProvider>
        <TrendingProvider>
          <StorageProvider>
            <ThemeProvide>
              <body className={tienne.className}>{children}</body>
              <ScrollUp />
            </ThemeProvide>
          </StorageProvider>
        </TrendingProvider>
      </CryptoProvider>
    </html>
  );
}
