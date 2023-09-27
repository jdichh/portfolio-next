"use client";

import React from "react";
import RouteHeader from "@/pages/RouteHeader";
import RouteFooter from "@/pages/RouteFooter";
import Image from "next/image";
import Head from "next/dist/shared/lib/head";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function index() {
  return (
    <>
      <Head>
        <title>Jason Dichoso's Blog</title>
      </Head>
      <RouteHeader title="Blog" />
      <motion.main
        className={`flex flex-col items-start w-full max-w-[700px] mx-auto p-4 ${spaceGrotesk.className}`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mt-20 lg:mt-40" />
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl mb-3">
            <span className="font-semibold">
              Kamusta! I'm Jason Dichoso, and this is where you can read just
              about any of my ramblings;{" "}
            </span>
            <span className="opacity-95">
              be it about web development, my job, books, or just life in general.
            </span>
          </h1>
          <p className="opacity-50">Posted on September 27, 2023</p>
        </div>
      </motion.main>
      <RouteFooter />
    </>
  );
}
