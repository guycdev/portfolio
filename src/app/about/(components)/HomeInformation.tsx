import React, { useMemo, useRef } from "react";
import FlowNavigation from "./FlowNavigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const HomeInformation = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const iconStyles = useMemo(() => {
    return "text-primary w-8 h-8 hover:text-accent cursor-none clickable transition-all hover:scale-110 duration-300 3xl:w-9 3xl:h-9";
  }, []);

  const MotionLink = motion(Link);

  const overlayRef = useRef(null);

  return (
    <motion.div
      className={twMerge(
        "absolute left-0 top-0 z-10 flex h-[100%] w-[100%] flex-1 items-center justify-center rounded-s-border p-3",
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none z-30 opacity-0",
      )}
    >
      <div
        // ref={overlayRef}
        onClick={() => setIsOpen(false)}
        className={twMerge(
          "z-1 absolute left-0 top-0 h-[100%] w-[100%] bg-bg transition duration-300",
          isOpen ? "opacity-80" : "opacity-0",
        )}
      />
      <FlowNavigation setInfoOpen={setIsOpen} />

      {/* <MotionLink
        href="/"
        className="absolute left-4 top-4 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
      >
        <IoChevronBackOutline className={iconStyles} />
      </MotionLink>
      <div className="flex h-[100%] flex-col justify-between p-16">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <motion.h2
              className="w-fit bg-gradient-to-r from-secondary to-primary bg-clip-text pb-1 text-5xl font-semibold text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
            >
              Guy Cohen
            </motion.h2>
            <div className="3xl:mt-2 3xl:space-y-2">
              <p className="3xl:text-xl text-lg  text-header">
                <AnimatedText words="Software Engineer" />
              </p>
              <p className="3xl:text-xl text-text">
                <AnimatedText words="Building pixel perfect UIs and scalable APIs" />
              </p>
            </div>
          </div>
          <p className="3xl:text-lg text-md text-balance text-header	">
            <AnimatedText
              words="
            In 2020, I discovered the world of programming and have been addicted ever since. 
            Fast-forward to today and I am currently in the process of completing my Bachelor
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
      </div> */}
    </motion.div>
  );
};

export default React.memo(HomeInformation);
