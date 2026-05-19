"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { siteConfig } from "@/lib/data";

const GithubGraph = () => {
  return (
    <div className="bg-black w-full flex flex-col justify-center items-center py-10 px-6 border-t border-[#222222]">
      <div className="w-full max-w-2xl overflow-hidden flex flex-col items-center">
        <h3 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-6">
          GitHub Contributions
        </h3>
        <div className="w-full overflow-x-auto flex justify-center py-2 px-4 select-none scrollbar-none">
          <GitHubCalendar
            username={siteConfig.github}
            blockRadius={4}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            theme={{
              dark: ["#161616", "#3b82f6", "#2563eb", "#1d4ed8", "#1e40af"],
            }}
            colorScheme="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default GithubGraph;
