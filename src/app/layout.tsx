import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KAFEin — Temukan Spot Nugas Ideal",
    template: "%s | KAFEin",
  },
  description:
    "Sistem rekomendasi kafe cerdas berbasis AI untuk mahasiswa. Temukan kafe dengan WiFi kencang, colokan banyak, dan suasana tenang di sekitar kampus Undip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
