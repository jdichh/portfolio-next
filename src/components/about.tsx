"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter ({ subsets: ["latin"] });

export default function About() {
  return (
    <section>
      <div className="flex justify-end items-end flex-col">
        <motion.div
          className="text-right"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1 className={`${inter.className} font-medium text-4xl text-[#6E99C4] sm:text-5xl`}>Jason Dichoso</h1>
          <h2 className="text-base">Aspiring Frontend Developer</h2>
        </motion.div>
        <div className="flex">
          <motion.a
            href="https://github.com/jdichh/"
            target="_blank"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image
              src="/github.svg"
              alt="Button to my GitHub profile"
              width="45"
              height="45"
              priority={true}
              className="object-cover"
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jason-dichoso-a97a0026a/"
            target="_blank"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image
              src="/linkedin.svg"
              alt="Button to my LinkedIn profile"
              width="45"
              height="45"
              priority={true}
              className="object-cover"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
