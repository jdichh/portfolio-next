import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body
        className={`${inter.className} bg-[#131217] text-[#E8E8E8] relative h-[5000px]`}
      >
        <Header />
        {children}
        <h1>test</h1>
      </body>
    </html>
  );
}
