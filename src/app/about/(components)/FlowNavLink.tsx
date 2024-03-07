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
        "text-primary clickable hover:text-accent hover:w-44 hover:scale-110 hover:border-accent transition-all duration-300 border-b border-primary w-32 my-3",
        className,
        selectedFlow === value &&
          "scale-110 text-accent font-bold border-accent w-[9.5rem]"
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
