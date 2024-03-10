"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import ReactFlow, {
  Background,
  Edge,
  NodeTypes,
  Controls,
  useReactFlow,
  Node,
} from "reactflow";
import "reactflow/dist/style.css";
import ExperienceNode from "./nodes/ExperienceNode";

interface FlowProps {
  nodes: Node[];
}

function Flow({ nodes }: FlowProps) {
  const { setViewport, setCenter } = useReactFlow();

  const edges: Edge[] = useMemo(() => {
    return [
      { id: "edge-1", source: "node-1", target: "node-2", sourceHandle: "a" },
      { id: "edge-2", source: "node-2", target: "node-3", sourceHandle: "b" },
    ];
  }, []);

  const nodeTypes: NodeTypes = useMemo(() => {
    return { node: ExperienceNode };
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
    <div className="h-[100%] flex-1 rounded-e-border bg-bg p-3">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.1, duration: 0.8 } }}
        className="h-[100%]"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          className="rounded-xl bg-bg "
        >
          {/* <MiniMap
          position="top-right"
          nodeColor={nodeColor}
          nodeStrokeColor="#000000"
        /> */}
          <Controls />
          <Background />
        </ReactFlow>
      </motion.div>
    </div>
  );
}

export default Flow;
