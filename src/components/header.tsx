"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[99] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none bg-[#E9E9E9] bg-opacity-95 sm:top-6 sm:h-[3.5rem] sm:w-[18rem] sm:rounded-md"
        initial={{ y: -50, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
      />
      <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] sm:w-[initial] sm:flex-nowrap sm:gap-6">
            {links.map(link => (
                <motion.li key={link.hash} className="text-[#131217] h-3/4 flex items-center justify-center text-base"  
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}>
                    <Link href={link.hash} className="flex items-center justify-center p-3 w-full hover:font-medium">{link.name}</Link>
                </motion.li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
