"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "@/components/Icons";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

const categories = ["All", "Android", "Web/Full-Stack", "AI/ML"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Android") {
      return project.tags.some(t => ["Kotlin", "Android", "Jetpack Compose", "MVVM"].includes(t));
    }
    if (activeCategory === "Web/Full-Stack") {
      return project.tags.some(t => ["Next.js", "React.js", "Tailwind CSS", "Zustand", "TypeScript", "React"].includes(t));
    }
    if (activeCategory === "AI/ML") {
      return project.tags.some(t => ["AI", "Gemini API", "Python", "ML", "NLP"].includes(t));
    }
    return true;
  });

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
          Projects
        </h1>
        <p className="text-[#888] text-sm md:text-base">All my Proof of work at one place</p>
      </motion.div>

      {/* Category Filters with sliding background indicator */}
      <div className="flex flex-wrap gap-2 mb-10 p-1 bg-[#111] border border-[#222] rounded-xl max-w-max">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-4 py-2 text-xs md:text-sm font-medium rounded-lg cursor-pointer transition-colors duration-200 z-10"
              style={{
                color: isActive ? "#fff" : "#888",
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-[#222] border border-[#333] rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Divider */}
      <hr className="section-divider mb-8" />

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
