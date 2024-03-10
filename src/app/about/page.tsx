"use client";

import { useState, useMemo, useEffect } from "react";
import Flow from "./(components)/Flow";
import HomeInformation from "./(components)/HomeInformation";
import { AllTechInterface, NodeType } from "@/utils/interfaces";
import { SetFlowContext } from "@/context/SetFlowContext";
import { Node, ReactFlowProvider } from "reactflow";
import { allNodes } from "@/utils/nodes";

const Home = () => {
  const [selectedFlow, setSelectedFlow] = useState<NodeType>("experiences");
  const [attributeFilter, setAttributeFilter] =
    useState<AllTechInterface | null>(null);
  const [allTech, setAllTech] = useState<AllTechInterface[] | undefined>(
    undefined,
  );

  const nodes: Node[] = useMemo(() => {
    return allNodes.filter((node) =>
      attributeFilter
        ? node.data.stack.includes(attributeFilter.value)
        : node.data.section === selectedFlow,
    );
  }, [selectedFlow, attributeFilter]);

  useEffect(() => {
    const getAllNodes = () => {
      const skills = allNodes
        .map((node) => {
          return [...node.data.stack];
        })
        .flat();
      const skillsSet = new Set(skills);
      const formattedSkills = Array.from(skillsSet).map((skill) => ({
        value: skill,
        label: skill,
      }));
      return formattedSkills;
    };
    setAllTech(getAllNodes());
  }, [nodes]);

  console.log(nodes);

  return (
    <SetFlowContext.Provider
      value={{
        setSelectedFlow,
        selectedFlow,
        attributeFilter,
        setAttributeFilter,
        allTech,
      }}
    >
      <div className="flex  h-[100%] w-[100%] ">
        <HomeInformation />
        <ReactFlowProvider>
          <Flow nodes={nodes} />
        </ReactFlowProvider>
      </div>
    </SetFlowContext.Provider>
  );
};

export default Home;
