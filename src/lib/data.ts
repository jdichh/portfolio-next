import galaxy from "../../public/project/galaxy.png"
import vintora from "../../public/project/vintora.png"
import showroom from "../../public/project/showroom.png"
import synthwave from "../../public/project/synthwave.png"
import asteroids from "../../public/project/asteroids.png"
import passwordGen from "../../public/project/password.png"
import ssu from "../../public/project/ssu.png"
import pern from "../../public/project/pern.png"
import tictactoe from "../../public/project/tictactoe.png"
import quoteGen from "../../public/project/quote.png"
import traderView from "../../public/project/traderview.png"
import weatherApp from "../../public/project/weather.png"
import chatbot from "../../public/project/chatbot.png"
import htmlImg from "../../public/tools/html.png"

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
] as const;

export const mainTools = [
  {
    id: 1,
    name: "HTML",
    imageUrl: htmlImg
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "SCSS",
  },
  {
    id: 4,
    name: "JavaScript",
  },
  {
    id: 5,
    name: "React.js",
  },
  {
    id: 6,
    name: "Next.js"
  },
  {
    id: 7,
    name: "Three.js",
  },
  {
    id: 8,
    name: "React-Three-Fiber",
  },
  {
    id: 9,
    name: "Zustand",
  },
  {
    id: 10,
    name: "Bootstrap",
  },
  {
    id: 11,
    name: "Bulma",
  },
  {
    id: 12,
    name: "Tailwind CSS",
  },
  {
    id: 13,
    name: "GSAP",
  },
  {
    id: 14,
    name: "Firebase",
  },
  {
    id: 15,
    name: "PostgreSQL",
  },
  {
    id: 16,
    name: "Express.js",
  },
  {
    id: 17,
    name: "Axios",
  },
  {
    id: 18,
    name: "Node.js",
  },
  {
    id: 19,
    name: "Insomnia",
  },
];

export const codingTools = [
  {
    id: 1,
    name: "VS Codium",
  },
  {
    id: 2,
    name: "Prettier",
  },
  {
    id: 3,
    name: "Git",
  },
  {
    id: 4,
    name: "Vite",
  },
  {
    id: 5,
    name: "NPM",
  },
  {
    id: 6,
    name: "PNPM",
  },
];

export const testingTools = [
  {
    id: 1,
    name: "W3 Validator",
  },
  {
    id: 2,
    name: "Wave Tool",
  },
  {
    id: 3,
    name: "Lighthouse",
  },
];

export const designTools = [
  {
    id: 1,
    name: "Figma",
  },
  {
    id: 2,
    name: "Paint.NET",
  },
];

export const projects = [
  {
    name: "To-do App",
    description:
      "A to-do app with pagination.",
    tools: ["PostgreSQL", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    imageUrl: pern,
    liveLink: ["https://youtu.be/kRmF8umtA5M"],
    githubLink: ["https://github.com/jdichh/pern-practice"]
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "A Tic-Tac-Toe game that I made to introduce myself to the world of Svelte.",
    tools: ["Svelte", "SCSS"],
    imageUrl: tictactoe,
    liveLink: ["https://tictacsvelte.netlify.app/"],
    githubLink: ["https://github.com/jdichh/tic-tac-toe-svelte"] 
  },
  {
    name: "Quote Generator",
    description:
      "A quote generator that I made to get back into the flow of learning React after spending time away for 3D projects.",
    tools: ["React.js", "SCSS"],
    imageUrl: quoteGen,
    liveLink: ["https://originalquotegenerator.netlify.app/"],
    githubLink: ["https://github.com/jdichh/quote-gen-react"]
  },
  {
    name: "Galaxy Overview",
    description:
      "A 3D overview of a galaxy inspired by the Heleus Cluster in Mass Effect Andromeda.",
    tools: ["React-Three-Fiber"],
    imageUrl: galaxy,
    liveLink: ["https://jdgalaxy.netlify.app/"],
    githubLink: ["https://github.com/jdichh/galaxy-map"]
  },
  {
    name: "Khronomechanica Vintora",
    description:
      "A landing page for a fictional steampunk watch. I made this to try out embedding a 3D model for a product website.",
    tools: ["Three.js", "GSAP"],
    imageUrl: vintora,
    liveLink: ["https://steampunkwatch.netlify.app/"],
    githubLink: ["https://github.com/jdichh/steampunk-watch"]
  },
  {
    name: "Virtual Car Showroom",
    description:
      "A 3D virtual car showroom mainly inspired by Gran Turismo Sport.",
    tools: ["React-Three-Fiber", "SCSS"],
    imageUrl: showroom,
    liveLink: ["https://gtshowroom.netlify.app/"],
    githubLink: ["https://github.com/jdichh/car-showroom-r3f/"]
  },
  {
    name: "Synthwave Scene",
    description:
      "A 3D synthwave scene made with Three.js and React (not to be confused with React-Three-Fiber).",
    tools: ["React.js", "Three.js"],
    imageUrl: synthwave,
    liveLink: ["https://jdsynthwave.netlify.app/"],
    githubLink: ["https://github.com/jdichh/synthwave-scene-REACT"]
  },
  {
    name: "Obligatory Weather App",
    description: "A weather app that uses the OpenWeatherMap API.",
    tools: ["React.js", "Zustand", "Axios"],
    imageUrl: weatherApp,
    liveLink: ["https://obligatoryweatherapp.netlify.app/"],
    githubLink: ["https://github.com/jdichh/obligatory-weather-app-react"]
  },
  {
    name: "Asteroids Game",
    description:
      "The Asteroids game from Atari, but with my own modifications to it.",
    tools: ["JavaScript"],
    imageUrl: asteroids,
    liveLink: ["https://jdasteroids.netlify.app/"],
    githubLink: ["https://github.com/jdichh/asteroids"]
  },
  {
    name: "Random Password Generator Extension",
    description:
      "A random password generator extension with options for digits, special characters, mixed case letters, and a slider to adjust the length of the password.",
    tools: ["JavaScript"],
    imageUrl: passwordGen,
    liveLink: ["https://youtu.be/pq-EsJa1plw"],
    githubLink: ["https://github.com/jdichh/password-generator"]
  },
  {
    name: "All-Knowing Bot",
    description: "A chat website that uses LemurBot from Lemur Engine.",
    tools: ["JavaScript", "SCSS"],
    imageUrl: chatbot,
    liveLink: ["https://allknowingbot.netlify.app/"],
    githubLink: ["https://github.com/jdichh/all-knowing-bot"]
  },
  {
    name: "TraderView",
    description: "A market tracker that uses the TradingView API.",
    tools: ["JavaScript", "SCSS"],
    imageUrl: traderView,
    liveLink: ["https://jdichhtradingview.netlify.app/"],
    githubLink: ["https://github.com/jdichh/tradingviewAPI-practice"]
  },
  {
    name: "Security Unit Web Portal",
    description:
      "This was part of our capstone project which involved a mobile application, and this web application. The whole system serves as a patrol system for the security unit at Letran-Calamba.",
    tools: ["Vue.js", "Bootstrap", "Firebase"],
    imageUrl: ssu,
    liveLink: ["https://ssuwebsystem.netlify.app"],
    githubLink: ["https://github.com/jdichh/websystem_ssu2"]
  },
] as const;