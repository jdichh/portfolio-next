import galaxy from "../../public/project/galaxy.png"
import vintora from "../../public/project/vintora.png"
import showroom from "../../public/project/showroom.png"
import synthwave from "../../public/project/synthwave.png"
import asteroids from "../../public/project/asteroids.png"
import passwordGen from "../../public/project/password.png"
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
    name: "Galaxy Overview",
    description:
      "An overview of a galaxy inspired by the Heleus Cluster in Mass Effect Andromeda.",
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
      "A virtual car showroom mainly inspired from the one in Gran Turismo Sport.",
    tools: ["React-Three-Fiber", "SCSS"],
    imageUrl: showroom,
    liveLink: ["https://gtshowroom.netlify.app/"],
    githubLink: ["https://github.com/jdichh/car-showroom-r3f/"]
  },
  {
    name: "Synthwave Scene",
    description:
      "A synthwave scene made with Three.js and React (not to be confused with React-Three-Fiber).",
    tools: ["React.js", "Three.js"],
    imageUrl: synthwave,
    liveLink: ["https://jdsynthwave.netlify.app/"],
    githubLink: ["https://github.com/jdichh/synthwave-scene-REACT"]
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
    name: "Security Unit Web Portal",
    description:
      "This was part of our capstone project which involved a mobile application, and this web application. The whole system serves as a patrol system for the security unit at Letran-Calamba.",
    tools: ["Vue.js", "Bootstrap", "Firebase"],
    imageUrl: ssu,
    liveLink: ["https://ssuwebsystem.netlify.app"],
    githubLink: ["https://github.com/jdichh/websystem_ssu2"]
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
