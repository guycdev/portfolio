import { DiAws, DiMysql, DiPython } from "react-icons/di";
import { FaCss3, FaEthereum, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import {
  SiAmazonec2,
  SiAwslambda,
  SiExpress,
  SiGooglecloud,
  SiGooglemaps,
  SiNextdotjs,
  SiOpenai,
  SiPowerbi,
  SiRstudio,
  SiTableau,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BsMusicNote, BsPassport } from "react-icons/bs";
import convexSvg from "@/components/convex-svg";
import { TbBrandVite } from "react-icons/tb";
import { SiSelenium } from "react-icons/si";

const techArr = {
  react: { name: "React.js", icon: FaReact, color: "#5ed3f3" },
  next: { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  convex: { name: "Convex", icon: convexSvg, color: "#2f74c0" },
  tone: { name: "Tone.js", icon: BsMusicNote, color: "#f734d7" },
  typeScript: { name: "TypeScript", icon: SiTypescript, color: "#2f74c0" },
  node: { name: "Node.js", icon: FaNode, color: "#87bf00" },
  javaScript: { name: "JavaScript", icon: IoLogoJavascript, color: "#efd81d" },
  googleApis: { name: "Google APIs", icon: SiGooglemaps, color: "#df4133" },
  mySql: { name: "MySQL", icon: DiMysql, color: "#e89b42" },
  figma: { name: "Figma", icon: FiFigma, color: "#9d56f7" },
  python: { name: "Python", icon: DiPython, color: "#f7cc42" },
  openAi: { name: "OpenAI", icon: SiOpenai, color: "#10a481" },
  vite: { name: "Vite", icon: TbBrandVite, color: "#9665fe" },
  ethers: { name: "Ethers.js", icon: FaEthereum, color: "#bbc6ed" },
  html: { name: "HTML", icon: FaHtml5, color: "#e96228" },
  css: { name: "CSS", icon: FaCss3, color: "#2862e9" },
  express: { name: "Express.js", icon: SiExpress, color: "#000000" },
};

export const allNodes = [
  {
    id: "node-4",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "ZeroX Gaming",
      role: "Software Engineer Intern",
      date: "Jan 2024 - Present",
      description:
        "My responsibilities currently range from implementing UI components from design to implementation, developing CRUD endpoints and file management scripts on our serverless backend, and optimizing smart contract interactions by adhering to Web3 best practices.",
      bullets: [
        "Adhere to a scrum based work flow",
        "UI design using Figma and React.js",
        "CRUD implementations using a serverless backend",
      ],
      stack: [
        { name: "TypeScript", icon: SiTypescript, color: "#2f74c0" },
        { name: "React.js", icon: FaReact, color: "#5ed3f3" },
        { name: "Node.js", icon: FaNode, color: "#87bf00" },
        { name: "AWS Lambda", icon: SiAwslambda, color: "#d16312" },
        { name: "Ethers.js", icon: FaEthereum, color: "#bbc6ed" },
        { name: "Vite", icon: TbBrandVite, color: "#9665fe" },
        { name: "Python", icon: DiPython, color: "#f7cc42" },
        { name: "Selenium", icon: SiSelenium, color: "#bebebe" },
      ],
      link: "https://beatbytes.vercel.app/",
      section: "experiences",
      tag: "Experience",
    },
  },
  {
    id: "node-1",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "Beaverhacks Winter 2024",
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
        { name: "TypeScript", icon: SiTypescript, color: "#2f74c0" },
        { name: "React.js", icon: FaReact, color: "#5ed3f3" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Convex", icon: convexSvg, color: "#2f74c0" },
        { name: "Tone.js", icon: BsMusicNote, color: "#f734d7" },
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
      title: "Google Hacks x Beaverhacks",
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
        { name: "JavaScript", icon: IoLogoJavascript, color: "#efd81d" },
        { name: "React.js", icon: FaReact, color: "#5ed3f3" },
        { name: "Node.js", icon: FaNode, color: "#87bf00" },
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
      title: "Ryerson RIT Competition",
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
    id: "node-5",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "Image Search",
      role: "AI generated image search engine",
      date: "Mar 2024",
      description:
        "Image search is an image search engine designed for AI generated images using a stable difusion model. Users are able to create an account and favorite their favorite images while also analyzing the keywords used to generate the image.",
      img: "https://res.cloudinary.com/dojpkldcg/image/upload/v1710215993/Screenshot_2024-03-11_235937_xqcjcl.png",
      bullets: [
        "User authentication with Clerk and Convex SDK",
        "Flexible sequencing tool with custom asset uploads",
        "Interactive synth with playback and customizable keyboard",
      ],
      stack: [
        { name: "TypeScript", icon: SiTypescript, color: "#2f74c0" }, // TypeScript (assuming the duplicate color for Convex and TypeScript is intentional)
        { name: "React.js", icon: FaReact, color: "#5ed3f3" }, // React.js
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" }, // Next.js
        { name: "Convex", icon: convexSvg, color: "#2f74c0" }, // Assuming Convex's color is meant to be here
      ],
      link: "https://beatbytes.vercel.app/",
      section: "projects",
      tag: "Project",
    },
  },
  {
    id: "node-10",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "Analog Designs",
      role: "Freelance Design Platform",
      date: "May 2023",
      description:
        "Analog Designs is a full stack solution for managing my freelance client's current orders. Built utilizing in-house authentication users are able to manage their orders with a CRUD dashboard.",
      img: "https://res.cloudinary.com/dojpkldcg/image/upload/v1710215993/Screenshot_2024-03-11_235937_xqcjcl.png",
      bullets: [
        "Deployed on AWS using EC2",
        "Session based authentication with PassportJS",
        "Written in Vanilla CSS (wow)",
      ],
      stack: [
        { name: "React.js", icon: FaReact, color: "#5ed3f3" },
        { name: "Node.js", icon: FaNode, color: "#87bf00" },
        { name: "JavaScript", icon: IoLogoJavascript, color: "#efd81d" },
        { name: "MySQL", icon: DiMysql, color: "#e89b42" },
        { name: "Vite", icon: TbBrandVite, color: "#9665fe" },
        { name: "CSS", icon: FaCss3, color: "#2862e9" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "Passport.js", icon: BsPassport, color: "#35df79" },
        { name: "AWS EC2", icon: SiAmazonec2, color: "#ef931e" },
      ],
      link: "https://beatbytes.vercel.app/",
      section: "projects",
      tag: "Project",
    },
  },
  {
    id: "node-11",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "SNKRS Solutions",
      role: "Retail Arbitrage Monitors",
      date: "Apr 2020 - Sep 2022",
      description:
        "Developed a suite of web scrapers to facilitate a profitable retail arbitrage strategy over a two year period.",
      img: "https://res.cloudinary.com/dojpkldcg/image/upload/v1710215993/Screenshot_2024-03-11_235937_xqcjcl.png",
      bullets: [
        "Utilized proxy handling to avoid detection",
        "Deployed on Google Cloud Services",
      ],
      stack: [
        { name: "Python", icon: DiPython, color: "#f7cc42" },
        { name: "Selenium", icon: SiSelenium, color: "#bebebe" },
        { name: "Google Cloud", icon: SiGooglecloud, color: "#ea4234" },
      ],
      link: "https://beatbytes.vercel.app/",
      section: "projects",
      tag: "Project",
    },
  },
  {
    id: "node-6",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "Oregon State University",
      role: "Bachelor of Science in Computer Science",
      date: "Sept 2023 - Mar 2025",
      description:
        "Maintaining a 4.0 CGPA while learning about the theoretical foundations of computer science, including algorithms, data structures, computation theory, and software development principles.",
      img: "https://res.cloudinary.com/dojpkldcg/image/upload/v1710215993/Screenshot_2024-03-11_235937_xqcjcl.png",
      bullets: [],
      stack: [
        { name: "HTML", icon: FaHtml5, color: "#e96228" },
        { name: "CSS", icon: FaCss3, color: "#2862e9" },
        { name: "React.js", icon: FaReact, color: "#5ed3f3" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "Node.js", icon: FaNode, color: "#87bf00" },
        { name: "Python", icon: DiPython, color: "#f7cc42" },
      ],
      link: "https://beatbytes.vercel.app/",
      section: "education",
      tag: "Education",
    },
  },
  {
    id: "node-7",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "Ryerson University",
      role: "Bachelor of Commerce in Finance",
      date: "Sept 2019 - June 2023",
      description:
        "An in-depth exploration of finance principles, financial markets, investment strategies, and the economic factors influencing global business environments.",
      bullets: [],
      stack: [
        { name: "R", icon: SiRstudio, color: "#71a5d4" },
        { name: "PowerBI", icon: SiPowerbi, color: "#eac210" },
        { name: "Tableau", icon: SiTableau, color: "#e87830" },
      ],
      link: "Link_to_academic_profile_or_project",
      section: "education",
      tag: "Education",
    },
  },
  {
    id: "node-8",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "Sponsorship Coordinator",
      role: "Oregon State Hackathon Fund",
      date: "Jan 2024 - Present",
      description:
        "Oversaw the allocation of a portfolio with $500K AUM, making weekly stock pitches and critiques to a student senate of 25 other students.",
      bullets: [],
      stack: [],
      link: "Link_to_academic_profile_or_project",
      section: "involvement",
      tag: "Involvement",
    },
  },
  {
    id: "node-9",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "Equity Analyst",
      role: "Ryerson Student Managed Investment Fund",
      date: "Apr 2021 - Aug 2021",
      description:
        "Oversaw the allocation of a portfolio with $500K AUM, making weekly stock pitches and critiques to a student senate of 25 other students.",
      bullets: [],
      stack: [],
      link: "Link_to_academic_profile_or_project",
      section: "involvement",
      tag: "Involvement",
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
