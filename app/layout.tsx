import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvide from "@/context/ThemeProvider";


const inter = Inter({ subsets: ["latin"] });

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
       
        <body className={inter.className}>{children}</body>
      </ThemeProvide>
    </html>
  );
}
