"use client";
import { LampDemo } from "@/components/ui/lamp";
import { Meteors } from "@/components/ui/meteors";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex h-[100%] flex-col items-center justify-between overflow-hidden">
      <LampDemo />
      <motion.div
        className="w-full"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 2,
            delay: 1.5,
          },
        }}
      >
        <Meteors number={40} />
      </motion.div>
    </main>
  );
}
