"use client";

import React from "react";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { motion } from "framer-motion";

export default function HeroButtons() {
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.925;

  return (
    <>
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
    </>
  );
}
