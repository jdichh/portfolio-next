"use client";

import React from "react";
import RouteHeader from "@/pages/RouteHeader";
import RouteFooter from "@/pages/RouteFooter";
import Image from "next/image";
import Head from "next/dist/shared/lib/head";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function index() {
  const SPAN_COLOR = "#6E99C4";
  const HOVER_COLOR = "#DADADA";
  const IMAGE_DIMENSIONS = 700;
  const IMAGE_QUALITY = 95;
  const FIGURE_BG = "#1F1E26";
  const WARNING_COLOR = "#471116";

  return (
    <>
      <Head>
        <title>Creating a virtual car showroom with React-Three-Fiber</title>
      </Head>
      <RouteHeader title="Virtual Car Showroom" />
      <motion.main
        className={`flex flex-col items-start w-full max-w-[700px] mx-auto p-4 ${spaceGrotesk.className}`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <article>
          <div className="mt-20 lg:mt-40" />
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              Creating a virtual car showroom with React-Three-Fiber
            </h1>
            <p className="opacity-50">Posted on September 27, 2023</p>
          </div>

          <aside
            className={`w-full bg-[${WARNING_COLOR}] px-2 py-3 rounded-md my-12`}
          >
            <p className="leading-7 mb-6 px-2">
              Before you start reading, the long section below isn't about me
              creating the showroom project, it's how I came about Three.js and
              React-Three-Fiber.
            </p>
            <p className="leading-7 px-2 flex justify-end">
              <a
                href="#actual"
                className={`text-[${SPAN_COLOR}] font-semibold hover:text-[${HOVER_COLOR}] transition duration-150 ease-in-out`}
              >
                Skip to the actual part.
              </a>
            </p>
          </aside>

          <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3">
            Moment of discovery
          </h2>

          <p className="leading-7 mb-8 opacity-90">
            During the earlier days of my journey in learning frontend
            development, which started around June 2023, I came across a video
            in my recommended section in YouTube. It was about making a
            portfolio in 3D, with something called{" "}
            <a
              href="https://threejs.org/"
              target="_blank"
              className={`text-[${SPAN_COLOR}] font-medium hover:text-[${HOVER_COLOR}] transition duration-150 ease-in-out`}
            >
              Three.js
            </a>
            .
          </p>

          <p className="leading-7 mb-8 opacity-90">
            So imagine how amused I was at the video YouTube recommended to me.
            I was shocked, but in a good way. Because I thought, at the time,
            that frontend was just about React, Vue, Angular, and all that jazz.
            So I took it upon myself to get to know and learn how Three.js
            worked. But don't do what I did, kids, because I could've spent time
            learning more about React and its ecosystem instead of 3D stuff.
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
            linear, at least for me. But, it didn't have a guide, at least as of
            this article's writing, about 3D applications with browsers.
          </p>

          <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
            <Image
              src="/article-images/showroom/threejs.png"
              alt="A screenshot of the Three.js home page."
              width={IMAGE_DIMENSIONS}
              height={IMAGE_DIMENSIONS}
              quality={IMAGE_QUALITY}
              className="rounded-md"
            />
            <figcaption className="mt-2 text-center">
              Three.js home page.
            </figcaption>
          </figure>

          <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3">
            I understand, and I am confused at the same time
          </h2>

          <p className="leading-7 mb-8 opacity-90">
            I looked at the documentations that Three.js provided. I was so
            confused at the time, as the details in the documentation were so
            sparse for me at the time (or maybe I'm just a big, dumb idiot). So
            I enlisted the help of Chat-GPT, and specifically told it to answer
            me like I'm a high schooler.
          </p>

          <p className="leading-7 mb-8 opacity-90">
            Luckily, I already knew what some terms meant, like anti-aliasing,
            shadow resolution, texture resolution, lighting, models, and etc.,
            because I really loved modding Skyrim to the point where my{" "}
            <a
              href="https://www.lenovo.com/us/en/p/laptops/ideapad/ideapad-gaming-laptops/ideapad-l340-15irh-gaming/88ipl301161"
              target="_blank"
              className={`text-[${SPAN_COLOR}] font-medium hover:text-[${HOVER_COLOR}] transition duration-150 ease-in-out`}
            >
              poor laptop{" "}
            </a>
            starts to sound like hair dryers in a full salon. It was because of
            my unhealthy relationship in modding Skyrim that I managed to
            understand some of the documentation.
          </p>

          <p className="leading-7 mb-8 opacity-90">
            After some time watching and reading tutorials , I managed to load
            my first 3D model, which I downloaded from Sketchfab, and{" "}
            <a
              href="https://porsche930.netlify.app/"
              target="_blank"
              className={`text-[${SPAN_COLOR}] font-semibold hover:text-[${HOVER_COLOR}] transition duration-150 ease-in-out`}
            >
              this was my first output
            </a>
            . Granted, this isn't anything impressive, but at the time, I was so
            ecstatic that I managed to do it.
          </p>

          <p className="leading-7 mb-8 opacity-90">
            Some time after that, I came across an{" "}
            <a
              href="https://blog.maximeheckel.com/posts/vaporwave-3d-scene-with-threejs/"
              target="_blank"
              className={`text-[${SPAN_COLOR}] font-semibold hover:text-[${HOVER_COLOR}] transition duration-150 ease-in-out`}
            >
              article by Maxime Heckel
            </a>
            , on how to create a vaporwave scene with Three.js. This article was
            a great read by the way, as it helped me understand more of the more
            complicated stuff like how to regenerate terrain for an indefinite
            amount of time.
          </p>

          <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
            <Image
              src="/article-images/showroom/vaporwave.png"
              alt="A screenshot of Maxime Heckel's vaporwave project."
              width={IMAGE_DIMENSIONS}
              height={IMAGE_DIMENSIONS}
              quality={IMAGE_QUALITY}
              className="rounded-md"
            />
            <figcaption className="mt-2 text-center">
              Maxime Heckel's vaporwave project.
            </figcaption>
          </figure>

          <p className="leading-7 mb-8 opacity-90">
            I followed Maxime's instructions and guidelines, but not blindly. I took the time to
            understand what some things meant, because what's the point of
            tutorials if you're just going to copy code for code, and not
            understand it? Yeah, I'm talking to you, Jason from
            3 months ago.
          </p>

          <p className="leading-7 mb-8 opacity-90">
            Anyway, I didn't want to end "my" project with a 1:1 copy of their
            project, I wanted to add more things, like a sun, a skybox,
            background music, and some post-processing effects. So I set out to
            accomplish these tasks that I set for myself.
          </p>

          <h2
            className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
            id="actual"
          >
            Getting my hands dirty
          </h2>

          <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
            <Image
              src="/project/showroom.png"
              alt="The virtual car showroom project."
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
