"use client";

import { useState } from "react";
import Flow from "./(components)/Flow";
import HomeInformation from "./(components)/HomeInformation";
import { NodeType } from "@/utils/interfaces";
import { SetFlowContext } from "@/context/SetFlowContext";
import { motion } from "framer-motion";

const Home = () => {
  const [selectedFlow, setSelectedFlow] = useState<NodeType>("experienceNode");
  const [attributeFilter, setAttributeFilter] = useState("");

  return (
    <SetFlowContext.Provider
      value={{
        setSelectedFlow,
        selectedFlow,
        attributeFilter,
        setAttributeFilter,
      }}
    >
      <motion.div
        className="flex  h-[100%] w-[100%] "
        // initial={{
        //   opacity: 0,
        // }}
        // animate={{
        //   opacity: 1,
        //   transition: {
        //     duration: 2,
        //   },
        // }}
      >
        <HomeInformation />
        <Flow selectedFlow={selectedFlow} />
      </motion.div>
    </SetFlowContext.Provider>
  );
};

export default Home;
