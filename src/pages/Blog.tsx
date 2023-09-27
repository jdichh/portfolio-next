"use client";

import { blogs } from "@/lib/data";
import { motion } from "framer-motion";

type BlogProps = (typeof blogs)[number];

export default function Blog({ name, description, date, link }: BlogProps) {
  const ON_HOVER_SCALE = 1.03;

  return (
    <div className="mb-6 last:mb-0">
      <motion.article
        className="group overflow-hidden bg-[#1F1E26] hover:bg-[#25242D] rounded-md relative transition ease-in-out duration-150 hover:outline hover:outline-1 hover:outline-[#DADADA]"
        whileHover={{ scale: ON_HOVER_SCALE }}
      >
        <a href={link}>
        <div className="flex flex-col py-4 px-4">
          <h3 className="text-xl text-center sm:text-2xl md:text-left text-[#DADADA] font-bold">
            {name}
          </h3>
          <h4>{date}</h4>
          <p>{description}</p>
        </div>
        </a>
      </motion.article>
    </div>
  );
}
