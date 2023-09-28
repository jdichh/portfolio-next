import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
  const LIGHTER_BG = "#1F1E26";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`w-full mx-auto mb-6 outline outline-2 outline-[#1F1E26] rounded-md p-3`}>
      <div className={`bg-[${LIGHTER_BG}] rounded-md`}>
        <button
          role="button"
          aria-expanded={isOpen}
          aria-controls="accordion-panel"
          className="flex justify-between items-center py-3 px-5 w-full text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium">{title}</span>
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="up"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ ease: [0.22, 1, 0.36, 1] }}
              >
                ▲
              </motion.span>
            ) : (
              <motion.span
                key="down"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ ease: [0.22, 1, 0.36, 1] }}
              >
                ▼
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
      <motion.div
        id="accordion-panel"
        initial={{ height: 0, overflow: "hidden" }}
        animate={{
          height: isOpen ? "auto" : 0,
          overflow: isOpen ? "visible" : "hidden",
        }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
