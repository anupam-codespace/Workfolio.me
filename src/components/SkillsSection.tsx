"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const categoryLabels: Record<string, string> = {
  language: "Languages",
  mobile: "Mobile Development",
  frontend: "Frontend",
  backend: "Backend",
  database: "Databases",
  tool: "Tools & AI/ML",
};

const categories = ["language", "mobile", "frontend", "backend", "database", "tool"];

// High-fidelity inline SVG icons for technologies
const techIcons: Record<string, React.ReactNode> = {
  "Kotlin": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 24H0V0h24L12 12z" />
    </svg>
  ),
  "Java": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2v6M8 4v2M16 3v3M2 20c0-3 3-4 10-4s10 1 10 4v2H2v-2zM6 11c0-1.5 2-2 6-2s6 .5 6 2-2 2-6 2-6-.5-6-2z" />
    </svg>
  ),
  "Android Development": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.523 15.3l1.816 3.146a.5.5 0 0 1-.183.683.5.5 0 0 1-.683-.183L16.63 15.75c-1.393.636-2.955.975-4.63.975s-3.237-.34-4.63-.975l-1.826 3.166a.5.5 0 0 1-.683.183.5.5 0 0 1-.183-.683l1.816-3.146C3.963 13.565 2 10.74 2 7.5h20c0 3.24-1.963 6.065-5.06 7.8M7 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </svg>
  ),
  "Jetpack Compose": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h6v6H9z" />
    </svg>
  ),
  "Python": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
    </svg>
  ),
  "TypeScript": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4v16h16V4zM7 8h10M12 8v8" />
    </svg>
  ),
  "JavaScript": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4v16h16V4zM15 8v6a2 2 0 0 1-2 2h-1" />
    </svg>
  ),
  "React.js": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1" className="fill-current" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 16V8l7 8V8" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3c-1.2 0-2.4.6-3.6 1.8-2.4 2.4-2.4 4.8 0 7.2l3.6 3.6c2.4 2.4 4.8 2.4 7.2 0 1.2-1.2 1.8-2.4 1.8-3.6M12 21c1.2 0 2.4-.6 3.6-1.8 2.4-2.4 2.4-4.8 0-7.2l-3.6-3.6c-2.4-2.4-4.8-2.4-7.2 0-1.2 1.2-1.8 2.4-1.8 3.6" />
    </svg>
  ),
  "Docker": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 14h4v4H4zm6-4h4v4h-4zm0 6h4v4h-4zm6-10h4v4h-4zm0 6h4v4h-4z" />
      <path d="M2 18h20v2H2z" />
    </svg>
  ),
  "Git": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M6 9v6M18 15l-6-6M12 9v9" />
    </svg>
  ),
  "Supabase": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.2 2H3v13.5h3.6V22h10.2V8.5h-3.6V2z" />
    </svg>
  ),
  "Firebase": (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L3 20l9 2 9-2z" />
      <path d="M12 6l-6 11M12 11l6 6" />
    </svg>
  )
};

// Fallback icon when exact match is missing
const defaultIcon = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);

interface SkillPillProps {
  skillName: string;
  icon: React.ReactNode;
}

const SkillPill = ({ skillName, icon }: SkillPillProps) => {
  return (
    <motion.div
      className="bg-[#111111] border border-[#222222] hover:border-[#444444] px-4 py-2 rounded-lg text-sm flex items-center gap-2.5 w-fit cursor-pointer overflow-hidden transition-all duration-300"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <div className="w-4 h-4 relative flex-shrink-0 overflow-hidden text-[#888888]">
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          variants={{
            rest: { y: 0, opacity: 1 },
            hover: { y: "-100%", opacity: 0 },
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {icon}
        </motion.span>

        <motion.span
          className="absolute inset-0 flex items-center justify-center text-white"
          variants={{
            rest: { y: "100%", opacity: 0 },
            hover: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {icon}
        </motion.span>
      </div>

      <span className="font-mono text-xs text-[#888888] hover:text-white transition-colors duration-300 whitespace-nowrap">{skillName}</span>
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <section id="skills" data-section-label="Skills Section" className="px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-12">
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            if (catSkills.length === 0) return null;
            return (
              <div key={cat} className="space-y-4">
                <p className="text-[10px] font-semibold text-[#555] uppercase tracking-widest border-l-2 border-white/20 pl-2">
                  {categoryLabels[cat]}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {catSkills.map((skill) => {
                    const icon = techIcons[skill.name] || defaultIcon;
                    return (
                      <SkillPill
                        key={skill.name}
                        skillName={skill.name}
                        icon={icon}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
