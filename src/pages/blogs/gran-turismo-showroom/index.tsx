"use client";

import React from "react";
import BlogHeader from "@/pages/blogHeader";
import RouteFooter from "@/pages/routeFooter";
import Image from "next/image";
import Head from "next/dist/shared/lib/head";
import Accordion from "@/components/accordion";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

import DirectionalLightSnippet from "@/components/blog-components/gtshowroom-accordion-components/snippets/directionalLightSnippet";
import FloorSnippet from "@/components/blog-components/gtshowroom-accordion-components/snippets/floorSnippet";
import ModelShadowSnippet from "@/components/blog-components/gtshowroom-accordion-components/snippets/modelShadowSnippet";
import SpotlightSnippet from "@/components/blog-components/gtshowroom-accordion-components/snippets/spotlightSnippet";
import RendererSettingsSnippet from "@/components/blog-components/gtshowroom-accordion-components/snippets/rendererSettingsSnippet";
import RendererSnippet from "@/components/blog-components/gtshowroom-accordion-components/snippets/rendererSnippet";

import ModelShadowSnippetDescription from "@/components/blog-components/gtshowroom-accordion-components/snippets/snippet-descriptions/modelShadowSnippetDescription";
import DirectionalLightSnippetDescription from "@/components/blog-components/gtshowroom-accordion-components/snippets/snippet-descriptions/directionalLightSnippetDescription";
import FloorSnippetDescription from "@/components/blog-components/gtshowroom-accordion-components/snippets/snippet-descriptions/floorSnippetDescription";
import SpotlightSnippetDescription from "@/components/blog-components/gtshowroom-accordion-components/snippets/snippet-descriptions/spotlightSnippetDescription";
import RendererSettingsSnippetDescription from "@/components/blog-components/gtshowroom-accordion-components/snippets/snippet-descriptions/rendererSettingsSnippetDescription";
import RendererSnippetDescription from "@/components/blog-components/gtshowroom-accordion-components/snippets/snippet-descriptions/rendererSnippetDescription";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function index() {
  const SONIC_BLUE = "#6E99C4";
  const OFF_WHITE = "#DADADA";
  const IMAGE_DIMENSIONS = 750;
  const IMAGE_QUALITY = 95;
  const LIGHTER_BG = "#1F1E26";
  const BTN_TEXT_COLOR = LIGHTER_BG;
  const ICON_DIMENSIONS = 40;
  const ON_HOVER_SCALE = 1.1;
  const ON_TAP_SCALE = 0.9;

  return (
    <>
      <Head>
        <title>Blog | A Gran Turismo-esque showroom with Three.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <BlogHeader title="A Gran Turismo-esque showroom with Three.js" />
      <motion.main
        className={`flex flex-col items-start w-full max-w-[750px] mx-auto p-4 ${spaceGrotesk.className}`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <article>
          <div className="mt-44" />
          <div className="mb-8">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">
              A Gran Turismo-esque showroom with Three.js
            </h1>
            <p className="opacity-50 text-sm sm:text-base">
              September 29, 2023
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
              you will, but, anyway, I hadn't really experienced driving yet,
              not grandma-style driving—I mean, REALLY driving a car. So,
              naturally, playing driving/racing games was my escape.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              Revving the engine to the redline, only for the cycle to repeat
              after ripping through the transmission to change gears; hearing
              the tires squeal for mercy, telling you—shouting at you that the
              tyres are at the tipping point between traction and slippage. For
              the sole reason of beating the other guys to the finish line.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              My love for cars, especially the Dodge Viper and all of its
              iterations, and just about anything automotive, began with a game
              on the PlayStation 1 called Test Drive 6. Hearing a cover of
              Gary Numan's song "Cars" play in the intro (the original is
              better), crashing out police cars and other competitors alike,
              reminds me of good times back from when I was just a young,
              fat(ter) kid.
            </p>

            <figure
              className={`bg-[${LIGHTER_BG}] p-3 rounded-md my-8 mx-auto`}
            >
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
              Ever since then, I've just about exhausted list after list of
              great driving/racing games to play; from racing on dirt, on
              gravel, and on asphalt. If you ask me if I played a certain
              driving/racing game, there is a 99.9% chance that I'll say that I
              already have.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              DiRT games? Check. GRID games? Check. NASCAR? Check. The Ridge
              Racer series? Check. Need for Speed/Burnout/Forza games? Of
              course! Why would you even ask that? And the list goes on and on.
              Point is, like most of the other car guys/gals out there, my love
              of cars began with video games.
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

            <figure
              className={`bg-[${LIGHTER_BG}] p-3 rounded-md my-8 mx-auto`}
            >
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
              discovered my love for jazz and funk.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              I remember the times, where I'm "fatly" walking to the PS1,
              inserting my disc of Gran Turismo 2 in the console, powering it
              on, showing me the glorious boot-up screen, and then off to the
              races for hours on end.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              Anyway, I'm going on a tangent here about my love for cars and
              driving/racing video games and childhood memories. If you've read
              my{" "}
              <a
                href="/blogs/my-first-shenanigans-in-3d"
                target="_blank"
                className={`text-[${SONIC_BLUE}] font-semibold hover:text-[${OFF_WHITE}] transition duration-150 ease-in-out`}
              >
                previous post
              </a>
              , then you'd know how I came by Three.js so early on in my
              self-learning journey.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              And now, to show you how I made the showroom project.
            </p>
          </section>

          <div id="good-stuff" className="scroll-mt-12" />

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

          <section id="section5">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3 ">
              Is that a Supra?!
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              I perused Sketchfab for car models, and came across an A80 and A90
              Supra in the same page. And I suddenly thought to myself,{" "}
              <strong>
                "Why not a 3D project about honoring the past model, and
                welcoming the new one? Like, a passing of the baton of sorts?"
              </strong>
              .
            </p>

            <p className="leading-7 mb-8 opacity-90">
              So I got not only one, but two Toyota Supras!
            </p>

            <figure
              className={`bg-[${LIGHTER_BG}] p-3 rounded-md my-8 mx-auto`}
            >
              <Image
                src="/article-files/gran-turismo-showroom/supras.jpg"
                alt="Picture of the old and new Supras"
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

          <section id="section6">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3 ">
              Paint me like one of your french girls
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              Ah! But before that, of course, is the canvas so that we can start
              doing our painting, so to speak.
            </p>

            <Accordion title="Setting up the canvas">
              <div
                className={`bg-[${LIGHTER_BG}] px-4 py-3 rounded-md my-2 mx-auto`}
              >
                <RendererSnippet />
              </div>

              <div className="leading-7 my-4 px-2 opacity-90 w-11/12 mx-auto code-snippet">
                <h2 className="text-xl sm:text-2xl font-bold my-3 ">
                  Quick Rundown
                </h2>
                <ul className="list-disc">
                  <RendererSnippetDescription />
                </ul>
              </div>
            </Accordion>

            <p className="leading-7 mb-8 opacity-90">
              I also customized the configurations of my renderer. Here they
              are:
            </p>

            <Accordion title="My renderer configuration">
              <div
                className={`bg-[${LIGHTER_BG}] px-4 py-3 rounded-md my-2 mx-auto`}
              >
                <RendererSettingsSnippet />
              </div>
              <div className="leading-7 my-4 px-2 opacity-90 w-11/12 mx-auto code-snippet">
                <h2 className="text-xl sm:text-2xl font-bold my-3 ">
                  Quick Rundown
                </h2>
                <ul className="list-disc">
                  <RendererSettingsSnippetDescription />
                </ul>
              </div>
            </Accordion>
          </section>

          <section id="section7">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3 ">
              Lighten up, man
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              We have to set up{" "}
              <a
                href="https://threejs.org/docs/index.html#api/en/lights/DirectionalLight"
                target="_blank"
                className={`font-medium text-[${SONIC_BLUE}] hover:text-[${OFF_WHITE}] transition duration-150 ease-in-out`}
              >
                DirectionalLight
              </a>
              , because if we don't, then the whole scene will just be pitch
              black. It's basically equivalent to the sun in the real world.
            </p>

            <Accordion title="How I added in sunlight">
              <div
                className={`bg-[${LIGHTER_BG}] px-4 py-3 rounded-md my-2 mx-auto`}
              >
                <DirectionalLightSnippet />
              </div>

              <div className="leading-7 my-4 px-2 opacity-90 w-11/12 mx-auto code-snippet">
                <h2 className="text-xl sm:text-2xl font-bold my-3 ">
                  Quick Rundown
                </h2>
                <ul className="list-disc">
                  <DirectionalLightSnippetDescription />
                </ul>
              </div>
            </Accordion>

            <p className="leading-7 mb-8 opacity-90">
              Now we'll load in the models using{" "}
              <a
                href="https://threejs.org/docs/index.html#examples/en/loaders/GLTFLoader"
                target="_blank"
                className={`font-medium text-[${SONIC_BLUE}] hover:text-[${OFF_WHITE}] transition duration-150 ease-in-out`}
              >
                GLTFLoader
              </a>
              . This just loads any models in the JSON (.gltf) or binary (.glb)
              format.
            </p>

            <figure
              className={`bg-[${LIGHTER_BG}] p-3 rounded-md my-8 mx-auto`}
            >
              <Image
                src="/article-files/gran-turismo-showroom/supra_models.png"
                alt="Loaded in the two supras"
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
              Oh yeah, I forgot to mention about{" "}
              <a
                href="https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera"
                target="_blank"
                className={`font-medium text-[${SONIC_BLUE}] hover:text-[${OFF_WHITE}] transition duration-150 ease-in-out`}
              >
                PerspectiveCamera
              </a>
              . It's used to basically mimic the way that the human eye sees. I
              set it up to have a low field of view, but zoomed out as well, so
              that the entire scene looks like it could be a wallpaper, and not
              have a fish-eye effect.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              In setting up the rotating camera, at least just for this
              instance, I initially set it up using{" "}
              <a
                href="https://threejs.org/docs/index.html#examples/en/controls/OrbitControls"
                target="_blank"
                className={`font-medium text-[${SONIC_BLUE}] hover:text-[${OFF_WHITE}] transition duration-150 ease-in-out`}
              >
                OrbitCamera
              </a>{" "}
              to hover and rotate above the cars, at an angle, and looking at
              the center point of the two cars. But during the project's life
              cycle, I changed it a bit. You'll now why later.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              And you may be wondering,{" "}
              <strong>
                "Jason, you didn't show us how to load the models!"
              </strong>{" "}
              Well, I'll you about it later as well. Sorry.
            </p>
          </section>

          <section id="section8">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3 ">
              Hmm yes...the floor here is made out of floor
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              So I had the models loaded in. Now, the floor texture is next in
              the list. We can load the floor texture similarly to how I loaded
              the terrain in the previous project by using{" "}
              <a
                href="https://threejs.org/docs/index.html#api/en/geometries/PlaneGeometry"
                target="_blank"
                className={`font-medium text-[${SONIC_BLUE}] hover:text-[${OFF_WHITE}] transition duration-150 ease-in-out`}
              >
                PlaneGeometry
              </a>
              . As the name suggests, it loads in a plane.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              But I have to source the floor textures first. So I did, by
              downloading textures from a repository of HQ textures, I forgot
              what website it was called, but there are numerous repositories
              out there that can serve you well if you decide to take on this
              type of project yourself.
            </p>

            <figure
              className={`bg-[${LIGHTER_BG}] p-3 rounded-md my-8 mx-auto`}
            >
              <Image
                src="/article-files/gran-turismo-showroom/floor.png"
                alt="Loading the floor textures"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                Yeah, that's not right.
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              Currently, it's only taking up one segment. So I have to configure
              PlaneGeometry to essentially repeat itself multiple times.
              Initially, I tried to "duplicate" the plane by enlarging the
              texture. And this was the outcome:
            </p>

            <figure
              className={`bg-[${LIGHTER_BG}] p-3 rounded-md my-8 mx-auto`}
            >
              <Image
                src="/article-files/gran-turismo-showroom/toys.png"
                alt="A mishap in the model and texture scales"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                Yeah, that's still not right.
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              I admit, it made me chuckle a bit when I saw it for the first
              time. They look like toys on the floor.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              At the time when I was making this project, I didn't manage to
              find any information in the docs about properly scaling textures.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              Fortunately, GPT pointed me in the right direction when I asked
              about it. Basically, I created some variables that would define
              the size and scale of the floor, and then I inserted the floor
              into the scene.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              Here's the more detailed answer:
            </p>

            <Accordion title="My floor config">
              <div
                className={`bg-[${LIGHTER_BG}] px-4 py-3 rounded-md my-2 mx-auto`}
              >
                <FloorSnippet />
              </div>

              <div className="leading-7 my-4 px-2 opacity-90 w-11/12 mx-auto code-snippet">
                <h2 className="text-xl sm:text-2xl font-bold my-3 ">
                  Quick Rundown
                </h2>
                <ul className="list-disc">
                  <FloorSnippetDescription />
                </ul>
              </div>
            </Accordion>

            <p className="leading-7 mb-8 opacity-90">
              Lo and behold, the cars don't look like toys anymore:
            </p>

            <figure
              className={`bg-[${LIGHTER_BG}] p-3 rounded-md my-8 mx-auto`}
            >
              <Image
                src="/article-files/gran-turismo-showroom/added_floor.png"
                alt="Floor texture with the corrected scaling"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                Yep, it's gaming time.
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              <strong>
                Don't mind the floor texture, I was just checking out other
                textures.
              </strong>
            </p>
          </section>

          <section id="section9">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3">
              I'm stuck, stepbro
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              So, I've successfully loaded the models, and solved my issues with
              the floor making the cars from looking like toys. But I was stuck.
              Staring at the cars while the camera pans around them. I was just
              thinking, <strong>"Now what?"</strong>
            </p>

            <p className="leading-7 mb-8 opacity-90">
              When I was creating this project, I was listening to a Daily Mix
              playlist in Spotify. A song called "A Million Miles Away" by
              Ulrich Schnauss played after the previous one ended. I then
              suddenly remembered what game I associated the song with—Gran
              Turismo 4!
            </p>

            <p className="leading-7 mb-8 opacity-90">
              <strong>
                Well not really, I'm spreading misinformation. I just couldn't
                think of a better transition.
              </strong>
            </p>

            <p className="leading-7 mb-8 opacity-90">
              Anyway, I decided to change the direction I was going towards. I
              decided that I should create a showroom inspired by modern Gran
              Turismo games. And maybe, this could be used as a reference for a
              future project if I do ever get to work with a manufacturer. But
              right now, one can only dream, huh?
            </p>
          </section>

          <section id="section10">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3">
              Still a million miles away, but closing in quickly
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              To repeat, I've managed to set up the lighting, the floor with the
              correct settings, and the car models as well. But, if you haven't
              noticed it yet, there aren't any shadows.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              <strong>
                And this is also the part where I explain how I load my car
                model.
              </strong>
            </p>

            <Accordion title="Loading a model and enabling its shadows">
              <div
                className={`bg-[${LIGHTER_BG}] px-4 py-3 rounded-md my-2 mx-auto`}
              >
                <ModelShadowSnippet />
              </div>
              <div className="leading-7 my-4 px-2 opacity-90 w-11/12 mx-auto code-snippet">
                <h2 className="text-xl sm:text-2xl font-bold my-3 ">
                  Quick Rundown
                </h2>
                <ul className="list-disc">
                  <ModelShadowSnippetDescription />
                </ul>
              </div>
            </Accordion>

            <figure
              className={`bg-[${LIGHTER_BG}] p-3 rounded-md my-8 mx-auto`}
            >
              <Image
                src="/article-files/gran-turismo-showroom/shadows.png"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                Enabled shadows for the model
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              And with that, I've now successfully enabled the capability for
              the model to cast and receive shadows from light sources.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              You might be thinking right now,{" "}
              <strong>
                "Jason, If you already enabled shadows in the renderer, then why
                do you have to enable it again during the model loading
                process?"
              </strong>
            </p>

            <p className="leading-7 mb-8 opacity-90">
              Great question! Setting shadowMap.enabled to true does indeed
              enable shadows globally.{" "}
              <strong>
                However, enabling shadows at the renderer level doesn't
                automatically make individual objects cast or receive shadows by
                default.
              </strong>{" "}
              We still need to configure an object individually if we want it to
              participate in shadow casting or receiving.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              In short, while enabling shadows at the renderer level sets up the
              framework for shadow rendering, we need to specify which objects
              cast and receive shadows in the 3D scene. This level of control
              ensures that we can optimize shadow rendering for our specific
              scene requirements and performance constraints.
            </p>
          </section>

          <section id="section11">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3">
              Setting the mood
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              Next task, setting up the lighting and background to have a dark,
              intimate setting, similar to modern Gran Turismo games. But this
              wasn't a simple task for me. Finding the "sweet spot" for the
              lighting I wanted really took a lot of time for me.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              The way I started was testing out the values of my
              DirectionalLight. I also thought of adding more lights by creating
              new instances of{" "}
              <a
                href="https://threejs.org/docs/index.html#api/en/lights/SpotLight"
                target="_blank"
                className={`text-[${SONIC_BLUE}] font-semibold hover:text-[${OFF_WHITE}] transition duration-150 ease-in-out`}
              >
                SpotLight
              </a>{" "}
              that point towards the car, but at this point, I didn't know yet
              where and how far should the lights be from the car. So I started
              to experiment.
            </p>

            <figure
              className={`bg-[${LIGHTER_BG}] p-3 rounded-md my-8 mx-auto`}
            >
              <Image
                src="/article-files/gran-turismo-showroom/testing_lighting.png"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                Testing out lighting settings
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              I initially had 2 instances of SpotLight that were placed on the
              front right side and rear right side of the car. And I was
              checking out how different lighting values and placements played
              with each other.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              If you've noticed, the background is still gray-ish even with the
              darker lighting. It's because it doesn't get affected by
              DirectionalLight and it's just a color that I set initially so I
              can properly scope out the entire scene. It'll be changed later
              on.
            </p>
          </section>

          <section id="section12">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3">
              The Shining
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              After testing out different lighting settings, I suddenly had the
              notion where there could be another light source pointing towards
              the car, but coming from above.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              It's a trick used by many to create a dramatic and a sort of
              "menacing" look. You know those horror movies/games, where there's
              a narrow corridor and there's a figure standing at the end of the
              corridor, with a spotlight directly above it?
            </p>

            <figure
              className={`bg-[${LIGHTER_BG}] p-3 rounded-md my-8 mx-auto`}
            >
              <Image
                src="/article-files/gran-turismo-showroom/topspotlight.png"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                The look I'm going for.
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              I also decided that there should be other light sources coming
              from directly the rear, right, left and front sides of the car.
              And this is the point where I'll how I set them up.
            </p>

            <Accordion title="Setting up the spotlights">
              <div
                className={`bg-[${LIGHTER_BG}] px-4 py-3 rounded-md my-2 mx-auto`}
              >
                <SpotlightSnippet />
              </div>
              <div className="leading-7 my-4 px-2 opacity-90 w-11/12 mx-auto code-snippet">
                <h2 className="text-xl sm:text-2xl font-bold my-3 ">
                  Quick Rundown
                </h2>
                <ul className="list-disc">
                  <SpotlightSnippetDescription />
                </ul>
              </div>
            </Accordion>
          </section>

          <section id="section13">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3">
              Closing in
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              We're pretty close to the end now—just some more minor
              adjustments.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              Also, at this point, I was preoccupied with improving performance
              by playing around with the shadow resolution, different
              anti-aliasing configs, trying out different car models, etc.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              After I was finished with optimizing the scene's performance, I
              set out to copy some aspects of the UI from the Gran Turismo
              Sport, and had this photo as a reference:
            </p>

            <figure
              className={`bg-[${LIGHTER_BG}] p-3 rounded-md my-8 mx-auto`}
            >
              <Image
                src="/article-files/gran-turismo-showroom/ui.png"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-md"
              />
              <figcaption className="mt-2 text-center">
                Gran Turismo Sport showroom UI
              </figcaption>
            </figure>
          </section>

          <section id="section14">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3">
              CSS woes
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              Most things went pretty smoothly, I was barrelling along up until
              I had to replicate the bottom part, along with the sliding text.
              So, I'm thinking:{" "}
              <strong>"How the hell do I do the bottom part?"</strong>
            </p>

            <p className="leading-7 mb-8 opacity-90">
              I was experimenting with CSS flexbox and grid for it. I spent
              about 30-40 minutes trying to figure this thing out. And suddenly,
              my brain decided to fire in all cylinders and thought of something
              very viable:{" "}
              <strong>
                a grid layout with 4 columns, and inside those columns, flexbox
                items.
              </strong>
            </p>

            <p className="leading-7 mb-8 opacity-90">
              As for the sliding text, it can be achieved by basically disabling
              the ability for the text to wrap, creating a single line of text.
              And I added a sliding animation for the text with CSS keyframes.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              <strong>"Yun nga! (That's it!)"</strong>, I told myself. And after
              long hours of non-stop work, I managed to finish it.
            </p>
          </section>

          <section id="section15">
            <h2 className="text-xl sm:text-2xl font-bold mt-20 mb-3">
              The finish line
            </h2>
            <p className="leading-7 mb-8 opacity-90">
              One more thing, the music. So, I added in some from the Gran
              Turismo Sport soundtrack list, and the menu theme from Race
              Driver: GRID.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              So, I've reached the end, after up to 16 hours of work for about
              3-4 days. Do I regret it? Nope, not a single bit. I loved working
              on this project. Hopefully, I'd get the chance to do it again but
              in a professional setting, and with a more powerful computer. Oh,
              my poor 4 year-old laptop, I'm so sorry.
            </p>

            <figure
              className={`bg-[${LIGHTER_BG}] p-3 rounded-md my-8 mx-auto`}
            >
              <div className="relative w-full pb-[56.25%] h-0">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/PhjlgLxL-Zg?si=5LnBX6373yIeYjPW"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                ></iframe>
              </div>
              <figcaption className="mt-2 text-center">
                YouTube Video
              </figcaption>
            </figure>

            <p className="leading-7 mb-8 opacity-90">
              Hope you enjoyed my story, mixed with a tutorial. Thanks for
              reading!
            </p>
          </section>

          <section id="section16">
            <h2
              className="text-xl sm:text-2xl font-bold mt-20 mb-3 scroll-mt-20"
              id="actual"
            >
              Links
            </h2>

            <p className="leading-7 mb-8 opacity-90">
              Here are the links for the project if you're interested.{" "}
              <strong>
                But, I cannot stress this enough: You HAVE to open the project
                itself on a PC. Your mobile device will likely lag or maybe
                restart due to the fact that this project wasn't made with
                mobile in mind.
              </strong>
            </p>

            <div className="flex flex-row gap-2 justify-center mx-auto font-bold">
              <motion.a
                href="https://github.com/jdichh/car-showroom"
                target="_blank"
                aria-label="Button to the GitHub repo of the project"
                className={`bg-[${OFF_WHITE}] hover:bg-[${SONIC_BLUE}] px-3 py-2 text-[${BTN_TEXT_COLOR}] rounded-sm transition ease-in-out duration-150`}
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0.05 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://gtshowroom.netlify.app/"
                target="_blank"
                aria-label="Button for the live link of the project"
                className={`bg-[${OFF_WHITE}] hover:bg-[${SONIC_BLUE}] px-3 py-2 text-[${BTN_TEXT_COLOR}] rounded-sm transition ease-in-out duration-150`}
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0.05 }}
              >
                Live Demo
              </motion.a>
              <motion.a
                href="https://drive.google.com/drive/folders/1wxP8FM63t-DFlsGL2M6aUYAoZJhQAfOO?usp=sharing"
                target="_blank"
                aria-label="Button for the development videos of the project"
                className={`bg-[${OFF_WHITE}] hover:bg-[${SONIC_BLUE}] px-3 py-2 text-[${BTN_TEXT_COLOR}] rounded-sm transition ease-in-out duration-150`}
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0.05 }}
              >
                Dev Videos
              </motion.a>
            </div>

            <p className="leading-7 my-8 opacity-90">
              Now you may have noticed that the video is different from the
              project itself. It's because I migrated the project from Three.js
              to React-Three-Fiber to learn how it worked, and then made some
              changes from the original Three.js version. But that's another
              topic in and of itself.
            </p>

            <p className="leading-7 mb-8 opacity-90">
              I now prefer working in React-Three-Fiber for Three.js projects. I
              don't have to do the initial setup and all that jazz in R3F.
            </p>
          </section>
        </article>
      </motion.main>
      <RouteFooter />
    </>
  );
}
