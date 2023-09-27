"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <motion.section
      className="px-6 w-full lg:w-8/12 xl:w-6/12 leading-relaxed text-center my-20 scroll-mt-[2rem] lg:scroll-mt-20"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-6">
        I aim to build <span className="text-[#6E99C4] font-medium">user-friendly and impressive-looking websites</span> here in the Philippines.
      </p>
    </motion.section>
  );
}
