import React from "react";
import { AllTechInterface, NodeType } from "@/utils/interfaces";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface FlowNavLinkProps {
  label: string;
  value: NodeType;
  className?: string;
  selectedFlow: string;
  onClick: () => void;
}

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const FlowNavLink = ({
  label,
  value,
  className,
  selectedFlow,
  onClick,
}: FlowNavLinkProps) => {
  return (
    <motion.h5
      className={twMerge(
        "clickable 3xl:text-xl w-32 border-b-2 border-primary text-primary opacity-0 transition-all duration-300 hover:ml-4 hover:w-44 hover:scale-110 hover:border-accent hover:text-accent",
        className,
        selectedFlow === value &&
          "ml-2 w-[9.5rem] scale-110 border-accent font-bold text-accent",
      )}
      onClick={onClick}
      variants={childVariants}
    >
      {label}
    </motion.h5>
  );
};

export default FlowNavLink;
