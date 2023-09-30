"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  const ICON_DIMENSIONS = 40;
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.9;

  return (
    <section id="home" className="scroll-mt-[100rem]">
      <div className="flex flex-col justify-end items-end my-20">
        <motion.div
          className="text-right"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className={`${inter.className} font-semibold text-[#005959] text-4xl sm:text-5xl`}
          >
            Jason Dichoso
          </h1>
          <h2 className="text-lg sm:text-xl">Frontend Web Developer</h2>
        </motion.div>
        <motion.div
          className="flex gap-1 mt-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a
            href="https://github.com/jdichh/"
            target="_blank"
            aria-label="Button to my GitHub profile"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
            transition={{ duration: 0.075 }}
          >
            <Image
              src="/icons/github.svg"
              alt="Button to my GitHub profile"
              width={ICON_DIMENSIONS}
              height={ICON_DIMENSIONS}
              className="object-cover transition duration-150 ease-in-out rounded-sm border-[1px] border-[#111111] p-0.5"
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jason-dichoso-a97a0026a/"
            target="_blank"
            aria-label="Button to my LinkedIn profile"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
            transition={{ duration: 0.075 }}
          >
            <Image
              src="/icons/linkedin.svg"
              alt="Button to my LinkedIn profile"
              width={ICON_DIMENSIONS}
              height={ICON_DIMENSIONS}
              className="object-cover transition duration-150 ease-in-out rounded-sm border-[1px] border-[#111111] p-0.5"
            />
          </motion.a>
          <motion.a
            href="mailto:jpsdichoso21@gmail.com"
            aria-label="Button to my LinkedIn profile"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
            transition={{ duration: 0.075 }}
          >
            <Image
              src="/icons/mail.svg"
              alt="Button to send me an email"
              width={ICON_DIMENSIONS}
              height={ICON_DIMENSIONS}
              className="object-cover transition duration-150 ease-in-out rounded-sm border-[1px] border-[#111111] p-0.5"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
