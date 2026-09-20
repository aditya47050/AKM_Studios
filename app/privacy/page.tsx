import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Official Privacy Policy of AKM Studios outlining data processing, information security, and user rights.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 2024";

  return (
    <div className="relative overflow-hidden py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4 block w-fit">
            <Shield className="w-3.5 h-3.5 inline mr-1" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Last Updated: {lastUpdated} • AKM Studios ({COMPANY_INFO.location.formatted})
          </p>
        </div>

        <div className="space-y-8 text-slate-300 text-sm leading-relaxed border-t border-slate-800 pt-8">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Introduction</h2>
            <p>
              This Privacy Policy explains how <strong>AKM Studios</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the Studio&rdquo;), a software and digital product studio located in Pune, Maharashtra, India, collects, uses, and safeguards information when you visit our website (<strong>akmstudios.com</strong>) or engage our software engineering services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when submitting inquiries through our contact forms or communicating with our team via email:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Contact details such as your full name, work email address, and company name.</li>
              <li>Project requirements, specifications, and scope descriptions provided in inquiry submissions.</li>
              <li>Standard technical telemetry automatically logged by web servers (e.g., browser type, operating system, and IP address for security and diagnosis).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Use of Information</h2>
            <p>
              The information we collect is strictly used for legitimate business operations:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Responding to project inquiries, requests for proposals (RFPs), and technical scoping questions.</li>
              <li>Executing client contracts, statements of work (SOWs), and software development deliverables.</li>
              <li>Maintaining the security, performance, and integrity of our web platforms.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Data Protection & Security</h2>
            <p>
              We implement industry-standard technical and organizational security measures to protect submitted information against unauthorized access, alteration, disclosure, or destruction. However, no transmission over the Internet can be guaranteed as 100% secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Cookies and Analytics</h2>
            <p>
              Our website may utilize essential cookies and basic privacy-respecting analytics to evaluate page performance, monitor broken links, and optimize loading speeds. You may configure your browser to refuse cookies; however, some site features may experience degraded functionality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Your Rights</h2>
            <p>
              Depending on applicable data protection laws, you may have rights to access, rectify, or request the deletion of your personal information held by our studio. To exercise these rights, please contact us at <strong>contact@akmstudios.com</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">7. Governing Law & Jurisdiction</h2>
            <p>
              This Privacy Policy is governed by the laws of India. Any disputes arising out of or related to this policy shall be subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra, India.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-800">
            <h2 className="text-lg font-bold text-white">8. Contact Information</h2>
            <p>
              For questions, privacy inquiries, or data requests, please contact:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
              <div className="text-white font-semibold">AKM Studios</div>
              <div className="text-slate-400">Pune, Maharashtra, India</div>
              <div>
                Email:{" "}
                <a href="mailto:contact@akmstudios.com" className="text-blue-400 hover:underline">
                  contact@akmstudios.com
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
