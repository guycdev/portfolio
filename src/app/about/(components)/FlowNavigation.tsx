import { useSetFlowContext } from "@/context/SetFlowContext";
import FlowNavLink from "./FlowNavLink";
import { ChangeEvent, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { Input } from "@/components/ui/input";
import { NodeType } from "@/utils/interfaces";
import { motion } from "framer-motion";

const navArr: { label: string; value: NodeType }[] = [
  { label: "Experiences", value: "experienceNode" },
  { label: "Hackathons", value: "hackathonNode" },
  { label: "Projects", value: "projectNode" },
  { label: "Education", value: "educationNode" },
  { label: "Involvement", value: "involvementNode" },
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
  const { setAttributeFilter, attributeFilter } = useSetFlowContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAttributeFilter(value);
  };

  const navLinkArr = navArr.map((nav, index) => (
    <FlowNavLink label={nav.label} value={nav.value} key={index} />
  ));

  return (
    <motion.div
      className="flex w-[20%] flex-col gap-6 "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* <div className="flex clickable">
        <Input
          type="text"
          value={attributeFilter}
          onChange={handleChange}
          placeholder="filter by skill"
          className="cursor-none bg-transparent border-b border-primary"
        />
      </div> */}
      {navLinkArr}
    </motion.div>
  );
};

export default FlowNavigation;
