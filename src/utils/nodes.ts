import { DiMysql } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaHtml5,
  FaJava,
  FaNode,
  FaReact,
} from "react-icons/fa";
import {
  SiAmazonec2,
  SiExpress,
  SiGooglecloud,
  SiNextdotjs,
  SiOpenai,
  SiPowerbi,
  SiRstudio,
  SiTableau,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import {
  BsBootstrap,
  BsFillNodePlusFill,
  BsMusicNote,
  BsPassport,
} from "react-icons/bs";
import convexSvg from "@/components/icons/convex-svg";
import { As } from "@chakra-ui/react";
import { TbAssembly, TbBrandDjango, TbBrandVite, TbShoe } from "react-icons/tb";
import { SiSelenium } from "react-icons/si";
import { AllTechInterface } from "./interfaces";
import ZxSvg from "@/components/icons/zx-xvg";
import GoogleSvg from "@/components/icons/google-svg";
import OsuSvg from "@/components/icons/osu-svg";
import RyersonSvg from "@/components/icons/ryerson-svg";
import { BiNetworkChart } from "react-icons/bi";
import PythonSvg from "@/components/icons/python-svg";
import FigmaSvg from "@/components/icons/figma-svg";
import ViteSvg from "@/components/icons/vite-svg";
import EthersSvg from "@/components/icons/ethers-svg";
import GoogleMapsSvg from "@/components/icons/google-maps-svg";

interface PreformattedNodes {
  id: string;
  type: string;
  position: { x: 0; y: 0 };
  data: {
    title: string;
    locationIcon: As;
    role: string;
    date: string;
    description: string;
    stack: string[];
    section: string;
    tag: string;
    github?: string;
    bullets?: string[];
  };
}

const techIcons: { [key: string]: { icon: As; color: string } } = {
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
    icon: GoogleMapsSvg,
    color: "#df4133",
  },
  MySQL: {
    icon: DiMysql,
    color: "#e89b42",
  },
  Figma: {
    icon: FigmaSvg,
    color: "#9d56f7",
  },
  Python: {
    icon: PythonSvg,
    color: "#f7cc42",
  },
  OpenAI: {
    icon: SiOpenai,
    color: "#10a481",
  },
  Django: {
    icon: TbBrandDjango,
    color: "#ffffff",
  },
  Bootstrap: {
    icon: BsBootstrap,
    color: "#6c11ee",
  },
  Vite: {
    icon: ViteSvg,
    color: "#9665fe",
  },
  "Ethers.js": {
    icon: EthersSvg,
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
  AWS: { icon: FaAws, color: "#d16312" },
  Assembly: { icon: TbAssembly, color: "#4768b0" },
  Java: { icon: FaJava, color: "#ee9517" },
};

const allNodes: PreformattedNodes[] = [
  {
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "ZeroX Gaming",
      locationIcon: ZxSvg,
      role: "Software Engineer Intern",
      date: "Jan 2024 - Present",
      description:
        "Contributed fullstack development to the product team where I worked on the UI, API, security design, and CI/CD pipelines, of a virtual app store currently supporting 200+ games alongside in app mini games, and a SASS dashboard designed to abtrasct the complexities of blockchain for its users. ",
      stack: [
        "TypeScript",
        "React.js",
        "Node.js",
        "AWS",
        "Vite",
        "Python",
        "Django",
        "Figma",
      ],
      section: "experiences",
      tag: "Experience",
    },
  },
  {
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "Analog Designs",
      locationIcon: BsFillNodePlusFill,
      role: "Freelance Design Studio",
      date: "May 2023 - Dec 2023",
      description:
        "Built 10+ custom web apps for various clients, including corporate sites, e-commerce, and charity pages, while optimizing SEO and mobile responsiveness with Google Lighthouse and Search Console.",
      stack: [
        "React.js",
        "Node.js",
        "JavaScript",
        "MySQL",
        "Vite",
        "CSS",
        "Express.js",
        "Passport.js",
        "AWS",
      ],
      section: "experiences",
      tag: "Experience",
      github: "https://github.com/guycdev/Analog-Designs",
    },
  },
  {
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "SNKRS Solutions",
      locationIcon: TbShoe,
      role: "Retail Arbitrage",
      date: "Apr 2020 - Sep 2022",
      description:
        "Built 20+ Python monitors and automation tools with Requests and Selenium for a retail arbitrage strategy through selling scrapers to 15+ business partners and products to B2B partners.",
      stack: ["Python", "Selenium", "Google Cloud"],
      section: "experiences",
      tag: "Experience",
      github: "https://github.com/guycdev/snkrs_solutions_suite",
    },
  },
  {
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      role: "2nd Place - Beaverhacks 2024",
      locationIcon: OsuSvg,
      title: "BeatBytes",
      date: "Mar 2024",
      description:
        "Beatbytes is a free to use audio production application that provides its users with maximum flexibility by offering file uploads and instrumental configruations.",
      stack: ["TypeScript", "React.js", "Next.js", "Convex", "Tone.js"],
      section: "projects",
      tag: "Projects",
      github: "https://github.com/Nyumat/beaverhacks",
    },
  },
  {
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      role: "1st Place - Google Hacks 2023",
      locationIcon: GoogleSvg,
      title: "Outbreak Navigator",
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
      section: "projects",
      tag: "Projects",
      github: "https://github.com/guycdev/outbreak-navigator",
    },
  },
  {
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      role: "1st Place - Ryerson RIT Competition",
      locationIcon: RyersonSvg,
      title: "HFT Bot",
      date: "Jan 2023 - Apr 2023",
      description:
        "Developed a high-frequency trading bot in Python using the OpenAI's API, regex, and cross trading strategies to facilitate a sentiment driven strategy.",
      stack: ["Python", "OpenAI"],
      section: "projects",
      tag: "Projects",
      github: "https://github.com/guycdev/HFT-Case-Comp-case-1-2",
    },
  },
  {
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "ClassCircles",
      locationIcon: OsuSvg,
      role: "Runnerup - Beahverhacks 2023",
      date: "Oct 2023",
      description:
        "ClassCircles is your one-stop platform for finding campus groups that resonate with your interests. Users input their school and major and are able to find social groups with similar interests.",
      stack: ["JavaScript", "React.js", "Node.js", "Express.js", "Bootstrap"],
      section: "projects",
      tag: "Project",
      github: "https://github.com/guycdev/ClassCircles",
    },
  },
  {
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "Oregon State University",
      locationIcon: OsuSvg,
      role: "Bachelor of Science in Computer Science",
      date: "Sept 2023 - Mar 2025",
      description:
        "Maintaining a 4.0 GPA while learning about the theoretical foundations of computer science, including algorithms, data structures, computer architecture, and software development principles.",
      stack: [
        "Assembly",
        "Java",
        "Python",
        "HTML",
        "CSS",
        "React.js",
        "Express.js",
        "Node.js",
      ],
      section: "education",
      tag: "Education",
    },
  },
  {
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "Ryerson University",
      locationIcon: RyersonSvg,
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
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "Sponsorship Coordinator",
      locationIcon: OsuSvg,
      role: "Oregon State Hackathon Fund",
      date: "Jan 2024 - Apr 2024",
      description:
        "Spearheaded industry partner outreach for event sponsorship's, judging panels, prize funding, and discounts.",
      stack: [],
      section: "involvement",
      tag: "Involvement",
    },
  },
  {
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      title: "Equity Analyst",
      locationIcon: RyersonSvg,
      role: "Ryerson Student Managed Investment Fund",
      date: "Apr 2021 - Aug 2021",
      description:
        "Oversaw the allocation of a portfolio with $500K AUM, making weekly stock pitches and critiques to a student senate of 25 other students.",
      stack: [],
      section: "involvement",
      tag: "Involvement",
    },
  },
].map((node, index) => {
  return { ...node, id: `node-${index + 1}` } as PreformattedNodes;
});

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
