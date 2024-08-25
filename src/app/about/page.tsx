"use client";

import { useState } from "react";
import Flow from "./(components)/Flow";
import HomeInformation from "./(components)/HomeInformation";
import { AllTechInterface, NodeType } from "@/utils/interfaces";
import { SetFlowContext } from "@/context/SetFlowContext";
import { useReactFlow } from "reactflow";
import { Icon } from "@chakra-ui/react";
import { FaInfo } from "react-icons/fa";
import { FaMessage, FaX } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { GrCircleInformation, GrPowerReset } from "react-icons/gr";
import { TiThMenu } from "react-icons/ti";
import { ContactForm } from "./(components)/form";

const Home = () => {
  const [selectedFlow, setSelectedFlow] = useState<NodeType>("experiences");
  const [attributeFilter, setAttributeFilter] =
    useState<AllTechInterface | null>(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reactFlow = useReactFlow();

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
        <div className="absolute left-8 top-8 flex gap-2">
          <motion.div
            className={twMerge(
              "clickable z-40 flex h-9 w-9 items-center justify-center rounded-full border-[1px] border-neutral-700 bg-accent text-bg transition duration-500 hover:border-accent hover:bg-bg hover:text-accent  hover:shadow-glow-button",
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
            <Icon as={isInfoOpen ? FaX : TiThMenu} />
          </motion.div>
          {!isInfoOpen && (
            <>
              <motion.div
                className={twMerge(
                  "clickable z-50 flex h-9 w-9 items-center justify-center rounded-full border-[1px] border-neutral-700 bg-accent text-bg transition duration-500 hover:rotate-[360deg] hover:border-accent hover:bg-bg hover:text-accent  hover:shadow-glow-button",
                )}
                onClick={() => reactFlow.fitView({ includeHiddenNodes: true })}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.6,
                    duration: 0.3,
                  },
                }}
              >
                <Icon as={GrPowerReset} />
              </motion.div>
              <motion.div
                className={twMerge(
                  "clickable z-50 flex h-9 w-9 items-center justify-center rounded-full border-[1px] border-neutral-700 bg-accent text-bg transition duration-500 hover:border-accent hover:bg-bg hover:text-accent  hover:shadow-glow-button",
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
                <Icon as={FaMessage} />
              </motion.div>
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
