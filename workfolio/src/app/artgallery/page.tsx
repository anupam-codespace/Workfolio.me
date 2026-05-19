"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Folder, ChevronDown, Activity, Sparkles } from "@/components/Icons";

export default function ArtGalleryPage() {
  // States for expandable card
  const [showAllItems, setShowAllItems] = useState(false);

  // States for dynamic visibility card
  const [hoveredVisitor, setHoveredVisitor] = useState<number | null>(null);

  // States for dynamic folder component hover
  const [folderHovered, setFolderHovered] = useState(false);

  // States for Skill Pill mode
  const [skillActive, setSkillActive] = useState(false);

  return (
    <main className="min-h-screen bg-[#080808] grid-bg px-6 md:px-12 lg:px-16 py-10">
      {/* Blue side glows */}
      <div className="blue-glow-left" />
      <div className="blue-glow-right" />

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#888] hover:text-white border border-[#222] hover:border-[#333] rounded-lg transition-all mb-12"
          style={{ background: "#111" }}
        >
          <ArrowLeft size={16} />
          Back
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-3">
          Art Gallery
        </h1>
        <p className="text-[#888] text-sm md:text-base">
          Interactive UI elements & animations built from Design to Code
        </p>
      </motion.div>

      {/* Divider */}
      <hr className="section-divider mb-12" />

      {/* Grid of Interactive Showcase Components */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
        {/* Component 1: The Layered Folder Slide-Out */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card flex flex-col p-6 relative overflow-hidden"
          onMouseEnter={() => setFolderHovered(true)}
          onMouseLeave={() => setFolderHovered(false)}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-semibold text-[#555] uppercase tracking-wider">01 / Folder Spread Component</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full text-emerald-400 bg-emerald-950/30 border border-emerald-900/50">Interactive</span>
          </div>

          <div className="h-64 flex flex-col items-center justify-center relative bg-gradient-to-br from-[#0c0c0c] to-[#141414] rounded-xl border border-[#222] overflow-hidden">
            {/* The layered documents inside the folder */}
            <div className="relative w-36 h-28 flex items-center justify-center">
              {/* Document 3 (Deepest) */}
              <motion.div
                className="absolute w-20 h-28 bg-[#181818] border border-[#333] rounded-lg shadow-2xl flex items-center justify-center"
                animate={{
                  y: folderHovered ? -50 : 0,
                  rotate: folderHovered ? 12 : 0,
                  scale: folderHovered ? 0.95 : 0.9,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <div className="w-10 h-1.5 bg-blue-500/50 rounded-full" />
              </motion.div>

              {/* Document 2 (Middle) */}
              <motion.div
                className="absolute w-20 h-28 bg-[#222] border border-[#444] rounded-lg shadow-2xl flex items-center justify-center"
                animate={{
                  y: folderHovered ? -42 : 0,
                  rotate: folderHovered ? -12 : 0,
                  scale: folderHovered ? 0.95 : 0.9,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <div className="w-10 h-1.5 bg-emerald-500/50 rounded-full" />
              </motion.div>

              {/* Document 1 (Front Card) */}
              <motion.div
                className="absolute w-20 h-28 bg-[#2a2a2a] border border-[#555] rounded-lg shadow-2xl flex items-center justify-center z-10"
                animate={{
                  y: folderHovered ? -30 : 0,
                  scale: folderHovered ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <div className="w-10 h-1.5 bg-white/50 rounded-full" />
              </motion.div>

              {/* The Folder Front-flap */}
              <div className="absolute bottom-0 w-32 h-20 bg-[#161616] border border-[#2c2c2c] rounded-lg z-20 shadow-inner flex items-center justify-center">
                <Folder className="text-[#888] group-hover:text-white" size={24} />
              </div>
            </div>
            <div className="absolute bottom-3 text-[10px] text-[#555]">Hover to pop open folder docs</div>
          </div>

          <div className="mt-4">
            <h3 className="text-base font-bold text-white mb-1">Folder Spread Animation</h3>
            <p className="text-sm text-[#888]">Layered document modules that pop-up with perspective offset angles when hovering the root folder wrapper.</p>
          </div>
        </motion.div>

        {/* Component 2: Expandable List Notification Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card flex flex-col p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-semibold text-[#555] uppercase tracking-wider">02 / Expandable Checklist</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full text-emerald-400 bg-emerald-950/30 border border-emerald-900/50">Interactive</span>
          </div>

          <div className="h-64 flex flex-col items-center justify-center bg-gradient-to-br from-[#0c0c0c] to-[#141414] rounded-xl border border-[#222] p-4 relative overflow-hidden">
            <div className="w-full max-w-xs space-y-2">
              {/* Item 1 */}
              <div className="flex items-center justify-between p-3 bg-[#161616] border border-[#222] rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#222] border border-[#333] flex items-center justify-center text-xs">🏞️</div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Hiking</h4>
                    <p className="text-[10px] text-[#666]">Blue Ridge Trail</p>
                  </div>
                </div>
                <span className="text-[10px] text-[#555]">12 Aug</span>
              </div>

              {/* Extra Items with Expand Collapse */}
              <AnimatePresence>
                {showAllItems && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      className="flex items-center justify-between p-3 bg-[#161616] border border-[#222] rounded-xl overflow-hidden"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-lg bg-[#222] border border-[#333] flex items-center justify-center text-xs">🛶</div>
                        <div>
                          <h4 className="text-xs font-semibold text-white">Kayaking</h4>
                          <p className="text-[10px] text-[#666]">Crystal Bay</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-[#555]">8 Aug</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      className="flex items-center justify-between p-3 bg-[#161616] border border-[#222] rounded-xl overflow-hidden"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-lg bg-[#222] border border-[#333] flex items-center justify-center text-xs">🔥</div>
                        <div>
                          <h4 className="text-xs font-semibold text-white">Bonfire</h4>
                          <p className="text-[10px] text-[#666]">Sunset Valley</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-[#555]">30 July</span>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              {/* Toggle Button */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setShowAllItems(!showAllItems)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#888] hover:text-white bg-[#1a1a1a] border border-[#2c2c2c] rounded-full transition-all cursor-pointer"
                >
                  <span>{showAllItems ? "Hide" : "Show all"}</span>
                  <motion.div animate={{ rotate: showAllItems ? 180 : 0 }}>
                    <ChevronDown size={12} />
                  </motion.div>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-base font-bold text-white mb-1">Expandable Checklist Card</h3>
            <p className="text-sm text-[#888]">A toggleable stack of content tiles that expand with beautiful spring height animation and chevron rotation.</p>
          </div>
        </motion.div>

        {/* Component 3: The Glowing Real-Time Visibility Area Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card flex flex-col p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-semibold text-[#555] uppercase tracking-wider">03 / Real-Time Data Glow</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full text-emerald-400 bg-emerald-950/30 border border-emerald-900/50">Interactive</span>
          </div>

          <div className="h-64 flex flex-col items-center justify-center bg-gradient-to-br from-[#0c0c0c] to-[#141414] rounded-xl border border-[#222] p-6 relative overflow-hidden">
            {/* Custom Interactive Visitors Graph Overlay */}
            <div className="relative w-full h-32 flex items-end justify-between px-2 border-b border-[#222]">
              {[120, 180, 150, 290, 240, 310, 420, 380, 490].map((val, idx) => (
                <div
                  key={idx}
                  className="relative flex-1 flex flex-col items-center group/bar"
                  onMouseEnter={() => setHoveredVisitor(val)}
                  onMouseLeave={() => setHoveredVisitor(null)}
                >
                  {/* Glowing Bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${val / 4.5}px` }}
                    className="w-4 bg-gradient-to-t from-blue-900/30 to-blue-500 rounded-t-sm transition-all duration-300 relative group-hover/bar:to-cyan-400 group-hover/bar:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                  />

                  {/* Pulsing indicator on top bar item */}
                  {idx === 6 && (
                    <span className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-ping top-[-10px] left-1/2 -translate-x-1/2" />
                  )}
                </div>
              ))}

              {/* Glassmorphic tool-tip showing exact visitors */}
              <AnimatePresence>
                {hoveredVisitor && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: -20, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg border border-[#333] text-xs font-semibold text-white shadow-2xl flex items-center gap-2"
                    style={{
                      background: "rgba(17,17,17,0.75)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <Activity size={12} className="text-cyan-400 animate-pulse" />
                    <span>{hoveredVisitor} visitors</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="absolute bottom-3 text-[10px] text-[#555]">Hover over bars to trigger graph tooltip</div>
          </div>

          <div className="mt-4">
            <h3 className="text-base font-bold text-white mb-1">Real-Time Visibility Graph</h3>
            <p className="text-sm text-[#888]">A sleek data chart featuring responsive vertical bars, glowing high-points, and glassmorphic micro-tooltips.</p>
          </div>
        </motion.div>

        {/* Component 4: Integration Skill Pill Drops */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card flex flex-col p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-semibold text-[#555] uppercase tracking-wider">04 / Skill-Pill Shadow Drops</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full text-emerald-400 bg-emerald-950/30 border border-emerald-900/50">Interactive</span>
          </div>

          <div className="h-64 flex flex-col items-center justify-center bg-gradient-to-br from-[#0c0c0c] to-[#141414] rounded-xl border border-[#222] p-6 relative overflow-hidden">
            {/* The Central Integration Node */}
            <div className="relative flex flex-col items-center justify-center">
              <motion.div
                className="relative px-6 py-3 bg-[#111] border border-[#333] rounded-xl shadow-xl flex items-center gap-3 z-20 cursor-pointer"
                animate={{
                  borderColor: skillActive ? "#22c55e" : "#333",
                }}
              >
                <div className="w-5 h-5 rounded bg-emerald-950 flex items-center justify-center text-xs font-bold text-emerald-400">S</div>
                <span className="text-sm font-bold text-white">Supabase</span>
              </motion.div>

              {/* Duplicate Falling Drop Icons under node */}
              <AnimatePresence>
                {skillActive && (
                  <>
                    {[1, 2, 3].map((val) => (
                      <motion.div
                        key={val}
                        initial={{ opacity: 0.8, y: 0, scale: 0.9 }}
                        animate={{ opacity: 0, y: 45 * val, scale: 0.8 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.8,
                          delay: val * 0.4,
                          ease: "linear",
                        }}
                        className="absolute px-4 py-2 bg-emerald-950/20 border border-emerald-900/40 rounded-lg flex items-center gap-2 -z-10"
                      >
                        <div className="w-3 h-3 rounded bg-emerald-900 flex items-center justify-center text-[7px] font-bold text-emerald-400">S</div>
                        <span className="text-[10px] text-emerald-500/80">sync</span>
                      </motion.div>
                    ))}
                  </>
                )}
              </AnimatePresence>

              {/* Mode Button */}
              <div className="absolute top-24">
                <button
                  onClick={() => setSkillActive(!skillActive)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#888] hover:text-white bg-[#1a1a1a] border border-[#2c2c2c] rounded-full transition-all cursor-pointer"
                >
                  <Sparkles size={12} className={skillActive ? "text-emerald-400 animate-spin" : ""} />
                  <span>{skillActive ? "Active" : "Toggle mode"}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-base font-bold text-white mb-1">Integration Shadow Drops</h3>
            <p className="text-sm text-[#888]">A database synchronization animation triggering falling duplicate clone pills on toggle.</p>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
