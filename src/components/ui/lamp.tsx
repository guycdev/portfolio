"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

export function LampDemo() {
  const MotionBox = motion(Box);

  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        <h1 className="mt-8 bg-gradient-to-br from-secondary to-primary bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Guy.
        </h1>
        <div className="flex gap-3">
          <p className="text-sm font-semibold  text-primary md:text-xl">
            Developer
          </p>
          <p className="text-sm font-semibold text-secondary md:text-xl">
            Designer
          </p>
          <p className="text-sm font-semibold text-primary md:text-xl">
            Learner
          </p>
        </div>
        <MotionBox
          className="clickable group absolute top-[170%] cursor-none"
          initial={{ display: "none" }}
          animate={{ display: "unset", transition: { delay: 2.3 } }}
        >
          <MotionBox
            as={Link}
            href="/about"
            initial={{
              /**@ts-ignore */
              opacity: 0,
            }}
            animate={{
              /**@ts-ignore */
              opacity: 1,
              transition: {
                duration: 1,
                delay: 2.5,
              },
            }}
          >
            <motion.div className="css-selector rounded-full p-0.5 transition-all">
              <motion.div className="rounded-3xl bg-bg px-10 py-2 font-normal text-primary transition-all duration-500 group-hover:bg-accent group-hover:shadow-glow-button">
                <p className=" bg-gradient-to-br from-secondary to-primary bg-clip-text transition-all group-hover:from-bg group-hover:to-bg">
                  My Work
                </p>
              </motion.div>
            </motion.div>
          </MotionBox>
        </MotionBox>
      </motion.div>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 650);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "relative z-0 flex h-[100%] w-full flex-col items-center justify-center overflow-hidden rounded-border bg-bg",
        className,
      )}
    >
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center ">
        <motion.div
          initial={{ opacity: 0.5, width: isMobileView ? "5rem" : "15rem" }}
          whileInView={{ opacity: 1, width: isMobileView ? "15rem" : "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible bg-gradient-conic from-lamp-glow via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  bottom-0 left-0 z-20 h-40 w-[100%] bg-bg [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  bottom-0 left-0 z-20 h-[100%]  w-40 bg-bg [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: isMobileView ? "5rem" : "15rem" }}
          whileInView={{ opacity: 1, width: isMobileView ? "15rem" : "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-lamp-glow text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  bottom-0 right-0 z-20 h-[100%]  w-40 bg-bg [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  bottom-0 right-0 z-20 h-40 w-[100%] bg-bg [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-bg blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-lamp-glow opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: isMobileView ? "3rem" : "8rem" }}
          whileInView={{ width: isMobileView ? "6rem" : "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-bg blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: isMobileView ? "5rem" : "15rem" }}
          whileInView={{ width: isMobileView ? "15rem" : "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-lamp-bar "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-bg "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
