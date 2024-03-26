import { Icon, useDisclosure } from "@chakra-ui/react";
import { Handle, Position } from "reactflow";
import NodeModal from "../NodeModal";
import { ExperienceNodeData } from "@/utils/interfaces";
import { twMerge } from "tailwind-merge";

interface ExperienceNodeProps {
  data: ExperienceNodeData;
}

function ExperienceNode({ data }: ExperienceNodeProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sectionColors = {
    experiences: "bg-[#4A90E2]",
    achievements: "bg-[#F5A623]",
    projects: "bg-[#7ED321]",
    education: "bg-[#003366]",
    involvement: "bg-[#9B59B6]",
  };

  const { title, role, date, description, tag, section, stack } = data;

  const isExpandable = data.bullets.length > 0;

  return (
    <>
      <div
        className={twMerge(
          "nodrag flex rounded-lg border border-neutral-700 bg-bg p-3",
          isExpandable && "clickable",
        )}
        onClick={onOpen}
      >
        <Handle type="target" position={Position.Top} />
        <div className="px-2 py-6 ">
          <p className="text-xs text-primary">{date}</p>
        </div>
        <div className="flex max-w-[429.797px] flex-col gap-2 p-2">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="font-semibold text-accent">{title}</p>
              <div className="flex w-fit items-center gap-1 rounded-xl bg-neutral-800 px-3 py-0.5">
                <div
                  className={`h-3 w-3 rounded-full ${section && sectionColors[section]}`}
                />
                <p className="text-xs text-primary">{tag}</p>
              </div>
            </div>
            <p className="text-primary">{role}</p>
          </div>
          <p className="my-2 max-w-96 text-sm text-header">{description}</p>
          {stack.length > 0 && (
            <div className="mb-1 flex w-[100%] flex-wrap gap-2">
              {stack.map((tech, index) => (
                <div className="group flex items-center gap-2 rounded-xl bg-slate-800 px-3 py-1 text-sm font-semibold">
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
      {isExpandable && (
        <NodeModal isOpen={isOpen} onClose={onClose} data={data} />
      )}
    </>
  );
}

export default ExperienceNode;
