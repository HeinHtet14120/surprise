import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Lato } from "next/font/google";
import { siteContent } from "@/config/site-content";
import "./globals.css";

// Elegant serif for titles
const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// Handwritten script for letters
const greatVibes = Great_Vibes({
  weight: '400',
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

// Clean sans-serif for body
const lato = Lato({
  weight: ['300', '400', '700'],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  icons: {
    icon: '/heart-favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${greatVibes.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
