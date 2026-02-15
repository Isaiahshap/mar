import type { Metadata } from "next";
import { Inter, Shrikhand } from "next/font/google";
import type { ReactNode } from "react";
import { LenisProvider } from "@/components/lenis-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shrikhand",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Mar Vilaseca",
  description: "Vocalist and composer in New York City."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${shrikhand.variable}`}>
      <body>
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
