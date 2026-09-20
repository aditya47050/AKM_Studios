import React from "react";
import Link from "next/link";
import { Layers, MapPin, Mail, ArrowUpRight, ShieldCheck, Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#080C14] border-t border-slate-800/80 text-slate-400 relative z-10">
      {/* Upper Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1 & 2: Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                AKM <span className="text-blue-400 font-medium">Studios</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              AKM Studios is a dedicated software and digital product studio specializing in building scalable web platforms, high-performance mobile applications, and reliable cloud-integrated systems.
            </p>

            <div className="pt-2 space-y-2.5 text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="mailto:contact@akmstudios.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  contact@akmstudios.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-400 transition-colors">
                  Products & Projects
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-blue-400 transition-colors">
                  Technology Stack
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#mobile" className="hover:text-blue-400 transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services#web" className="hover:text-blue-400 transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services#react" className="hover:text-blue-400 transition-colors">
                  React & React Native
                </Link>
              </li>
              <li>
                <Link href="/services#software" className="hover:text-blue-400 transition-colors">
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#cloud" className="hover:text-blue-400 transition-colors">
                  Cloud & Backend Integration
                </Link>
              </li>
              <li>
                <Link href="/services#uiux" className="hover:text-blue-400 transition-colors">
                  UI/UX Implementation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Technical Standards */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Technology
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-slate-500" />
                <span>React & Next.js</span>
              </li>
              <li className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-slate-500" />
                <span>React Native</span>
              </li>
              <li className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-slate-500" />
                <span>TypeScript & Node.js</span>
              </li>
              <li className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-slate-500" />
                <span>Firebase & AWS</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                <span>Git & CI/CD Pipelines</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/60 bg-[#06090F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} <span className="text-slate-300 font-medium">AKM Studios</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-700">•</span>
            <span>Pune, Maharashtra, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
