"use client";

import React from "react";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <div className="bg-[#080808] flex items-center justify-between w-full mt-6 py-4">
      {/* Left side dash */}
      <div className="flex border-t border-[#222222] w-5 shrink-0" />
      {/* Middle banner */}
      <div className="text-sm md:text-lg font-mono border border-[#222222] px-6 py-1.5 rounded bg-[#111] text-[#888888] font-medium tracking-tight mx-4">
        {title}
      </div>
      {/* Right side line extending to end */}
      <div className="flex-1 border-t border-[#222222]" />
    </div>
  );
};

export default SectionHeading;
