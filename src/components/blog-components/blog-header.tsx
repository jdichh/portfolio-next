import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import ThemeSwitch from "../theme-switch";
import { AiFillHome } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function BlogHeader() {
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.925;

  return (
    <header
      className={`z-[98] relative w-full font-bold ${spaceGrotesk.className}`}
    >
      <div className="pages-folder-div-navbars theme-switch" />
      <nav className="pages-folder-navbars">
        <ul>
          <li className="flex flex-row gap-2">
            <Link href="/blogs" aria-label="Back button">
              <motion.button
                className="react-icons"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                aria-label="Back button"
              >
                <IoMdArrowRoundBack size={22} />
              </motion.button>
            </Link>
            <Link href="/" aria-label="Home button">
              <motion.button
                className="react-icons"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                aria-label="Home button"
              >
                <AiFillHome size={22} />
              </motion.button>
            </Link>
          </li>
        </ul>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
