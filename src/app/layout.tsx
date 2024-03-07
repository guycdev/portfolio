"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { motion } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen bg-bg ${inter.className} overflow-hidden dark`}
      >
        <AnimatedCursor
          clickables={[".clickable"]}
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "#f1f5f9",
          }}
          outerStyle={{
            border: "3px solid #64748b",
          }}
        />
        <div className="flex h-screen p-2  overflow-hidden">
          <motion.div
            className="w-screen flex-col  rounded-md p-1 overflow-hidden"
            initial={{
              /**@ts-ignore */
              "--color-start": "#0000000", // Initial start color of the gradient
              "--color-end": "#0000000", // Initial end color of the gradient
            }}
            animate={{
              /**@ts-ignore */
              // "--color-start": "#334155", // Animate to this start color
              // "--color-end": "#f3f4f6", // Animate to this end color
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
            <Providers>{children}</Providers>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
