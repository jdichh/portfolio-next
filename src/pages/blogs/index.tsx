import React from "react";
import RouteHeader from "@/components/blog-components/route-header";
import RouteFooter from "@/components/blog-components/route-footer";
import Head from "next/dist/shared/lib/head";
import BlogItem from "@/components/blog-components/blog-item";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function index() {
  return (
    <>
      <Head>
        <title>Jason Dichoso | Blogs</title>
      </Head>
      <RouteHeader />
      <main className={`article-body ${spaceGrotesk.className}`}>
        <div className="mt-20" />
        <div className="mb-8">
          <h1 className="mb-3 text-xl sm:text-2xl">
            <span className="font-bold">
              Kamusta! I'm Jason, and this is where you can read just about any
              of my ramblings—
            </span>
            be it about web development, music, books, or just life in general.
          </h1>
        </div>
        <BlogItem />
      </main>
      <RouteFooter />
    </>
  );
}
