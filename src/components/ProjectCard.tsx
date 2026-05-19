"use client";

import { Github, ExternalLink } from "./Icons";

interface Project {
  id: number;
  title: string;
  description: string;
  status: "live" | "building";
  tags: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  stars: number;
  image: null;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card group flex flex-col h-full">
      {/* Image placeholder / preview area */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        {/* Stars badge */}
        {project.githubUrl && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs text-[#888]"
            style={{ background: "rgba(0,0,0,0.6)", border: "1px solid #333", backdropFilter: "blur(4px)" }}
          >
            <Github size={12} />
            <span>{project.stars}</span>
          </div>
        )}

        {/* Placeholder background */}
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #111 0%, #1a1a1a 100%)",
          }}
        >
          <div className="text-center px-6">
            <div
              className="text-4xl font-black text-[#2a2a2a] tracking-tighter"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {project.title}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base font-bold text-white">{project.title}</h3>
          <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
            {project.status === "live" ? (
              <>
                <span className="status-live" />
                <span className="text-xs text-[#22c55e]">live</span>
              </>
            ) : (
              <>
                <span className="status-building" />
                <span className="text-xs text-[#eab308]">building</span>
              </>
            )}
          </div>
        </div>

        <p className="text-sm text-[#888] leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md text-[#666]"
              style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm text-white font-medium rounded-lg transition-all duration-200 hover:opacity-90"
              style={{ background: "#1a1a1a", border: "1px solid #333" }}
            >
              <ExternalLink size={14} />
              View Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm text-[#888] font-medium rounded-lg transition-all duration-200 hover:text-white hover:border-[#444]"
              style={{ background: "#111", border: "1px solid #2a2a2a" }}
            >
              <Github size={14} />
              Github
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <div className="flex-1 flex items-center justify-center py-2.5 text-sm text-[#444] rounded-lg" style={{ border: "1px solid #1a1a1a" }}>
              Coming soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
