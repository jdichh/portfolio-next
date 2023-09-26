"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  const ICON_DIMENSIONS = 35;
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.9;

  return (
    <section id="home" className="scroll-mt-[100rem]">
      <div className="flex justify-end items-end flex-col my-20">
        <motion.div
          className="text-right"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1
            className={`${inter.className} font-medium text-[#6E99C4] text-4xl sm:text-5xl`}
          >
            Jason Dichoso
          </h1>
          <h2 className="text-md sm:text-xl">Frontend Web Developer</h2>
        </motion.div>
        <motion.div
          className="flex gap-2 mt-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <motion.a
            href="https://github.com/jdichh/"
            target="_blank"
            className="rounded-lg transition duration-100 ease-in-out hover:bg-[#6E99C4] border-[1px] p-0.5"
            aria-label="Button to my GitHub profile"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
          >
            <Image
              src="/hero-button-icons/github.svg"
              alt="Button to my GitHub profile"
              width={ICON_DIMENSIONS}
              height={ICON_DIMENSIONS}
              priority={true}
              className="object-cover rounded-md"
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jason-dichoso-a97a0026a/"
            target="_blank"
            className="rounded-lg transition duration-100 ease-in-out hover:bg-[#6E99C4] border-[1px] p-0.5"
            aria-label="Button to my LinkedIn profile"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
          >
            <Image
              src="/hero-button-icons/linkedin.svg"
              alt="Button to my LinkedIn profile"
              width={ICON_DIMENSIONS}
              height={ICON_DIMENSIONS}
              priority={true}
              className="object-cover rounded-md"
            />
          </motion.a>
          <motion.a
            href="documents/resume.pdf"
            target="_blank"
            className="rounded-lg transition duration-100 ease-in-out hover:bg-[#6E99C4] border-[1px] p-0.5"
            aria-label="Button to my LinkedIn profile"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
          >
            <Image
              src="/hero-button-icons/resume.svg"
              alt="Button to view my resume"
              width={ICON_DIMENSIONS}
              height={ICON_DIMENSIONS}
              priority={true}
              className="object-cover rounded-md"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
