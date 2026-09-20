import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Terminal,
  Code2,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  GitBranch,
  Cloud,
  Database,
  Smartphone,
  Globe,
  Zap,
} from "lucide-react";
import { TECH_CATEGORIES } from "@/data/content";

export const metadata: Metadata = {
  title: "Technology Stack & Architecture",
  description:
    "Explore the modern technology stack employed by AKM Studios, including React, React Native, Next.js, TypeScript, Node.js, Firebase, AWS, and Git.",
};

export default function TechnologyPage() {
  const categoryIconMap: Record<string, React.ReactNode> = {
    "Frontend & Web Technologies": <Globe className="w-6 h-6 text-blue-400" />,
    "Mobile Application Ecosystem": <Smartphone className="w-6 h-6 text-cyan-400" />,
    "Backend & Runtime Environments": <ServerIcon className="w-6 h-6 text-indigo-400" />,
    "Cloud, Databases & Infrastructure": <Cloud className="w-6 h-6 text-sky-400" />,
    "DevOps, Version Control & Quality": <GitBranch className="w-6 h-6 text-emerald-400" />,
  };

  function ServerIcon(props: React.SVGProps<SVGSVGElement>) {
    return <Cpu {...props} />;
  }

  return (
    <div className="relative overflow-hidden py-12 sm:py-16">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="glow-primary top-20 right-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Header Hero */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technology Stack</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Engineered with Modern, Production-Tested Technologies
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed">
            AKM Studios leverages a carefully curated software ecosystem centered on JavaScript/TypeScript, React, React Native, Next.js, Node.js, and cloud platforms to deliver maintainable, high-velocity digital products.
          </p>
        </div>

        {/* Featured Tech Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {[
            { name: "React", role: "UI Library" },
            { name: "Next.js", role: "Fullstack Web" },
            { name: "React Native", role: "Mobile iOS/Android" },
            { name: "TypeScript", role: "Type Safety" },
            { name: "Node.js", role: "Server Runtime" },
            { name: "Firebase", role: "Cloud Services" },
            { name: "AWS", role: "Infrastructure" },
            { name: "Git / GitHub", role: "Version Control" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center space-y-1 hover:border-slate-700 transition-colors"
            >
              <div className="font-bold text-sm text-white">{item.name}</div>
              <div className="text-[11px] text-blue-400">{item.role}</div>
            </div>
          ))}
        </div>

        {/* Categorized Tech Matrix */}
        <div className="space-y-12">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Detailed Technology Ecosystem
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              A comprehensive breakdown of the frameworks, runtimes, database technologies, and tooling used across our projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TECH_CATEGORIES.map((category, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl p-7 sm:p-8 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                      {categoryIconMap[category.category] || <Code2 className="w-5 h-5 text-blue-400" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {category.category}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start justify-between gap-4"
                      >
                        <div>
                          <div className="text-sm font-semibold text-white">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-medium text-blue-400 shrink-0">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Principles */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Our Architectural & Engineering Standards
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              We apply strict engineering disciplines across every repository to guarantee security, maintainability, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Strict Type Safety</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Comprehensive TypeScript configurations with no implicit any, ensuring runtime predictability and simplified refactoring.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Optimized Asset Delivery</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Zero bloated bundles, lazy loading, code-splitting, tree-shaking, and high Core Web Vitals performance scores.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <GitBranch className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Git-Driven CI/CD</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Standardized branch protection rules, pull request reviews, automated lint passes, and reproducible deployment builds.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6 pt-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Have Questions About Our Tech Stack?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Contact us to discuss compatibility, system migrations, or technical architecture for your project.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all text-sm"
            >
              <span>Contact Engineering Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
