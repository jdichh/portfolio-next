import { blogs } from "@/lib/data";
import { motion } from "framer-motion";

type BlogProps = (typeof blogs)[number];

export default function BlogBoilerplate({ name, description, date, link }: BlogProps) {
  const ON_HOVER_SCALE = 1.03;

  return (
    <div className="mb-6 last:mb-0">
      <motion.article
        className="group overflow-hidden bg-light-theme-bg rounded-sm relative transition ease-in-out duration-150 outline-my-standard"
        whileHover={{ scale: ON_HOVER_SCALE }}
        transition={{ duration: 0.05 }}
      >
        <a href={link}>
        <div className="flex flex-col p-4">
          <h2 className="text-xl text-left sm:text-2xl font-semibold">
            {name}
          </h2>
          <h3 className="mb-2 font-semibold text-sm text-[#285955]">{date}</h3>
          <p className="text-my-standard">{description}</p>
        </div>
        </a>
      </motion.article>
    </div>
  );
}
