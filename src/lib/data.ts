// projects
import galaxy from "../../public/project/galaxy.png";
import vintora from "../../public/project/vintora.gif";
import showroom from "../../public/project/showroom.gif";
import synthwave from "../../public/project/synthwave.gif";
import asteroids from "../../public/project/asteroids.gif";
import passwordGen from "../../public/project/password.png";
import ssu from "../../public/project/ssu.png";
import chatbot from "../../public/project/chatbot.png";
import horizonxs from "../../public/project/horizonxs.webp"

// icons
import htmlImg from "../../public/tools/html.svg";
import cssImg from "../../public/tools/css.svg";
import scssImg from "../../public/tools/scss.svg";
import jsImg from "../../public/tools/js.svg";
import reactImg from "../../public/tools/react.svg";
import nextImg from "../../public/tools/next.svg";
import vueImg from "../../public/tools/vue.svg";
import threeImg from "../../public/tools/three.svg";
import r3fImg from "../../public/tools/r3f.svg";
import bootstrapImg from "../../public/tools/bootstrap.svg";
import tailwindImg from "../../public/tools/tailwind.svg";
import gsapImg from "../../public/tools/gsap.svg";
import framerMotionImg from "../../public/tools/framermotion.svg";
import firebaseImg from "../../public/tools/firebase.svg";
import waveToolImg from "../../public/tools/wavetool.svg";
import lighthouseImg from "../../public/tools/lighthouse.svg";
import miscImg from "../../public/tools/misc.svg";
import pcImg from "../../public/tools/pc.svg";
import pcRequiredImg from "../../public/tools/pcrequired.svg";

export const links = [
  {
    name: "Tools",
    hash: "#tools",
  },
  {
    name: "Works",
    hash: "#works",
  },
  {
    name: "Blogs",
    hash: "/blogs",
  },
]

export const tools = [
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
    name: "Vue.js",
    imageUrl: vueImg,
    alt: "Vue.js logo"
  },
  {
    name: "Tailwind",
    imageUrl: tailwindImg,
    alt: "Tailwind CSS logo"
  },
  {
    name: "Framer Motion",
    imageUrl: framerMotionImg,
    alt: "Framer motion logo"
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

export const projects = [
  {
    name: "Virtual Car Showroom",
    description:
      "A 3D virtual car showroom mainly inspired by Gran Turismo Sport. I also replicated some parts of the UI from the actual game.",
    tools: ["PC Required", "React-Three-Fiber", "SCSS"],
    toolIcons: [pcRequiredImg, r3fImg, scssImg],
    imageUrl: showroom,
    liveLink: "https://gtshowroom.netlify.app/",
    videoLink: "https://youtu.be/PhjlgLxL-Zg",
  },
  {
    name: "Khronomechanica Vintora",
    description:
      "A website for a fictional steampunk watch. I wanted to try out embedding a 3D model in a product website.",
    tools: ["PC Recommended", "HTML", "SCSS", "Three.js", "GSAP"],
    imageUrl: vintora,
    toolIcons: [pcImg, htmlImg, scssImg, threeImg, gsapImg],
    liveLink: "https://steampunkwatch.netlify.app/",
  },
  {
    name: "Synthwave Scene",
    description:
      "A synthwave scene in 3D. Made with React.js and Three.js because I wanted to know how different the syntax & conventions are compared to React-Three-Fiber.",
    tools: ["PC Recommended", "React.js", "Three.js"],
    imageUrl: synthwave,
    toolIcons: [pcImg, reactImg, threeImg],
    liveLink: "https://jdsynthwave.netlify.app/",
    videoLink: "https://youtu.be/S7RprZc3dEs",
    blogLink: "/blogs/my-first-shenanigans-in-3d/"
  },
  {
    name: "Asteroids",
    description:
      "The Asteroids game from Atari, but with my own modifications to it.",
    tools: ["PC Required", "JavaScript"],
    imageUrl: asteroids,
    toolIcons: [pcRequiredImg, jsImg],
    liveLink: "https://jdasteroids.netlify.app/",
    videoLink: "https://youtu.be/6LwWaI4WKdg",
  },
  {
    name: "Galaxy Overview",
    description:
      "A 3D overview of a galaxy, inspired by the Heleus Cluster in Mass Effect Andromeda.",
    tools: ["PC Recommended", "React-Three-Fiber"],
    imageUrl: galaxy,
    toolIcons: [pcImg, r3fImg],
    liveLink: "https://jdgalaxy.netlify.app/",
    videoLink: "https://youtu.be/ODhJYVid_oU",
  },
  {
    name: "Random Password Generator Extension",
    description:
      "A random password generator extension with options for digits, special characters, mixed case letters, and a slider to adjust the length of the password.",
    tools: ["HTML", "SCSS", "JavaScript"],
    imageUrl: passwordGen,
    toolIcons: [htmlImg, scssImg, jsImg],
    videoLink: "https://youtu.be/pq-EsJa1plw",
  },
  {
    name: "Security Unit Web Portal",
    description:
      "This was part of our capstone project back when I was in college, which involved a mobile application, and this web application. The whole system serves as a patrol system for the security unit at our school.",
    tools: ["Vue.js", "Bootstrap", "Firebase"],
    imageUrl: ssu,
    toolIcons: [vueImg, bootstrapImg, firebaseImg],
    liveLink: "https://ssuwebsystem.netlify.app",
    videoLink: "https://youtu.be/vkYClk75SS0",
  },
]

export const posts = [
  // {
  //   name: "Creating a Gran Turismo-esque showroom with Three.js",
  //   description: "I originally wanted to create a promotional website for a car manufacturer (not a partnership), but I ended up recreating Gran Turismo (a bit) for browsers. Wanna know how?",
  //   date: "September 28, 2023",
  //   link: "/blogs/gran-turismo-showroom"
  // },
  {
    name: "My first shenanigans in 3D",
    description: "The story of how I came by 3D so early on in my self-learning journey.",
    date: "September 27, 2023",
    link: "/blogs/my-first-shenanigans-in-3d"
  },
]