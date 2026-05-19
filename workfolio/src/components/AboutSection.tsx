"use client";

import { motion } from "framer-motion";
import { experience, achievements, siteConfig } from "@/lib/data";
import { Mail, Award } from "./Icons";

export default function AboutSection() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-20 border-t border-[#222]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">About</h2>
          <p className="text-[#888] text-sm mb-10">A bit about me and my journey</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <p className="text-[#bbb] leading-relaxed mb-4">
              I&apos;m <strong className="text-white">{siteConfig.name}</strong>, a developer based in {siteConfig.location}.
              I specialize in building Android apps, full-stack web systems, and AI-powered tools
              that are both functional and aesthetically polished.
            </p>
            <p className="text-[#888] leading-relaxed mb-4">
              I love the intersection of great design and powerful engineering — where software
              that looks beautiful also performs flawlessly. Currently focused on mobile development
              and AI applications.
            </p>
            <p className="text-[#888] leading-relaxed mb-8">
              When I&apos;m not coding, I&apos;m probably exploring new technologies, contributing to
              open source, or thinking about the next thing to build.
            </p>

            <a
              href={`mailto:${siteConfig.email}`}
              className="btn-secondary text-sm"
            >
              <Mail size={16} />
              Get in touch
            </a>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-6">
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div
                    className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                    style={{ background: "#333" }}
                  />
                  <div>
                    <div className="flex flex-col mb-1">
                      <span className="text-sm font-semibold text-white">{exp.role}</span>
                      <span className="text-xs text-[#888]">{exp.company}</span>
                    </div>
                    <p className="text-xs text-[#555] mb-2">{exp.period}</p>
                    <p className="text-xs md:text-sm text-[#888] leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xs font-semibold text-[#555] uppercase tracking-widest mb-6">
              Achievements & Certs
            </h3>
            <div className="space-y-6">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-0.5 text-[#888] shrink-0">
                    <Award size={16} />
                  </div>
                  <div>
                    <div className="flex flex-col mb-1">
                      <span className="text-sm font-semibold text-white">{ach.title}</span>
                      <span className="text-xs text-[#888]">{ach.provider}</span>
                    </div>
                    <p className="text-xs md:text-sm text-[#666] leading-relaxed">{ach.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
