"use client";
import React from "react";
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
        <h1 className="mt-8 bg-gradient-to-br from-secondary to-primary py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Guy.
        </h1>
        <div className="flex gap-3">
          <p className="font-semibold text-xl  text-primary te">Developer</p>
          <p className="font-semibold text-xl text-secondary te">Designer</p>
          <p className="font-semibold text-xl text-primary te">Learner</p>
        </div>
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
              delay: 2,
            },
          }}
          className="absolute top-[170%] clickable"
        >
          <motion.div
            initial={{
              /**@ts-ignore */
              "--color-start": "#f1f5f9", // Initial start color of the gradient
              "--color-end": "#64748b", // Initial end color of the gradient
              pointerEvents: "none",
            }}
            animate={{
              /**@ts-ignore */
              "--color-start": "#64748b", // Animate to this start color
              "--color-end": "#f1f5f9", // Animate to this end color
              pointerEvents: "unset",
              transition: {
                duration: 1,
                delay: 3,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              },
            }}
            style={{
              background:
                "linear-gradient(to bottom right, var(--color-start), var(--color-end))",
            }}
            className="p-0.5 rounded-full  transition-all clickable"
          >
            <motion.div className="text-primary px-10 bg-bg py-2 font-normal rounded-3xl">
              <p className=" bg-gradient-to-br from-secondary to-primary bg-clip-text ">
                My Work
              </p>
            </motion.div>
          </motion.div>
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
  return (
    <div
      className={cn(
        "relative flex h-[100%] flex-col items-center justify-center overflow-hidden bg-bg w-full   z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-lamp-glow via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-bg h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-bg  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
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
          <div className="absolute  w-40 h-[100%] right-0 bg-bg  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-bg h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-bg blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-lamp-glow opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-bg blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
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
