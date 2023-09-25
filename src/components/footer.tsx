"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const ICON_DIMENSIONS = 40
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.9;

  return (
    <motion.footer
      className="mt-6 border-t-2 w-full xl:w-[81%] border-[#6E99C4]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="grid grid-cols-3 items-center my-6 mx-3 font-semibold">
        <motion.span className="text-sm sm:text-base text-center flex justify-center sm:justify-end">
          Contact Me
        </motion.span>
        <div
          className="border-t border-[#DADADA] mx-3"
        />
        <div className="flex gap-2 justify-center md:justify-start sm:text-lg uppercase">
          <motion.a
            href="mailto:jpsdichoso21@gmail.com"
            aria-label="Button to send me an email"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
          >
            <Image
              src="/hero-button-icons/mail.svg"
              alt="Button to send me an email"
              width={ICON_DIMENSIONS}
              height={ICON_DIMENSIONS}
              priority={true}
              className="object-cover hover:bg-[#6E99C4] transition duration-100 ease-in-out rounded-md"
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jason-dichoso-a97a0026a/"
            target="_blank"
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
              className="object-cover hover:bg-[#6E99C4] transition duration-100 ease-in-out rounded-md"
            />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
