"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github } from "./Icons";
import { siteConfig } from "@/lib/data";

interface NavbarProps {
  githubStars?: number;
}

export default function Navbar({ githubStars = 0 }: NavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 h-14"
      style={{
        background: "rgba(8,8,8,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <Link href="/" className="text-sm font-semibold text-white tracking-tight">
        {siteConfig.handle}
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href="/projects"
          className="text-sm text-[#888] hover:text-white transition-colors duration-200"
        >
          Projects
        </Link>
        <Link
          href="/artgallery"
          className="text-sm text-[#888] hover:text-white transition-colors duration-200"
        >
          Art Gallery
        </Link>
        <a
          href={`https://github.com/${siteConfig.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-[#888] hover:text-white transition-colors duration-200"
        >
          <Github size={16} />
          {githubStars > 0 && <span>{githubStars}</span>}
        </a>
      </div>
    </motion.nav>
  );
}
