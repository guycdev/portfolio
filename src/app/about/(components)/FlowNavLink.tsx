import React from "react";
import { NavLinkInterface } from "@/utils/interfaces";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Icon } from "@chakra-ui/react";

interface FlowNavLinkProps {
  data: NavLinkInterface;
  className?: string;
  selectedFlow: string;
  onClick: () => void;
}

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const FlowNavLink = ({
  data,
  className,
  selectedFlow,
  onClick,
}: FlowNavLinkProps) => {
  const isActive = selectedFlow === data.value;
  return (
    <motion.div
      className={twMerge(
        "clickable 3xl:text-xl flex w-32 items-center gap-2 border-b-2 border-primary text-primary opacity-0 transition-all duration-300 hover:ml-4 hover:w-44 hover:scale-110 hover:border-accent hover:text-accent",
        className,
        isActive &&
          "ml-2 w-[9.5rem] scale-110 border-accent font-bold text-accent",
      )}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      variants={childVariants}
    >
      <Icon as={isActive ? data.filledIcon : data.hollowIcon} />
      <h5>{data.label}</h5>
    </motion.div>
  );
};

export default FlowNavLink;
