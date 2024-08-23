"use client";
import { useClientContext } from "@/context/ClientContext";
import { motion } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";

const Animators = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isMobileClient } = useClientContext();

  return (
    <>
      {!isMobileClient && (
        <AnimatedCursor
          clickables={[".clickable"]}
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          /**@ts-ignore */
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "#f1f5f9",
            zIndex: 15000,
          }}
          outerStyle={{
            border: "3px solid #64748b",
            zIndex: 15000,
          }}
        />
      )}

      <div className="flex h-[100svh] overflow-hidden p-2">
        <motion.div
          className="w-screen flex-col overflow-hidden rounded-border p-2.5"
          initial={{
            /**@ts-ignore */
            "--color-start": "#0000000", // Initial start color of the gradient
            "--color-end": "#0000000", // Initial end color of the gradient
          }}
          animate={{
            /**@ts-ignore */
            "--color-start": "#334155", // Animate to this start color
            "--color-end": "#f3f4f6", // Animate to this end color
            transition: {
              duration: 2,
              delay: 1,
            },
          }}
          style={{
            background:
              "linear-gradient(to  right, var(--color-start), var(--color-end))",
          }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default Animators;
