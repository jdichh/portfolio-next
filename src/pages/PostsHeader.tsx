import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

type RouteHeaderProps = {
  title: string;
};

const BlogHeader: React.FC<RouteHeaderProps> = ({
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
      transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="fixed border-b-2 border-[#6E99C4] backdrop-blur bg-opacity-80 bg-[#19181E] top-0 h-16 w-full" />
      <nav className="fixed flex justify-between items-center w-full max-w-[700px] mx-auto left-1/2 -translate-x-[50%] px-4 h-16">
        <ul>
          <li className="flex flex-row gap-2">
            <Link href="/posts" aria-label="Back button">
              <motion.div
                className="transition duration-150 ease-in-out text-lg hover:text-[#6E99C4] rounded-sm"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0.05 }}
              >
                <Image
                  src="/icons/back.svg"
                  alt="Back button"
                  width={ICON_DIMENSIONS}
                  height={ICON_DIMENSIONS}
                  priority={true}
                  className="object-cover hover:bg-[#6E99C4] transition duration-150 ease-in-out rounded-md border-[1px] p-0.5"
                />
              </motion.div>
            </Link>
            <Link href="/" aria-label="Home button">
              <motion.div
                className="transition duration-150 ease-in-out text-lg hover:text-[#6E99C4] rounded-sm"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0.05 }}
              >
                <Image
                  src="/icons/home.svg"
                  alt="Home button"
                  width={ICON_DIMENSIONS}
                  height={ICON_DIMENSIONS}
                  priority={true}
                  className="object-cover hover:bg-[#6E99C4] transition duration-150 ease-in-out rounded-md border-[1px] p-0.5"
                />
              </motion.div>
            </Link>
          </li>
        </ul>
        <h1 className="pl-3 font-semibold text-sm sm:text-lg text-right max-w-8/12 sm:max-w-full">{title}</h1>
      </nav>
    </motion.header>
  );
};

export default BlogHeader;
