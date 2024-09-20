import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< Updated upstream
import { ThemeProvider } from "@/components/ui/theme-provider";
=======
import { ThemeProvider } from "@/components/theme-provider";
import { NextUIProvider } from "@nextui-org/react";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
=======
    <>
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <head />
        <body>
          <NextUIProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </NextUIProvider>
        </body>
      </html>
    </>
>>>>>>> Stashed changes
  );
}
