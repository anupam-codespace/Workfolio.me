"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const categoryLabels: Record<string, string> = {
  language: "Languages",
  mobile: "Mobile",
  frontend: "Frontend",
  backend: "Backend",
  ai: "AI / ML",
  tool: "Tools",
};

const categories = ["language", "mobile", "frontend", "backend", "ai", "tool"];

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-16 py-20 border-t border-[#222]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
        <p className="text-[#888] text-sm mb-10">Technologies I work with every day</p>

        <div className="space-y-8">
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            if (catSkills.length === 0) return null;
            return (
              <div key={cat}>
                <p className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-3">
                  {categoryLabels[cat]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {catSkills.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="skill-tag"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
