import galaxy from "../../public/project/galaxy.png"
import vintora from "../../public/project/vintora.png"
import showroom from "../../public/project/showroom.png"
import synthwave from "../../public/project/synthwave.png"
import asteroids from "../../public/project/asteroids.png"
import passwordGen from "../../public/project/asteroids.png"
import ssu from "../../public/project/ssu.png"

export const links = [
  {
    name: "About",
    hash: "#about",
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

export const tools = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "JavaScript",
  },
  {
    id: 4,
    name: "React.js",
  },
  {
    id: 5,
    name: "Three.js",
  },
  {
    id: 6,
    name: "React-Three-Fiber",
  },
  {
    id: 7,
    name: "Zustand",
  },
  {
    id: 8,
    name: "SCSS",
  },
  {
    id: 9,
    name: "Bootstrap",
  },
  {
    id: 10,
    name: "Bulma",
  },
  {
    id: 11,
    name: "Tailwind CSS",
  },
  {
    id: 12,
    name: "GSAP",
  },
  {
    id: 13,
    name: "Firebase",
  },
  {
    id: 14,
    name: "PostgreSQL",
  },
  {
    id: 15,
    name: "Express",
  },
  {
    id: 16,
    name: "Axios",
  },
  {
    id: 17,
    name: "Node.js",
  },
  {
    id: 18,
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
    name: "Galaxy Overview",
    description:
      "An overview of a galaxy inspired by the Heleus Cluster in Mass Effect Andromeda.",
    tools: ["React-Three-Fiber"],
    imageUrl: galaxy
  },
  {
    name: "Khronomechanica Vintora",
    description:
      "A landing page for a fictional steampunk watch. I made this to try out embedding a 3D model for a product website.",
    tools: ["Three.js, GSAP"],
    imageUrl: vintora
  },
  {
    name: "Car Showroom",
    description:
      "A virtual car showroom mainly inspired from the one in Gran Turismo Sport.",
    tools: ["React-Three-Fiber, SCSS"],
    imageUrl: showroom
  },
  {
    name: "Synthwave Scene",
    description:
      "A synthwave scene made with Three.js and React (not to be confused with React-Three-Fiber).",
    tools: ["React.js, Three.js"],
    imageUrl: synthwave
  },
  {
    name: "Asteroids Game",
    description:
      "The Asteroids game from Atari, but with my own modifications to it.",
    tools: ["JavaScript"],
    imageUrl: asteroids
  },
  {
    name: "Random Password Generator Extension",
    description:
      "A random password generator extension with options for digits, special characters, mixed case letters, and a slider to adjust the length of the password.",
    tools: ["JavaScript"],
    imageUrl: passwordGen
  },
  {
    name: "Security Unit Web Portal",
    description:
      "This was part of our capstone project which involved a mobile application, and this web application. It was made for the security personnel of Letran-Calamba, and the whole system serves as a patrol system for them. It was my first time using a JS framework, Vue.js, and it also gave me the chance to dive deeper into the world of JavaScript. ",
    tools: ["Vue.js, Bootstrap, Firebase"],
    imageUrl: ssu
  },
] as const;

export const miniProjects = [
  {
    name: "To-do App with Pagination",
    description:
      "A to-do app with pagination that is built with the PERN stack. For practicing purposes.",
    tools: ["PostgreSQL, Express.js, React.js, Node.js, Tailwind CSS"] 
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "A Tic-Tac-Toe game that I made to introduce myself to the world of Svelte.",
    tools: ["Svelte, SCSS"] 
  },
  {
    name: "Very Original Quote Generator",
    description:
      "A quote generator that I made to get back into the flow of learning React itself, after spending time (too much, perhaps) making projects with Three.js/React-Three-Fiber.",
    tools: ["React.js, SCSS"] 
  },
  {
    name: "Obligatory Weather App",
    description: "A weather app that uses the OpenWeatherMap API.",
    tools: ["React.js, Zustand, Axios"] 
  },
  {
    name: "All-Knowing Bot",
    description: "A chat website that uses LemurBot from Lemur Engine.",
    tools: ["JavaScript, SCSS"] 
  },
  {
    name: "TraderView",
    description: "A market tracker that uses the TradingView API.",
    tools: ["JavaScript, SCSS"] 
  },
] as const;
