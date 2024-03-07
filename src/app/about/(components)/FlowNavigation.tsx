import FlowNavLink from "./FlowNavLink";

const FlowNavigation = () => {
  return (
    <div className=" flex flex-col gap-8  py-5 w-[20%] border">
      <FlowNavLink label="Experience" value="experienceNode" />
      <FlowNavLink label="Education" value="educationNode" />
      <FlowNavLink label="Projects" value="projectNode" />
      <FlowNavLink label="Hackathons" value="hackathonNode" />
      <FlowNavLink label="Involvement" value="involvementNode" />
    </div>
  );
};

export default FlowNavigation;
