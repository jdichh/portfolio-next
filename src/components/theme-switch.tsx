"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PiSunFill } from "react-icons/pi";
import { PiMoonFill } from "react-icons/pi";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.925;

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

  useEffect(() => {
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
    <motion.button
      className="react-icons"
      onClick={toggleTheme}
      aria-label="Theme switcher"
      whileHover={{ scale: ON_HOVER_SCALE }}
      whileTap={{ scale: ON_TAP_SCALE }}
    >
      {theme === "light" ? <PiSunFill size={22} /> : <PiMoonFill size={22} />}
    </motion.button>
  );
}
