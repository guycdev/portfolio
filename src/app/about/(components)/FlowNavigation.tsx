import { useSetFlowContext } from "@/context/SetFlowContext";
import FlowNavLink from "./FlowNavLink";
import { ChangeEvent } from "react";
import { BiSearch } from "react-icons/bi";
import { Input } from "@/components/ui/input";

const FlowNavigation = () => {
  const { setAttributeFilter, attributeFilter } = useSetFlowContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAttributeFilter(value);
  };

  return (
    <div className="flex w-[20%] flex-col gap-8 py-5">
      {/* <div className="flex clickable">
        <Input
          type="text"
          value={attributeFilter}
          onChange={handleChange}
          placeholder="filter by skill"
          className="cursor-none bg-transparent border-b border-primary"
        />
      </div> */}
      <FlowNavLink label="Experience" value="experienceNode" />
      <FlowNavLink label="Education" value="educationNode" />
      <FlowNavLink label="Projects" value="projectNode" />
      <FlowNavLink label="Hackathons" value="hackathonNode" />
      <FlowNavLink label="Involvement" value="involvementNode" />
    </div>
  );
};

export default FlowNavigation;
