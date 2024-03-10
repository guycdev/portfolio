import { useSetFlowContext } from "@/context/SetFlowContext";
import FlowNavLink from "./FlowNavLink";
import { NodeType } from "@/utils/interfaces";
import { motion } from "framer-motion";
import React from "react";
import Select from "react-select";
import { allNodeOptions } from "@/utils/nodes";

const navArr: { label: string; value: NodeType }[] = [
  { label: "Experiences", value: "experiences" },
  { label: "Hackathons", value: "hackathons" },
  { label: "Projects", value: "projects" },
  { label: "Education", value: "education" },
  { label: "Involvement", value: "involvement" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const FlowNavigation = () => {
  const context = useSetFlowContext();
  const { setSelectedFlow, selectedFlow, setAttributeFilter } = context;

  const navLinkArr = navArr.map((nav, index) => (
    <FlowNavLink
      label={nav.label}
      value={nav.value}
      key={index}
      setSelectedFlow={setSelectedFlow}
      selectedFlow={selectedFlow}
      setAttributeFilter={setAttributeFilter}
    />
  ));

  return (
    <motion.div
      className="flex w-[20%] flex-col gap-6 "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {navLinkArr}
      <Select
        options={allNodeOptions}
        onChange={(selectedData) => {
          setAttributeFilter(selectedData);
          setSelectedFlow("");
        }}
      />
      {/* add another filter if the above is active to filter by activity */}
    </motion.div>
  );
};

export default FlowNavigation;
