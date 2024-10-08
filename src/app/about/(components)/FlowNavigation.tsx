import FlowNavLink from "./FlowNavLink";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  MdWork,
  MdWorkOutline,
  MdOutlineHandshake,
  MdHandshake,
} from "react-icons/md";
import { HiOutlineAcademicCap, HiAcademicCap } from "react-icons/hi2";
import { useSetFlowContext } from "@/context/SetFlowContext";
import {
  PiProjectorScreenChart,
  PiProjectorScreenChartFill,
} from "react-icons/pi";
import { IoTrophy, IoTrophyOutline } from "react-icons/io5";
import { NavLinkInterface, NodeType } from "@/utils/interfaces";
import CustomSelectBox from "./CustomSelect";

const navArr: NavLinkInterface[] = [
  {
    filledIcon: MdWork,
    hollowIcon: MdWorkOutline,
    label: "Experiences",
    value: "experiences",
  },
  // {
  //   filledIcon: IoTrophy,
  //   hollowIcon: IoTrophyOutline,
  //   label: "Achievements",
  //   value: "achievements",
  // },
  {
    filledIcon: PiProjectorScreenChartFill,
    hollowIcon: PiProjectorScreenChart,
    label: "Projects",
    value: "projects",
  },
  {
    filledIcon: HiAcademicCap,
    hollowIcon: HiOutlineAcademicCap,
    label: "Education",
    value: "education",
  },
  {
    filledIcon: MdHandshake,
    hollowIcon: MdOutlineHandshake,
    label: "Involvement",
    value: "involvement",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const FlowNavigation = ({
  setInfoOpen,
  isInfoOpen,
}: {
  setInfoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isInfoOpen: boolean;
}) => {
  const context = useSetFlowContext();
  const { setSelectedFlow, selectedFlow, setAttributeFilter } = context;

  const [selectedFlowHistory, setSelectedFlowHistory] = useState<NodeType>("");

  const navLinkArr = navArr.map((nav, index) => (
    <FlowNavLink
      data={nav}
      key={index}
      selectedFlow={selectedFlow}
      onClick={() => {
        setSelectedFlow !== undefined ? setSelectedFlow(nav.value) : undefined;
        setAttributeFilter(null);
        setSelectedFlowHistory("");
        setInfoOpen(false);
      }}
    />
  ));

  return (
    isInfoOpen && (
      <motion.div
        className="z-50 flex w-fit flex-col gap-16 lg:flex-row lg:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <CustomSelectBox
          selectedFlowHistory={selectedFlowHistory}
          setSelectedFlowHistory={setSelectedFlowHistory}
          setInfoOpen={setInfoOpen}
        />
        {navLinkArr}
        {/* add another filter if the above is active to filter by activity */}
      </motion.div>
    )
  );
};

export default FlowNavigation;
