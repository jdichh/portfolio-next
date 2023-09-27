import { motion, AnimatePresence } from "framer-motion";
import "../app/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
      <motion.div
        className="z-[100] absolute top-0 left-0 w-screen h-screen bg-[#19181E] origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="z-[100] absolute top-0 left-0 w-screen h-screen bg-[#19181E] origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </AnimatePresence>
  );
}
