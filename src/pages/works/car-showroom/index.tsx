"use client";

import React from "react";
import RouteHeader from "@/pages/RouteHeader";
import RouteFooter from "@/pages/RouteFooter";
import Image from "next/image";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function index() {
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

          <div className="opacity-90">
            <p className="leading-7 mb-8">
              During the earlier days of my journey in learning frontend
              development, which started around June 2023, I came across a video
              in my recommended section in YouTube. It was about a web
              developer's portfolio in 3D, made with something called{" "}
              <a
                href="https://threejs.org/"
                target="_blank"
                className="text-[#6E99C4] font-medium hover:text-[#DADADA] transition duration-100 ease-in-out"
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
                className="text-[#6E99C4] font-medium hover:text-[#DADADA] transition duration-100 ease-in-out"
              >
                roadmap.sh
              </a>{" "}
              as a guide in my self-learning journey. It's very good by the way,
              it's full of quality resources and its "difficulty scaling" is
              quite linear, at least for me. But, it didn't have a guide, as of
              this article's writing, about 3D applications using browsers.
            </p>

            <p className="leading-7 mb-8">
              So, imagine how amused I was at the video YouTube recommended to
              me. I was shocked, but in a good way. Because I thought, at the
              time, that frontend was just about React, Vue, Angular, and all
              that jazz. So I took it upon myself to get to know and learn how
              Three.js worked. But don't follow what I did, kids, because I
              could've spent time learning React and its ecosystem instead of 3D
              stuff.
            </p>

            <figure className="bg-[#1F1E26] p-3 rounded-md my-16 mx-auto">
              <Image
                src="/article-images/showroom/threejs.png"
                alt=""
                width={700}
                height={700}
                quality={95}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                Three.js website.
              </figcaption>
            </figure>

            <p className="leading-7 mb-8">
              But anyway, I looked at the documentations that Three.js provided.
              I was so confused at the time, as the details were so sparse for
              me at the time (or maybe I'm just a big, dumb idiot) , and I
              didn't know where to start. So of course, like any person early on
              in their self-learning journey, I watched some tutorials on how to
              utilize Three.js.
            </p>
          </div>

          <figure className="bg-[#1F1E26] p-3 rounded-md my-16 mx-auto">
            <Image
              src="/project/showroom.png"
              alt=""
              width={700}
              height={700}
              quality={95}
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
