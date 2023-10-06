import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import ThemeSwitch from "../theme-switch";
import { IoMdArrowRoundBack } from "react-icons/io";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RouteHeader() {
  const ON_TAP_SCALE = 0.925;

  return (
    <motion.header
      className={`z-[98] relative w-full font-bold ${spaceGrotesk.className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pages-folder-div-navbars theme-switch" />
      <nav className="pages-folder-navbars">
        <ul>
          <motion.li
            whileTap={{ scale: ON_TAP_SCALE }}
          >
            <Link href="/" aria-label="Back button">
              <button className="react-icons" aria-label="Back button">
                <IoMdArrowRoundBack size={22} />
              </button>
            </Link>
          </motion.li>
        </ul>
        <ThemeSwitch />
      </nav>
    </motion.header>
  );
}
