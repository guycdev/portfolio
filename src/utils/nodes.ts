import { DiMysql, DiPython } from "react-icons/di";
import { FaNode, FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import {
  SiGooglemaps,
  SiNextdotjs,
  SiOpenai,
  SiTypescript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BsMusicNote } from "react-icons/bs";

export const allNodes = [
  {
    id: "node-1",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      place: "Beaverhacks Winter 2024",
      role: "Audio Production Application",
      date: "Mar 2024",
      description:
        "Beatbytes is a free to use audio production tool that provides its users with maximum flexibility by offering file uploads and instrumental configruations.",
      img: "https://res.cloudinary.com/dojpkldcg/image/upload/v1710215993/Screenshot_2024-03-11_235937_xqcjcl.png",
      bullets: [
        "User authentication with Clerk and Convex SDK",
        "Flexible sequencing tool with custom asset uploads",
        "Interactive synth with playback and customizable keyboard",
      ],
      stack: {
        names: ["React", "Next.js", "Convex", "Tone.js", "TypeScript"],
        icons: [FaReact, SiNextdotjs, SiGooglemaps, BsMusicNote, SiTypescript],
        colors: [
          "#5ed3f3", // React
          "#000000", // next
          "#2f74c0", // Typescript
          "#f734d7", // Tone js
          "#2f74c0", // Google APIs
        ],
      },
      link: "https://beatbytes.vercel.app/",
      section: "hackathons",
      tag: "Hackathon",
    },
  },
  {
    id: "node-2",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      place: "Google Hacks x Beaverhacks",
      role: "Crowdsourced map application",
      date: "Nov 2023",
      description:
        "Outbreak Navigator, the winner at the Google Hacks x OSU Fall 2023 hackathon, is a real-time, crowdsourced map app to safely locate essentials and steer clear of danger zones in crises.",
      img: "https://res.cloudinary.com/dojpkldcg/image/upload/v1708621378/miemqhtmtrs06jir8wae.png",
      bullets: [
        "Built the frontend using React and the Google maps toolkit",
        "Utilize the Google SDK to develop a CRUD API in Node.js",
        "Developed in 2 days",
      ],
      stack: {
        names: ["React", "Node", "JavaScript", "Google APIs", "MySQL", "Figma"],
        icons: [
          FaReact,
          FaNode,
          IoLogoJavascript,
          SiGooglemaps,
          DiMysql,
          FiFigma,
        ],
        colors: [
          "#5ed3f3", // React
          "#87bf00", // Node
          "#efd81d", // JavaScript
          "#df4133", // Google APIs
          "#e89b42", // MySQL
          "#9d56f7", // Figma
        ],
      },
      link: "https://devpost.com/software/outbreak-navigator",
      section: "hackathons",
      tag: "Hackathon",
    },
  },
  {
    id: "node-3",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      place: "Ryerson RIT Competition",
      role: "High frequency trading bots",
      date: "Jan 2023 - Apr 2023",
      description:
        "Won 1st in TMU Trading Competition by engineering a Python bot with OpenAI and RIT API for automated, sentiment-driven trades.",
      img: "https://res.cloudinary.com/dojpkldcg/image/upload/v1710218583/carbon_yrlllo.png",
      bullets: [
        "Won by a landslide of $30k P/L per round (3 rounds)",
        "Autmated trading through Regex parsing and the OpenAI API",
        "Utilized multithreading to increase the number of active processes",
      ],
      stack: {
        names: ["Python", "OpenAI"],
        icons: [DiPython, SiOpenai],
        colors: [
          "#f7cc42", // Python
          "#10a481", // Openai
        ],
      },
      link: "https://devpost.com/software/outbreak-navigator",
      section: "hackathons",
      tag: "Hackathon",
      code: `def eiaNews(news, dic):
      # Use chat gpt to determine wether news will positivly impact oil prices or not
      body = news['body']
      id = news['news_id']
      if id not in dic:
          messageHistory = [
              {
                  "role": "system",
                  "content":f"Analyze the following headling{news}"
              },
              {
                  "role": "user",
                  "content": body
              }
          ]
          completion = openai.ChatCompletion.create(
              model='gpt-3.5-turbo',
              messages=messageHistory
          )
          answer = {id: completion.choices[0].message.content}
          return answer
      print('item already exists')
      time.sleep(4)
      return False`,
    },
  },
  {
    id: "node-4",
    type: "node",
    position: { x: 0, y: 0 },
    data: {
      place: "Beaverhacks Winter 2024",
      role: "Audio Production Application",
      date: "Mar 2024",
      description:
        "Beatbytes is a free to use audio production tool that provides its users with the flexibility to utilize costume assets when creating beats, and setting up their own instrumental configurations.",
      img: "https://res.cloudinary.com/dojpkldcg/image/upload/v1710215993/Screenshot_2024-03-11_235937_xqcjcl.png",
      bullets: [
        "User authentication with Clerk and Convex SDK",
        "Flexible sequencing tool with custom asset uploads",
        "Interactive synth with playback and customizable keyboard",
      ],
      stack: {
        names: ["React", "Next.js", "Convex", "Tone.js", "TypeScript"],
        icons: [FaReact, SiNextdotjs, SiGooglemaps, BsMusicNote, SiTypescript],
        colors: [
          "#5ed3f3", // React
          "#000000", // next
          "#2f74c0", // Typescript
          "#f734d7", // Tone js
          "#2f74c0", // Google APIs
        ],
      },
      link: "https://beatbytes.vercel.app/",
      section: "experiences",
      tag: "Experience",
    },
  },
];

const getAllNodes = () => {
  const skills = allNodes
    .map((node) => {
      return [...node.data.stack.names];
    })
    .flat();
  const skillsSet = new Set(skills);
  const formattedSkills = Array.from(skillsSet).map((skill) => ({
    value: skill,
    label: skill,
  }));
  return formattedSkills;
};

export const allNodeOptions = getAllNodes();
