"use client";

import { useState } from "react";
import Flow from "./(components)/Flow";
import HomeInformation from "./(components)/HomeInformation";
import { NodeType } from "@/utils/interfaces";
import { SetFlowContext } from "@/context/SetFlowContext";

const Home = () => {
  const [selectedFlow, setSelectedFlow] = useState<NodeType>("experienceNode");

  return (
    <SetFlowContext.Provider value={{ setSelectedFlow, selectedFlow }}>
      <div className="flex  h-[100%] w-[100%]">
        <HomeInformation />
        <Flow selectedFlow={selectedFlow} />
      </div>
    </SetFlowContext.Provider>
  );
};

export default Home;
