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
  locationIcon: As;
  date: string;
  description: string;
  img: string;
  source: string;
  icons: IconType[];
  stack: {
    name: string;
    icon: As;
    color: string;
  }[];
  section: NodeType;
  tag: string;
  code: string | undefined;
  github: string;
}

export interface AllTechInterface {
  value: string;
  label: string;
  icon: { icon: As; color: string };
}

export interface NavLinkInterface {
  label: string;
  value: NodeType;
  filledIcon: IconType;
  hollowIcon: IconType;
}
