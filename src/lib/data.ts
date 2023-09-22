// projects
import galaxy from "../../public/project/galaxy.png";
import vintora from "../../public/project/vintora.png";
import showroom from "../../public/project/showroom.png";
import synthwave from "../../public/project/synthwave.png";
import asteroids from "../../public/project/asteroids.png";
import passwordGen from "../../public/project/password.png";
import ssu from "../../public/project/ssu.png";
import pern from "../../public/project/pern.png";
import tictactoe from "../../public/project/tictactoe.png";
import quoteGen from "../../public/project/quote.png";
import traderView from "../../public/project/traderview.png";
import weatherApp from "../../public/project/weather.png";
import chatbot from "../../public/project/chatbot.png";

// web tech
import htmlImg from "../../public/tools/html.svg";
import cssImg from "../../public/tools/css.svg";
import scssImg from "../../public/tools/scss.svg";
import jsImg from "../../public/tools/js.svg";
import reactImg from "../../public/tools/react.svg";
import nextImg from "../../public/tools/next.svg";
import threeImg from "../../public/tools/three.svg";
import r3fImg from "../../public/tools/r3f.svg";
import zustandImg from "../../public/tools/zustand.svg";
import bootstrapImg from "../../public/tools/bootstrap.svg";
import bulmaImg from "../../public/tools/bulma.svg";
import tailwindImg from "../../public/tools/tailwind.svg";
import gsapImg from "../../public/tools/gsap.svg";
import framerMotionImg from "../../public/tools/framermotion.svg";
import firebaseImg from "../../public/tools/firebase.svg";
import postgresqlImg from "../../public/tools/postgresql.svg";
import expressImg from "../../public/tools/express.svg";
import axiosImg from "../../public/tools/axios.svg";
import insomniaImg from "../../public/tools/insomnia.svg";

// coding
import vsImg from "../../public/tools/vs.svg";
import prettierImg from "../../public/tools/prettier.svg";
import gitImg from "../../public/tools/git.svg";
import viteImg from "../../public/tools/vite.svg";
import npmImg from "../../public/tools/npm.svg";
import pnpmImg from "../../public/tools/pnpm.svg";
import nodeImg from "../../public/tools/node.svg";

// testing
import w3Img from "../../public/tools/w3.svg";
import waveToolImg from "../../public/tools/wavetool.svg";
import lighthouseImg from "../../public/tools/lighthouse.svg";

// design
import figmaImg from "../../public/tools/figma.svg";
import paintNetImg from "../../public/tools/paint.svg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Tools",
    hash: "#tools",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
]

export const webTechTools = [
  {
    name: "HTML",
    imageUrl: htmlImg,
    alt: "HTML5 logo"
  },
  {
    name: "CSS",
    imageUrl: cssImg,
    alt: "CSS3 logo"
  },
  {
    name: "SCSS",
    imageUrl: scssImg,
    alt: "SCSS logo"
  },
  {
    name: "JavaScript",
    imageUrl: jsImg,
    alt: "JavaScript logo"
  },
  {
    name: "React.js",
    imageUrl: reactImg,
    alt: "React.js logo"
  },
  {
    name: "Next.js",
    imageUrl: nextImg,
    alt: "Next.js logo"
  },
  {
    name: "Three.js",
    imageUrl: threeImg,
    alt: "Three.js logo"
  },
  {
    name: "React-Three-Fiber",
    imageUrl: r3fImg,
    alt: "React-Three-Fiber logo"
  },
  {
    name: "Zustand",
    imageUrl: zustandImg,
    alt: "Zustand logo, a React state management tool"
  },
  {
    name: "Bootstrap",
    imageUrl: bootstrapImg,
    alt: "Bootstrap logo"
  },
  {
    name: "Bulma",
    imageUrl: bulmaImg,
    alt: "Bulma logo"
  },
  {
    name: "Tailwind CSS",
    imageUrl: tailwindImg,
    alt: "Tailwind css logo"
  },
  {
    name: "GSAP",
    imageUrl: gsapImg,
    alt: "GSAP logo"
  },
  {
    name: "Framer Motion",
    imageUrl: framerMotionImg,
    alt: "Framer motion logo"
  },
  {
    name: "Node.js",
    imageUrl: nodeImg,
    alt: "Node.js logo"
  },
  {
    name: "Firebase",
    imageUrl: firebaseImg,
    alt: "Google firebase logo"
  },
  {
    name: "PostgreSQL",
    imageUrl: postgresqlImg,
    alt: "Postgre sql logo"
  },
  {
    name: "Express.js",
    imageUrl: expressImg,
    alt: "Express.js logo"
  },
  {
    name: "Axios",
    imageUrl: axiosImg,
    alt: "Axios logo"
  },
  {
    name: "Insomnia",
    imageUrl: insomniaImg,
    alt: "Insomnia logo"
  },
]

export const codingTools = [
  {
    name: "VS Codium",
    imageUrl: vsImg,
    alt: "Visual studio codium logo"
  },
  {
    name: "Prettier",
    imageUrl: prettierImg,
    alt: "Pretter logo"
  },
  {
    name: "Git",
    imageUrl: gitImg,
    alt: "Git logo"
  },
  {
    name: "Vite",
    imageUrl: viteImg,
    alt: "Vite logo"
  },
  {
    name: "NPM",
    imageUrl: npmImg,
    alt: "NPM logo"
  },
  {
    name: "PNPM",
    imageUrl: pnpmImg,
    alt: "PNPM logo"
  },
]

export const testingTools = [
  {
    name: "W3 Validator",
    imageUrl: w3Img,
    alt: "W3 validator logo"
  },
  {
    name: "Wave Tool",
    imageUrl: waveToolImg,
    alt: "Wave tool logo"
  },
  {
    name: "Lighthouse",
    imageUrl: lighthouseImg,
    alt: "Lighthouse testing tool logo"
  },
]

export const designTools = [
  {
    name: "Figma",
    imageUrl: figmaImg,
    alt: "Figma logo"
  },
  {
    name: "Paint.NET",
    imageUrl: paintNetImg,
    alt: "Paint.NET logo"
  },
]

export const projects = [
  {
    name: "To-do App",
    description: "A to-do app with pagination.",
    tools: ["PostgreSQL", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    imageUrl: pern,
    liveLink: ["https://youtu.be/kRmF8umtA5M"],
    githubLink: ["https://github.com/jdichh/pern-practice"],
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "A Tic-Tac-Toe game that I made to introduce myself to the world of Svelte.",
    tools: ["Svelte", "SCSS"],
    imageUrl: tictactoe,
    liveLink: ["https://tictacsvelte.netlify.app/"],
    githubLink: ["https://github.com/jdichh/tic-tac-toe-svelte"],
  },
  {
    name: "Quote Generator",
    description:
      "A quote generator that I made to get back into the flow of learning React after spending time away making 3D projects.",
    tools: ["React.js", "SCSS"],
    imageUrl: quoteGen,
    liveLink: ["https://originalquotegenerator.netlify.app/"],
    githubLink: ["https://github.com/jdichh/quote-gen-react"],
  },
  {
    name: "Galaxy Overview",
    description:
      "A 3D overview of a galaxy inspired by the Heleus Cluster in Mass Effect Andromeda.",
    tools: ["PC Recommended", "React-Three-Fiber"],
    imageUrl: galaxy,
    liveLink: ["https://jdgalaxy.netlify.app/"],
    githubLink: ["https://github.com/jdichh/galaxy-map"],
  },
  {
    name: "Khronomechanica Vintora",
    description:
      "A landing page for a fictional steampunk watch. I made this to try out embedding a 3D model in a product website.",
    tools: ["PC Recommended", "Three.js", "GSAP", "SCSS"],
    imageUrl: vintora,
    liveLink: ["https://steampunkwatch.netlify.app/"],
    githubLink: ["https://github.com/jdichh/steampunk-watch"],
  },
  {
    name: "Virtual Car Showroom",
    description:
      "A 3D virtual car showroom mainly inspired by Gran Turismo Sport.",
    tools: ["PC Required", "React-Three-Fiber", "SCSS"],
    imageUrl: showroom,
    liveLink: ["https://gtshowroom.netlify.app/"],
    githubLink: ["https://github.com/jdichh/car-showroom-r3f/"],
  },
  {
    name: "Synthwave Scene",
    description:
      "A 3D synthwave scene made with Three.js and React (not to be confused with React-Three-Fiber).",
    tools: ["PC Recommended", "React.js", "Three.js"],
    imageUrl: synthwave,
    liveLink: ["https://jdsynthwave.netlify.app/"],
    githubLink: ["https://github.com/jdichh/synthwave-scene-REACT"],
  },
  {
    name: "Obligatory Weather App",
    description: "A weather app that uses the OpenWeatherMap API.",
    tools: ["React.js", "Zustand", "Axios"],
    imageUrl: weatherApp,
    liveLink: ["https://obligatoryweatherapp.netlify.app/"],
    githubLink: ["https://github.com/jdichh/obligatory-weather-app-react"],
  },
  {
    name: "Asteroids Game",
    description:
      "The Asteroids game from Atari, but with my own modifications to it.",
    tools: ["Unplayable on Mobile", "JavaScript"],
    imageUrl: asteroids,
    liveLink: ["https://jdasteroids.netlify.app/"],
    githubLink: ["https://github.com/jdichh/asteroids"],
  },
  {
    name: "Random Password Generator Extension",
    description:
      "A random password generator extension with options for digits, special characters, mixed case letters, and a slider to adjust the length of the password.",
    tools: ["JavaScript", "SCSS"],
    imageUrl: passwordGen,
    liveLink: ["https://youtu.be/pq-EsJa1plw"],
    githubLink: ["https://github.com/jdichh/password-generator"],
  },
  {
    name: "All-Knowing Bot",
    description: "A chat website that uses LemurBot from Lemur Engine.",
    tools: ["JavaScript", "SCSS"],
    imageUrl: chatbot,
    liveLink: ["https://allknowingbot.netlify.app/"],
    githubLink: ["https://github.com/jdichh/all-knowing-bot"],
  },
  {
    name: "TraderView",
    description: "A market tracker that uses the TradingView API.",
    tools: ["JavaScript", "SCSS"],
    imageUrl: traderView,
    liveLink: ["https://jdichhtradingview.netlify.app/"],
    githubLink: ["https://github.com/jdichh/tradingviewAPI-practice"],
  },
  {
    name: "Security Unit Web Portal",
    description:
      "This was part of our capstone project which involved a mobile application, and this web application. The whole system serves as a patrol system for the security unit at Letran-Calamba.",
    tools: ["Vue.js", "Bootstrap", "Firebase"],
    imageUrl: ssu,
    liveLink: ["https://ssuwebsystem.netlify.app"],
    githubLink: ["https://github.com/jdichh/websystem_ssu2"],
  },
]
