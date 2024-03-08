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
        className={`h-screen bg-bg ${inter.className} dark overflow-hidden`}
      >
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
          }}
          outerStyle={{
            border: "3px solid #64748b",
          }}
        />
        <div className="flex h-screen overflow-hidden p-2">
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
            <Providers>{children}</Providers>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
