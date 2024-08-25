"use client";

import { useState, useEffect } from "react";
import Flow from "./(components)/Flow";
import HomeInformation from "./(components)/HomeInformation";
import { AllTechInterface, NodeType } from "@/utils/interfaces";
import { SetFlowContext } from "@/context/SetFlowContext";
import { useNodes, useReactFlow } from "reactflow";
import { Box, Icon } from "@chakra-ui/react";
import { FaHome, FaInfo } from "react-icons/fa";
import { FaMessage, FaX } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { GrPowerReset } from "react-icons/gr";
import { TiThMenu } from "react-icons/ti";
import { ContactForm } from "./(components)/form";
import Link from "next/link";
import { useClientContext } from "@/context/ClientContext";

const Home = () => {
  const [selectedFlow, setSelectedFlow] = useState<NodeType>("experiences");
  const [attributeFilter, setAttributeFilter] =
    useState<AllTechInterface | null>(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reactFlow = useReactFlow();

  const MotionDiv = motion(Box);

  const { isMobileClient } = useClientContext();

  const nodes = useNodes();

  console.log(nodes);

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
        <div className="absolute left-3 top-3 flex gap-2 sm:left-8 sm:top-8">
          <motion.div
            className={twMerge(
              "clickable z-40 flex h-7 w-7 items-center justify-center rounded-full border-[1px] border-neutral-700 bg-accent text-bg transition duration-500 hover:border-accent hover:bg-bg hover:text-accent hover:shadow-glow-button sm:h-9  sm:w-9",
              isInfoOpen && "hover:rotate-[180deg]",
            )}
            onClick={() => setIsInfoOpen((prev) => !prev)}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.3,
              },
            }}
          >
            <Icon
              as={isInfoOpen ? FaX : TiThMenu}
              boxSize={isMobileClient ? 3 : "unset"}
            />
          </motion.div>
          {!isInfoOpen && (
            <>
              <motion.div
                className={twMerge(
                  "clickable z-50 flex h-7 w-7 items-center justify-center rounded-full border-[1px] border-neutral-700 bg-accent text-bg transition duration-500 hover:rotate-[360deg] hover:border-accent hover:bg-bg hover:text-accent hover:shadow-glow-button sm:h-9  sm:w-9",
                )}
                onClick={() => {
                  reactFlow.fitView({
                    includeHiddenNodes: true,
                    maxZoom: 0.75,
                    nodes: [{ id: nodes[0].id }],
                  });
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.6,
                    duration: 0.3,
                  },
                }}
              >
                <Icon
                  as={GrPowerReset}
                  boxSize={isMobileClient ? 3 : "unset"}
                />
              </motion.div>
              <motion.div
                className={twMerge(
                  "clickable z-50 flex h-7 w-7 items-center justify-center rounded-full border-[1px] border-neutral-700 bg-accent text-bg transition duration-500 hover:border-accent hover:bg-bg hover:text-accent hover:shadow-glow-button sm:h-9  sm:w-9",
                )}
                onClick={() => setIsModalOpen(true)}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.9,
                    duration: 0.3,
                  },
                }}
              >
                <Icon as={FaMessage} boxSize={isMobileClient ? 3 : "unset"} />
              </motion.div>
              <MotionDiv
                as={Link}
                href="/"
                className={twMerge(
                  "clickable z-50 flex h-7 w-7 items-center justify-center rounded-full border-[1px] border-neutral-700 bg-accent text-bg transition duration-500 hover:border-accent hover:bg-bg hover:text-accent hover:shadow-glow-button sm:h-9  sm:w-9",
                )}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 1.2,
                    duration: 0.3,
                  },
                }}
              >
                <Icon as={FaHome} boxSize={isMobileClient ? 3 : "unset"} />
              </MotionDiv>
            </>
          )}
        </div>
        <HomeInformation isOpen={isInfoOpen} setIsOpen={setIsInfoOpen} />
        <Flow />
      </div>
      {isModalOpen && <ContactForm onClose={() => setIsModalOpen(false)} />}
    </SetFlowContext.Provider>
  );
};

export default Home;
