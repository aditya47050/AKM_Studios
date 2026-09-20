import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  Globe,
  Code2,
  Cpu,
  Layout,
  Cloud,
  CheckCircle2,
  Layers,
  Terminal,
  ShieldCheck,
  Zap,
  Box,
  Compass,
} from "lucide-react";
import { SERVICES, PROJECTS, TECH_CATEGORIES, COMPANY_INFO } from "@/data/content";

export default function HomePage() {
  const serviceIconMap: Record<string, React.ReactNode> = {
    Smartphone: <Smartphone className="w-6 h-6 text-blue-400" />,
    Globe: <Globe className="w-6 h-6 text-cyan-400" />,
    Code2: <Code2 className="w-6 h-6 text-indigo-400" />,
    Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
    Layout: <Layout className="w-6 h-6 text-violet-400" />,
    Cloud: <Cloud className="w-6 h-6 text-sky-400" />,
    Layers: <Layers className="w-6 h-6 text-blue-400" />,
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="glow-primary top-10 left-1/2 -translate-x-1/2" />
      <div className="glow-primary top-[1200px] -left-40" />
      <div className="glow-primary top-[2400px] -right-40" />

      {/* 1. HERO SECTION */}
      <section className="relative z-10 pt-16 pb-20 md:pt-24 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>Software & Digital Product Studio</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Building Digital Products{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
              That Make an Impact
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            AKM Studios develops software applications, web platforms, and digital products engineered with modern technology, resilient architecture, and refined user experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold px-7 py-3.5 rounded-xl border border-slate-700/70 transition-all"
            >
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Quick Metrics / Verification Attributes */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800/80 text-left">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Studio Focus</div>
              <div className="text-base font-bold text-white mt-1">Full-Cycle Software</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Core Frameworks</div>
              <div className="text-base font-bold text-white mt-1">React & Next.js</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Mobile Systems</div>
              <div className="text-base font-bold text-white mt-1">React Native / iOS & Android</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Location</div>
              <div className="text-base font-bold text-white mt-1">Pune, India</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION SECTION */}
      <section className="relative z-10 py-20 bg-slate-950/60 border-y border-slate-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <Compass className="w-4 h-4" />
                <span>About AKM Studios</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Engineering Practical, Reliable & High-Performance Software
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                AKM Studios is an independent technology studio dedicated to building high-grade software systems. We focus on bridging the gap between sophisticated technical architecture and seamless digital usability.
              </p>
              <p className="text-base text-slate-400 leading-relaxed">
                From initial technical discovery to cloud deployment, we adhere to strict software development methodologies, modular codebases, and comprehensive test standards to ensure every product operates smoothly in production environments.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Learn more about our studio & values</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-base font-semibold text-white">Clean Engineering</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Strict TypeScript types, modular component hierarchies, and maintainable software standards.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-base font-semibold text-white">High Performance</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Optimized rendering cycles, lightweight bundles, fast asset delivery, and responsive execution.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-base font-semibold text-white">Cloud Integration</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Secure API layers, cloud database synchronization, and scalable serverless backend services.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center">
                  <Box className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-base font-semibold text-white">Product Craft</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Carefully considered UX architecture, accessible layouts, and clear interactive feedback.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW SECTION */}
      <section className="relative z-10 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span>Capabilities & Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Core Engineering & Development Capabilities
          </h2>
          <p className="text-base text-slate-400">
            We provide end-to-end software development capabilities spanning web platforms, multi-platform mobile applications, and resilient cloud backends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shadow-inner">
                  {serviceIconMap[service.iconName] || <Code2 className="w-6 h-6 text-blue-400" />}
                </div>

                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="pt-2">
                  <div className="text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                    Key Highlights:
                  </div>
                  <ul className="space-y-1.5">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {service.techStack.slice(0, 2).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-800 text-[11px] font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-xs font-medium text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-white hover:bg-slate-800 hover:border-slate-700 transition-all"
          >
            <span>Explore All Services & Deliverables</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS / PROJECTS SECTION */}
      <section className="relative z-10 py-24 bg-slate-950/80 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <span>Showcase</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Featured Software Systems & Products
              </h2>
              <p className="text-base text-slate-400">
                A selection of digital applications, cloud hubs, and internal developer tooling architected by AKM Studios.
              </p>
            </div>
            <div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>View Full Product Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Platform & Architecture:
                    </div>
                    <div className="text-xs text-slate-400">
                      <span className="text-slate-300 font-medium">Platform:</span> {project.platform}
                    </div>
                    <div className="text-xs text-slate-400">
                      <span className="text-slate-300 font-medium">Core Specs:</span> {project.architectureHighlights}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY SECTION */}
      <section className="relative z-10 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span>Stack & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Modern, Resilient Technology Foundation
          </h2>
          <p className="text-base text-slate-400">
            We build software using proven, modern, and production-tested technologies across web, mobile, and cloud environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES.slice(0, 3).map((cat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-4">
              <h3 className="text-base font-bold text-white border-b border-slate-800 pb-3">
                {cat.category}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start justify-between gap-3 text-xs">
                    <div>
                      <div className="font-semibold text-slate-200">{item.name}</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">{item.description}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-medium text-blue-400 shrink-0">
                      {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>View Complete Technology Ecosystem & Philosophy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 6. WHY AKM STUDIOS */}
      <section className="relative z-10 py-24 bg-slate-950/80 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <span>Studio Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Why Collaborate with AKM Studios
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                We operate as a disciplined software engineering studio focused on technical craftsmanship, clean architectural boundaries, and direct communication.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                By maintaining a sharp focus on modern JavaScript/TypeScript ecosystems, cloud-native deployments, and cross-platform mobile systems, we ensure high code velocity without compromising long-term maintainability.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm">
                  01
                </div>
                <h3 className="text-base font-semibold text-white">Architectural Integrity</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We build systems with clean separation of concerns, strict type safety, and scalable database schemas.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-sm">
                  02
                </div>
                <h3 className="text-base font-semibold text-white">Product-Centric Thinking</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineering decisions are guided by usability, performance benchmarks, and real-world operational viability.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-sm">
                  03
                </div>
                <h3 className="text-base font-semibold text-white">Transparent Iteration</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Regular sprint demos, version-controlled repositories, clear documentation, and measurable milestone delivery.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-sm">
                  04
                </div>
                <h3 className="text-base font-semibold text-white">Direct Technical Ownership</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every project is handled by seasoned software engineers who write and review production code directly.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA BANNER */}
      <section className="relative z-10 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-950/40 border border-blue-500/20 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Ready to Build Your Next Digital Product?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Connect with AKM Studios to discuss your software development requirements, technical specifications, or product scoping.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all"
              >
                <span>Initiate Business Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:contact@akmstudios.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium px-6 py-3.5 rounded-xl border border-slate-700 transition-all text-sm"
              >
                <span>Email: contact@akmstudios.com</span>
              </a>
            </div>
            <div className="text-xs text-slate-500 pt-2">
              Based in Pune, Maharashtra, India • Responding within 1–2 business days
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
