"use client";

import { posts } from "@/lib/data";
import { motion } from "framer-motion";

type PostProps = (typeof posts)[number];

export default function PostsBoilerplate({ name, description, date, link }: PostProps) {
  const ON_HOVER_SCALE = 1.015;

  return (
    <div className="mb-6 last:mb-0">
      <motion.article
        className="group overflow-hidden bg-[#1F1E26] hover:bg-[#25242D] rounded-md relative transition ease-in-out duration-150 hover:outline hover:outline-1 hover:outline-[#DADADA]"
        whileHover={{ scale: ON_HOVER_SCALE }}
        transition={{ duration: 0.01 }}
      >
        <a href={link}>
        <div className="flex flex-col py-4 px-4">
          <h2 className="text-xl text-left sm:text-2xl text-[#DADADA] font-bold">
            {name}
          </h2>
          <h3 className="opacity-50 mb-2">{date}</h3>
          <p className="opacity-90"> {description}</p>
        </div>
        </a>
      </motion.article>
    </div>
  );
}
