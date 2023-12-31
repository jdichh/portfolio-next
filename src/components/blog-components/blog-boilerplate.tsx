import { blogs } from "@/lib/data";
import { motion } from "framer-motion";

type BlogProps = (typeof blogs)[number];

export default function BlogBoilerplate({ name, description, date, link }: BlogProps) {
  const ON_HOVER_SCALE = 1.02
  const ON_TAP_SCALE = 0.98;

  return (
    <div className="mb-3 last:mb-0">
      <motion.article
        className="group overflow-hidden rounded-sm relative outline-my-standard theme-switch"
        whileHover={{ scale: ON_HOVER_SCALE }}
        whileTap={{ scale: ON_TAP_SCALE }}
        transition={{ duration: 0.025, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href={link}>
        <div className="flex flex-col p-4">
          <h2 className="text-xl text-left sm:text-2xl font-bold">
            {name}
          </h2>
          <h3 className="mb-2 font-bold text-sm text-[#397EBF]">{date}</h3>
          <p className="text-my-standard">{description}</p>
        </div>
        </a>
      </motion.article>
    </div>
  );
}
