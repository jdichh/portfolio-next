import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import ThemeSwitch from "../theme-switch";
import { IoMdArrowRoundBack } from "react-icons/io";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RouteHeader() {
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.925;

  return (
    <header
      className={`z-[98] relative w-full font-bold ${spaceGrotesk.className}`}
    >
      <div className="pages-folder-div-navbars theme-switch" />
      <nav className="pages-folder-navbars">
        <Link href="/" aria-label="Back button">
          <motion.button
            className="react-icons"
            aria-label="Back button"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
          >
            <IoMdArrowRoundBack size={22} />
          </motion.button>
        </Link>

        <ThemeSwitch />
      </nav>
    </header>
  );
}
