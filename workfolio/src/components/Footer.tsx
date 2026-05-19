"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#222] px-6 md:px-12 lg:px-16 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white mb-1">{siteConfig.name}</p>
          <p className="text-xs text-[#555]">
            © {new Date().getFullYear()} — Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/projects" className="text-xs text-[#555] hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/artgallery" className="text-xs text-[#555] hover:text-white transition-colors">
            Art Gallery
          </Link>
          <a
            href={`https://github.com/${siteConfig.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-white transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href={`https://linkedin.com/in/${siteConfig.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-white transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
