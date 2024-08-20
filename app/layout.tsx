import type { Metadata } from "next";
import { Tienne } from "next/font/google";
import "./globals.css";
import ThemeProvide from "@/context/ThemeProvider";
import ScrollUp from "@/components/ScrollUp";
import { CryptoProvider } from "@/context/CryptoContext";
import { TrendingProvider } from "@/context/TrendingContext";
import { StorageProvider } from "@/context/StorageContext";
import Script from "next/script";
import '@/serviceWorkers';
import { useEffect } from "react";

const tienne = Tienne({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "BBA App",
  description: "Blockchain Buzz Africa App",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.ts')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json"/>
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
