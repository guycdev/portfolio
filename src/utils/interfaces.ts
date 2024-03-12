import { IconType } from "react-icons";

export type NodeType =
  | "experiences"
  | "hackathons"
  | "projects"
  | "education"
  | "involvement"
  | "";

export interface ExperienceNodeData {
  place: string;
  role: string;
  date: string;
  description: string;
  img: string;
  bullets: string[];
  source: string;
  icons: IconType[];
  stack: {
    names: string[];
    icons: IconType[];
    colors: string[];
  };
  link: string;
  section: NodeType;
  tag: string;
  code: string | undefined;
}

export interface AllTechInterface {
  value: string;
  label: string;
}
