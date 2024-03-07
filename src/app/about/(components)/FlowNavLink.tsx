import { useContext } from "react";
import { SetFlowContext } from "../page";
import { NodeType } from "@/utils/interfaces";
import { twMerge } from "tailwind-merge";

interface FlowNavLinkProps {
  label: string;
  value: NodeType;
  className?: string;
}

const FlowNavLink = ({ label, value, className }: FlowNavLinkProps) => {
  const context = useContext(SetFlowContext);

  if (!context) return;

  const { setSelectedFlow, selectedFlow } = context;

  return (
    <h5
      className={twMerge(
        "text-primary clickable hover:text-white hover:text-2xl transition-all duration-300 border-b border-primary w-fit",
        className,
        selectedFlow === value &&
          "text-2xl text-secondary font-bold border-accent"
      )}
      onClick={() =>
        setSelectedFlow !== undefined ? setSelectedFlow(value) : undefined
      }
    >
      {label}
    </h5>
  );
};

export default FlowNavLink;
