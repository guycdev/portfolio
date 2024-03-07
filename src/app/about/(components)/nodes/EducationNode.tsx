import { useDisclosure } from "@chakra-ui/react";
import { Handle, Position } from "reactflow";
import NodeModal from "../NodeModal";
import { ExperienceNodeData } from "@/utils/interfaces";

interface EducationNodeProps {
  data: ExperienceNodeData;
}

function EducationNode({ data }: EducationNodeProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { place, role, date, description } = data;

  return (
    <>
      <div
        className="nodrag flex clickable rounded-sm border-2 border-primary bg-red-500"
        onClick={onOpen}
      >
        <Handle type="target" position={Position.Top} />
        <div className="border-r-2 p-2">
          <p>{date}</p>
        </div>
        <div className="p-2">
          <div className="flex-col">
            <div className="flex justify-between">
              <p className="font-semibold">{place}</p>
              <div className="flex w-fit items-center gap-1 rounded-xl bg-gray-300 px-3 py-0.5">
                <div className=" h-3 w-3 rounded-full bg-red-100"></div>
                <p className="text-xs">Swag pack</p>
              </div>
            </div>
            <p>{role}</p>
          </div>
          <p className="my-2 max-w-96 text-xs">{description}</p>
          <div>
            <div className="flex flex-wrap gap-2">
              <p className="tag">React</p>
              <p className="tag">Node</p>
            </div>
          </div>
        </div>
        <Handle type="source" position={Position.Bottom} id="a" />
      </div>
      <NodeModal isOpen={isOpen} onClose={onClose} data={data} />
    </>
  );
}

export default EducationNode;
