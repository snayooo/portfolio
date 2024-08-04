import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Nav from "@/components/Nav";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], style: ["italic", "normal"], subsets: ["latin", "latin-ext", "devanagari"] });

export const metadata: Metadata = {
  title: "snayo - Portfolio",
  description: "Hi there! Come and checkout my portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-950 !scroll-smooth">
      <body className={poppins.className}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
