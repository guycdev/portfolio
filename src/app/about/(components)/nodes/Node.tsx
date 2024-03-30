import { Icon } from "@chakra-ui/react";
import { Handle, Position } from "reactflow";
import { ExperienceNodeData } from "@/utils/interfaces";
import { FaGithub } from "react-icons/fa";

interface ExperienceNodeProps {
  data: ExperienceNodeData;
}

function Node({ data }: ExperienceNodeProps) {
  const sectionColors = {
    experiences: "bg-[#c30010]",
    achievements: "bg-[#F5A623]",
    projects: "bg-[#7ED321]",
    education: "bg-[#003366]",
    involvement: "bg-[#9B59B6]",
  };

  const {
    title,
    role,
    date,
    description,
    tag,
    section,
    stack,
    github,
    locationIcon,
  } = data;

  return (
    <>
      <div className="nodrag flex rounded-lg border border-neutral-700 bg-bg p-3">
        <Handle type="target" position={Position.Top} />
        <div className="item flex flex-col items-center justify-between p-2 pt-6">
          <p className="text-xs text-primary">{date}</p>
          {github && (
            <a
              href={github}
              target="_blank"
              className="clickable rounded-full px-0.5 py-1"
            >
              <Icon
                as={FaGithub}
                boxSize={7}
                className="fill-primary transition-all hover:fill-secondary"
              />
            </a>
          )}
        </div>
        <div className="flex max-w-[429.797px] flex-col gap-2 p-2">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Icon as={locationIcon} color="white" />
                <p className="font-semibold text-accent">{title}</p>
              </div>
              <div className="flex w-fit items-center gap-1 rounded-xl bg-neutral-800 px-3 py-0.5">
                <div
                  className={`h-3 w-3 rounded-full ${section && sectionColors[section]}`}
                />
                <p className="text-xs text-primary">{tag}</p>
              </div>
            </div>
            <p className="font-bold text-primary">{role}</p>
          </div>
          <p className="my-2 max-w-96 text-sm text-header">{description}</p>
          {stack.length > 0 && (
            <div className="mb-1 flex w-[100%] flex-wrap gap-2">
              {stack.map((tech, index) => (
                <div
                  className="group flex items-center gap-2 rounded-xl bg-slate-800 px-3 py-1 text-sm font-semibold"
                  key={tech.name + tech.color}
                >
                  <Icon as={tech.icon} color={tech.color} boxSize={5} />
                  <p key={index} className="text-primary">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <Handle type="source" position={Position.Bottom} id="a" />
      </div>
    </>
  );
}

export default Node;
