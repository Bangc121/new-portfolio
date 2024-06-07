import "./globals.css";

import { Inter, Open_Sans } from "next/font/google";

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JH's Portfolio",
  description: "front-end developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="w-full">
        <header>
          <div className="max-w-screen-xl mx-auto">
            <Navbar />
          </div>
        </header>
        <main className="w-full h-full flex justify-center">{children}</main>
      </body>
    </html>
  );
}
