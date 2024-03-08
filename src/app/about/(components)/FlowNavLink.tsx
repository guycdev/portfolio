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
        "clickable w-32 border-b border-primary text-primary transition-all duration-300 hover:ml-4 hover:w-44 hover:scale-110 hover:border-accent hover:text-accent",
        className,
        selectedFlow === value &&
          "ml-2 w-[9.5rem] scale-110 border-accent font-bold text-accent",
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
