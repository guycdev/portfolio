import React, { useMemo } from "react";
import FlowNavigation from "./FlowNavigation";
import Link from "next/link";
import { AboutFooter } from "./AboutFooter";
import { animate, motion } from "framer-motion";
import { FormModal } from "@/app/about/(components)/form-modal";
import AnimatedText from "@/components/AnimatedText";
import { IoChevronBackOutline } from "react-icons/io5";

const HomeInformation = () => {
  const iconStyles = useMemo(() => {
    return "text-primary w-8 h-8 hover:text-accent cursor-none clickable transition-all hover:scale-110 duration-300";
  }, []);

  const MotionLink = motion(Link);

  return (
    <motion.div className="relative h-[100%] w-[100%] flex-1 rounded-s-border bg-bg p-3">
      <MotionLink
        href="/"
        className="absolute left-4 top-4 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
      >
        <IoChevronBackOutline className={iconStyles} />
      </MotionLink>
      <div className="flex h-[100%] flex-col justify-between p-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <h2 className="w-fit bg-gradient-to-r from-secondary to-primary bg-clip-text pb-1 text-5xl font-semibold text-transparent">
              <AnimatedText words="Guy Cohen" />
            </h2>
            <div>
              <p className="text-header text-lg ">
                <AnimatedText words="Software Engineer" />
              </p>
              <p className="text-text">
                <AnimatedText words="Building pixel perfect UIs and scalable APIs" />
              </p>
            </div>
          </div>
          <p className="text-header text-sm">
            <AnimatedText
              words="
            In 2020, I discovered the world of programming. Since then I have
            made it my mission to turn that passion into a career. Fast-forward
            to today and I am currently in the process of completing my Bachelor
            in Computer Science while having already completed my Bachelor in
            Finance. I am working as a Software Engineering intern at ZeroX
            gaming, and love participating and being involved with my school’s
            hackathons.
            "
            />
          </p>
        </div>
        <FlowNavigation />
        <AboutFooter iconStyles={iconStyles}>
          <FormModal />
        </AboutFooter>
      </div>
    </motion.div>
  );
};

export default React.memo(HomeInformation);
