import { DiMysql, DiPython } from "react-icons/di";
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
import { IconType } from "react-icons";
import { AllTechInterface } from "./interfaces";

interface PreformattedNodes {
  id: string;
  type: string;
  position: { x: 0; y: 0 };
  data: {
    title: string;
    role: string;
    date: string;
    description: string;
    stack: string[];
    section: string;
    tag: string;
    github?: string;
  };
}

const techIcons: { [key: string]: { icon: IconType; color: string } } = {
  "React.js": {
    icon: FaReact,
    color: "#5ed3f3",
  },
  "Next.js": {
    icon: SiNextdotjs,
    color: "white",
  },
  Convex: {
    icon: convexSvg,
    color: "#2f74c0",
  },
  "Tone.js": {
    icon: BsMusicNote,
    color: "#f734d7",
  },
  TypeScript: {
    icon: SiTypescript,
    color: "#2f74c0",
  },
  "Node.js": {
    icon: FaNode,
    color: "#87bf00",
  },
  JavaScript: {
    icon: IoLogoJavascript,
    color: "#efd81d",
  },
  "Google APIs": {
    icon: SiGooglemaps,
    color: "#df4133",
  },
  MySQL: {
    icon: DiMysql,
    color: "#e89b42",
  },
  Figma: {
    icon: FiFigma,
    color: "#9d56f7",
  },
  Python: {
    icon: DiPython,
    color: "#f7cc42",
  },
  OpenAI: {
    icon: SiOpenai,
    color: "#10a481",
  },
  Vite: {
    icon: TbBrandVite,
    color: "#9665fe",
  },
  "Ethers.js": {
    icon: FaEthereum,
    color: "#bbc6ed",
  },
  HTML: {
    icon: FaHtml5,
    color: "#e96228",
  },
  CSS: {
    icon: FaCss3,
    color: "#2862e9",
  },
  "Express.js": {
    icon: SiExpress,
    color: "white",
  },
  Selenium: { icon: SiSelenium, color: "#bebebe" },
  "Passport.js": { icon: BsPassport, color: "#35df79" },
  "AWS EC2": { icon: SiAmazonec2, color: "#ef931e" },
  "Google Cloud": { icon: SiGooglecloud, color: "#ea4234" },
  R: { icon: SiRstudio, color: "#71a5d4" },
  PowerBI: { icon: SiPowerbi, color: "#eac210" },
  Tableau: { icon: SiTableau, color: "#e87830" },
  "AWS Lambda": { icon: SiAwslambda, color: "#d16312" },
};

const allNodes: PreformattedNodes[] = [
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
      stack: [
        "TypeScript",
        "React.js",
        "Node.js",
        "AWS Lambda",
        "Ethers.js",
        "Vite",
        "Python",
        "Selenium",
        "Figma",
      ],
      section: "experiences",
      tag: "Experience",
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
      stack: ["HTML", "CSS", "React.js", "Express.js", "Node.js", "Python"],
      section: "education",
      tag: "Education",
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
      stack: ["TypeScript", "React.js", "Next.js", "Convex", "Tone.js"],
      section: "achievements",
      tag: "Hackathon",
      github: "https://github.com/Nyumat/beaverhacks",
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
      stack: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Google APIs",
        "MySQL",
        "Figma",
      ],
      section: "achievements",
      tag: "Hackathon",
      github: "https://github.com/guycdev/outbreak-navigator",
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
      stack: ["Python", "OpenAI"],
      section: "achievements",
      tag: "Hackathon",
      github: "https://github.com/guycdev/HFT-Case-Comp-case-1-2",
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
      stack: ["TypeScript", "React.js", "Next.js", "Convex"],
      section: "projects",
      tag: "Project",
      github: "https://github.com/guycdev/image-search",
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
      stack: [
        "React.js",
        "Node.js",
        "JavaScript",
        "MySQL",
        "Vite",
        "CSS",
        "Express.js",
        "Passport.js",
        "AWS EC2",
      ],
      section: "projects",
      tag: "Project",
      github: "https://github.com/guycdev/Analog-Designs",
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
      stack: ["Python", "Selenium", "Google Cloud"],
      section: "projects",
      tag: "Project",
      github: "https://github.com/guycdev/snkrs_solutions_suite",
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
      stack: ["R", "PowerBI", "Tableau"],
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
      stack: [],
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
      stack: [],
      section: "involvement",
      tag: "Involvement",
    },
  },
];

const formatNodesStack = (nodes: PreformattedNodes[]) => {
  return nodes.map((node) => {
    const stackArr = node.data.stack.map((tech) => {
      return {
        name: tech,
        ...techIcons[tech],
      };
    });
    return {
      ...node,
      data: {
        ...node.data,
        stack: stackArr,
      },
    };
  });
};
export const formattedNodes = formatNodesStack(allNodes);

export const getAllSkills = (): AllTechInterface[] => {
  const skills = formattedNodes
    .map((node) => node.data.stack.map((tech) => tech.name))
    .flat();

  // Count the occurrences of each skill
  const skillCounts = skills.reduce((acc: { [key: string]: number }, skill) => {
    acc[skill] = (acc[skill] || 0) + 1;
    return acc;
  }, {});

  // Convert the skillCounts object into an array of [skill, count] pairs
  const skillsArray = Object.entries(skillCounts);

  // Sort the skills array alphabetically first, then by count
  skillsArray.sort((a, b) => {
    // If counts are equal, sort alphabetically
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    }
    // Otherwise, sort by count in descending order
    return b[1] - a[1];
  });

  // Map the sorted array back to just skills (preserving their sorted order)
  const sortedSkills = skillsArray.map(([skill]) => skill);

  const formattedSkills = sortedSkills.map((skill) => ({
    value: skill,
    label: skill,
    icon: techIcons[skill],
  }));

  return formattedSkills;
};

export const allNodeOptions = getAllSkills();
