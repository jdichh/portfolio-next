import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Dichoso | Portfolio",
  description: "Jason Dichoso is a frontend web developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
    <link rel="manifest" href="/pwa/manifest.json" />
    <meta name="theme-color" content="#6e99c4"/>
      <body
        className={`${spaceGrotesk.className} bg-[#19181E] text-[#E9E9E9] relative max-w-[1920px] my-0 mx-auto pt-32 lg:pt-40`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
