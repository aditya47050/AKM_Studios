import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Target,
  Eye,
  Shield,
  CheckCircle2,
  Code2,
  Layers,
  Cpu,
  ArrowRight,
  Sparkles,
  MapPin,
  FileCode,
  Globe,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AKM Studios — an independent software and digital product studio based in Pune, Maharashtra, India, dedicated to engineering reliable, user-friendly digital products.",
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden py-12 sm:py-16">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="glow-primary top-20 left-1/3 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Header Hero */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>About AKM Studios</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            A Technology Studio Focused on Practical & Resilient Software
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed">
            AKM Studios is a software and digital product studio established with a focused objective: to architect, develop, and support robust software applications, web platforms, and digital systems built for operational reliability and enduring performance.
          </p>
        </div>

        {/* Studio Overview & Origins */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Company Overview
            </h2>
            <p>
              Headquartered in <strong>Pune, Maharashtra, India</strong>, AKM Studios operates as a dedicated software engineering and digital product studio. We specialize in full-stack web platforms, cross-platform mobile applications, and cloud-integrated backend systems.
            </p>
            <p>
              Unlike conventional agencies that outsource or rely on disposable templates, our studio treats software engineering as an exacting discipline. We combine strict architectural standards, comprehensive type safety through TypeScript, and modern component systems to build maintainable technology products.
            </p>
            <p>
              Our capabilities cover the complete software engineering lifecycle: from technical architecture definition, API design, and user interface implementation, to cloud provisioning, testing, and continuous deployment.
            </p>
          </div>

          {/* Quick Facts Card */}
          <div className="lg:col-span-5 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <FileCode className="w-5 h-5 text-blue-400" />
              <span>Studio Quick Facts</span>
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <span className="text-slate-500 text-xs uppercase tracking-wider block">Legal Name</span>
                <span className="text-slate-200 font-semibold">{COMPANY_INFO.name}</span>
              </div>
              <div>
                <span className="text-slate-500 text-xs uppercase tracking-wider block">Industry</span>
                <span className="text-slate-200 font-semibold">{COMPANY_INFO.industry}</span>
              </div>
              <div>
                <span className="text-slate-500 text-xs uppercase tracking-wider block">Business Type</span>
                <span className="text-slate-200 font-semibold">{COMPANY_INFO.businessType}</span>
              </div>
              <div>
                <span className="text-slate-500 text-xs uppercase tracking-wider block">Primary Location</span>
                <span className="text-slate-200 font-semibold flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  {COMPANY_INFO.location.formatted}
                </span>
              </div>
              <div>
                <span className="text-slate-500 text-xs uppercase tracking-wider block">Official Inquiries</span>
                <span className="text-blue-400 font-medium">{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Core Values */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Mission, Vision & Core Values
            </h2>
            <p className="text-sm text-slate-400">
              The foundational pillars that guide our software engineering practices and client collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                To engineer practical, scalable, and resilient software applications and digital products that solve real-world operational challenges, empower businesses, and deliver intuitive user experiences.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center">
                <Eye className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                To be recognized as a premier software and digital product studio trusted for technical excellence, architectural discipline, and steadfast dedication to building software that lasts.
              </p>
            </div>

          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            
            <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Technical Integrity</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We write clean, documented, and testable code. We never cut corners on security, schema design, or type safety.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Product Craft</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Usability and speed matter. We optimize every screen, interaction, and database query for responsive performance.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Practical Solutions</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We prioritize proven, pragmatic technologies over fleeting hype to deliver dependable software that solves tangible needs.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">Clear Accountability</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Transparent milestones, direct communication, version-controlled delivery, and full ownership of software quality.
              </p>
            </div>

          </div>
        </div>

        {/* What We Build Section */}
        <div className="space-y-8 bg-slate-950/60 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              What We Build at AKM Studios
            </h2>
            <p className="text-sm text-slate-400">
              Our engineering scope spans diverse software disciplines and platforms:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 p-5 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-400">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">Web Platforms & SaaS</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Single-page and server-rendered web applications, business portals, admin consoles, and subscription software products.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="w-9 h-9 rounded-lg bg-cyan-600/10 flex items-center justify-center text-cyan-400">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">Mobile Applications</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multi-platform iOS and Android applications utilizing React Native with native bridge integrations, offline sync, and push services.
              </p>
            </div>

            <div className="space-y-3 p-5 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="w-9 h-9 rounded-lg bg-indigo-600/10 flex items-center justify-center text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">Cloud APIs & Tooling</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                RESTful/GraphQL API services, serverless cloud functions, database synchronization engines, and developer utilities.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6 pt-8 border-t border-slate-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Looking for a Dedicated Engineering Studio?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Discuss your technical requirements with our engineering team based in Pune, India.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all text-sm"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
