import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nathan Guianvarc'h - Portfolio",
  description: "Portfolio of Nathan Guianvarc'h",
  creator: "Nathan Guianvarc'h",
  keywords: ["Portfolio", "Nathan Guianvarc'h"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <head />
        <body>
          <NextUIProvider>{children}</NextUIProvider>
        </body>
      </html>
    </>
  );
}
