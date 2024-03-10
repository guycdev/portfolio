import { useSetFlowContext } from "@/context/SetFlowContext";
import FlowNavLink from "./FlowNavLink";
import { NodeType } from "@/utils/interfaces";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { allNodeOptions } from "@/utils/nodes";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

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
  const { setSelectedFlow, selectedFlow, setAttributeFilter, attributeFilter } =
    context;

  const [selectedFlowHistory, setSelectedFlowHistory] = useState<NodeType>("");

  const navLinkArr = navArr.map((nav, index) => (
    <FlowNavLink
      label={nav.label}
      value={nav.value}
      key={index}
      selectedFlow={selectedFlow}
      onClick={() => {
        setSelectedFlow !== undefined ? setSelectedFlow(nav.value) : undefined;
        setAttributeFilter(null);
        setSelectedFlowHistory("");
      }}
    />
  ));

  return (
    <motion.div
      className="flex flex-col gap-6 "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Select
        options={allNodeOptions}
        value={attributeFilter}
        className="clickable group"
        onChange={(selectedData) => {
          if (!selectedData) {
            setSelectedFlow(selectedFlowHistory);
            setSelectedFlowHistory("");
          } else if (!selectedFlowHistory) {
            setSelectedFlowHistory(selectedFlow);
            setSelectedFlow("");
          }
          setAttributeFilter(selectedData);
        }}
        components={{
          IndicatorSeparator: () => null,
        }}
        isClearable
        placeholder={
          <div className="flex items-center justify-between">
            <p className="text-primary transition-all duration-300 group-hover:text-accent">
              Find skill
            </p>
            <FaMagnifyingGlass
              className={twMerge(
                "text-primary group-hover:text-accent",
                attributeFilter && "hidden",
              )}
            />
          </div>
        }
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: "transparent",
            backgroundColor: "transparent",
            borderBottomColor:
              state.isFocused || selectedFlowHistory ? "#f1f5f9" : "#64748b",
            borderTopLeftRadius:
              state.isFocused || selectedFlowHistory ? "5px" : "0px",
            borderTopRightRadius:
              state.isFocused || selectedFlowHistory ? "5px" : "0px",
            borderRadius: "0px",
            borderWidth: "0px",
            borderBottomWidth:
              state.isFocused || selectedFlowHistory ? "3px" : "2px",
            margin: "0px",
            transition: "all 0.3s, border-bottom-width 0s",
            paddingLeft: state.isFocused || selectedFlowHistory ? "8px" : "0px",
            paddingRight:
              state.isFocused || selectedFlowHistory ? "8px" : "0px",
            cursor: "none",
            width: state.isFocused || selectedFlowHistory ? "11rem" : "8rem",
            ":hover": {
              width: "calc(11rem*1.1)",
            },
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#0a0a0a",
            cursor: "none",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            color: state.isFocused ? "black" : "white",
            paddingLeft: state.isFocused ? "13px" : "10px",
            cursor: "none",
            transition: "all 0.3s",
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            padding: "0px",
            color: "#f1f5f9",
          }),
          input: (baseStyles) => ({
            ...baseStyles,
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "#f1f5f9",
            fontWeight: selectedFlowHistory && "bold",
          }),
          dropdownIndicator: () => ({
            display: "none",
          }),
          clearIndicator: () => ({
            color: "#f1f5f9",
            transition: "all 0.3s",
            ":hover": {
              color: "#64748b",
            },
          }),
        }}
      />
      {navLinkArr}
      {/* add another filter if the above is active to filter by activity */}
    </motion.div>
  );
};

export default FlowNavigation;
