"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience, achievements, siteConfig } from "@/lib/data";

interface AccordionItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  points?: string[];
  skills?: string[];
}

const AccordionItem = ({ title, subtitle, period, description, points, skills }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#222222] bg-[#111111]/30 hover:bg-[#111111]/60 rounded-xl overflow-hidden transition-all duration-300">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-5 flex justify-between items-start gap-4 cursor-pointer select-none"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap mb-1">
            <h4 className="text-sm font-semibold text-white truncate">{title}</h4>
            <span className="text-[10px] text-[#888888] border border-[#222222] px-2 py-0.5 rounded font-mono">
              {subtitle}
            </span>
          </div>
          <span className="text-[11px] text-[#555555] font-mono">{period}</span>
        </div>

        {/* Chevron arrow icon */}
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          viewBox="0 0 24 24"
          className="w-4 h-4 text-[#888] mt-1 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 border-t border-[#222222]/50 text-xs md:text-sm text-[#888888] leading-relaxed space-y-3 font-mono">
              <p>{description}</p>
              
              {points && points.length > 0 && (
                <ul className="space-y-1.5 pl-3 list-disc text-[11px] text-[#777777]">
                  {points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}

              {skills && skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[9px] px-2 py-0.5 rounded bg-[#161616] border border-[#222222] text-[#888888] hover:text-white hover:border-[#444] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function AboutSection() {
  return (
    <section id="about" data-section-label="About Section" className="px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Biography (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">Biography</h2>
            <p className="text-xs text-[#555] uppercase tracking-widest font-mono">About me & my developer background</p>
          </div>

          <div className="text-sm text-[#888888] leading-relaxed space-y-4 font-mono">
            <p>
              I&apos;m <strong className="text-white">{siteConfig.name}</strong>, a developer based in {siteConfig.location}.
              I build mobile apps, custom backend pipelines, and AI systems.
            </p>
            <p>
              I focus on the intersection of clean visual design and clean codebase architecture — making sure user interfaces feel smooth while compiling clean.
            </p>
            <p>
              Currently exploring LLMs, Kotlin Multiplatform, and next-generation web technologies.
            </p>
          </div>

          {/* Social connections and CTA */}
          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xs font-semibold px-4 py-2.5 rounded-lg border border-[#333] text-white bg-[#111] hover:bg-[#222] transition-colors font-mono"
            >
              Email me
            </a>
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-4 py-2.5 rounded-lg border border-transparent text-[#080808] bg-white hover:bg-neutral-200 transition-colors font-mono"
            >
              Schedule a Call
            </a>
          </div>
        </motion.div>

        {/* Accordions (Right) */}
        <div className="space-y-8">
          
          {/* Experience Accordions */}
          <div className="space-y-4">
            <p className="text-[10px] font-semibold text-[#555] uppercase tracking-widest border-l-2 border-white/20 pl-2">
              Work Experience
            </p>
            <div className="space-y-3">
              {experience.map((exp, i) => (
                <AccordionItem
                  key={i}
                  title={exp.role}
                  subtitle={exp.company}
                  period={exp.period}
                  description={exp.description}
                  skills={exp.company.includes("APDCL") ? ["Kotlin", "Jetpack Compose", "MVVM", "MPAndroidChart"] : ["Next.js", "React.js", "Node.js", "REST APIs"]}
                />
              ))}
            </div>
          </div>

          {/* Achievements Accordions */}
          <div className="space-y-4">
            <p className="text-[10px] font-semibold text-[#555] uppercase tracking-widest border-l-2 border-white/20 pl-2">
              Achievements & Certs
            </p>
            <div className="space-y-3">
              {achievements.map((ach, i) => (
                <AccordionItem
                  key={i}
                  title={ach.title}
                  subtitle={ach.provider}
                  period="Verified"
                  description={ach.description}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
