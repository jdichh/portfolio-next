import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RouteFooter() {
  const ICON_DIMENSIONS = 40;
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.9;

  return (
    <motion.footer
      className={`mt-6 mx-auto border-t-2 w-full max-w-[750px] font-semibold footer-theme-switch  ${spaceGrotesk.className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, ease: [0.22, 1, 0.36, 1]}}
    >
      <div className="footer-layout">
        <span className="footer-text">Let's work together.</span>
        <div className="border-t-2 mx-3 footer-theme-switch" />
        <div className="flex gap-1 justify-center">
          <motion.a
            href="https://www.linkedin.com/in/jason-dichoso-a97a0026a/"
            target="_blank"
            aria-label="Button to my LinkedIn profile"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
            transition={{ duration: 0.075 }}
          >
            <Image
              src="/icons/linkedin.svg"
              alt="Button to my LinkedIn profile"
              width={ICON_DIMENSIONS}
              height={ICON_DIMENSIONS}
              className="icons"
            />
          </motion.a>
          <motion.a
            href="mailto:jpsdichoso21@gmail.com"
            aria-label="Button to send me an email"
            whileHover={{ scale: ON_HOVER_SCALE }}
            whileTap={{ scale: ON_TAP_SCALE }}
            transition={{ duration: 0.075 }}
          >
            <Image
              src="/icons/mail.svg"
              alt="Button to send me an email"
              width={ICON_DIMENSIONS}
              height={ICON_DIMENSIONS}
              className="icons"
            />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
