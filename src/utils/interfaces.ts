import { As } from "@chakra-ui/react";
import { IconType } from "react-icons";

export type NodeType =
  | "experiences"
  | "achievements"
  | "projects"
  | "education"
  | "involvement"
  | "";

export interface ExperienceNodeData {
  title: string;
  role: string;
  date: string;
  description: string;
  img: string;
  bullets: string[];
  source: string;
  icons: IconType[];
  stack: {
    name: string;
    icon: As;
    color: string;
  }[];
  link: string;
  section: NodeType;
  tag: string;
  code: string | undefined;
}

export interface AllTechInterface {
  value: string;
  label: string;
}

export interface NavLinkInterface {
  label: string;
  value: NodeType;
  filledIcon: IconType;
  hollowIcon: IconType;
}
