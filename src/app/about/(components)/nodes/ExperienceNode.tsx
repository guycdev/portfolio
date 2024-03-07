import { useDisclosure } from "@chakra-ui/react";
import { Handle, Position } from "reactflow";
import NodeModal from "../NodeModal";
import { ExperienceNodeData } from "@/utils/interfaces";

interface ExperienceNodeProps {
  data: ExperienceNodeData;
}

function ExperienceNode({ data }: ExperienceNodeProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { place, role, date, description } = data;

  return (
    <>
      <div
        className="nodrag flex clickable rounded-lg border border-neutral-700 bg-bg p-3"
        onClick={onOpen}
      >
        <Handle type="target" position={Position.Top} />
        <div className="px-2 py-6 ">
          <p className="text-primary text-xs">{date}</p>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <div className="flex-col flex">
            <div className="flex justify-between">
              <p className="font-semibold text-accent">{place}</p>
              <div className="flex w-fit items-center gap-1 rounded-xl bg-neutral-800 px-3 py-0.5">
                <div className=" h-3 w-3 rounded-full bg-accent"></div>
                <p className="text-xs text-primary">Tag</p>
              </div>
            </div>
            <p className="text-primary">{role}</p>
          </div>
          <p className="my-2 max-w-96 text-primary text-sm">{description}</p>
          <div className="flex flex-wrap gap-2 mb-1">
            {data.stack.map((tech, index) => (
              <p
                key={index}
                className="text-primary bg-slate-800 rounded-xl px-3 text-sm py-1 font-semibold "
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
        <Handle type="source" position={Position.Bottom} id="a" />
      </div>
      <NodeModal isOpen={isOpen} onClose={onClose} data={data} />
    </>
  );
}

export default ExperienceNode;
