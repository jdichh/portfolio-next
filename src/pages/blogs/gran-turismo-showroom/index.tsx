import React from "react";
import BlogHeader from "@/components/blog-components/blog-header";
import RouteFooter from "@/components/blog-components/route-footer";
import Image from "next/image";
import Head from "next/dist/shared/lib/head";
import Accordion from "@/components/accordion";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

import DirectionalLightSnippet from "@/components/blog-components/gtshowroom-accordion-components/snippets/directionalLight-snippet";
import FloorSnippet from "@/components/blog-components/gtshowroom-accordion-components/snippets/floor-snippet";
import ModelShadowSnippet from "@/components/blog-components/gtshowroom-accordion-components/snippets/model-shadow-snippet";
import SpotlightSnippet from "@/components/blog-components/gtshowroom-accordion-components/snippets/spotlight-snippet";
import RendererSettingsSnippet from "@/components/blog-components/gtshowroom-accordion-components/snippets/renderer-settings-snippet";
import CanvasSnippet from "@/components/blog-components/gtshowroom-accordion-components/snippets/canvas-snippet";

import ModelShadowSnippetDescription from "@/components/blog-components/gtshowroom-accordion-components/snippets/snippet-descriptions/model-shadow-snippet-description";
import DirectionalLightSnippetDescription from "@/components/blog-components/gtshowroom-accordion-components/snippets/snippet-descriptions/directionalLight-snippet-description";
import FloorSnippetDescription from "@/components/blog-components/gtshowroom-accordion-components/snippets/snippet-descriptions/floor-snippet-description";
import SpotlightSnippetDescription from "@/components/blog-components/gtshowroom-accordion-components/snippets/snippet-descriptions/spotlight-snippet-description";
import RendererSettingsSnippetDescription from "@/components/blog-components/gtshowroom-accordion-components/snippets/snippet-descriptions/renderer-settings-snippet-description";
import CanvasSnippetDescription from "@/components/blog-components/gtshowroom-accordion-components/snippets/snippet-descriptions/canvas-snippet-description";
import ThemeSwitch from "@/components/theme-switch";

import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import {
  BsFillSkipForwardFill,
  BsWrenchAdjustableCircleFill,
} from "react-icons/bs";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function index() {
  const IMAGE_DIMENSIONS = 750;
  const IMAGE_QUALITY = 95;
  const ON_HOVER_SCALE = 1.075;
  const ON_TAP_SCALE = 0.925;

  return (
    <>
      <Head>
        <title>
          Blog | Creating a Gran Turismo-esque showroom with Three.js
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="A story about how I ended up recreating Gran Turismo (not really) with Three.js."
        />
      </Head>
      <BlogHeader />
      <motion.main
        className={`article-body ${spaceGrotesk.className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <article>
          <div className="mt-44" />
          <div className="mb-8">
            <h1 className="article-title">
              Creating a Gran Turismo-esque showroom with Three.js
            </h1>
            <p className="article-date">September 29, 2023</p>
          </div>

          <aside className="article-disclaimer">
            <h2 className="article-disclaimer-text">HEY! YOU THERE!</h2>
            <p className="article-text">
              I just want to tell you that the section below isn't relevant to
              the title.
            </p>
            <div className="flex justify-end">
              <motion.a
                href="#good-stuff"
                className="article-links"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0 }}
              >
                <BsFillSkipForwardFill /> <span className="ml-2">SKIP</span>
              </motion.a>
            </div>
          </aside>

          <section id="section2">
            <h2 className="article-section-title">
              Gentlemen, start your engines!
            </h2>

            <p className="article-text">
              Would you believe me, a 22 year-old guy, doesn't have a driver's
              license yet or hasn't driven a car out on public roads? Well maybe
              you will, but, anyway, I hadn't really experienced driving yet,
              especially the type of driving that can potentially put you in a
              police chase. So, naturally, playing driving/racing games was my
              escape.
            </p>

            <p className="article-text">
              Revving the engine to the redline, only for the cycle to repeat
              after ripping through the transmission to change gears; hearing
              the tires squeal for mercy, telling you—shouting at you that
              they're at the tipping point between traction and slippage. For
              the sole reason of beating the other guys to the finish line.
            </p>

            <p className="article-text">
              My love for cars, especially the Dodge Viper and all of its
              iterations, and just about anything automotive, began with a game
              on the PlayStation 1 called Test Drive 6. Hearing a cover of Gary
              Numan's song "Cars" play in the intro (the original is better),
              crashing out police cars and other competitors alike, reminds me
              of good times back from when I was just a young, fat(ter) kid.
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/gran-turismo-showroom/testdrive6.jpg"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                Test Drive 6 PS1 cover.
              </figcaption>
            </figure>

            <p className="article-text">
              Ever since then, I've just about exhausted list after list of
              great driving/racing games to play; from racing on dirt, on
              gravel, and on asphalt. If you ask me if I played a certain
              driving/racing game, there is a 99.9% chance that I'll say that I
              already have.
            </p>

            <p className="article-text">
              DiRT games? Check. GRID games? Check. NASCAR? Check. The Ridge
              Racer series? Check. Need for Speed/Burnout/Forza games? Of
              course! Why would you even ask that? And the list goes on and on.
              Point is, like most of the other car guys/gals out there, my love
              of cars began with video games.
            </p>

            <p className="article-text">
              But there's one more series that I haven't mentioned it yet, and
              that is Gran Turismo.
            </p>
          </section>

          <section id="section3">
            <h2 className="article-section-title">Life is a highway</h2>

            <figure className="article-figure">
              <Image
                src="/article-files/gran-turismo-showroom/gtlogo.png"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                Gran Turismo logo and tagline.
              </figcaption>
            </figure>

            <p className="article-text">
              Test Drive 6 was great (to me). But the Gran Turismo series, as a
              whole, has always been closer to my heart. Not just because of the
              cars, and the quality of the racetracks themselves; the
              presentation, coupled with the glorious soundtrack, has always
              been top-tier ever since its first release. This was also where I
              discovered my love for jazz and funk.
            </p>

            <p className="article-text">
              I remember the times, where I'm "fatly" walking to the PS1,
              inserting my disc of Gran Turismo 2 in the console, powering it
              on, showing me the glorious boot-up screen, and then off to the
              races for hours on end.
            </p>

            <p className="article-text">
              Anyway, I'm going on a tangent here about my love for cars and
              driving/racing video games and childhood memories.{" "}
            </p>

            <p className="article-text">
              And now, to show you how I made the showroom project from the
              beginning.
            </p>
          </section>

          <section id="section4">
            <h2 className="article-section-title">A bright idea</h2>

            <p className="article-text">
              If you've read my{" "}
              <a
                href="/blogs/my-first-shenanigans-in-3d"
                target="_blank"
                className="article-hrefs"
              >
                previous post
              </a>
              , then you'd know how I came by Three.js so early on in my
              self-learning journey, and how I expanded upon someone's work.
            </p>

            <p className="article-text">
              After finishing the synthwave project, I started to think what
              else could I do with Three.js. Another scene but with a different
              aesthetic? Nah. Time for something different. A product
              configurator in 3D? Nope, I don't even know where to start with
              that yet. How about a product page, featuring the product in 3D?
              Perhaps.
            </p>

            <p className="article-text">
              And it suddenly dawned on me, my first output was displaying a 3D
              model of a car—and I really love anything automotive, so I'll do a
              project involving a car or two, and made with Three.js!
            </p>
          </section>

          <div id="good-stuff" className="scroll-mt-[70px]" />

          <section id="section5">
            <h2 className="article-section-title">Is that a Supra?!</h2>

            <p className="article-text">
              I perused Sketchfab for car models, and came across an MK4 and MK5
              Supra in the same page. And I suddenly thought to myself,{" "}
              <strong>
                "Why not a 3D project about honoring the past model, and
                welcoming the new one? Like, a passing of the baton of sorts?"
              </strong>
              .
            </p>

            <p className="article-text">
              So I got not only one, but two Toyota Supras!
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/gran-turismo-showroom/supras.jpg"
                alt="Picture of the old and new Supras"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                MK4 Supra on the left, MK5 on the right—credits to Car and
                Driver for the picture.
              </figcaption>
            </figure>
          </section>

          <section id="section6">
            <h2 className="article-section-title">
              Paint me like one of your french girls
            </h2>

            <p className="article-text">
              Ah! But before that, of course, is the canvas so that we can start
              doing our painting, so to speak.
            </p>

            <Accordion title="Setting up the canvas">
              <div className="code-snippet-pre-code">
                <CanvasSnippet />
              </div>

              <div className="code-snippet-container code-snippet">
                <h2 className="code-snippet-sub-title">Quick Rundown</h2>
                <ul className="list-disc">
                  <CanvasSnippetDescription />
                </ul>
              </div>
            </Accordion>

            <p className="article-text">
              I also customized the configurations of my renderer. Here they
              are:
            </p>

            <Accordion title="My renderer configuration">
              <div className="code-snippet-pre-code">
                <RendererSettingsSnippet />
              </div>
              <div className="code-snippet-container code-snippet">
                <h2 className="code-snippet-sub-title">Quick Rundown</h2>
                <ul className="list-disc">
                  <RendererSettingsSnippetDescription />
                </ul>
              </div>
            </Accordion>
          </section>

          <section id="section7">
            <h2 className="article-section-title">Lighten up, man</h2>

            <p className="article-text">
              We have to set up{" "}
              <a
                href="https://threejs.org/docs/index.html#api/en/lights/DirectionalLight"
                target="_blank"
                className="article-hrefs"
              >
                DirectionalLight
              </a>
              , because if we don't, then the whole scene will just be pitch
              black. It's basically equivalent to the sun in the real world.
            </p>

            <Accordion title="How I added in sunlight">
              <div className="code-snippet-pre-code">
                <DirectionalLightSnippet />
              </div>

              <div className="code-snippet-container code-snippet">
                <h2 className="code-snippet-sub-title">Quick Rundown</h2>
                <ul className="list-disc">
                  <DirectionalLightSnippetDescription />
                </ul>
              </div>
            </Accordion>

            <p className="article-text">
              Now we'll load in the models using{" "}
              <a
                href="https://threejs.org/docs/index.html#examples/en/loaders/GLTFLoader"
                target="_blank"
                className="article-hrefs"
              >
                GLTFLoader
              </a>
              . This just loads any models in the JSON (.gltf) or binary (.glb)
              format.
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/gran-turismo-showroom/supra_models.png"
                alt="Loaded in the two supras"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                Supras in action.
              </figcaption>
            </figure>

            <p className="article-text">
              <strong>
                This is just a zoomed-in view of it, and not the actual
                perspective itself.
              </strong>
            </p>

            <p className="article-text">
              Oh yeah, I forgot to mention about{" "}
              <a
                href="https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera"
                target="_blank"
                className="article-hrefs"
              >
                PerspectiveCamera
              </a>
              . It's used to basically mimic the way that the human eye sees. I
              set it up to have a low field of view, but zoomed out as well, so
              that the entire scene looks like it could be a wallpaper, and not
              have a fish-eye effect.
            </p>

            <p className="article-text">
              In setting up the rotating camera, at least just for this
              instance, I initially set it up using{" "}
              <a
                href="https://threejs.org/docs/index.html#examples/en/controls/OrbitControls"
                target="_blank"
                className="article-hrefs"
              >
                OrbitCamera
              </a>{" "}
              to hover and rotate above the cars, at an angle, and looking at
              the center point of the two cars. But during the project's life
              cycle, I changed it a bit. You'll now why later.
            </p>

            <p className="article-text">
              And you may be wondering,{" "}
              <strong>
                "Jason, you didn't show us how to load the models!"
              </strong>{" "}
              Well, I'll you about it later as well. Sorry.
            </p>

            <aside className="article-disclaimer">
              <p className="article-text">
                Here's a skip button to see how I load a model.
              </p>
              <div className="flex justify-end">
                <motion.a
                  href="#loading-the-model"
                  className="article-links"
                  whileHover={{ scale: ON_HOVER_SCALE }}
                  whileTap={{ scale: ON_TAP_SCALE }}
                  transition={{ duration: 0 }}
                >
                  <BsFillSkipForwardFill /> <span className="ml-2">SKIP</span>
                </motion.a>
              </div>
            </aside>
          </section>

          <section id="section8">
            <h2 className="article-section-title">
              Hmm yes...the floor here is made out of floor
            </h2>

            <p className="article-text">
              So I had the models loaded in. Now, the floor texture is next in
              the list. We can load the floor texture similarly to how I loaded
              the terrain in the previous project by using{" "}
              <a
                href="https://threejs.org/docs/index.html#api/en/geometries/PlaneGeometry"
                target="_blank"
                className="article-hrefs"
              >
                PlaneGeometry
              </a>
              . As the name suggests, it loads in a plane.
            </p>

            <p className="article-text">
              But I have to source the floor textures first. So I did, by
              downloading textures from a repository of HQ textures, I forgot
              what website it was called, but there are numerous repositories
              out there that can serve you well if you decide to take on this
              type of project yourself.
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/gran-turismo-showroom/floor.png"
                alt="Loading the floor textures"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                Yeah, that's not right.
              </figcaption>
            </figure>

            <p className="article-text">
              Currently, it's only taking up one segment. So I have to configure
              PlaneGeometry to essentially repeat itself multiple times.
              Initially, I tried to "duplicate" the plane by enlarging the
              texture. And this was the outcome:
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/gran-turismo-showroom/toys.png"
                alt="A mishap in the model and texture scales"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                Yeah, that's still not right.
              </figcaption>
            </figure>

            <p className="article-text">
              I admit, it made me chuckle a bit when I saw it for the first
              time. They look like toys on the floor.
            </p>

            <p className="article-text">
              At the time when I was making this project, I didn't manage to
              find any information in the docs about properly scaling textures.
            </p>

            <p className="article-text">
              Fortunately, GPT pointed me in the right direction when I asked
              about it. Basically, I created some variables that would define
              the size and scale of the floor, and then I inserted the floor
              into the scene.
            </p>

            <p className="article-text">Here's the more detailed answer:</p>

            <Accordion title="My floor config">
              <div className="code-snippet-pre-code">
                <FloorSnippet />
              </div>

              <div className="code-snippet-container code-snippet">
                <h2 className="code-snippet-sub-title">Quick Rundown</h2>
                <ul className="list-disc">
                  <FloorSnippetDescription />
                </ul>
              </div>
            </Accordion>

            <p className="article-text">
              Lo and behold, the cars don't look like toys anymore:
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/gran-turismo-showroom/added_floor.png"
                alt="Floor texture with the corrected scaling"
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                Yep, it's gaming time.
              </figcaption>
            </figure>

            <p className="article-text">
              <strong>
                Don't mind the floor texture, I was just checking out other
                textures.
              </strong>
            </p>
          </section>

          <section id="section9">
            <h2 className="article-section-title">I'm stuck, stepbro</h2>

            <p className="article-text">
              So, I've successfully loaded the models, and solved my issues with
              the floor making the cars from looking like toys. But I was stuck.
              Staring at the cars while the camera pans around them. I was just
              thinking, <strong>"Now what?"</strong>
            </p>

            <p className="article-text">
              I was listening to the soundtrack in Gran Turismo Sport since I
              started this project, because most of it is relaxing stuff. Then,
              I suddenly made the switch from a promotional website, to creating
              a showroom inspired by modern Gran Turismo games.
            </p>

            <p className="article-text">
              Also, maybe this could be used as a reference for a future project
              if I do ever get to work with a manufacturer. But right now, one
              can only dream.
            </p>
          </section>

          <div id="loading-the-model" className="scroll-mt-[70px]" />

          <section id="section10">
            <h2 className="article-section-title">
              Still a million miles away, but closing in quickly
            </h2>

            <p className="article-text">
              To repeat, I've managed to set up the lighting, the floor with the
              correct settings, and the car models as well. But, if you haven't
              noticed it yet, there aren't any shadows.
            </p>

            <p className="article-text">
              <strong>
                And this is also the part where I explain how I load my car
                model.
              </strong>
            </p>

            <Accordion title="Loading a model and enabling its shadows">
              <div className="code-snippet-pre-code">
                <ModelShadowSnippet />
              </div>
              <div className="code-snippet-container code-snippet">
                <h2 className="code-snippet-sub-title">Quick Rundown</h2>
                <ul className="list-disc">
                  <ModelShadowSnippetDescription />
                </ul>
              </div>
            </Accordion>

            <figure className="article-figure">
              <Image
                src="/article-files/gran-turismo-showroom/shadows.png"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                Enabled shadows for the model
              </figcaption>
            </figure>

            <p className="article-text">
              And with that, I've now successfully enabled the capability for
              the model to cast and receive shadows from light sources.
            </p>

            <p className="article-text">
              You might be thinking right now,{" "}
              <strong>
                "Jason, If you already enabled shadows in the renderer, then why
                do you have to enable it again during the model loading
                process?"
              </strong>
            </p>

            <p className="article-text">
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

            <p className="article-text">
              In short, while enabling shadows at the renderer level sets up the
              framework for shadow rendering, we need to specify which objects
              cast and receive shadows in the 3D scene. This level of control
              ensures that we can optimize shadow rendering for our specific
              scene requirements and performance constraints.
            </p>
          </section>

          <section id="section11">
            <h2 className="article-section-title">Setting the mood</h2>

            <p className="article-text">
              Next task, setting up the scene to have a dark, intimate setting;
              similar to modern Gran Turismo games. But this wasn't a simple
              task for me. Finding the "sweet spot" for the lighting I wanted
              really took a lot of time for me.
            </p>

            <p className="article-text">
              The way I started was testing out the values of my
              DirectionalLight. I also thought of adding more lights by creating
              new instances of{" "}
              <a
                href="https://threejs.org/docs/index.html#api/en/lights/SpotLight"
                target="_blank"
                className="article-hrefs"
              >
                SpotLight
              </a>{" "}
              that point towards the car, but at this point, I didn't know yet
              where and how far should the lights be from the car. So I started
              to experiment.
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/gran-turismo-showroom/testing_lighting.png"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                Testing out lighting settings
              </figcaption>
            </figure>

            <p className="article-text">
              I initially had 2 instances of SpotLight that were placed on the
              front right side and rear right side of the car. And I was
              checking out how different lighting values and placements played
              with each other.
            </p>

            <p className="article-text">
              If you've noticed, the background is still gray-ish even with the
              darker lighting. It's because it doesn't get affected by
              DirectionalLight and it's just a color that I set initially so I
              can properly scope out the entire scene. It'll be changed later
              on.
            </p>
          </section>

          <section id="section12">
            <h2 className="article-section-title">The Shining</h2>

            <p className="article-text">
              After testing out different lighting settings, I suddenly had the
              notion where there could be another light source pointing towards
              the car, but coming from above.
            </p>

            <p className="article-text">
              It's a trick used by many to create a dramatic and a sort of
              "menacing" look. You know those horror movies/games, where there's
              a narrow corridor and there's a figure standing at the end of the
              corridor, with a spotlight directly above it?
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/gran-turismo-showroom/topspotlight.png"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                The look I'm going for.
              </figcaption>
            </figure>

            <p className="article-text">
              I also decided that there should be other light sources coming
              from directly the rear, right, left and front sides of the car.
              And this is the point where I'll show how I set them up.
            </p>

            <Accordion title="Setting up the spotlights">
              <div className="code-snippet-pre-code">
                <SpotlightSnippet />
              </div>
              <div className="code-snippet-container code-snippet">
                <h2 className="code-snippet-sub-title">Quick Rundown</h2>
                <ul className="list-disc">
                  <SpotlightSnippetDescription />
                </ul>
              </div>
            </Accordion>
          </section>

          <section id="section13">
            <h2 className="article-section-title">Reeling it in</h2>

            <p className="article-text">
              We're pretty close to the end now—just some more minor adjustments
              to the lighting settings.
            </p>

            <p className="article-text">
              Also, at this point, I was preoccupied with improving performance
              by playing around with the shadow resolution, different
              anti-aliasing configs, trying out different car models, etc.
            </p>

            <p className="article-text">
              After I was finished with optimizing the scene's performance, I
              set out to copy some aspects of the UI from Gran Turismo Sport,
              and had this photo as a reference:
            </p>

            <figure className="article-figure">
              <Image
                src="/article-files/gran-turismo-showroom/ui.png"
                alt=""
                width={IMAGE_DIMENSIONS}
                height={IMAGE_DIMENSIONS}
                quality={IMAGE_QUALITY}
                className="rounded-sm"
              />
              <figcaption className="article-figure-caption">
                Gran Turismo Sport showroom UI
              </figcaption>
            </figure>
          </section>

          <section id="section14">
            <h2 className="article-section-title">CSS woes</h2>

            <p className="article-text">
              Most things went pretty smoothly, I was barrelling along up until
              I had to replicate the bottom part, along with the sliding text.
              So, I'm thinking:{" "}
              <strong>"How the hell do I do the bottom part?"</strong>
            </p>

            <p className="article-text">
              I was experimenting with CSS flexbox and grid, and I spent about
              30-40 minutes trying to figure this damn thing out. Then suddenly,
              my brain decided to fire in all cylinders, and thought of
              something very viable:{" "}
              <strong>
                a grid layout with 4 columns, and inside those columns, flexbox
                items, which contains the car's specs.
              </strong>
            </p>

            <p className="article-text">
              <strong>"Yun nga! (That's it!)"</strong>, I told myself. And after
              what seemed to be hours, I managed to replicate the bottom section
              of the UI.
            </p>

            <p className="article-text">
              As for the sliding text, it can be achieved by basically disabling
              the ability for the text to wrap, creating a single line of text.
              And I added a sliding animation for the text with CSS keyframes.
            </p>
          </section>

          <section id="section15">
            <h2 className="article-section-title">The finish line</h2>
            <p className="article-text">
              One more thing, the music. So, I added in some from the Gran
              Turismo Sport soundtrack list, and the menu theme from Race
              Driver: GRID.
            </p>

            <p className="article-text">
              So, I've reached the end, after up to 16 hours of work for about
              3-4 days. Do I regret it? Nope, not a single bit. I loved working
              on this project. Hopefully, I'd get the chance to do it again but
              in a professional setting, and with a more powerful computer. Oh,
              my poor 4 year-old laptop, I'm so sorry.
            </p>

            <figure className="article-figure">
              <div className="article-iframe-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/PhjlgLxL-Zg?si=5LnBX6373yIeYjPW"
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
              Hope you enjoyed my story, mixed with a tutorial. Thanks for
              reading!
            </p>
          </section>

          <section id="section16">
            <h2 className="article-section-title scroll-mt-20">Links</h2>

            <p className="article-text">
              Here are the links for the project if you're interested.{" "}
              <strong>
                But, I cannot stress this enough: You HAVE to open the project
                itself on a PC. Your mobile device will likely lag or maybe
                restart due to the fact that this project wasn't made with
                mobile in mind.
              </strong>
            </p>

            <div className="article-links-container">
              <motion.a
                href="https://github.com/jdichh/car-showroom"
                target="_blank"
                aria-label="Button to the GitHub repo of the project"
                className="article-links"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0 }}
              >
                <AiFillGithub size={22} /> <span className="ml-1">GitHub</span>
              </motion.a>
              <motion.a
                href="https://gtshowroom.netlify.app/"
                target="_blank"
                aria-label="Button for a demo of the project"
                className="article-links"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0 }}
              >
                <SiNetlify size={22} /> <span className="ml-1">Demo</span>
              </motion.a>
              <motion.a
                href="https://drive.google.com/drive/folders/1wxP8FM63t-DFlsGL2M6aUYAoZJhQAfOO?usp=sharing"
                target="_blank"
                aria-label="Button for my dev videos of the project"
                className="article-links"
                whileHover={{ scale: ON_HOVER_SCALE }}
                whileTap={{ scale: ON_TAP_SCALE }}
                transition={{ duration: 0 }}
              >
                <BsWrenchAdjustableCircleFill size={22} />{" "}
                <span className="ml-1">Dev Videos</span>
              </motion.a>
            </div>

            <p className="article-text">
              If you viewed the demo, you may have noticed that the YouTube
              video is different from the demo. It's because I migrated the
              project from Three.js to React-Three-Fiber to learn how it worked,
              and then made some changes from the original Three.js version. But
              that's another topic in and of itself.
            </p>

            <p className="article-text">
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
