"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { Linkedin, Github, MessageCircle } from "./Icons";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen grid-bg flex flex-col">
      {/* Blue side glows */}
      <div className="blue-glow-left" />
      <div className="blue-glow-right" />

      {/* Main Hero */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Big heading */}
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tight text-white">
            Hi I&apos;m {siteConfig.name.split(" ")[0]}{" "}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                width: "clamp(3rem,8vw,6.5rem)",
                height: "clamp(3rem,8vw,6.5rem)",
                background: "#1a1a1a",
                borderRadius: "50%",
                justifyContent: "center",
                verticalAlign: "middle",
                border: "1px solid #333",
                marginLeft: "0.1em",
              }}
            >
              ✓
            </span>
            <br />
            {siteConfig.tagline}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 text-base md:text-lg text-[#888] max-w-xl leading-relaxed"
          >
            {siteConfig.description}
            <br />
            {siteConfig.subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-10"
          >
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Meeting
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Social pill - centered bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2"
      >
        <div className="social-pill">
          <a
            href={`https://twitter.com/${siteConfig.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter / X"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.638 5.904-5.638Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href={`https://linkedin.com/in/${siteConfig.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`https://github.com/${siteConfig.github}`}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={`https://discord.com/users/${siteConfig.discord}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Discord"
          >
            <MessageCircle size={18} />
          </a>
          {/* Online indicator */}
          <span className="status-live" title="Available for work" />
        </div>
      </motion.div>

      {/* Skills bar at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 flex"
      >
        <Link
          href="#skills"
          className="flex-1 flex items-center justify-center h-16 text-sm font-semibold text-white border-t border-r border-[#222] hover:bg-[#111] transition-colors"
          style={{ background: "rgba(17,17,17,0.8)" }}
        >
          Skills
        </Link>
        <Link
          href="/projects"
          className="flex-1 flex items-center justify-center h-16 text-sm font-semibold text-[#888] border-t border-[#222] hover:bg-[#111] hover:text-white transition-colors"
          style={{ background: "rgba(8,8,8,0.8)" }}
        >
          Projects
        </Link>
      </motion.div>
    </section>
  );
}
