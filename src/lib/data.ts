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
    githubLink: "https://github.com/jdichh/car-showroom-r3f/",
    devFootage: "https://drive.google.com/drive/folders/1wxP8FM63t-DFlsGL2M6aUYAoZJhQAfOO?usp=sharing"
  },
  {
    name: "Khronomechanica Vintora",
    description:
      "A landing page for a fictional steampunk watch. I wanted to try out embedding a 3D model in a product website.",
    tools: ["PC Recommended", "HTML", "SCSS", "Three.js", "GSAP"],
    imageUrl: vintora,
    toolIcons: [pcImg, htmlImg, scssImg, threeImg, gsapImg],
    liveLink: "https://steampunkwatch.netlify.app/",
    githubLink: "https://github.com/jdichh/steampunk-watch",
    devFootage: "https://drive.google.com/drive/folders/1Cch-eDcga3LYIGnze3uUez6lN5RWrRtv?usp=sharing",
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
    githubLink: "https://github.com/jdichh/synthwave-scene-REACT",
    devFootage: "https://drive.google.com/drive/folders/1T71kzlu3KbTG4J0MR5YbCOmdzzKyOBuX?usp=drive_link"
  },
  {
    name: "Asteroids Game",
    description:
      "The Asteroids game from Atari, but with my own modifications to it.",
    tools: ["PC Required", "JavaScript"],
    imageUrl: asteroids,
    toolIcons: [pcRequiredImg, jsImg],
    liveLink: "https://jdasteroids.netlify.app/",
    videoLink: "https://youtu.be/6LwWaI4WKdg",
    githubLink: "https://github.com/jdichh/asteroids",
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
    githubLink: "https://github.com/jdichh/galaxy-map",
    devFootage: "https://drive.google.com/drive/folders/1jxwLoiLTJ8YCxAhwNnbEtwGzTRTNKw2P?usp=sharing"
  },
  {
    name: "Random Password Generator Extension",
    description:
      "A random password generator extension with options for digits, special characters, mixed case letters, and a slider to adjust the length of the password.",
    tools: ["HTML", "SCSS", "JavaScript"],
    imageUrl: passwordGen,
    toolIcons: [htmlImg, scssImg, jsImg],
    videoLink: "https://youtu.be/pq-EsJa1plw",
    githubLink: "https://github.com/jdichh/password-generator",
  },
  {
    name: "All-Knowing Bot",
    description: "A chat website that uses LemurBot from Lemur Engine.",
    tools: ["HTML", "SCSS", "JavaScript"],
    imageUrl: chatbot,
    toolIcons: [htmlImg, scssImg, jsImg],
    liveLink: "https://allknowingbot.netlify.app/",
    githubLink: "https://github.com/jdichh/all-knowing-bot",
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
    githubLink: "https://github.com/jdichh/websystem_ssu2",
  },
  {
    name: " Alternative Horizon XS Radio",
    description:
      "An alternative version to the Horizon XS in-game radio in Forza Horizon 5. The original version of the radio left a bad taste in my mouth.",
    tools: ["Miscellaneous"],
    toolIcons: [miscImg],
    imageUrl: horizonxs,
    nexusModsLink: "https://www.nexusmods.com/forzahorizon5/mods/65"
  },
]

export const blogs = [
  {
    name: "My first time encountering 3D",
    description:"Let me tell you a little story about how I came by 3D so early on in my self-learning journey.",
    date: "September 27, 2023",
    link: "/blogs/first-time-encountering-3d"
  },
]