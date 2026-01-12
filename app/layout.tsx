import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "i2m | Innovation to Market",
  description: "Bridging the gap between innovation and market success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 backdrop-blur-sm bg-white/50">
          <div className="max-w-7xl mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} i2m. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
