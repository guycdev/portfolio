import { createContext, useContext } from "react";
import { NodeType } from "@/utils/interfaces";

type FlowContextType = {
  setSelectedFlow: React.Dispatch<React.SetStateAction<NodeType>>;
  selectedFlow: string;
};

export const SetFlowContext = createContext<FlowContextType | undefined>(
  undefined
);

export const useSetFlowContext = (): FlowContextType => {
  const context = useContext(SetFlowContext);
  if (context === undefined) {
    throw new Error(
      "useSetFlowContext must be used within a SetFlowContextProvider"
    );
  }
  return context;
};
