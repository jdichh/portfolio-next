import { blogs } from "@/lib/data";
import { motion } from "framer-motion";

type BlogProps = (typeof blogs)[number];

export default function BlogBoilerplate({ name, description, date, link }: BlogProps) {
  const ON_HOVER_SCALE = 1.03;

  return (
    <div className="mb-6 last:mb-0">
      <motion.article
        className="group overflow-hidden rounded-sm relative outline-my-standard theme-switch my-transition"
        whileHover={{ scale: ON_HOVER_SCALE }}
        transition={{ duration: 0.025 }}
      >
        <a href={link}>
        <div className="flex flex-col p-4">
          <h2 className="text-xl text-left sm:text-2xl font-semibold">
            {name}
          </h2>
          <h3 className="mb-2 font-semibold text-sm text-[#236660]">{date}</h3>
          <p className="text-my-standard">{description}</p>
        </div>
        </a>
      </motion.article>
    </div>
  );
}
