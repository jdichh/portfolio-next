import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

type RouteHeaderProps = {
  title: string;
};

const RouteHeader: React.FC<RouteHeaderProps> = ({
  title,
}: RouteHeaderProps) => {
  const ICON_DIMENSIONS = 35;
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.9;

  return (
    <motion.header
      className={`z-[98] relative w-full font-semibold ${spaceGrotesk.className}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pages-folder-div-navbars" />
      <nav className="pages-folder-navbars">
        <ul>
          <li>
            <Link href="/" aria-label="Back button">
              <motion.div
                className="transition duration-150 ease-in-out text-lg rounded-sm"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0.05 }}
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
        <span className="font-semibold text-lg">{title}</span>
      </nav>
    </motion.header>
  );
};

export default RouteHeader;
