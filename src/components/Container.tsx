"use client";

import React, { ReactNode } from "react";
import RulerLines from "./RulerLines";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`max-w-6xl mx-auto relative flex flex-col md:px-[30px] border-l border-r border-[#222222] min-h-screen ${className || ""}`}>
      <RulerLines variant="left" />
      <div className="w-full relative z-10">
        {children}
      </div>
      <RulerLines variant="right" />
    </div>
  );
};

export default Container;
