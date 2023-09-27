"use client";

import React from "react";
import BlogHeader from "@/pages/BlogHeader";
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

  return (
    <>
      <Head>
        <title>Blog | My shenanigans in 3D format</title>
      </Head>
      <BlogHeader title="My shenanigans in 3D format" />
      <motion.main
        className={`flex flex-col items-start w-full max-w-[700px] mx-auto p-4 ${spaceGrotesk.className}`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <article>
          <div className="mt-20 lg:mt-40" />
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              My shenanigans in 3D format
            </h1>
            <p className="opacity-50">Posted on September 27, 2023</p>
          </div>

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
            this article's writing, about utilizing 3D capabilities in browsers.
          </p>

          <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
            <Image
              src="/article-images/blog1/threejs.webp"
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
            I understand, yet I am confused at the same time
          </h2>

          <p className="leading-7 mb-8 opacity-90">
            I looked at the documentations that Three.js provided. I was so
            confused, as the details in the documentation were so sparse for me
            at the time (or maybe I'm just a big, dumb idiot). So I enlisted the
            help of ChatGPT, and specifically told it to answer me like I'm a
            high schooler.
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
            started to sound like hair dryers in a full salon. Anyway, it was
            because of my unhealthy relationship with Skyrim modding that I
            managed to understand some of the documentation.
          </p>

          <p className="leading-7 mb-8 opacity-90">
            After some time watching and reading tutorials, I managed to load my
            first 3D model, which I downloaded from Sketchfab, and{" "}
            <a
              href="https://porsche930.netlify.app/"
              target="_blank"
              className={`text-[${SPAN_COLOR}] font-semibold hover:text-[${HOVER_COLOR}] transition duration-150 ease-in-out`}
            >
              this was my first output
            </a>
            .
          </p>

          <p className="leading-7 mb-8 opacity-90">
            Granted, this isn't anything impressive, but at the time, I was so
            ecstatic that I managed to do it.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3">
            A little help goes a long way, sometimes
          </h2>

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

          <p className="leading-7 mb-8 opacity-90">
            Which is a trick used by many games by the way, to trick you that
            there's a huge map—when in actuality, a part of the map's terrain is
            just regenerated after the camera has passed it. It's like walking
            or running on a treadmill, in simpler terms.
          </p>

          <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
            <Image
              src="/article-images/blog1/vaporwave.webp"
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
            I followed Maxime's instructions and guidelines, but not blindly. I
            took the time to understand what some things meant, because what's
            the point of tutorials if you're just going to copy code for code,
            and not understand it? Yeah, I'm talking to you, Jason from 3 months
            ago.
          </p>

          <p className="leading-7 mb-8 opacity-90">
            Anyway, I didn't want to end "my" project with a 1:1 copy, I wanted
            to add more things, like a sun, a skybox, background music, and some
            post-processing effects like blur and a CRT filter. So I made sure
            to accomplish these tasks that I set for myself.
          </p>

          <h2
            className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
            id="actual"
          >
            Let there be light!
          </h2>

          <p className="leading-7 mb-8 opacity-90">
            Okay, task one: illuminate the world. This is done by using{" "}
            <a
              href="https://threejs.org/docs/index.html?q=direction#api/en/lights/DirectionalLight"
              target="_blank"
              className={`text-[${SPAN_COLOR}] font-medium hover:text-[${HOVER_COLOR}] transition duration-150 ease-in-out`}
            >
              DirectionalLight
            </a>
            —it's basically the sun.
          </p>

          <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
            <Image
              src="/article-images/blog1/light-directional.png"
              alt="Directional light"
              width={IMAGE_DIMENSIONS}
              height={IMAGE_DIMENSIONS}
              quality={IMAGE_QUALITY}
              className="rounded-md"
            />
            <figcaption className="mt-2 text-center">
              A visual example of directional light—credits go to viblo.asia.
            </figcaption>
          </figure>

          <h2
            className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
            id="actual"
          >
            Filling up the soulless husk
          </h2>

          <p className="leading-7 mb-8 opacity-90">
            The sun exists, but there's a dark void just, staring. This is the
            time where we add in the sky.
          </p>

          <p className="leading-7 mb-8 opacity-90">
            <span className="font-bold">My initial solution was this:</span>{" "}
            create a big box that has the textures of a sky within it. And here
            it is:
          </p>

          <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
            <Image
              src="/article-images/blog1/skybox-trial.png"
              alt="My initial skybox trial"
              width={IMAGE_DIMENSIONS}
              height={IMAGE_DIMENSIONS}
              quality={IMAGE_QUALITY}
              className="rounded-md"
            />
            <figcaption className="mt-2 text-center">
              Yeah...nice try, dumbass.
            </figcaption>
          </figure>

          <p className="leading-7 mb-8 opacity-90">
            The problem was that I didn't set a proper size for the box itself.
            At this point, I was scratching my head. Because I didn't know how
            to create a custom size for a box at the time, and I was about to
            ask GPT how to do it.
          </p>

          <p className="leading-7 mb-8 opacity-90">
            Let me remind you, I was new to Three.js. So don't get all
            judgmental towards me when I ask an AI to read and relay
            documentation to me in an easier way, especially when I initially
            found it to be sparse and quite complicated.
          </p>

          <h2
            className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
            id="actual"
          >
            Staring into the void, but giving me the light
          </h2>

          <p className="leading-7 mb-8 opacity-90">
            When I was just about to open up ChatGPT, it suddenly hit me—why not
            just make the dark background use the texture itself?
          </p>

          <p className="leading-7 mb-8 opacity-90">
            So I scoured the documentation on how to load an image as a texture
            for the dark background to use as a skybox. And I found out that{" "}
            <a
              href="https://threejs.org/docs/index.html?q=textureload#api/en/loaders/TextureLoader"
              target="_blank"
              className={`text-[${SPAN_COLOR}] font-medium hover:text-[${HOVER_COLOR}] transition duration-150 ease-in-out`}
            >
              TextureLoader
            </a>{" "}
            is the right tool for the job.
          </p>

          <p className="leading-7 mb-8 opacity-90">
            As the name implies, it loads textures. Couldn't get any more
            obvious than this.
          </p>

          <h2
            className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
            id="actual"
          >
            Filling up the soulless husk, pt.2
          </h2>

          <p className="leading-7 mb-8 opacity-90">
            So I created an image to be used as a texture. The initial version
            was, from bottom to top, was a gradient going from orange to red.
            But after creating the texture, I thought that this looked
            apocalyptic. So I switched to cooler colors, and I added some stars too.
          </p>

          <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
            <Image
              src="/article-images/blog1/skybox.webp"
              alt="Skybox texture"
              width={IMAGE_DIMENSIONS}
              height={IMAGE_DIMENSIONS}
              quality={IMAGE_QUALITY}
              className="rounded-md"
            />
            <figcaption className="mt-2 text-center">
              My skybox texture
            </figcaption>
          </figure>

          <p className="leading-7 mb-8 opacity-90">
            This was made with my ol' trusty tool and long time partner{" "}
            <a
              href="https://getpaint.net/"
              target="_blank"
              className={`text-[${SPAN_COLOR}] font-medium hover:text-[${HOVER_COLOR}] transition duration-150 ease-in-out`}
            >
              Paint.NET
            </a>
            . I'm not used to working with Photoshop (yet), because I find that
            Paint.NET gets the job done, and I haven't really come across
            problems that Paint.NET couldn't solve for me.
          </p>
        </article>
      </motion.main>
      <RouteFooter />
    </>
  );
}
