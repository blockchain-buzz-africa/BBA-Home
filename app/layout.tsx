import type { Metadata } from "next";
import { Tienne } from "next/font/google"; // Import Tienne
import "./globals.css";
import ThemeProvide from "@/context/ThemeProvider";

const tienne = Tienne({ weight: ["400", "700"], subsets: ["latin"] }); // Add Tienne with specified weights

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
      </ThemeProvide>
    </html>
  );
}
