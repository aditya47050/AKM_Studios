import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  Server,
  Smartphone,
  Globe,
  Terminal,
  CheckCircle2,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { PROJECTS } from "@/data/content";

export const metadata: Metadata = {
  title: "Products & Projects",
  description:
    "Explore software products, web platforms, mobile applications, and developer tools developed and maintained by AKM Studios.",
};

export default function ProductsPage() {
  const categoryIconMap: Record<string, React.ReactNode> = {
    "Web Application": <Globe className="w-5 h-5 text-cyan-400" />,
    "Mobile Application": <Smartphone className="w-5 h-5 text-blue-400" />,
    "Cloud Platform": <Server className="w-5 h-5 text-indigo-400" />,
    "Developer Tool": <Terminal className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <div className="relative overflow-hidden py-12 sm:py-16">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="glow-primary top-20 left-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Header Hero */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Product Showcase</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Software Products & Engineering Projects
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed">
            A directory of software applications, mobile systems, cloud integration hubs, and developer tooling architected, built, and supported by AKM Studios.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-8 hover:border-slate-700 transition-all shadow-lg"
            >
              <div className="space-y-6">
                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
                      {categoryIconMap[project.category] || <Cpu className="w-5 h-5 text-blue-400" />}
                    </div>
                    <span className="text-xs font-semibold text-slate-300">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {project.status}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
                    {project.title}
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Platform Specs */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium">Deployment Platform: </span>
                    <span className="text-slate-200 font-semibold">{project.platform}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Architecture: </span>
                    <span className="text-slate-300">{project.architectureHighlights}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Key Architectural Features:
                  </div>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies footer */}
              <div className="pt-5 border-t border-slate-800">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Technology Stack:
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-medium text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Standards & Practices Box */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Studio Product Engineering Standards
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every software product architected by AKM Studios is developed adhering to verifiable engineering protocols:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-1.5">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Type Safety & Verification</span>
              </div>
              <p className="text-slate-400">
                Strict TypeScript compilation across all application layers preventing runtime type mismatch errors.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-1.5">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <Server className="w-4 h-4 text-cyan-400" />
                <span>Modular Codebase Architecture</span>
              </div>
              <p className="text-slate-400">
                Clean separation of presentation, state management, API access layers, and persistence mechanisms.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-1.5">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span>Automated CI/CD Pipelines</span>
              </div>
              <p className="text-slate-400">
                Continuous integration checks, automated testing passes, and deterministic build artifacts.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6 pt-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need a Custom Digital Product or Application?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Discuss your technical product roadmap with the AKM Studios development team.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all text-sm"
            >
              <span>Consult on a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
