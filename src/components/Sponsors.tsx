"use client";

import React from "react";
import { siteConfig } from "@/lib/data";

const Sponsors = () => {
  return (
    <div className="border-t border-[#222222] py-16 px-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h3 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-10">
          Sponsors & Partnerships
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Active Sponsor Card */}
          <div className="bg-[#111111] border border-[#222222] p-6 rounded-xl flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-950 flex items-center justify-center border border-white/10 mb-4 shadow-xl">
              <span className="text-xl font-black text-white font-mono">N</span>
            </div>
            
            <p className="text-[11px] text-green-500 font-mono font-semibold border border-green-500/20 px-2.5 py-0.5 rounded-full bg-green-500/5 mb-3">
              $500 Sponsor
            </p>

            <h4 className="text-lg font-bold text-white mb-1">NeetCode.io</h4>
            <p className="text-xs text-[#888888] mb-4">
              Premium coding platform for learning algorithms & system design.
            </p>

            <a
              href="https://neetcode.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-4 py-2 rounded-lg border border-[#333] text-white bg-[#161616] hover:bg-[#222] transition-colors"
            >
              Visit Website →
            </a>
          </div>

          {/* Take this slot Card */}
          <a
            href={`https://github.com/sponsors/${siteConfig.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="h-full bg-transparent border-2 border-dashed border-[#222222] group-hover:border-[#444444] transition-all duration-300 rounded-xl p-6 flex flex-col items-center justify-center text-center">
              <span className="text-xl font-bold text-[#888888] group-hover:text-white transition-colors mb-2">
                Take this slot
              </span>
              <p className="text-xs text-[#555555] group-hover:text-[#888888] max-w-[180px] mb-5 transition-colors">
                Become a sponsor and showcase your business logo here.
              </p>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-rose-400 bg-rose-950/10 border border-rose-900/30 rounded-lg group-hover:border-rose-500/40 group-hover:bg-rose-500/10 transition-all">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span>Sponsor on GitHub</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
