import React from "react";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { BiLogoLinkedin } from "react-icons/bi";
import { SiGmail } from "react-icons/si";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RouteFooter() {
  const ON_TAP_SCALE = 0.925;

  return (
    <motion.footer
      className={`mt-6 mx-auto border-t-2 w-full max-w-[750px] font-bold border-theme-switch ${spaceGrotesk.className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="footer-layout">
        <span className="footer-text">
          Let's work together.
        </span>
        <div className="border-t-2 mx-3 theme-switch" />
        <div className="flex gap-2 justify-center">
          <motion.a
            href="https://www.linkedin.com/in/jason-dichoso-a97a0026a/"
            target="_blank"
            aria-label="Button to my LinkedIn profile"
            className="react-icons"
            whileTap={{ scale: ON_TAP_SCALE }}
            transition={{ duration: 0 }}
          >
            <BiLogoLinkedin size={22} />
          </motion.a>
          <motion.a
            href="mailto:jpsdichoso21@gmail.com"
            aria-label="Button to send me an email"
            className="react-icons"
            whileTap={{ scale: ON_TAP_SCALE }}
            transition={{ duration: 0 }}
          >
            <SiGmail size={22} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
