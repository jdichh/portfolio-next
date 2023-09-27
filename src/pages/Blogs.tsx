"use client"

import React from "react";
import { blogs } from "@/lib/data";
import { motion } from "framer-motion";
import Blog from "./Blog";

export default function Blogs() {
  return (
    <motion.section
      className="px-0 w-full leading-8"
      id="works"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >

      {blogs.map((blog, index) => (
        <React.Fragment key={index}>
          <Blog {...blog} />
        </React.Fragment>
      ))}
    </motion.section>
  );
}
