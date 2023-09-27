"use client";

import React from "react";
import PostsHeader from "@/pages/PostsHeader";
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
  const ICON_DIMENSIONS = 40;
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.9;

  return (
    <>
      <Head>
        <title>Posts | My first shenanigans in 3D</title>
      </Head>
      <PostsHeader title="My first shenanigans in 3D" />
      <motion.main
        className={`flex flex-col items-start w-full max-w-[700px] mx-auto p-4 ${spaceGrotesk.className}`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <article>
          <div className="mt-20" />
          <div className="mb-8">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">
              My first shenanigans in 3D
            </h1>
            <p className="opacity-50 text-sm sm:text-base">
              {" "}
              September 27, 2023
            </p>
          </div>

          <section id="section1">
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
              So imagine how amused I was at the video YouTube recommended to
              me. I was shocked, but in a good way. Because I thought, at the
              time, that frontend was just about React, Vue, Angular, and all
              that jazz. So I took it upon myself to get to know and learn how
              Three.js worked. But don't do what I did, kids, because I could've
              spent time learning more about React and its ecosystem instead of
              3D stuff.
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
              it's full of quality resources and its "difficulty scaling" is
              quite linear, at least for me. But, it didn't have a guide, at
              least as of this article's writing, about utilizing 3D
              capabilities in browsers.
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/my-first-shenanigans-in-3d/threejs.webp"
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
          </section>

          <section id="section2">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3">
              I understand, yet I am confused at the same time
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              I looked at the documentations that Three.js provided. I was so
              confused, as the details in the documentation were so sparse for
              me at the time (or maybe I'm just a big, dumb idiot). So I
              enlisted the help of ChatGPT, and specifically told it to answer
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
              started to sound like hair dryers in a full salon. Anyway, it was
              because of my unhealthy relationship with Skyrim modding that I
              managed to understand some of the documentation.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              After some time watching and reading tutorials, I managed to load
              my first 3D model, which I downloaded from Sketchfab, and{" "}
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
          </section>

          <section id="section3">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3">
              A little help goes a long way
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
              , on how to create a vaporwave scene with Three.js. This article
              was a great read by the way, as it helped me understand more of
              the more complicated stuff like how to regenerate terrain for an
              indefinite amount of time.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              Which is a trick used by many games by the way, to trick you that
              there's a huge map during a corridor-style level—when in
              actuality, a part of the map's terrain is just regenerated after
              the camera has passed it. It's like walking or running on a
              treadmill, in simpler terms.
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/my-first-shenanigans-in-3d/vaporwave.webp"
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
              I followed Maxime's instructions and guidelines, but not blindly.
              I took the time to understand what some things meant, because
              what's the point of tutorials if you're just going to copy code
              for code, and not understand it? Yeah, I'm talking to you, Jason
              from 3 months ago.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              Anyway, I didn't want to end "my" project with a 1:1 copy, I
              wanted to add more things, like a sun, a skybox, background music,
              some postprocessing effects like blur and a CRT filter, and some
              fixes to the terrain. So I made sure to accomplish these tasks
              that I set for myself.
            </p>
          </section>

          <section id="section4">
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
                src="/article-files/my-first-shenanigans-in-3d/light-directional.png"
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
          </section>

          <section id="section5">
            <h2
              className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
              id="actual"
            >
              Filling up the soulless husk
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              The sun exists (in a way), but there's a dark void just, staring
              at you. This is the time where we add in the sky.{" "}
              <span className="font-bold">My initial solution was this:</span>{" "}
              create a big box that has the textures of a sky within it.
            </p>

            <p className="leading-7 mb-8 opacity-90">And here it is:</p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/my-first-shenanigans-in-3d/skybox-trial.png"
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
              The problem was that I didn't set a proper size for the box
              itself. At this point, I was scratching my head. Because I didn't
              know how to create a custom size for a box at the time, and I was
              about to ask GPT how to do it.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              Let me remind you, I was new to Three.js, reading documentations,
              and all that. So don't get all judgmental towards me when I ask an
              AI to read and relay documentation to me in an easier way,
              especially when I initially found it to be sparse and quite
              complicated.
            </p>
          </section>

          <section id="section6">
            <h2
              className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
              id="actual"
            >
              Staring into the void, but somehow, it's shining a light to me
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              When I was just about to open up ChatGPT, it suddenly hit me—why
              not just make the dark background use the sky's texture itself?
            </p>

            <p className="leading-7 mb-8 opacity-90">
              So I scoured the documentation on how to load an image as a
              texture for the dark background to use as a skybox. And I found
              out that{" "}
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
          </section>

          <section id="section7">
            <h2
              className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
              id="actual"
            >
              Filling up the soulless husk, pt.2
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              So I created an image to be used as a texture. The initial version
              was, from bottom to top, was a gradient going from orange to red.
              But after creating the texture, I thought that it looked quite
              apocalyptic, and wasn't the "vibe" I was going for. So I switched
              to cooler colors, and I added some stars too.
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/my-first-shenanigans-in-3d/skybox.webp"
                alt="Skybox texture"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                My skybox texture.
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
              . I'm not used to working with Photoshop (yet), because I find
              that Paint.NET gets the job done, and I haven't really come across
              problems that Paint.NET couldn't solve for me.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              So, we have our texture. Now we basically pass it along to
              TextureLoader for it to load the texture as the background.
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/my-first-shenanigans-in-3d/synthwave_act1.png"
                alt="First part of my changes to the project"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                The scene so far, complete with my previous changes.
              </figcaption>
            </figure>
          </section>

          <section id="section8">
            <h2
              className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
              id="actual"
            >
              The boys in the better land...?
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              I may haven't mentioned it yet, but if you're following Maxime's
              article, you may have noticed some changes to the terrain.
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/my-first-shenanigans-in-3d/issues.png"
                alt="Issues with the terrain"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                The issues that the terrain has.
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              <strong>
                Don't mind the sun and the postprocessing effects like bloom and
                the CRT filter, let's focus on the terrain's issues for now.
              </strong>
            </p>

            <p className="leading-7 mb-8 opacity-90">
              As a consequence of lighting up the world, we can see the huge gap
              on the right, and the seemingly empty section on the left. This is
              because of something called a <strong>displacement map</strong>.
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/my-first-shenanigans-in-3d/displacementmap.png"
                alt="The terrain's displacement map"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                Displacement map—credits to Maxime Heckel.
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              A displacement map basically tells a computer how to make a flat
              surface look bumpy. The darker it is, the flatter the surface is.
              And the whiter it is, the less seasoning they have on their food.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              <strong>Sorry, I'm just kidding. Please don't cancel me.</strong>
            </p>

            <p className="leading-7 mb-8 opacity-90">
              Anyway, the darker it is, the flatter the surface is. And when it
              gets whiter, the terrain gets bumpier.
            </p>
          </section>

          <section id="section9">
            <h2
              className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
              id="actual"
            >
              The process of elimination
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              But notice the darker colors in the red rectangles. It means that
              there are little to no bumps there—meaning gaps are existing
              inbetween the terrains.
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/my-first-shenanigans-in-3d/displacementmap_issues.png"
                alt="The issues to be addressed in the displacement map"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                Areas of interest.
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              So I fixed it with Paint.NET by adding whites to those areas of
              interest.
            </p>
          </section>

          <section id="section10">
            <h2
              className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
              id="actual"
            >
              Praise the sun!
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              So, we fixed the issues regarding the displacement map. Now we add
              the sun, by using{" "}
              <a
                href="https://threejs.org/docs/index.html?q=sphere#api/en/geometries/SphereGeometry"
                target="_blank"
                className={`text-[${SPAN_COLOR}] font-medium hover:text-[${HOVER_COLOR}] transition duration-150 ease-in-out`}
              >
                SphereGeometry.
              </a>{" "}
              As the name implies, it allows us to create sphere geometries.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              But, same with the sky, we also have to create textures for the
              sun. So here it is:
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/my-first-shenanigans-in-3d/sun.webp"
                alt="The sun's textures"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                The texture file of the sun
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              We're basically ready now to add the sun with the texture file
              applied to it. So, we'll use TextureLoader, and voila:
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/my-first-shenanigans-in-3d/synthwave_act2.png"
                alt="Second part of my changes to the project"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                The scene, now with a sun
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              I also added sun rays using DirectionalLight.
            </p>
          </section>

          <section id="section11">
            <h2
              className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
              id="actual"
            >
              Adding the postprocessing effects
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              So, we're nearly done with the project, just some more things to
              add like blur and a CRT filter. And{" "}
              <a
                href="https://threejs.org/docs/index.html?q=effect#examples/en/postprocessing/EffectComposer"
                target="_blank"
                className={`text-[${SPAN_COLOR}] font-medium hover:text-[${HOVER_COLOR}] transition duration-150 ease-in-out`}
              >
                EffectComposer{" "}
              </a>
              is the right tool for the job.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              There are lots of postprocessing effects in Three.js, but I
              decided to go for blur and a CRT filter, as I wanted to capture
              the "vibe of the 80's", so to speak.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              And here it is, with the postprocessing effects:
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/my-first-shenanigans-in-3d/synthwave_act3.png"
                alt="The third and last part of my changes to the project"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                The scene, now with blur and a CRT filter.
              </figcaption>
            </figure>
          </section>

          <section id="section12">
            <h2
              className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
              id="actual"
            >
              (Synth)wavy, dude!
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              Lastly, the music. The scene wouldn't feel complete without some
              synthwave music. So I picked a track from HOME (great artist, by
              the way), because his music captures the "vibe" well. Plus, I can
              legally use his music.
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/my-first-shenanigans-in-3d/home.png"
                alt="HOME, the artist"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                No permissions needed from the artist.
              </figcaption>
            </figure>
          </section>

          <section id="section13">
            <h2
              className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
              id="actual"
            >
              The end has no end, the end has no end
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              So, we're at the finish line (that I set). But, I'm sure there are
              more people out there that can add more to this project. But for
              me, I think it's perfect now.
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <div className="relative w-full pb-[56.25%] h-0">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/S7RprZc3dEs?si=6AQIkfuw_DAA7Brv"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                ></iframe>
              </div>
              <figcaption className="mt-2 text-center">YouTube Video</figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              So yeah, I hope you enjoyed this story on how I started on
              Three.js. Thanks for reading!
            </p>
          </section>

          <section id="section14">
            <h2
              className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
              id="actual"
            >
              Links
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              Here are the links for the project if you're interested.
            </p>

            <div className="flex flex-row gap-2 justify-center mx-auto">
              <motion.a
                href="https://github.com/jdichh/synthwave-scene"
                target="_blank"
                aria-label="Button to the GitHub repo of the project"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0.05 }}
              >
                <Image
                  src="/icons/github.svg"
                  alt="Button to the GitHub repo of the project"
                  width={ICON_DIMENSIONS}
                  height={ICON_DIMENSIONS}
                  priority={true}
                  className="object-cover hover:bg-[#6E99C4] transition duration-150 ease-in-out rounded-md border-[1px] p-0.5"
                />
              </motion.a>
              <motion.a
                href="https://jdsynthwave.netlify.app/"
                target="_blank"
                aria-label="Button for the live link of the project"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0.05 }}
              >
                <Image
                  src="/icons/netlify.svg"
                  alt="Button for the live link of the project"
                  width={ICON_DIMENSIONS}
                  height={ICON_DIMENSIONS}
                  priority={true}
                  className="object-cover hover:bg-[#6E99C4] transition duration-150 ease-in-out rounded-md border-[1px] p-0.5"
                />
              </motion.a>
            </div>
          </section>
        </article>
      </motion.main>
      <RouteFooter />
    </>
  );
}
