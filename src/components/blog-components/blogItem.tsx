"use client"

import React from "react";
import { blogs } from "@/lib/data";
import { motion } from "framer-motion";
import BlogBoilerplate from "./blogBoilerplate";

export default function BlogItem() {
  return (
    <motion.div
      className="px-0 w-full"
      id="blogs"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.22, 1, 0.36, 1] }}
      >

      {blogs.map((blog, index) => (
        <React.Fragment key={index}>
          <BlogBoilerplate {...blog} />
        </React.Fragment>
      ))}
    </motion.div>

  );
}
