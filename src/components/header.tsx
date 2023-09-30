"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[99] relative w-full font-medium">
      <motion.div
        className="fixed left-1/2 border-b-2 border-[#111111] backdrop-blur bg-opacity-80 top-0 h-16 w-full"
        initial={{ y: -50, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
      <nav className="fixed left-1/2 -translate-x-[50%] top-0">
        <motion.ul
          className="flex flex-row w-[22rem] justify-center gap-8 sm:gap-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {links.map((link) => (
            <li key={link.hash} className="flex text-[#005959]">
              <Link
                href={link.hash}
                className="transition duration-150 ease-in-out p-4 text-lg text-[#111111] hover:text-[#005959] rounded-sm"
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
