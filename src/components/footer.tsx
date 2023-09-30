"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const ICON_DIMENSIONS = 40;
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.9;

  return (
    <motion.footer
      className="mt-3 border-t-2 w-full xl:w-[81.25%] border-[#111111]"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid grid-cols-3 items-center my-6 mx-3 font-semibold">
        <span className="text-base text-center flex justify-center sm:text-lg md:justify-end">
          Let's work together.
        </span>
        <div className="border-t-2 border-[#111111] mx-3" />
        <div className="flex gap-1 justify-center sm:text-lg md:justify-start uppercase">
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
            aria-label="Button to send me an email"
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
        </div>
      </div>
    </motion.footer>
  );
}
