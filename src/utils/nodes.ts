import { DiMysql, DiPython } from "react-icons/di";
import { FaEthereum, FaNode, FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import {
  SiGooglemaps,
  SiNextdotjs,
  SiOpenai,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BsMusicNote } from "react-icons/bs";
import convexSvg from "@/components/convex-svg";
import { TbBrandVite } from "react-icons/tb";

export const allNodes = [
  {
    id: "node-1",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      place: "Beaverhacks Winter 2024",
      role: "2nd Place Hackathon Winner",
      date: "Mar 2024",
      description:
        "Beatbytes is a free to use audio production application that provides its users with maximum flexibility by offering file uploads and instrumental configruations.",
      img: "https://res.cloudinary.com/dojpkldcg/image/upload/v1710215993/Screenshot_2024-03-11_235937_xqcjcl.png",
      bullets: [
        "User authentication with Clerk and Convex SDK",
        "Flexible sequencing tool with custom asset uploads",
        "Interactive synth with playback and customizable keyboard",
      ],
      stack: [
        { name: "React.js", icon: FaReact, color: "#5ed3f3" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Convex", icon: convexSvg, color: "#2f74c0" },
        { name: "Tone.js", icon: BsMusicNote, color: "#f734d7" },
        { name: "TypeScript", icon: SiTypescript, color: "#2f74c0" },
      ],
      link: "https://beatbytes.vercel.app/",
      section: "achievements",
      tag: "Hackathon",
    },
  },
  {
    id: "node-2",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      place: "Google Hacks x Beaverhacks",
      role: "1st Place Hackathon Winner",
      date: "Nov 2023",
      description:
        "Outbreak Navigator, is a real-time, crowdsourced map app to safely locate essentials and steer clear of danger zones in crises.",
      img: "https://res.cloudinary.com/dojpkldcg/image/upload/v1708621378/miemqhtmtrs06jir8wae.png",
      bullets: [
        "Built the frontend using React.js and the Google maps toolkit",
        "Utilize the Google SDK to develop a CRUD API in Node.js",
        "Developed in 2 days",
      ],
      stack: [
        { name: "React.js", icon: FaReact, color: "#5ed3f3" },
        { name: "Node.js", icon: FaNode, color: "#87bf00" },
        { name: "JavaScript", icon: IoLogoJavascript, color: "#efd81d" },
        { name: "Google APIs", icon: SiGooglemaps, color: "#df4133" },
        { name: "MySQL", icon: DiMysql, color: "#e89b42" },
        { name: "Figma", icon: FiFigma, color: "#9d56f7" },
      ],
      link: "https://devpost.com/software/outbreak-navigator",
      section: "achievements",
      tag: "Hackathon",
    },
  },
  {
    id: "node-3",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      place: "Ryerson RIT Competition",
      role: "1st Place Hackathon Winner",
      date: "Jan 2023 - Apr 2023",
      description:
        "Developed a high-frequency trading bot in Python using the OpenAI's API, regex, and cross trading strategies to facilitate a sentiment driven strategy.",
      img: "https://res.cloudinary.com/dojpkldcg/image/upload/v1710218583/carbon_yrlllo.png",
      bullets: [
        "Won by a landslide of $30k P/L per round (3 rounds)",
        "Autmated trading through Regex parsing and the OpenAI API",
        "Utilized multithreading to increase the number of active processes",
      ],
      stack: [
        { name: "Python", icon: DiPython, color: "#f7cc42" },
        { name: "OpenAI", icon: SiOpenai, color: "#10a481" },
      ],
      link: "https://devpost.com/software/outbreak-navigator",
      section: "achievements",
      tag: "Hackathon",
    },
  },
  {
    id: "node-4",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      place: "ZeroX Gaming",
      role: "Software Engineer Intern",
      date: "Jan 2024 - Present",
      description:
        "My responsibilities currently range from implementing UI components from initial design to implementation, implementing CRUD endpoints on our servers, and optimizing smart contract interactions by centralizing deployment processes and enhancing security through strategic role management.",
      bullets: [
        "Adhere to a scrum based work flow",
        "UI design using Figma and React.js",
        "CRUD implementations using a serverless backend",
      ],
      stack: [
        { name: "React.js", icon: FaReact, color: "#5ed3f3" },
        { name: "TypeScript", icon: SiTypescript, color: "#2f74c0" },
        { name: "Vite", icon: TbBrandVite, color: "#9665fe" },
        { name: "Node.js", icon: FaNode, color: "#87bf00" },
        { name: "Ethers.js", icon: FaEthereum, color: "#87bf00" },
      ],
      link: "https://beatbytes.vercel.app/",
      section: "experiences",
      tag: "Experience",
    },
  },
  {
    id: "node-5",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      place: "Image Search",
      role: "AI generated image search engine",
      date: "Mar 2024",
      description:
        "Image search is an image search engine designed for AI generated images using a stable difusion model",
      img: "https://res.cloudinary.com/dojpkldcg/image/upload/v1710215993/Screenshot_2024-03-11_235937_xqcjcl.png",
      bullets: [
        "User authentication with Clerk and Convex SDK",
        "Flexible sequencing tool with custom asset uploads",
        "Interactive synth with playback and customizable keyboard",
      ],
      stack: [
        { name: "React.js", icon: FaReact, color: "#5ed3f3" }, // React.js
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" }, // Next.js
        { name: "Convex", icon: convexSvg, color: "#2f74c0" }, // Assuming Convex's color is meant to be here
        { name: "Tone.js", icon: BsMusicNote, color: "#f734d7" }, // Tone.js
        { name: "TypeScript", icon: SiTypescript, color: "#2f74c0" }, // TypeScript (assuming the duplicate color for Convex and TypeScript is intentional)
      ],
      link: "https://beatbytes.vercel.app/",
      section: "projects",
      tag: "Project",
    },
  },
];

export const getAllSkills = () => {
  const skills = allNodes
    .map((node) => {
      return node.data.stack.map((tech) => {
        return tech.name;
      });
    })
    .flat();
  const skillsSet = new Set(skills);
  return skillsSet;
};

const getSkills = () => {
  const skillsSet = getAllSkills();
  const formattedSkills = Array.from(skillsSet).map((skill) => ({
    value: skill,
    label: skill,
  }));
  return formattedSkills;
};

export const allNodeOptions = getSkills();
