"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[99] relative w-full font-medium">
      <motion.div
        className="fixed left-1/2 border-b-2 top-0 h-16 w-full theme-switch"
        initial={{ opacity: 0, x: "-50%" }}
        animate={{ opacity: 1, x: "-50%" }}
        transition={{ delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      />
      <nav className="fixed left-1/2 -translate-x-[50%] top-0 flex items-center">
        <motion.ul
          className="flex flex-row justify-center gap-6 sm:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {links.map((link) => (
            <li key={link.hash} className="flex text-[#236660]">
              <Link
                href={link.hash}
                className="p-4 text-lg text-light-theme-text dark:text-dark-theme-text hover:text-[#236660] dark:hover:text-[#236660] rounded-sm"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
}
