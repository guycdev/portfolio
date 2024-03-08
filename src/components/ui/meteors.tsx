"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const getWidth = () => {
      const windowWidth = window.innerWidth;

      setWidth(windowWidth);
    };

    getWidth();
  }, []);

  return width !== 0 ? (
    meteors.map((el, idx) => (
      <span
        key={"meteor" + idx}
        className={cn(
          "absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-primary shadow-[0_0_0_1px_#ffffff10]",
          "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
          className,
        )}
        style={{
          top: "35px",
          left: Math.floor(Math.random() * (width - -width) + -width) + "px",
          animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
          animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
        }}
      ></span>
    ))
  ) : (
    <></>
  );
};
