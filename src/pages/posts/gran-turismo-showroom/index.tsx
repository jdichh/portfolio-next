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
        <title>Posts | Creating a Gran Turismo-esque showroom with Three.js</title>
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
                  href="#section5"
                  className="font-medium text-[#6E99C4] hover:text-[#DADADA] transition duration-150 ease-in-out"
                >
                  Skip to the good stuff.
                </a>
              </div>
            </div>
          </section>

          <section id="section2">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-[24rem]">
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
                Test Drive 6 cover.
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
              The Gran Turismo series, as a whole, has always been in my heart.
              Not just because of the cars, and the quality of the racetracks
              themselves; the presentation, coupled with the glorious
              soundtrack, has always been top-tier ever since its first release.
              This was also where I discovered my love for jazz. Imagine, being
              in the comfort of your home to wind down after a long, tiresome
              day, and listening to the games' jazz collection.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              Anyway, I'm going on a tangent here. If you've read my{" "}
              <a
                href="/posts/my-first-shenanigans-in-3d"
                target="_blank"
                className={`text-[#6E99C4] font-semibold hover:text-[#DADADA] transition duration-150 ease-in-out`}
              >
                previous post
              </a>
              , then you'd know how I came by Three.js, and in my self-learning
              journey. And now, to show you how I made the showroom project.
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

          <section id="section5"  className="scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3 ">
              Bro, is that a (Toyota) Supra?!
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              I perused Sketchfab for car models, and I came across an A80 and
              A90 Supra in the same page. And I thought to myself, "Why not
              something about honoring the past car, and welcoming the new one?
              A passing of the baton of sorts.".
            </p>

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

            <p className="leading-7 mb-8 opacity-90">
              Now that we secured the car models, let's load it in.
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
                The Supras
              </figcaption>
            </figure>
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
