import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

type RouteHeaderProps = {
  title: string;
};

const RouteHeader: React.FC<RouteHeaderProps> = ({
  title,
}: RouteHeaderProps) => {
  return (
    <motion.header
      className={`z-[98] relative w-full font-semibold ${spaceGrotesk.className}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="fixed border-b-2 border-[#6E99C4] backdrop-blur bg-opacity-80 bg-[#19181E] top-0 h-16 w-full" />
      <nav className="fixed flex justify-between items-center w-full max-w-[1000px] mx-auto left-1/2 -translate-x-[50%] px-4 h-16">
        <ul>
          <li>
            <Link
              href="/"
              className="transition duration-100 ease-in-out text-lg hover:text-[#6E99C4] rounded-sm"
            >
              Back
            </Link>
          </li>
        </ul>
        <h1 className="font-semibold">{title}</h1>
      </nav>
    </motion.header>
  );
};

export default RouteHeader;
