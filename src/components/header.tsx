"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[99] relative w-full font-semibold">
      <motion.div
        className="fixed left-1/2 border-b-2 border-[#6E99C4] backdrop-blur bg-opacity-80 bg-[#19181E] top-0 h-16 w-full"
        initial={{ y: -50, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
      />
      <nav className="fixed left-1/2 -translate-x-[50%] top-0">
        <ul className="flex flex-row w-[22rem] justify-center gap-8 sm:gap-12">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="flex text-[#DADADA]"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className="transition duration-100 ease-in-out p-4 text-lg hover:text-[#6E99C4] rounded-sm"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
