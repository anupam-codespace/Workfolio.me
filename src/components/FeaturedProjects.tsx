"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="px-6 md:px-12 lg:px-16 py-20 border-t border-[#222]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Featured Work</h2>
          <p className="text-[#888] text-sm">A selection of things I&apos;ve built</p>
        </div>
        <Link href="/projects" className="btn-secondary text-xs">
          View All →
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
