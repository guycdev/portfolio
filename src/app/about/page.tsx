"use client";

import { useState } from "react";
import Flow from "./(components)/Flow";
import HomeInformation from "./(components)/HomeInformation";
import { AllTechInterface, NodeType } from "@/utils/interfaces";
import { SetFlowContext } from "@/context/SetFlowContext";
import { ReactFlowProvider } from "reactflow";

const Home = () => {
  const [selectedFlow, setSelectedFlow] = useState<NodeType>("experiences");
  const [attributeFilter, setAttributeFilter] =
    useState<AllTechInterface | null>(null);

  return (
    <SetFlowContext.Provider
      value={{
        setSelectedFlow,
        selectedFlow,
        attributeFilter,
        setAttributeFilter,
      }}
    >
      <div className="flex  h-[100%] w-[100%] ">
        <ReactFlowProvider>
          <HomeInformation />
          <Flow />
        </ReactFlowProvider>
      </div>
    </SetFlowContext.Provider>
  );
};

export default Home;
