"use client";

import React from "react";
import RouteHeader from "@/pages/RouteHeader";
import RouteFooter from "@/pages/RouteFooter";
import Image from "next/image";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function index() {
  const SPAN_COLOR = "#6E99C4";
  const HOVER_COLOR = "#DADADA";
  const IMAGE_DIMENSIONS = 700;
  const IMAGE_QUALITY = 95;
  const FIGURE_BG = "#1F1E26";
  const WARNING_COLOR = "#3F0F13";

  return (
    <>
      <RouteHeader title="Virtual Car Showroom" />
      <motion.main
        className={`flex flex-col items-start w-full max-w-[700px] mx-auto p-4 h-[7000px] ${spaceGrotesk.className}`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <article>
          <div className="mt-32 lg:mt-40" />
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">
              Creating a virtual car showroom with React-Three-Fiber
            </h1>
            <p className="opacity-50">Posted on September 27, 2023</p>
          </div>

          <aside
            className={`w-full bg-[${WARNING_COLOR}] px-2 py-3 rounded-md my-12`}
          >
            <p className="leading-7 mb-6 px-2">
              Before you start reading, the section below isn't about me
              creating the project, it's how I came about using 3D in browsers.
            </p>
            <p className="leading-7 px-2 flex justify-end">
              <a
                href=""
                className={`text-[${SPAN_COLOR}] font-semibold hover:text-[${HOVER_COLOR}] transition duration-150 ease-in-out`}
              >
                Skip to the good stuff.
              </a>
            </p>
          </aside>

          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Moment of discovery
          </h2>

          <p className="leading-7 mb-8 opacity-90">
            During the earlier days of my journey in learning frontend
            development, which started around June 2023, I came across a video
            in my recommended section in YouTube. It was about a web developer's
            portfolio in 3D, made with something called{" "}
            <a
              href="https://threejs.org/"
              target="_blank"
              className={`text-[${SPAN_COLOR}] font-medium hover:text-[${HOVER_COLOR}] transition duration-150 ease-in-out`}
            >
              Three.js
            </a>
            .
          </p>

          <p className="leading-7 mb-8">
            Now, I use Kamran Ahmed's{" "}
            <a
              href="https://roadmap.sh/"
              target="_blank"
              className={`text-[${SPAN_COLOR}] font-medium hover:text-[${HOVER_COLOR}] transition duration-150 ease-in-out`}
            >
              roadmap.sh
            </a>{" "}
            as a guide in my self-learning journey. It's very good by the way,
            it's full of quality resources and its "difficulty scaling" is quite
            linear, at least for me. But, it didn't have a guide, as of this
            article's writing, about 3D applications using browsers.
          </p>

          <p className="leading-7 mb-8 opacity-90">
            So, imagine how amused I was at the video YouTube recommended to me.
            I was shocked, but in a good way. Because I thought, at the time,
            that frontend was just about React, Vue, Angular, and all that jazz.
            So I took it upon myself to get to know and learn how Three.js
            worked. But don't follow what I did, kids, because I could've spent
            time learning React and its ecosystem instead of 3D stuff.
          </p>

          <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-16 mx-auto`}>
            <Image
              src="/article-images/showroom/threejs.png"
              alt=""
              width={IMAGE_DIMENSIONS}
              height={IMAGE_DIMENSIONS}
              quality={IMAGE_QUALITY}
              className="rounded-md"
            />
            <figcaption className="mt-2 text-center">
              Three.js website.
            </figcaption>
          </figure>

          <h2 className="text-xl sm:text-2xl font-bold mb-3">I am confusion</h2>

          <p className="leading-7 mb-8 opacity-90">
            But anyway, I looked at the documentations that Three.js provided. I
            was so confused at the time, as the details were so sparse for me at
            the time (or maybe I'm just a big, dumb idiot). So I enlisted the
            help of Chat-GPT, and specifically told it to treat me like I'm a
            high schooler.
          </p>

          <p className="leading-7 mb-8 opacity-90">
            Luckily, I already knew what some terms meant; like anti-aliasing,
            shadow resolution, texture resolution, lighting, models, and etc.,
            because I really love modding Skyrim to the point where my poor
            laptop starts to sound like hair dryers in a full salon.
          </p>

          <p className="leading-7 mb-8 opacity-90">
            It's because of my unhealthy love in modding Skyrim that I somehow
            managed to understand some of the documentation.
          </p>

          <p className="leading-7 mb-8 opacity-90">
            After some time watching tutorials and reading documentation, I
            managed to load my first 3D model, which I downloaded from
            Sketchfab, and{" "}
            <a
              href="https://porsche930.netlify.app/"
              className={`text-[${SPAN_COLOR}] font-semibold hover:text-[${HOVER_COLOR}] transition duration-150 ease-in-out`}
            >
              this was my first output
            </a>
            .
          </p>

          <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-16 mx-auto`}>
            <Image
              src="/project/showroom.png"
              alt=""
              width={IMAGE_DIMENSIONS}
              height={IMAGE_DIMENSIONS}
              quality={IMAGE_QUALITY}
              className="rounded-md"
            />
            <figcaption className="mt-2 text-center">
              A screenshot of the virtual car showroom project.
            </figcaption>
          </figure>
        </article>
      </motion.main>
      <RouteFooter />
    </>
  );
}
