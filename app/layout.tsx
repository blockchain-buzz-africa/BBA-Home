import type { Metadata } from "next";
import { Tienne } from "next/font/google"; // Import Tienne
import "./globals.css";
import ThemeProvide from "@/context/ThemeProvider";
import ScrollUp from "@/components/ScrollUp";


const tienne = Tienne({
  subsets: ["latin"],
  weight: "400" // Default weight, consider this a workaround
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
      <ThemeProvide>
        <body className={tienne.className}>{children}</body>
        <ScrollUp />
      </ThemeProvide>
    </html>
  );
}
