"use client";

import React from "react";
import { motion } from "framer-motion";
import { BiLogoLinkedin } from "react-icons/bi";
import { SiGmail } from "react-icons/si";

export default function FooterButtons() {
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.925;
  return (
    <>
      <motion.a
        href="https://www.linkedin.com/in/jason-dichoso-a97a0026a/"
        target="_blank"
        aria-label="Button to my LinkedIn profile"
        className="react-icons"
        whileHover={{ scale: ON_HOVER_SCALE }}
        whileTap={{ scale: ON_TAP_SCALE }}
      >
        <BiLogoLinkedin size={22} />
      </motion.a>
      <motion.a
        href="mailto:jpsdichoso21@gmail.com"
        aria-label="Button to send me an email"
        className="react-icons"
        whileHover={{ scale: ON_HOVER_SCALE }}
        whileTap={{ scale: ON_TAP_SCALE }}
      >
        <SiGmail size={22} />
      </motion.a>
    </>
  );
}
