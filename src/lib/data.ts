export const siteConfig = {
  name: "Anupam Saha",
  handle: "@code by Anupam",
  tagline: "I build for the future.",
  description: "Android Developer, Full Stack Engineer, and AI Enthusiast. I build mobile apps, AI tools, and full-stack systems that look and feel great to use.",
  subtitle: "Android Developer · Full Stack Engineer · AI Enthusiast",
  location: "Assam, India",
  email: "anupamsaha.work@gmail.com",
  calendly: "https://cal.com/anupamsaha", // update with your actual link if needed
  github: "anupamsaha",
  twitter: "anupamsaha_", // placeholder / update if different
  linkedin: "anupamsaha",
  discord: "anupamsaha",
  website: "workfolio.me",
};

export const skills = [
  // Languages
  { name: "C/C++", category: "language" },
  { name: "Python", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "SQL", category: "language" },
  { name: "Kotlin", category: "language" },
  { name: "Java", category: "language" },
  // Mobile
  { name: "Android Development", category: "mobile" },
  { name: "Jetpack Compose", category: "mobile" },
  { name: "MVVM", category: "mobile" },
  { name: "Coroutines & LiveData", category: "mobile" },
  // Frontend
  { name: "React.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "shadcn/ui", category: "frontend" },
  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Flask", category: "backend" },
  // Databases
  { name: "MySQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Supabase", category: "database" },
  { name: "Firebase", category: "database" },
  // Tools & AI
  { name: "Git", category: "tool" },
  { name: "Docker", category: "tool" },
  { name: "Vercel", category: "tool" },
  { name: "LangChain", category: "tool" },
  { name: "HuggingFace", category: "tool" },
];

export const projects = [
  {
    id: 1,
    title: "SpendCraft",
    description: "An intelligent expense management platform delivering a high-performance PWA experience. Implements AI-powered expense parsing that categorizes transactions via natural text or voice inputs.",
    status: "live" as const,
    tags: ["Next.js", "React.js", "Tailwind CSS", "shadcn/ui", "Zustand"],
    liveUrl: "https://spendcraft.vercel.app", // Placeholder / update with actual if available
    githubUrl: "https://github.com/anupamsaha/spendcraft",
    stars: 12,
    image: null,
  },
  {
    id: 2,
    title: "AI Interview Assistant",
    description: "Automated Technical Interview Platform with PDF/DOCX resume parsing using pdf.js and mammoth.js. Implements a dynamic 6-question interview engine using Google Gemini with difficulty-based timers and detailed interviewer dashboard.",
    status: "live" as const,
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui", "Zustand", "Gemini API"],
    liveUrl: "https://ai-interview-assistant.vercel.app", // Placeholder / update with actual if available
    githubUrl: "https://github.com/anupamsaha/ai-interview-assistant",
    stars: 18,
    image: null,
  },
  {
    id: 3,
    title: "APDCL App Flow",
    description: "Built multi-screen app flows using Kotlin, Jetpack Compose, MVVM during internship at APDCL. Implemented REST data pipelines and comparison UIs using MPAndroidChart + Compose animations.",
    status: "live" as const,
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Coroutines", "MPAndroidChart"],
    liveUrl: null,
    githubUrl: "https://github.com/anupamsaha/apdcl-compose",
    stars: 5,
    image: null,
  },
];

export const experience = [
  {
    company: "Globizhub India Private Limited",
    role: "Developer Intern (Remote)",
    period: "Apr 2026 — Present",
    description: "Onboarding into the full-stack workflow using React, Next.js, Node.js, and REST APIs. Contributing to codebase familiarization, minor fixes, and initial API integration tasks.",
  },
  {
    company: "Assam Power Distribution Company Limited (APDCL)",
    role: "App Developer Intern",
    period: "Jan 2025 — July 2025",
    description: "Built multi-screen app flows using Kotlin, Jetpack Compose, and MVVM, improving UI stability by 70%. Implemented REST data pipelines, comparison UIs using MPAndroidChart, and optimized layouts to reduce render overhead.",
  },
];

export const achievements = [
  {
    title: "Trekathon 1.0 Finalist",
    provider: "By Frint",
    description: "Achieved a top-tier finalist position, advancing from an initial pool of 1200+ teams to the elite 100+ shortlisted innovators across Northeast India.",
  },
  {
    title: "Meta Front-End Developer Specialization",
    provider: "Meta",
    description: "React, UI/UX fundamentals, responsive design.",
  },
  {
    title: "Google Cloud Associate Cloud Engineer (ACE)",
    provider: "Google Cloud",
    description: "Cloud development, networking, IAM, Kubernetes.",
  },
  {
    title: "AWS Developer Associate (DVA-C02)",
    provider: "Amazon Web Services",
    description: "Serverless, API Gateway, Lambda, CI/CD pipelines.",
  },
];
