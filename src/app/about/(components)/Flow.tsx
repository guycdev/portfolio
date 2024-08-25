"use client";
import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import ReactFlow, {
  Background,
  NodeTypes,
  Controls,
  Node,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./nodes/Node";
import { formattedNodes } from "@/utils/nodes";
import { useReactFlow } from "reactflow";
import { useSetFlowContext } from "@/context/SetFlowContext";
import { useClientContext } from "@/context/ClientContext";

function Flow() {
  const context = useSetFlowContext();

  const reactFlow = useReactFlow();

  const { isMobileClient } = useClientContext();

  const { attributeFilter, selectedFlow } = context;

  const nodes: Node[] = useMemo(() => {
    return formattedNodes
      .filter((node) =>
        attributeFilter
          ? node.data.stack
              .map((tech) => tech.name)
              .includes(attributeFilter.value)
          : node.data.section === selectedFlow,
      )
      .map((node, index) => ({
        ...node,
        position:
          index % 2 == 0
            ? { x: 0, y: index * 400 }
            : { x: 300, y: 400 * index },
      }));
  }, [selectedFlow, attributeFilter]);

  useEffect(() => {
    setTimeout(() => {
      // if (nodes.length === 1) {
      reactFlow.fitView({ includeHiddenNodes: true });
      // }
    }, 100);
  }, [attributeFilter, selectedFlow, reactFlow, nodes]);

  const edges: any[] = useMemo(() => {
    return nodes.slice(0, -1).map((node, i) => ({
      id: `edge-${i + 1}`,
      source: node.id,
      target: nodes[i + 1].id,
      sourceHandle: "a",
    }));
  }, [nodes]);

  const nodeTypes: NodeTypes = useMemo(() => {
    return { node: CustomNode };
  }, []);

  function nodeColor(node: any) {
    switch (node.type) {
      case "input":
        return "#fafafa";
      case "output":
        return "#fafafa";
      default:
        return "black";
    }
  }

  return (
    <div className="h-[100%] w-[100%] flex-1 overflow-hidden rounded-[12px] bg-bg ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.9, duration: 0.8 } }}
        className="h-[100%]"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          className="relative rounded-xl bg-bg"
        >
          {/* <div className="border-1 absolute left-0 top-0 h-[100%] w-[100%] border-red-400 bg-red-500">
            <GParticles />
          </div> */}
          {nodes.length > 2 && !isMobileClient && (
            <MiniMap
              position="top-right"
              nodeColor={nodeColor}
              nodeStrokeColor="#000000"
              nodeBorderRadius={25}
            />
          )}
          <Controls />
          <Background />
        </ReactFlow>
      </motion.div>
    </div>
  );
}

export default Flow;
