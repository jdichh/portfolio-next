"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[99] relative w-full font-medium">
      <motion.div
        className="fixed left-1/2 border-b-2 border-[#6E99C4] bg-[#19181E] bg-opacity-95 top-0 h-[3.8rem] w-full lg:w-10/12 xl:max-w-[1395px]"
        initial={{ y: -50, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
      />
      <nav className="fixed left-1/2 -translate-x-1/2 top-0">
        <ul className="flex w-[22rem] justify-center gap-6 lg:gap-12">
            {links.map(link => (
                <motion.li key={link.hash} className="flex text-[#E9E9E9]"  
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}>
                    <Link href={link.hash} className="transition duration-150 ease-in-out p-4 text-lg hover:text-[#6E99C4]">{link.name}</Link>
                </motion.li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
