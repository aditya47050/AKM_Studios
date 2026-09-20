import React from "react";
import type { Metadata } from "next";
import { Mail, MapPin, Clock, ShieldCheck, MessageSquare, Building2, HelpCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { COMPANY_INFO } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact Us & Business Inquiries",
  description:
    "Get in touch with AKM Studios for software development inquiries, technical consultations, and digital product collaborations in Pune, Maharashtra, India.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden py-12 sm:py-16">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="glow-primary top-10 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header Hero */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Business Communication</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Connect with AKM Studios
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed">
            Reach out to our software development and digital product studio for project scoping, technical consultations, or partnership inquiries.
          </p>
        </div>

        {/* Contact Layout: Info Column + Form Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Business Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-bold text-white tracking-tight border-b border-slate-800 pb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-400" />
                <span>Official Studio Information</span>
              </h2>

              <div className="space-y-5 text-sm">
                
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-blue-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                      Operating Location
                    </span>
                    <span className="text-base text-white font-medium">
                      {COMPANY_INFO.location.formatted}
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Software Studio registered & operating in Maharashtra, India
                    </span>
                  </div>
                </div>

                {/* Direct Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-blue-400 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                      General & Business Inquiries
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-base text-blue-400 hover:underline font-medium break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      For proposal requests, RFPs, and official correspondence
                    </span>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-cyan-400 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                      Response Window
                    </span>
                    <span className="text-sm text-slate-200 font-medium">
                      1 – 2 Business Days
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Monday to Friday, Indian Standard Time (IST)
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Business Verification Note Card */}
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Business Credibility & Verification</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                AKM Studios operates as an independent software studio. All business engagements and contracts are reviewed directly by our core software engineering leadership to ensure scope feasibility and technical integrity.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

        {/* Business Engagement FAQ Section */}
        <div className="pt-8 border-t border-slate-800/80 space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <HelpCircle className="w-4 h-4" />
              <span>Inquiry FAQ</span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Frequently Asked Questions Regarding Engagements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">
                What information is helpful in an initial inquiry?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Providing a high-level summary of your application goals, target platform (Web, Mobile iOS/Android, or Cloud API), anticipated timeline, and any existing design/architecture assets helps us evaluate your request efficiently.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">
                Do you execute non-disclosure agreements (NDAs)?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Yes. Prior to detailed architectural disclosures or proprietary data sharing, we routinely sign mutual non-disclosure agreements with enterprise and business clients.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">
                What engagement models do you support?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We work on fixed-scope milestone delivery for clearly defined digital products and scoped sprint cycles for ongoing technical engineering and architectural iterations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-white">
                Where is the studio based?
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                AKM Studios is headquartered and operates out of Pune, Maharashtra, India, providing remote and hybrid software development services to partners worldwide.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
