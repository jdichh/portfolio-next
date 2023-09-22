"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-[100rem]">
      <div className="flex justify-end items-end flex-col">
        <motion.div
          className="text-right"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className={`${inter.className} font-medium text-[#6E99C4] text-4xl sm:text-5xl`}>Jason Dichoso</h1>
          <h2 className="text-md sm:text-xl">Front-End Web Developer</h2>
        </motion.div>
        <motion.div
          className="flex gap-2 mt-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <a
            href="https://github.com/jdichh/"
            target="_blank"
            className="transition duration-150 ease-in-out rounded-sm hover:bg-[#6E99C4]"
            aria-label="Button to my GitHub profile"
          >
            <Image
              src="/hero-button-icons/github.svg"
              alt="Button to my GitHub profile"
              width="40"
              height="40"
              priority={true}
              className="object-cover"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jason-dichoso-a97a0026a/"
            target="_blank"
            className="transition duration-150 ease-in-out rounded-sm hover:bg-[#6E99C4]"
            aria-label="Button to my LinkedIn profile"
          >
            <Image
              src="/hero-button-icons/linkedin.svg"
              alt="Button to my LinkedIn profile"
              width="40"
              height="40"
              priority={true}
              className="object-cover"
            />
          </a>
          <a
            href="/documents/resume.pdf"
            target="_blank"
            className="transition duration-150 ease-in-out rounded-sm hover:bg-[#6E99C4]"
            aria-label="Button to my Resume document"
          >
            <Image
              src="/hero-button-icons/resume.svg"
              alt="Button to my Resume document"
              width="40"
              height="40"
              priority={true}
              className="object-cover"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
