"use client";

import React from "react";
import RouteHeader from "../RouteHeader";
import RouteFooter from "@/pages/RouteFooter";
import Head from "next/dist/shared/lib/head";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import Posts from "../PostsPage";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function index() {
  return (
    <>
      <Head>
        <title>Jason Dichoso | Blogs</title>
      </Head>
      <RouteHeader title="Blogs" />
      <motion.main
        className={`flex flex-col items-start w-full max-w-[700px] mx-auto p-4 ${spaceGrotesk.className}`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mt-20" />
        <div className="mb-8">
          <h1 className="mb-3 text-xl sm:text-2xl">
            <span className="font-semibold">
              Kamusta! I'm Jason, a recent IT graduate from the Philippines, and
              this is where you can read just about any of my ramblings—
            </span>
            <span className="opacity-90">
              be it about web development, music, books, or just life in general.
            </span>
          </h1>
        </div>

        <Posts />
      </motion.main>
      <RouteFooter />
    </>
  );
}
