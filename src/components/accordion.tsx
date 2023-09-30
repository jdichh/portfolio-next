import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mx-auto mb-6 outline-my-standard rounded-sm p-1 bg-light-theme-bg">
      <div className="rounded-sm">
        <button
          className="flex justify-between items-center p-2 w-full text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-semibold text-[#111111]">{title}</span>
            <motion.span
              key={isOpen ? "up" : "down"}
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              className="text-[#111111]"
            >
              {isOpen ? "▲" : "▼"}
            </motion.span>
        </button>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ height: 0, overflow: "hidden" }}
          animate={{
            height: isOpen ? "auto" : 0,
            overflow: isOpen ? "visible" : "hidden",
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, delay: 2 }}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default React.memo(Accordion)