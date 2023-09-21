"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[99] relative ">
      <motion.div
        className="fixed left-1/2 border-b border-[#6E99C4] bg-[#131217] bg-opacity-95 top-0 h-[3.5rem] w-full rounded-sm"
        initial={{ y: -50, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
      />
      <nav className="fixed left-1/2 -translate-x-1/2 top-0">
        <ul className="flex w-[22rem] justify-center gap-6">
            {links.map(link => (
                <motion.li key={link.hash} className="flex text-[#E9E9E9]"  
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}>
                    <Link href={link.hash} className="p-3 transition duration-150 ease-in-out text-lg hover:text-[#6E99C4]">{link.name}</Link>
                </motion.li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
