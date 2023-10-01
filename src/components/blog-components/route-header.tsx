import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import ThemeSwitch from "../theme-switch";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RouteHeader() {
  const ICON_DIMENSIONS = 35;
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.9;

  return (
    <motion.header
      className={`z-[98] relative w-full font-semibold ${spaceGrotesk.className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pages-folder-div-navbars" />
      <nav className="pages-folder-navbars">
        <ul>
          <li>
            <Link href="/" aria-label="Back button">
              <motion.div
                className="text-lg rounded-sm"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0.025 }}
              >
                <Image
                  src="/icons/back.svg"
                  alt="Back button"
                  width={ICON_DIMENSIONS}
                  height={ICON_DIMENSIONS}
                  className="icons"
                />
              </motion.div>
            </Link>
          </li>
        </ul>
        <ThemeSwitch />
      </nav>
    </motion.header>
  );
}
