"use client";

import React from "react";
import { motion } from "framer-motion";
import { BiLogoLinkedin } from "react-icons/bi";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.9;

  return (
    <motion.footer
      className="mt-3 border-t-2 w-full xl:w-[81.25%] footer-theme-switch mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.175, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="footer-layout">
        <span className="footer-text">
          Let's work together.
        </span>
        <div className="border-t-2 mx-3 footer-theme-switch" />
        <div className="flex gap-2 justify-center">
          <motion.a
            href="https://www.linkedin.com/in/jason-dichoso-a97a0026a/"
            target="_blank"
            aria-label="Button to my LinkedIn profile"
            className="react-icons"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
            transition={{ duration: 0 }}
          >
            <BiLogoLinkedin size={25} />
          </motion.a>
          <motion.a
            href="mailto:jpsdichoso21@gmail.com"
            aria-label="Button to send me an email"
            className="react-icons"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
            transition={{ duration: 0 }}
          >
            <SiGmail size={25} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
