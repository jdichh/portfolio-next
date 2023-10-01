import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import ThemeSwitch from "../theme-switch";
import { IoMdArrowRoundBack } from "react-icons/io";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RouteHeader() {
  const ON_HOVER_SCALE = 1.075;
  const ON_TAP_SCALE = 0.925;

  return (
    <motion.header
      className={`z-[98] relative w-full font-semibold ${spaceGrotesk.className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.175, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pages-folder-div-navbars" />
      <nav className="pages-folder-navbars">
        <ul>
          <motion.li
            whileTap={{ scale: ON_TAP_SCALE }}
            whileHover={{ scale: ON_HOVER_SCALE }}
          >
            <Link href="/" aria-label="Back button">
              <motion.button
                className="react-icons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <IoMdArrowRoundBack size={22} />
              </motion.button>
            </Link>
          </motion.li>
        </ul>
        <ThemeSwitch />
      </nav>
    </motion.header>
  );
}
