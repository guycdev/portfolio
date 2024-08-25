import { useSetFlowContext } from "@/context/SetFlowContext";
import { AllTechInterface, NodeType } from "@/utils/interfaces";
import { Icon } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { allNodeOptions as options } from "@/utils/nodes";
import { IoMdClose } from "react-icons/io";
import { PiMagnifyingGlass, PiMagnifyingGlassFill } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

interface Props {
  selectedFlowHistory: NodeType;
  setSelectedFlowHistory: React.Dispatch<React.SetStateAction<NodeType>>;
  setInfoOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomSelectBox = ({
  selectedFlowHistory,
  setSelectedFlowHistory,
  setInfoOpen,
}: Props) => {
  const context = useSetFlowContext();
  const { setSelectedFlow, selectedFlow, setAttributeFilter, attributeFilter } =
    context;

  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleSelect = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    option: AllTechInterface,
  ) => {
    e.stopPropagation();
    setAttributeFilter(option);
    setIsOpen(false);
    setSelectedFlowHistory(selectedFlow);
    setSelectedFlow("");
  };

  const handleClear = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();
    if (attributeFilter) {
      setSelectedFlow(selectedFlowHistory);
      setIsOpen(false);
      setSelectedFlowHistory("");
      setAttributeFilter(null);
    }
  };

  return (
    <div
      className={twMerge("relative  w-fit transition-all duration-300 ")}
      ref={wrapperRef}
    >
      <div
        className={twMerge(
          "clickable flex w-32 cursor-none items-center justify-between border-b-2 border-primary bg-bg p-0 text-primary transition-all duration-300  hover:border-b-accent hover:text-accent",
          (isOpen || attributeFilter) &&
            "w-[9.5rem] border-accent font-bold text-accent",
          !attributeFilter && !isOpen && "hover:w-44",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Icon
            as={attributeFilter ? PiMagnifyingGlassFill : PiMagnifyingGlass}
          />
          <p>{attributeFilter ? attributeFilter.label : "Find Skill"}</p>
        </div>
        {attributeFilter && <IoMdClose onClick={handleClear} />}
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 max-h-52 w-full cursor-none overflow-auto rounded border border-neutral-800 bg-bg shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              className="clickable group h-fit p-2 text-accent hover:bg-neutral-900"
              onClick={(e) => handleSelect(e, option)}
            >
              <div className="flex items-center gap-2 text-sm transition-all group-hover:ml-2">
                <Icon as={option.icon.icon} color={option.icon.color} />
                <p>{option.label}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelectBox;
