import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import cpp from '../assets/cpp.svg'
import dotnet from '../assets/dot_net.svg'
import git from '../assets/git.svg'
import nodejs from '../assets/nodejs.svg'
import postman from '../assets/postman.png'
import react from '../assets/react1.svg'
import redux from '../assets/redux.svg'
import tailwindcss from '../assets/tailwindcss.svg'
import expressjs from '../assets/expressjs.svg'
import FoodVilla from '../assets/foodVilla.jpeg'
import VideoStreaming from '../assets/videoStreaming.jpeg'
import Lemonade from '../assets/lemonade.jpeg'
import Netflix from '../assets/netflixgpt.jpeg'

export const socials = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ashish-saha-b09608184/"
  },
  {
    id: 2,
    name: "Github",
    url: "https://github.com/Ashish357"
  },
  {
    id: 1,
    name: "Gmail",
    url: "mailto:ashishsaha2708@gmail.com"
  }
]

export const sectionIds = ["about","experience","projects","skills","contact"]

export const projects = [
    {
      id: 1,
      img: FoodVilla,
      name: "Food Villa App",
      des: "This project is about building an online Food web application showing the functionalities of an food website like search food, add to cart etc.",
      span: "Tech Stack :",
      stack: "HTML, CSS, JavaScript, ReactJS, Redux Toolkit and Rest API",
      url: "https://food-villa-app-tnjx.vercel.app/",
      github: "https://github.com/Ashish357/Food-Villa-App",
    },
    {
        id: 2,
        img: VideoStreaming,
        name: "Video Streaming App",
        des: "This project is a video streaming app which shows videos on home screen have features like infinite scroll,optimized search, live comments, nested comments, watch page etc .",
        span: "Tech Stack :",
        stack:  "HTML, CSS, JavaScript, ReactJS, Redux Toolkit and Rest API",
        url: "https://video-streaming-app-yt.vercel.app/",
        github: "https://github.com/Ashish357/VideoStreamingApp",
    },
    {
      id: 3,
      img: Netflix,
      name: "Series Search App",
      des: "This is a complete Mobile Responsive Website build to master the creation of Modern UX/UI Websites Design.",
      span: "Tech Stack :",
      stack:  "HTML, CSS, JavaScript, ReactJS, Redux Toolkit and Rest API",
      url: "#",
      github: "https://github.com/Ashish357/Netflix-UI",
    },
    {
      id: 4,
      img: Lemonade,
      name: "Lemonade",
      des: "This is a complete Mobile Responsive Website build to master UI UX.",
      span: "Tech Stack :",
      stack: "HTML, CSS, JavaScript and ReactJS",
      url: "#",
      github: "https://github.com/Ashish357/Little-Lemon",
    },
]

export const skills = [
    {
        id: 1,
        name: "JavaScript",
        img: javascript,
    },
    {
        id: 2,
        name: "React",
        img: react,
    },
    {
      id: 12,
      name: "Dot Net",
      img: dotnet,
    },
    {
      id: 9,
      name: "Node JS",
      img: nodejs,
    },
    {
      id: 10,
      name: "Express Js",
      img: expressjs,
    },
    {
        id: 3,
        name: "Redux",
        img: redux,
    },
    {
      id: 4,
      name: "HTML",
      img: html,
    },
    {
      id: 5,
      name: "CSS",
      img: css,
    },
    {
      id: 6,
      name: "Bootstrap",
      img: "https://mohit-portfolio.vercel.app/assets/bootstrap.8e546a2c.svg",
    },
    {
      id: 7,
      name: "Material UI",
      img: "https://mohit-portfolio.vercel.app/assets/materialui.6480f23a.svg",
    },
    {
      id: 8,
      name: "Tailwind",
      img: tailwindcss,
    },
    {
      id: 11,
      name: "C++",
      img: cpp,
    },
    {
      id: 13,
      name: "Git",
      img: git,
    },
    {
      id: 14,
      name: "Postman",
      img: postman,
    },
  ];