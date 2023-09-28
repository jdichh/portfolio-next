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
  const SONIC_BLUE = "#6E99C4";
  const OFF_WHITE = "#DADADA";
  const IMAGE_DIMENSIONS = 700;
  const IMAGE_QUALITY = 95;
  const FIGURE_BG = "#1F1E26";
  const ICON_DIMENSIONS = 40;
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.9;

  return (
    <>
      <Head>
        <title>
          Posts | Creating a Gran Turismo-esque showroom with Three.js
        </title>
      </Head>
      <PostsHeader title="Creating a Gran Turismo-esque showroom with Three.js" />
      <motion.main
        className={`flex flex-col items-start w-full max-w-[700px] mx-auto p-4 ${spaceGrotesk.className}`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <article>
          <div className="mt-44" />
          <div className="mb-8">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">
              Creating a Gran Turismo-esque showroom with Three.js
            </h1>
            <p className="opacity-50 text-sm sm:text-base">
              {" "}
              September 28, 2023
            </p>
          </div>

          <section id="section1">
            <div className="bg-[#591414] rounded-md p-3">
              <p className="leading-7 mb-8">
                The section below isn't relevant to the title.
              </p>
              <div className="flex justify-end">
                <a
                  href="#good-stuff"
                  className="font-medium text-[#6E99C4] hover:text-[#DADADA] transition duration-150 ease-in-out"
                >
                  Skip to the good stuff.
                </a>
              </div>
            </div>
          </section>

          <section id="section2">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3">
              Gentlemen, start your engines!
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              Would you believe me, a 22 year-old guy, doesn't have a driver's
              license yet or hasn't driven a car out on public roads? Well maybe
              you will, but, anyway, I hadn't really experienced driving, not
              grandma-style driving—I mean, REALLY driving a car. Revving the
              engine to the redline, and only for the cycle to repeat after
              ripping through the transmission; hearing the tires squeal for
              your mercy, shouting at you that they're at the tipping point
              between traction and slippage.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              My love for cars, especially the Dodge Viper, and just about
              anything automotive, began with a game on the PlayStation 1 called
              Test Drive 6. Just hearing Gary Numan's song "Cars", and crashing
              out police cars and other competitors alike, just reminds me of
              good times back from when I was just a young, chubby boy.
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/gran-turismo-showroom/testdrive6.jpg"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                Test Drive 6 PS1 cover.
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              And since then, I've just about exhausted list after list of great
              driving/racing games to play; from racing on dirt, on gravel, and
              on asphalt. If you ask me if I played a certain driving/racing
              game, there is a 99.9% chance that I'll say that I already have.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              DiRT games? Check. GRID games? Check. NASCAR? Check. The Ridge
              Racer series? Check. Need for Speed/Burnout/Forza games? Of
              course! Why would you even ask that? And the list goes on and on.
              Point is, like most of other car guys/gals out there, my love of
              cars began with video games.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              But there's one more series that I haven't mentioned it yet, and
              that is Gran Turismo.
            </p>
          </section>

          <section id="section3">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3">
              "The Real Driving Simulator"
            </h2>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/gran-turismo-showroom/gtlogo.png"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                Gran Turismo logo and tagline.
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              Test Drive 6 was great (to me). But the Gran Turismo series, as a
              whole, has always been closer to my heart. Not just because of the
              cars, and the quality of the racetracks themselves; the
              presentation, coupled with the glorious soundtrack, has always
              been top-tier ever since its first release. This was also where I
              discovered my love for jazz. Imagine, being in the comfort of your
              home to wind down after a long, tiresome day, and listening to the
              games' jazz collection.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              Anyway, I'm going on a tangent here about my love for cars and
              driving/racing video games. If you've read my{" "}
              <a
                href="/posts/my-first-shenanigans-in-3d"
                target="_blank"
                className={`text-[${SONIC_BLUE}] font-semibold hover:text-[${OFF_WHITE}] transition duration-150 ease-in-out`}
              >
                previous post
              </a>
              , then you'd know how I came by Three.js so early on in my
              self-learning journey. And now, to show you how I made the
              showroom project.
            </p>
          </section>

          <section id="section4">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3 ">
              A bright idea
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              After finishing the synthwave project, I started to think what
              else could I do with Three.js. Another scene but with a different
              aesthetic? Nah. Time for something different. A product
              configurator in 3D? Nope, I don't even know where to start with
              that yet. How about a product page, featuring the product in 3D?
              In the future, perhaps.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              And it suddenly dawned on me, my first output was displaying a
              car's 3D model—and I really love anything automotive, so I'll do a
              commercial of sorts for a manufacturer made with Three.js!
            </p>
          </section>

          <div id="good-stuff" className="scroll-mt-12" />
          <section id="section5">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3 ">
              Bro, is that a (Toyota) Supra?!
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              I perused Sketchfab for car models, and I came across an A80 and
              A90 Supra in the same page. And I thought to myself, "Why not
              something about honoring the past car, and welcoming the new one?
              Like, a passing of the baton of sorts?".
            </p>

            <p className="leading-7 mb-8 opacity-90">
              So I got not only one, but two Supras!
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/gran-turismo-showroom/supras.jpg"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                A80 Supra on the left, A90 on the right—credits to Car and
                Driver for the picture.
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              Now that I've secured the car models, let's load them in using{" "}
              <a
                href="https://threejs.org/docs/index.html?q=gltf#examples/en/loaders/GLTFLoader"
                target="_blank"
                className={`font-medium text-[${SONIC_BLUE}] hover:text-[${OFF_WHITE}] transition duration-150 ease-in-out`}
              >
                GLTFLoader
              </a>
              . This just loads any models in the JSON (.gltf) or binary (.glb)
              format.
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/gran-turismo-showroom/supra_models.png"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                Supras in action.
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              <strong>
                This is just a zoomed-in view of it, and not the actual
                perspective itself.
              </strong>
            </p>

            <p className="leading-7 mb-8 opacity-90">
              I won't get too much into the technical aspect of it, but I
              initially set up the camera using{" "}
              <a
                href="https://threejs.org/docs/index.html?q=orbit#examples/en/controls/OrbitControls"
                target="_blank"
                className={`font-medium text-[${SONIC_BLUE}] hover:text-[${OFF_WHITE}] transition duration-150 ease-in-out`}
              >
                OrbitCamera
              </a>{" "}
              to hover and rotate above the cars, at an angle, and looking at
              the center point of the two cars combined.
            </p>
          </section>

          <section id="section6">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3 ">
              The floor is...concrete
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              So not only one, but two (2) Supras!
            </p>

            <figure className={`bg-[${FIGURE_BG}] p-3 rounded-md my-8 mx-auto`}>
              <Image
                src="/article-files/gran-turismo-showroom/supras.jpg"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                A80 Supra on the left, A90 on the right—credits to Car and
                Driver for the picture.
              </figcaption>
            </figure>
          </section>
        </article>
      </motion.main>
      <RouteFooter />
    </>
  );
}
