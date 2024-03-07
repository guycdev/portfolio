import { IconType } from "react-icons";

export interface ExperienceNodeData {
  place: string;
  role: string;
  date: string;
  description: string;
  img: string;
  bullets: string[];
  source: string;
  icons: IconType[];
  stack: string[];
}

export type NodeType =
  | "experienceNode"
  | "educationNode"
  | "projectNode"
  | "hackathonNode"
  | "involvementNode";
