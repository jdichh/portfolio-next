"use client";

import React, { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { PiSunFill } from "react-icons/pi";
import { PiMoonFill } from "react-icons/pi";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.9;

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useLayoutEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <motion.div
      whileHover={{ scale: ON_HOVER_SCALE }}
      whileTap={{ scale: ON_TAP_SCALE }}
    >
      <motion.button
        className="rounded-sm font-semibold theme-switch outline-my-standard p-2 text-sm my-transition"
        onClick={toggleTheme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.175 }}
      >
        {theme === "light" ? <PiSunFill size={25} /> : <PiMoonFill size={25} />}
      </motion.button>
    </motion.div>
  );
}
