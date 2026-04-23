import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yazan Bawaqna | Data, AI, Research, and Product",
  description:
    "My portfolio across data analysis, stakeholder work, AI/ML, research, policy, product projects, wildlife, and global perspective.",
  metadataBase: new URL("https://github.com/ymbawa26"),
  openGraph: {
    title: "Yazan Bawaqna | Data, AI, Research, and Product",
    description:
      "Portfolio spanning data analysis, stakeholder work, AI/ML exposure, civic projects, wildlife analytics, and global research.",
    images: ["/og.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0d0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
