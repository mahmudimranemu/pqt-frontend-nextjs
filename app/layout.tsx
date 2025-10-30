import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackClientApp } from "../stack/client";
import { Inter, Playfair_Display } from "next/font/google";
import "react-phone-number-input/style.css";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Property Quest Turkey",
  description: "Turkish Citizenship by Investment Programme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased`}>
        <StackProvider app={stackClientApp}>
          <StackTheme>
            <Navbar />
            {children}
            <Footer />
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
