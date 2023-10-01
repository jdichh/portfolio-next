"use client";

import React from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import ThemeSwitch from "./theme-switch";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  const ON_HOVER_SCALE = 1.075;
  const ON_TAP_SCALE = 0.925;

  return (
    <section id="home" className="scroll-mt-[100rem]">
      <div className="flex flex-col justify-end items-end my-20">
        <motion.div
          className="text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.175, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className={`${inter.className} text-emphasize text-4xl sm:text-5xl`}
          >
            Jason Dichoso
          </h1>
          <h2 className="text-lg sm:text-xl">Frontend Web Developer</h2>
        </motion.div>

        <motion.div
          className="flex gap-2 my-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.175 }}
        >
          <motion.a
            href="https://github.com/jdichh/"
            target="_blank"
            aria-label="Button to my GitHub profile"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
            transition={{ duration: 0 }}
            className="react-icons"
          >
            <AiFillGithub size={22} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jason-dichoso-a97a0026a/"
            target="_blank"
            aria-label="Button to my LinkedIn profile"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
            transition={{ duration: 0 }}
            className="react-icons"
          >
            <BiLogoLinkedin size={22} />
          </motion.a>
          <motion.a
            href="mailto:jpsdichoso21@gmail.com"
            aria-label="Button to send me an email"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
            transition={{ duration: 0 }}
            className="react-icons"
          >
            <SiGmail size={22} />
          </motion.a>
          <ThemeSwitch />
        </motion.div>
      </div>
    </section>
  );
}
