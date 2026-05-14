import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const breathing = localFont({
  src: "../public/fonts/Breathing.ttf",
  variable: "--font-breathing",
});

export const metadata: Metadata = {
  title: "Hotel Antofagasta",
  description: "Hotel Antofagasta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${breathing.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
