"use client"

import React from "react";
import RouteHeader from "@/pages/RouteHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function index() {
  return (
    <>
      <RouteHeader title="Virtual Car Showroom" />
      <main
        className={`flex flex-col items-center w-full max-w-[1200px] mx-auto p-4 h-[7000px] ${spaceGrotesk.className}`}
      >
        <div className="pt-32 lg:pt-40" />
        
        <motion.figure
          className="bg-[#1F1E26] p-3 rounded-md"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/project/showroom.png"
            alt=""
            width={900}
            height={900}
            quality={95}
            className="rounded-md"
          />
          <figcaption className="mt-2 text-center">
            Screenshot of the virtual car showroom project.
          </figcaption>
        </motion.figure>
      </main>
    </>
  );
}
