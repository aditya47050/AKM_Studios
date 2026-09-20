import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  Code2,
  Cpu,
  Layout,
  Cloud,
  Layers,
  CheckCircle2,
  ArrowRight,
  Workflow,
  Search,
  FileCode,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { SERVICES } from "@/data/content";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Comprehensive software engineering capabilities including Mobile App Development, Web Applications, React/React Native, Cloud & Backend Integration, and Digital Product Development by AKM Studios.",
};

export default function ServicesPage() {
  const serviceIconMap: Record<string, React.ReactNode> = {
    Smartphone: <Smartphone className="w-8 h-8 text-blue-400" />,
    Globe: <Globe className="w-8 h-8 text-cyan-400" />,
    Code2: <Code2 className="w-8 h-8 text-indigo-400" />,
    Cpu: <Cpu className="w-8 h-8 text-emerald-400" />,
    Layout: <Layout className="w-8 h-8 text-violet-400" />,
    Cloud: <Cloud className="w-8 h-8 text-sky-400" />,
    Layers: <Layers className="w-8 h-8 text-blue-400" />,
  };

  return (
    <div className="relative overflow-hidden py-12 sm:py-16">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="glow-primary top-10 right-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Header Hero */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>Studio Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Specialized Software Engineering & Digital Product Services
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed">
            AKM Studios delivers focused software engineering services tailored to modern performance, reliability, and security requirements. Explore our core technical capabilities below.
          </p>
        </div>

        {/* Detailed Services Breakdown */}
        <div className="space-y-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={service.slug}
              className="scroll-mt-28 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 transition-all hover:border-slate-700/80"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Service Info */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700/80 flex items-center justify-center shadow-md">
                      {serviceIconMap[service.iconName] || <Code2 className="w-8 h-8 text-blue-400" />}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                        Capability 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Primary Technologies:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="lg:col-span-6 bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 sm:p-7 space-y-4">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>Technical Deliverables & Scope</span>
                  </h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-slate-800/80 flex justify-end">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300"
                    >
                      <span>Inquire about {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Engineering Methodology Section */}
        <div className="space-y-10 bg-slate-950/70 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Our Engineering & Delivery Process
            </h2>
            <p className="text-sm text-slate-400">
              A structured, transparent approach to software development from discovery to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-white">Technical Scoping</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Requirements gathering, API schema drafting, system architecture design, and sprint roadmap planning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-white">Iterative Sprints</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Component development, state management, API integration, and regular code reviews via Git branches.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-white">Quality Assurance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Automated unit tests, responsive viewport verification, security audits, and performance tuning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm">
                04
              </div>
              <h3 className="text-base font-bold text-white">Production Release</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                CI/CD pipeline rollout, cloud provisioning, domain configuration, and operational telemetry monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6 pt-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Have a Specific Technical Requirement?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Contact AKM Studios with your project requirements or software specifications.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all text-sm"
            >
              <span>Submit Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
