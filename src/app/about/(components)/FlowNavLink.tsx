import { NodeType } from "@/utils/interfaces";
import { twMerge } from "tailwind-merge";
import { useSetFlowContext } from "@/context/SetFlowContext";

interface FlowNavLinkProps {
  label: string;
  value: NodeType;
  className?: string;
}

const FlowNavLink = ({ label, value, className }: FlowNavLinkProps) => {
  const context = useSetFlowContext();

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
