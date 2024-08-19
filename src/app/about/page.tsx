"use client";

import { useState } from "react";
import Flow from "./(components)/Flow";
import HomeInformation from "./(components)/HomeInformation";
import { AllTechInterface, NodeType } from "@/utils/interfaces";
import { SetFlowContext } from "@/context/SetFlowContext";
import { ReactFlowProvider } from "reactflow";
import { Icon } from "@chakra-ui/react";
import { FaInfo } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Home = () => {
  const [selectedFlow, setSelectedFlow] = useState<NodeType>("experiences");
  const [attributeFilter, setAttributeFilter] =
    useState<AllTechInterface | null>(null);

  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <SetFlowContext.Provider
      value={{
        setSelectedFlow,
        selectedFlow,
        attributeFilter,
        setAttributeFilter,
      }}
    >
      <div className="flex  h-[100%] w-[100%]">
        <div
          className="content- absolute left-8 top-8 z-50 flex h-9 w-9 items-center justify-center bg-green-500 text-red-500"
          onClick={() => setIsInfoOpen((prev) => !prev)}
        >
          <Icon as={isInfoOpen ? FaX : FaInfo} />
        </div>
        <ReactFlowProvider>
          <HomeInformation isOpen={isInfoOpen} setIsOpen={setIsInfoOpen} />
          <Flow />
        </ReactFlowProvider>
      </div>
    </SetFlowContext.Provider>
  );
};

export default Home;
