import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/data/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Official Terms of Service of AKM Studios governing website access, software consulting, and intellectual property.",
};

export default function TermsPage() {
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
            <FileText className="w-3.5 h-3.5 inline mr-1" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Last Updated: {lastUpdated} • AKM Studios ({COMPANY_INFO.location.formatted})
          </p>
        </div>

        <div className="space-y-8 text-slate-300 text-sm leading-relaxed border-t border-slate-800 pt-8">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing the website <strong>akmstudios.com</strong> or engaging <strong>AKM Studios</strong> for digital product engineering, software development, or consulting services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Scope of Services</h2>
            <p>
              AKM Studios provides professional software engineering services, including but not limited to mobile application development, web application engineering, React/React Native development, cloud infrastructure integration, and digital product consulting. All engagements are formalized via specific Statements of Work (SOWs), Master Services Agreements (MSAs), or written service agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise agreed upon in a customized bilateral agreement:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li><strong>Client Deliverables:</strong> Intellectual property created specifically for a client pursuant to a paid statement of work transfers to the client upon full receipt of contracted compensation.</li>
              <li><strong>Studio Assets & Pre-existing IP:</strong> AKM Studios retains all rights, title, and interest in its pre-existing libraries, toolkits, developer tools, algorithms, and website content.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Acceptable Use</h2>
            <p>
              You agree not to misuse our website or engineering infrastructure. You shall not attempt to decompile, reverse-engineer, conduct unauthorized vulnerability scans, or disrupt the operation of any system operated by AKM Studios.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Disclaimer of Warranties</h2>
            <p>
              The website and general materials are provided &ldquo;as is&rdquo; without warranties of any kind, whether express or implied. Specific warranties regarding bespoke software deliverables are governed solely by applicable written client agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, AKM Studios shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your access to or inability to access our website or services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">7. Governing Law & Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic of India. The courts located in <strong>Pune, Maharashtra, India</strong> shall have exclusive jurisdiction over any legal proceedings arising hereunder.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-800">
            <h2 className="text-lg font-bold text-white">8. Inquiries</h2>
            <p>
              For legal inquiries or questions regarding our terms, please contact:
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
