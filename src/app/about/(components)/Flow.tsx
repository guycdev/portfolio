import ReactFlow, {
  MiniMap,
  Background,
  Node,
  Edge,
  NodeTypes,
  ControlButton,
  Controls,
} from "reactflow";
import ExperienceNode from "./nodes/ExperienceNode";
import EducationNode from "./nodes/EducationNode";
import "reactflow/dist/style.css";
import { useMemo } from "react";
import { NodeType } from "@/utils/interfaces";
import { FaEthereum, FaNode, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

interface FlowProps {
  selectedFlow: NodeType;
}

function Flow({ selectedFlow }: FlowProps) {
  const nodes: Node[] = useMemo(() => {
    const allNodes = [
      {
        id: "node-1",
        type: "experienceNode",
        position: { x: 0, y: 0 },
        data: {
          place: "ZeroX Technologies",
          role: "Software Engineering Intern",
          date: "Jan 2024 - Present",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta officia accusantium architecto, doloremque laborum!",
          // img: "https://res.cloudinary.com/dojpkldcg/image/upload/v1708621378/miemqhtmtrs06jir8wae.png",
          bullets: ["task 1", "task 2", "task 3"],
          icons: [FaReact, FaNode, SiTypescript, FaEthereum],
          stack: ["React", "Node", "TypeScript", "EthersJS"],
        },
      },
      {
        id: "node-2",
        type: "experienceNode",
        position: { x: 300, y: 300 },
        data: {
          place: "ZeroX Technologies",
          role: "Software Engineering Intern",
          date: "Jan 2024 - Present",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta officia accusantium architecto, doloremque laborum!",
          // img: "https://res.cloudinary.com/dojpkldcg/image/upload/v1708621378/miemqhtmtrs06jir8wae.png",
          bullets: ["task 1", "task 2", "task 3"],
          icons: [FaReact, FaNode, SiTypescript, FaEthereum],
          stack: ["React", "Node", "TypeScript", "EthersJS"],
        },
      },
      {
        id: "node-3",
        type: "educationNode",
        position: { x: 0, y: 0 },
        data: {
          place: "ZeroX Technologies",
          role: "Software Engineering Intern",
          date: "Jan 2024 - Present",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta officia accusantium architecto, doloremque laborum!",
          img: "https://res.cloudinary.com/dojpkldcg/image/upload/v1708621378/miemqhtmtrs06jir8wae.png",
          bullets: ["task 1", "task 2", "task 3"],
          icons: [FaReact, FaNode, SiTypescript, FaEthereum],
          stack: ["React", "Node", "TypeScript", "EthersJS"],
        },
      },
    ];
    return allNodes.filter((node) => node.type === selectedFlow);
  }, [selectedFlow]);

  const edges: Edge[] = useMemo(() => {
    return [
      { id: "edge-1", source: "node-1", target: "node-2", sourceHandle: "a" },
      { id: "edge-2", source: "node-2", target: "node-3", sourceHandle: "b" },
    ];
  }, []);

  const nodeTypes: NodeTypes = useMemo(() => {
    return { experienceNode: ExperienceNode, educationNode: EducationNode };
  }, []);

  function nodeColor(node: any) {
    switch (node.type) {
      case "input":
        return "#fafafa";
      case "output":
        return "#fafafa";
      default:
        return "#fafafa";
    }
  }

  return (
    <div className="h-[100%] flex-1 p-3 bg-bg rounded-e-md">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        className="bg-bg rounded-xl "
      >
        {/* <MiniMap
          position="top-right"
          nodeColor={nodeColor}
          nodeStrokeColor="#000000"
        /> */}
        {/* <Controls /> */}
        <Background />
      </ReactFlow>
    </div>
  );
}

export default Flow;
