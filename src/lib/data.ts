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

// tools
import htmlImg from "../../public/tools/html.svg";
import cssImg from "../../public/tools/css.svg";
import scssImg from "../../public/tools/scss.svg";
import jsImg from "../../public/tools/js.svg";
import reactImg from "../../public/tools/react.svg";
import nextImg from "../../public/tools/next.svg";
import threeImg from "../../public/tools/three.svg";
import r3fImg from "../../public/tools/r3f.svg";
import bootstrapImg from "../../public/tools/bootstrap.svg";
import bulmaImg from "../../public/tools/bulma.svg";
import tailwindImg from "../../public/tools/tailwind.svg";
import gsapImg from "../../public/tools/gsap.svg";
import framerMotionImg from "../../public/tools/framermotion.svg";
import nodeImg from "../../public/tools/node.svg";
import w3Img from "../../public/tools/w3.svg";
import waveToolImg from "../../public/tools/wavetool.svg";
import lighthouseImg from "../../public/tools/lighthouse.svg";

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

export const projects = [
  {
    name: "Virtual Car Showroom",
    description:
      "A 3D virtual car showroom mainly inspired by Gran Turismo Sport. I also replicated some parts of the UI.",
    tools: ["PC Required", "React-Three-Fiber", "SCSS"],
    imageUrl: showroom,
    liveLink: "https://gtshowroom.netlify.app/",
    videoLink: "https://youtu.be/PhjlgLxL-Zg",
    githubLink: "https://github.com/jdichh/car-showroom-r3f/",
    devFootage: "https://drive.google.com/drive/folders/1wxP8FM63t-DFlsGL2M6aUYAoZJhQAfOO?usp=sharing",
  },
  {
    name: "Khronomechanica Vintora",
    description:
      "A landing page for a fictional steampunk watch. I made this to try out embedding a 3D model in a product website.",
    tools: ["Recommended on PC", "HTML", "SCSS", "Three.js", "GSAP"],
    imageUrl: vintora,
    liveLink: "https://steampunkwatch.netlify.app/",
    githubLink: "https://github.com/jdichh/steampunk-watch",
    devFootage: "https://drive.google.com/drive/folders/1Cch-eDcga3LYIGnze3uUez6lN5RWrRtv?usp=sharing",
  },
  {
    name: "Synthwave Scene",
    description:
      "A 3D synthwave scene made with Three.js and React (not to be confused with React-Three-Fiber). Why? Because I wanted to know how different the syntax & conventions are compared to React-Three-Fiber.",
    tools: ["Recommended on PC", "React.js", "Three.js"],
    imageUrl: synthwave,
    liveLink: "https://jdsynthwave.netlify.app/",
    videoLink: "https://youtu.be/S7RprZc3dEs",
    githubLink: "https://github.com/jdichh/synthwave-scene-REACT",
    devFootage: "https://drive.google.com/drive/folders/1T71kzlu3KbTG4J0MR5YbCOmdzzKyOBuX?usp=drive_link"
  },
  {
    name: "Asteroids Game",
    description:
      "The Asteroids game from Atari, but with my own modifications to it.",
    tools: ["Unplayable on Mobile", "PC Required", "JavaScript"],
    imageUrl: asteroids,
    liveLink: "https://jdasteroids.netlify.app/",
    videoLink: "https://youtu.be/6LwWaI4WKdg",
    githubLink: "https://github.com/jdichh/asteroids",
  },
  {
    name: "Galaxy Overview",
    description:
      "A 3D overview of a galaxy inspired by the Heleus Cluster in Mass Effect Andromeda.",
    tools: ["Recommended on PC", "React-Three-Fiber"],
    imageUrl: galaxy,
    liveLink: "https://jdgalaxy.netlify.app/",
    videoLink: "https://youtu.be/ODhJYVid_oU",
    githubLink: "https://github.com/jdichh/galaxy-map",
    devFootage: "https://drive.google.com/drive/folders/1jxwLoiLTJ8YCxAhwNnbEtwGzTRTNKw2P?usp=sharing"
  },
  {
    name: "Random Password Generator Extension",
    description:
      "A random password generator extension with options for digits, special characters, mixed case letters, and a slider to adjust the length of the password.",
    tools: ["HTML", "SCSS", "JavaScript"],
    imageUrl: passwordGen,
    videoLink: "https://youtu.be/pq-EsJa1plw",
    githubLink: "https://github.com/jdichh/password-generator",
  },
  {
    name: "All-Knowing Bot",
    description: "A chat website that uses LemurBot from Lemur Engine.",
    tools: ["HTML", "SCSS", "JavaScript", "REST API"],
    imageUrl: chatbot,
    liveLink: "https://allknowingbot.netlify.app/",
    githubLink: "https://github.com/jdichh/all-knowing-bot",
  },
  {
    name: "Security Unit Web Portal",
    description:
      "This was part of our capstone project back when I was in college, which involved a mobile application, and this web application. The whole system serves as a patrol system for the security unit at our school.",
    tools: ["Vue.js", "Bootstrap", "Firebase"],
    imageUrl: ssu,
    liveLink: "https://ssuwebsystem.netlify.app",
    videoLink: "https://youtu.be/vkYClk75SS0",
    githubLink: "https://github.com/jdichh/websystem_ssu2",
  },
  {
    name: " Alternative Horizon XS Radio",
    description:
      "An alternative version to the Horizon XS in-game radio in Forza Horizon 5. The original version of the radio left a bad taste in my mouth.",
    tools: ["Miscellaneous Project"],
    imageUrl: horizonxs,
    nexusModsLink: "https://www.nexusmods.com/forzahorizon5/mods/65"
  },
]