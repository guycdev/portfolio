import { Icon } from "@chakra-ui/react";
import { Handle, Position, useNodes, useReactFlow } from "reactflow";
import { ExperienceNodeData } from "@/utils/interfaces";
import { FaArrowDown, FaArrowUp, FaGithub } from "react-icons/fa";

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

  const reactFlow = useReactFlow();
  const nodeData = useNodes();

  const currentNode = nodeData.find(
    (node: any) => node.data.description === description,
  );

  const currentIndex = nodeData.findIndex(
    (node: any) => node.data.description === description,
  );

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    reactFlow.fitView({ nodes: [{ id }], duration: 300 });
  };

  return (
    <div
      className="nodrag relative flex min-w-[600px] rounded-lg border border-neutral-700 bg-bg p-3 pr-10"
      onClick={(e) => handleClick(e, currentNode?.id as string)}
    >
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
            <div className="absolute right-3 top-3 flex w-fit items-center gap-1 rounded-xl bg-neutral-800 px-3 py-0.5">
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
      {currentIndex - 1 >= 0 && (
        <div
          className="clickable absolute -top-4 left-[47.5%] flex h-8 w-8 items-center justify-center rounded-md border-[1px] border-neutral-700 bg-bg text-white transition duration-300 hover:border-white hover:bg-neutral-700"
          onClick={(e) => handleClick(e, nodeData[currentIndex - 1].id)}
        >
          <Icon as={FaArrowUp} />
        </div>
      )}
      {currentIndex + 1 < nodeData.length && (
        <div
          className="clickable absolute -bottom-5 left-[47.5%] flex h-8 w-8 items-center justify-center rounded-md border-[1px] border-neutral-700 bg-bg text-white transition duration-300 hover:border-white hover:bg-neutral-700"
          onClick={(e) => handleClick(e, nodeData[currentIndex + 1].id)}
        >
          <Icon as={FaArrowDown} />
        </div>
      )}
    </div>
  );
}

export default Node;
