import type { Metadata } from "next";
import { Tienne } from "next/font/google";
import "./globals.css";
import ThemeProvide from "@/context/ThemeProvider";
import ScrollUp from "@/components/ScrollUp";
import { CryptoProvider } from "@/context/CryptoContext";
import { TrendingProvider } from "@/context/TrendingContext";
import { StorageProvider } from "@/context/StorageContext";
import Script from "next/script";

const tienne = Tienne({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "BBA App",
  description: "Blockchain Buzz Africa App",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
      <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EZE47FX50E"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EZE47FX50E');`,
          }}
        ></script>
      </head>
      <CryptoProvider>
        <TrendingProvider>
          <StorageProvider>
            <ThemeProvide>
              <body className={tienne.className}>
                {children}
                {/* Google Tags Manager script */}
                <Script
                  id="google-tags-manager"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <!-- Google tag (gtag.js) -->
                      <script async src="https://www.googletagmanager.com/gtag/js?id=G-EZE47FX50E"></script>
                      <script>
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-EZE47FX50E');
                      </script>
                    `,
                  }}
                />
              </body>
              <ScrollUp />
            </ThemeProvide>
          </StorageProvider>
        </TrendingProvider>
      </CryptoProvider>
    </html>
  );
}