"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="my-6 border-t-2 w-full xl:w-[81%] border-[#6E99C4]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="flex flex-col mx-auto text-sm px-4 sm:w-10/12 sm:text-base">
        <blockquote className="italic text-center my-6">
          “That has been one of my mantras - focus and simplicity. Simple can be
          harder than complex.”
        </blockquote>
        <b className="text-right">- Plato</b>
      </div>
    </motion.footer>
  );
}
