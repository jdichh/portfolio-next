"use client"

import React from "react";
import { posts } from "@/lib/data";
import { motion } from "framer-motion";
import Post from "./PostsBoilerplate";

export default function Posts() {
  return (
    <motion.section
      className="px-0 w-full"
      id="works"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >

      {posts.map((blog, index) => (
        <React.Fragment key={index}>
          <Post {...blog} />
        </React.Fragment>
      ))}
    </motion.section>
  );
}
