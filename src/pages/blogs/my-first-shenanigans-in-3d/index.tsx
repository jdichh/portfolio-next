"use client";

import React from "react";
import BlogHeader from "@/components/blog-components/blogHeader";
import RouteFooter from "@/components/blog-components/routeFooter";
import Image from "next/image";
import Head from "next/dist/shared/lib/head";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function index() {
  const IMAGE_DIMENSIONS = 750;
  const IMAGE_QUALITY = 95;

  return (
    <>
      <Head>
        <title>Blog | My first shenanigans in 3D</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="A story of how I came by 3D so early on in my self-learning journey in frontend development."
        />
      </Head>
      <BlogHeader />
      <motion.main
        className={`article ${spaceGrotesk.className}`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: [0.22, 1, 0.36, 1] }}
      >
        <article>
          <div className="mt-44" />
          <div className="mb-8">
            <h1 className="article-title">My first shenanigans in 3D</h1>
            <p className="article-date">
              September 27, 2023 | Updated 3 days later
            </p>
          </div>

          <section id="section1">
            <h2 className="article-section-title">Moment of discovery</h2>

            <p className="article-text">
              During the earlier days of my journey in learning frontend
              development, which started around June 2023, I came across a video
              in my recommended section in YouTube. It was about making a
              portfolio in 3D, with something called{" "}
              <a
                href="https://threejs.org/"
                target="_blank"
                className="article-hrefs"
              >
                Three.js
              </a>
              .
            </p>

            <p className="article-text">
              So imagine what my reaction was at the video YouTube recommended
              to me. Think about it, if you were new to frontend web
              development, and you saw that? What would your reaction be? Oh
              man. Well, I was shocked, but in a positive manner. Because I
              thought, at the time, that frontend was just about React, Vue,
              Angular, and all that jazz. So I took it upon myself to get to
              know and learn how Three.js worked.
            </p>

            <p className="article-text">
              <strong>
                But don't do what I did, kids, because I could've spent time
                learning more about the fundamentals of programming, React and
                its ecosystem instead of 3D stuff.
              </strong>
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/my_reaction.png"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                priority={true}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                My reaction to that information:
              </figcaption>
            </figure>

            <p className="article-text">
              Now, I use Kamran Ahmed's{" "}
              <a
                href="https://roadmap.sh/"
                target="_blank"
                className="article-hrefs"
              >
                roadmap.sh
              </a>{" "}
              as a guide in my self-learning journey. It's very good by the way,
              it's full of quality resources and its "difficulty scaling" is
              quite linear, at least for me. But, it didn't have a guide, at
              least as of this article's writing, about utilizing 3D
              capabilities in browsers.
            </p>
          </section>

          <section id="section2">
            <h2 className="article-section-title">
              I'm confused, and I can understand it at the same time
            </h2>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/threejs.webp"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                Three.js homepage
              </figcaption>
            </figure>

            <p className="article-text">
              I looked at the documentations that Three.js provided. I was so
              confused, as the details in the documentation were so sparse for
              me at the time (or maybe I'm just a big, dumb idiot). So I
              enlisted the help of ChatGPT, and specifically told it to answer
              me like I'm a high schooler.
            </p>

            <p className="article-text">
              Luckily, I already knew what some terms meant, like anti-aliasing,
              shadow resolution, texture resolution, lighting, models, and etc.,
              because I really loved modding Skyrim to the point where my{" "}
              <a
                href="https://www.lenovo.com/us/en/p/laptops/ideapad/ideapad-gaming-laptops/ideapad-l340-15irh-gaming/88ipl301161"
                target="_blank"
                className="article-hrefs"
              >
                poor laptop{" "}
              </a>
              started to sound like hair dryers in a full salon. Anyway, it was
              because of my unhealthy relationship with Skyrim modding that I
              managed to understand some of the documentation.
            </p>

            <p className="article-text">
              After some time watching and reading tutorials, I managed to load
              my first 3D model, which I downloaded from Sketchfab, and this was
              my first output:
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/first_output.png"
                alt="My first output in Three.js"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                My first time displaying a model with Three.js.
              </figcaption>
            </figure>

            <p className="article-text">
              Granted, this isn't anything impressive, but at the time, I was so
              ecstatic that I managed to do it.
            </p>
          </section>

          <section id="section3">
            <h2 className="article-section-title ">
              A little help can go a long way
            </h2>

            <p className="article-text">
              Some time after that, I came across an{" "}
              <a
                href="https://blog.maximeheckel.com/posts/vaporwave-3d-scene-with-threejs/"
                target="_blank"
                className="article-hrefs"
              >
                article by Maxime Heckel
              </a>
              , on how to create a vaporwave scene with Three.js. This article
              was a great read by the way, as it helped me understand more of
              the complicated stuff like how to regenerate terrain for an
              indefinite amount of time.
            </p>

            <p className="article-text">
              It's a trick used by many games, to give you the illusion that
              there's a huge map during a corridor-style level (like Temple Run,
              remember that?)—when in actuality, a part of the map's terrain is
              just regenerated after the camera has passed it. It's like walking
              or running on a treadmill, in simpler terms.
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/vaporwave.webp"
                alt="A screenshot of Maxime Heckel's vaporwave project."
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                Maxime Heckel's vaporwave project.
              </figcaption>
            </figure>

            <p className="article-text">
              I followed Maxime's instructions and guidelines, but not blindly.
              I took the time to understand what some things meant, because
              what's the point of tutorials if you're just going to copy code
              for code, and not understand it? Yeah, I'm talking to you, Jason
              from 3 months ago.
            </p>

            <p className="article-text">
              Anyway, I didn't want to end the project with a 1:1 copy of his
              work; I wanted to add more things, like a sun, a skybox,
              background music, some postprocessing effects like bloom and a CRT
              filter, and maybe some other tweaks if I found the need to act
              upon them. So I made sure to accomplish these tasks that I set for
              myself.
            </p>
          </section>

          <section id="section4">
            <h2 className="article-section-title">Let there be light</h2>

            <p className="article-text">
              Okay, task one: illuminate the world. This is done by using{" "}
              <a
                href="https://threejs.org/docs/index.html?q=direction#api/en/lights/DirectionalLight"
                target="_blank"
                className="article-hrefs"
              >
                DirectionalLight
              </a>
              —it's basically the sun.
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/light-directional.png"
                alt="Directional light"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                A visual example of directional light—credits go to viblo.asia.
              </figcaption>
            </figure>
          </section>

          <section id="section5">
            <h2 className="article-section-title">Filling up the void</h2>

            <p className="article-text">
              The sun now exists (in a way), but there's a dark emptiness just
              staring at you. To fix that, we'll add in a sky.
            </p>

            <p className="article-text">
              <strong>So, my initial solution was this:</strong> create a big
              box by using{" "}
              <a
                href="https://threejs.org/docs/index.html?q=geom#api/en/geometries/BoxGeometry"
                target="_blank"
                className="article-hrefs"
              >
                BoxGeometry
              </a>{" "}
              and add in a texture image of a sky within it using{" "}
              <a
                href="https://threejs.org/docs/index.html?q=textureload#api/en/loaders/TextureLoader"
                target="_blank"
                className="article-hrefs"
              >
                TextureLoader
              </a>
              .
            </p>

            <p className="article-text">And here it is:</p>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/skybox-trial.png"
                alt="My initial skybox trial"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                Yeah...nice try, dumbass.
              </figcaption>
            </figure>

            <p className="article-text">
              The problem was that I didn't set a proper size for the box
              itself. Secondly, the textures don't really fit the colors of the
              lighting and terrain—there's too much contrast between them.
            </p>

            <p className="article-text">
              However, I started to notice something. Something that I didn't
              really pay attention to before. The vast space of emptiness
              itself—the dark background that's been staring at me all this
              time.
            </p>
          </section>

          <section id="section6">
            <h2 className="article-section-title">
              Staring into the void, yet somehow, it's shining a light to me
            </h2>

            <p className="article-text">
              This was my "eureka" moment. It suddenly hit me, why not just make
              the dark background just use the sky's texture instead of using a
              big box?
            </p>

            <p className="article-text">
              So I created an image to be used as a texture. The initial
              version, from bottom to top, was a gradient going from red to
              orange. But after creating the texture, I thought that it looked
              quite apocalyptic, and wasn't the "vibe" I was going for. So I
              switched to cooler colors, and I added some stars too.
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/skybox.webp"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                My skybox texture.
              </figcaption>
            </figure>

            <p className="article-text">
              This was made with my ol' trusty tool and long time partner{" "}
              <a
                href="https://getpaint.net/"
                target="_blank"
                className="article-hrefs"
              >
                Paint.NET
              </a>
              . I'm not used to working with Photoshop (yet), because I find
              that Paint.NET gets the job done, and I haven't really come across
              problems that Paint.NET couldn't solve for me.
            </p>

            <p className="article-text">
              So, we have our texture. Now we basically pass it along to
              TextureLoader for it to load the texture as the background.
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/synthwave_act1.png"
                alt="First part of my changes to the project"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                The scene so far, complete with my previous changes.
              </figcaption>
            </figure>
          </section>

          <section id="section7">
            <h2 className="article-section-title ">
              The boys in the better land...?
            </h2>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/issues.png"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                The issues that the terrain has in brighter lighting.
              </figcaption>
            </figure>

            <p className="article-text">
              <strong>
                Don't mind the color of the sky, the sun and the postprocessing
                effects like bloom and the CRT filter, let's focus on the
                terrain's issues for now.
              </strong>
            </p>

            <p className="article-text">
              As a consequence of lighting up the world, we can see the huge gap
              on the right, and the seemingly empty section on the left. This is
              because of something called a <strong>displacement map</strong>.
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/displacementmap.png"
                alt="The terrain's displacement map"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                Displacement map—credits to Maxime Heckel.
              </figcaption>
            </figure>

            <p className="article-text">
              A displacement map basically tells a computer how to make a flat
              surface look bumpy. The darker it is, the flatter the surface is.
              And the brighter it is, the bumpier it gets.
            </p>
          </section>

          <section id="section8">
            <h2 className="article-section-title ">
              The process of elimination, with no hint of desperation
            </h2>

            <p className="article-text">
              Notice the darker colors in the red rectangles. As I said, the
              darker the colors are, the flatter it is, and the brighter it is,
              the bumpier it gets.
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/displacementmap_issues.png"
                alt="The issues to be addressed in the displacement map"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                Areas of interest.
              </figcaption>
            </figure>

            <p className="article-text">
              In this case, the issues I showed above can be simply solved using
              the magic of photo editing; so I fixed it with Paint.NET by adding
              whites to these areas of interest.
            </p>
          </section>

          <section id="section9">
            <h2 className="article-section-title">Praise the sun</h2>

            <p className="article-text">
              So, we fixed the issues regarding the terrain data. This time,
              let's add in the sun by using{" "}
              <a
                href="https://threejs.org/docs/index.html?q=sphere#api/en/geometries/SphereGeometry"
                target="_blank"
                className="article-hrefs"
              >
                SphereGeometry.
              </a>{" "}
              As the name implies, it allows us to create sphere geometries.
            </p>

            <p className="article-text">
              But, same with the sky, we also have to create textures for the
              sun. So here it is:
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/sun.webp"
                alt="The sun's textures"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                The texture file of the sun
              </figcaption>
            </figure>

            <p className="article-text">
              We're basically ready now to add the sun with the texture file
              applied to it. So, we'll use TextureLoader, and voila:
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/synthwave_act2.png"
                alt="Second part of my changes to the project"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                The scene, now with a sun and terrain fixes.
              </figcaption>
            </figure>

            <p className="article-text">
              I also added sun rays using DirectionalLight.
            </p>
          </section>

          <section id="section10">
            <h2 className="article-section-title ">Putting on some make-up</h2>

            <p className="article-text">
              So, we're nearly done with the project, just some more
              postprocessing effects to add like bloom and a CRT filter. And{" "}
              <a
                href="https://threejs.org/docs/index.html?q=effect#examples/en/postprocessing/EffectComposer"
                target="_blank"
                className="article-hrefs"
              >
                EffectComposer{" "}
              </a>
              is the right tool for the job.
            </p>

            <p className="article-text">
              In Maxime's article, he had chromatic aberration on. I decided to
              leave it on because it kinda fit the "vibe" I was going for, and
              when supplemented with my other postprocessing effects of choice,
              this can only look good.
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/chromatic_aberration.jpg"
                alt="Chromatic aberration example"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                Comparison between chromatic aberration enabled (top), and
                disabled (bottom). Credits to photographylife.
              </figcaption>
            </figure>

            <p className="article-text">
              And here it is, with my other postprocessing effects of choice:
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/synthwave_act3.png"
                alt="The third and last part of my changes to the project"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                The scene, with chromatic aberration, bloom and a CRT filter.
              </figcaption>
            </figure>
          </section>

          <section id="section11">
            <h2 className="article-section-title">(Synth)wavy, dude!</h2>

            <p className="article-text">
              Lastly, the music. The scene wouldn't feel complete without some
              synthwave. So I picked a track from HOME (great artist, by the
              way), because his music captures the "vibe" well. Plus, I can
              legally use his music.
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/my-first-shenanigans-in-3d/home.png"
                alt="HOME, the artist"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                No permissions needed from the artist.
              </figcaption>
            </figure>
          </section>

          <section id="section12">
            <h2 className="article-section-title">The end has no end</h2>

            <p className="article-text">
              So, we've crossed the finish line (that I set). But, I'm sure
              there are more people out there that can add more to this project.
              But for me, I think it's perfect now.
            </p>

            <figure className="article-figure">
              <div className="article-iframe-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/S7RprZc3dEs?si=6AQIkfuw_DAA7Brv"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="article-iframe"
                ></iframe>
              </div>
              <figcaption className="article-figure-caption">
                YouTube Video
              </figcaption>
            </figure>

            <p className="article-text">
              So yeah, I hope you enjoyed this story on how I started on
              Three.js, and a tutorial of sorts. Thanks for reading!
            </p>
          </section>

          <section id="section13">
            <h2 className="article-section-title">Links</h2>

            <p className="article-text">
              Here are the links for the project if you're interested.{" "}
              <strong>
                I recommend opening the project itself on a high resolution
                monitor.
              </strong>
            </p>

            <p className="article-text">
              <strong>Updated on {"September 30, 2023: "}</strong>Hey! Jason
              from the future here, I recently changed the music to use Cramped
              Skunkman's Almond Cruise. World Peace!
            </p>

            <div className="article-links-container">
              <a
                href="https://github.com/jdichh/synthwave-scene"
                target="_blank"
                aria-label="Button to the GitHub repo of the project"
                className="article-links"
              >
                GITHUB
              </a>
              <a
                href="https://jdsynthwave.netlify.app/"
                target="_blank"
                aria-label="Button for the live link of the project"
                className="article-links"
              >
                DEMO
              </a>
              <a
                href="https://drive.google.com/drive/folders/1T71kzlu3KbTG4J0MR5YbCOmdzzKyOBuX?usp=drive_link"
                target="_blank"
                aria-label="Button for the development videos of the project"
                className="article-links"
              >
                DEV VIDEOS
              </a>
            </div>
          </section>
        </article>
      </motion.main>
      <RouteFooter />
    </>
  );
}
