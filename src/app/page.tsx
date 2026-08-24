'use client';
import Image from "next/image";
import Link from "next/link";
import LeadCaptureForm from "@/components/sections/LeadCaptureForm";
import NewsletterSignup from "@/components/sections/NewsletterSignup";
import FAQSection from "@/components/sections/FAQSection";
import FadeInSection from "@/components/ui/FadeInSection";
import {
  Mail, TrendingUp, Bot, Cpu, Search, Rocket, CheckCircle, ArrowRight,
  Globe, ShieldCheck, BarChart2, Monitor
} from "lucide-react";

// ── Shared section header pattern ────────────────────────────
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: React.ReactNode }) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block text-[#2180C0] text-xs font-bold uppercase tracking-[0.18em] mb-3">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D3A5C] mt-1 mb-4 tracking-tight">{title}</h2>
      {subtitle && <div className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</div>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full">

      {/* ══════════════════════════════════════════════════════════════
          ABOVE-THE-FOLD BLOCK
          Everything here is visible on first visit — no scroll needed.
          Layout (flex col, exact 100vh minus navbar):
            1. Hero banner with plain background image (~58% height)
            2. OUR BUSINESSES two-column section (~26%)
            3. 4-stat trust bar (~16%)
      ══════════════════════════════════════════════════════════════ */}
      <div
        className="w-full flex flex-col overflow-hidden"
        style={{ height: "calc(100vh - 73px)", minHeight: "620px" }}
      >

        {/* ── 1. HERO BANNER (plain image, no overlays) ── */}
        <div className="relative w-full overflow-hidden" style={{ flex: "0 0 58%" }}>

          {/* Plain background photo — NO gradient, NO opacity overlay */}
          <Image
            src="/image copy 2.png"
            alt="AlliedOne Global Trade & Technology Solutions"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />

          {/* ── Content: left text + bottom-right icons ── */}
          <div className="absolute inset-0 flex flex-col justify-between px-8 sm:px-12 pt-6 pb-4">

            {/* TOP-LEFT: Headline + subtitle + buttons */}
            <div className="max-w-[480px]">
              <h1
                className="font-black tracking-tight leading-[1.1] mb-3"
                style={{ fontSize: "clamp(1.7rem, 3.8vw, 3rem)" }}
              >
                <span className="block text-[#1a5c30]" style={{ textShadow: "0 1px 3px rgba(255,255,255,0.9)" }}>
                  Global Trade
                </span>
                <span className="block text-[#0c5f9e]" style={{ textShadow: "0 1px 3px rgba(255,255,255,0.9)" }}>
                  Technology
                </span>
                <span className="block text-[#0D2D4A]" style={{ textShadow: "0 1px 3px rgba(255,255,255,0.9)" }}>
                  Trusted Partnerships
                </span>
              </h1>

              <p
                className="text-[#0f172a] text-[13px] sm:text-[14px] leading-relaxed mb-4 max-w-[340px] font-semibold"
                style={{ textShadow: "0 1px 4px rgba(255,255,255,0.95)" }}
              >
                Two independent, specialized businesses —<br />
                one shared commitment to reliability, expertise,<br />
                and long-term partnership.
              </p>

              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  href="#our-businesses"
                  className="inline-flex items-center gap-1.5 bg-[#1a5c30] hover:bg-[#154a26] text-white px-4 py-2 rounded-md text-[12.5px] font-bold shadow-md transition-all hover:-translate-y-0.5"
                >
                  <span>Explore Our Businesses</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 bg-white border border-[#94a3b8] text-[#1e293b] px-4 py-2 rounded-md text-[12.5px] font-bold transition-all hover:-translate-y-0.5 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Contact Us
                </Link>
              </div>
            </div>

            {/* BOTTOM-RIGHT: 5 service icon labels */}
            <div className="flex justify-end">
              <div className="flex items-end gap-4 sm:gap-6">
                {[
                  {
                    label: "Web\nDevelopment",
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    ),
                  },
                  {
                    label: "AI & Business\nAutomation",
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                        <circle cx="12" cy="16" r="1" fill="currentColor" />
                      </svg>
                    ),
                  },
                  {
                    label: "Education &\nLearning",
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    ),
                  },
                  {
                    label: "Cloud & Software\nSolutions",
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 16 12 12 8 16" />
                        <line x1="12" y1="12" x2="12" y2="21" />
                        <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
                      </svg>
                    ),
                  },
                  {
                    label: "Digital\nGrowth",
                    icon: (
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </svg>
                    ),
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1 group cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-white/25 backdrop-blur-[2px] border border-white/40 flex items-center justify-center text-white shadow-md group-hover:bg-white/35 transition-all">
                      {item.icon}
                    </div>
                    <span
                      className="text-[9.5px] sm:text-[10.5px] font-semibold text-white text-center leading-tight whitespace-pre-line"
                      style={{ textShadow: "0 1px 5px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.6)" }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>


        {/* ── 2. OUR BUSINESSES (white, below image, still in viewport) ── */}
        <div
          id="our-businesses"
          className="bg-white border-t border-slate-200 flex-shrink-0"
          style={{ flex: "0 0 26%" }}
        >
          <div className="h-full max-w-7xl mx-auto px-8 sm:px-10 flex flex-col justify-center">

            {/* Section label */}
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-10 bg-[#1a5c30]" />
              <span className="text-[10.5px] font-extrabold uppercase tracking-[0.25em] text-[#0D2D4A]">OUR BUSINESSES</span>
              <div className="h-px w-10 bg-[#0c5f9e]" />
            </div>

            {/* Two cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">

              {/* CARD 01 */}
              <div className="flex items-start gap-3 pr-0 md:pr-8 py-1">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#e8f5ee] border-2 border-[#1a5c30]/25 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#1a5c30]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="text-[11px] font-bold text-[#64748b]">01</span>
                    <span className="text-[11.5px] font-black text-[#1a5c30] uppercase tracking-wide">GLOBAL SUPPLY BD (GSBD)</span>
                  </div>
                  <p className="text-[12.5px] font-bold text-[#0D2D4A] mb-1">International Trade &amp; Supply Solutions</p>
                  <p className="text-[11.5px] text-[#475569] leading-relaxed mb-1.5 max-w-[400px]">
                    14+ years of experience in global sourcing, import-export,
                    indenting, and supply chain management for industrial,
                    institutional, and commercial sectors.
                  </p>
                  <Link href="/gsbd" className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#0D2D4A] hover:text-[#1a5c30] transition-colors">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* CARD 02 */}
              <div className="flex items-start gap-3 pl-0 md:pl-8 py-1">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#e8f0fb] border-2 border-[#0c5f9e]/25 flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-[#0c5f9e]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="text-[11px] font-bold text-[#64748b]">02</span>
                    <span className="text-[11.5px] font-black text-[#0c5f9e] uppercase tracking-wide">ALLIEDONE DIGITAL</span>
                  </div>
                  <p className="text-[12.5px] font-bold text-[#0D2D4A] mb-1">Smart IT &amp; Digital Enterprise Solutions</p>
                  <p className="text-[11.5px] text-[#475569] leading-relaxed mb-1.5 max-w-[400px]">
                    Practical technology solutions that help businesses build,
                    automate, and grow — from websites and AI automation
                    to digital learning and enterprise tools.
                  </p>
                  <Link href="/services" className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#0c5f9e] hover:text-[#0a4f80] transition-colors">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* ── 3. TRUST BAR — 4 stat columns ── */}
        <div
          className="bg-[#f8fafc] border-t border-slate-200 flex-shrink-0"
          style={{ flex: "0 0 16%" }}
        >
          <div className="h-full max-w-7xl mx-auto px-8 sm:px-10 flex items-center">
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 divide-y-0 md:divide-x divide-slate-200">

              <div className="flex items-center gap-2.5 md:pr-4">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <TrendingUp className="w-3.5 h-3.5 text-[#0c5f9e]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#0D2D4A] leading-tight">14+ Years of Trade Experience</p>
                  <p className="text-[10px] text-[#64748b] leading-snug">Proven expertise in international<br />trade and business operations.</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 md:px-4">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Globe className="w-3.5 h-3.5 text-[#0c5f9e]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#0D2D4A] leading-tight">Global Network</p>
                  <p className="text-[10px] text-[#64748b] leading-snug">Connections with suppliers,<br />buyers &amp; partners in 50+ markets.</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 md:px-4">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0c5f9e]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#0c5f9e] leading-tight">Reliable &amp; Secure</p>
                  <p className="text-[10px] text-[#64748b] leading-snug">Compliant, verified, and<br />process-driven operations.</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 md:pl-4">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <BarChart2 className="w-3.5 h-3.5 text-[#0c5f9e]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#0c5f9e] leading-tight">Growth-Focused</p>
                  <p className="text-[10px] text-[#64748b] leading-snug">Solutions built for long-term<br />value and future scalability.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      {/* ── END ABOVE-THE-FOLD BLOCK ── */}


      {/* ══════════════════════════════════════════════
          BELOW-FOLD sections (scroll to see)
      ══════════════════════════════════════════════ */}

      {/* Industry trust strip */}
      <section className="bg-gradient-to-r from-[#0D3A5C] via-[#2180C0] to-[#0D3A5C] border-b border-blue-900/20 py-10 shadow-inner">
        <FadeInSection className="max-w-7xl mx-auto px-6 text-center" delay={0.2}>
          <p className="text-xs font-bold text-blue-200/80 uppercase tracking-[0.18em] mb-6 drop-shadow-sm">Delivering results across industries</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
            {["Retail & E-Commerce", "Healthcare", "Finance & FinTech", "Education", "Real Estate", "Logistics"].map((industry) => (
              <span key={industry} className="text-blue-50 text-sm font-semibold hover:text-white transition-colors cursor-default drop-shadow-sm">{industry}</span>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* Full Portfolio */}
      <section className="py-28 bg-[#F8FAFC]">
        <FadeInSection className="max-w-7xl mx-auto px-6" delay={0.1}>
          <SectionHeader
            eyebrow="Full Portfolio"
            title="Everything We Offer"
            subtitle={
              <div className="flex flex-col items-center justify-center">
                <span>Two core business pillars built on decades of expertise</span>
                <span>and cutting-edge technology — working together for your growth.</span>
              </div>
            }
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pillar 1: Global Trade */}
            <div className="group relative bg-[#0D3A5C] rounded-3xl p-10 overflow-hidden flex flex-col">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-white/5"></div>
              <div className="relative z-10 flex flex-col flex-grow">
                <span className="inline-block text-[#5BAEE8] text-xs font-bold uppercase tracking-[0.18em] mb-4">Pillar 01</span>
                <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight tracking-tight">Global Trade &amp; Institutional Business</h3>
                <p className="text-slate-300 text-base leading-relaxed mb-8">Reliable sourcing, export facilitation, commercial representation, and government procurement support — connecting Bangladesh with global markets.</p>
                <ul className="space-y-3 mb-10 flex-grow">
                  {[
                    "Import & Strategic Sourcing",
                    "Industrial Supply Solutions",
                    "Export Facilitation",
                    "Supply Chain & Logistics Coordination",
                    "International Indenting & Representation",
                    "Government Procurement & Institutional Supply",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-200 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5BAEE8] flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/services#global-trade" className="inline-flex items-center gap-2 bg-white text-[#0D3A5C] px-7 py-3.5 rounded-xl font-bold hover:bg-[#2180C0] hover:text-white transition-all duration-300 shadow-md w-fit">
                  Explore Global Trade <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Technology */}
            <div className="group relative bg-white rounded-3xl p-10 border border-slate-200 overflow-hidden flex flex-col hover:border-[#2180C0]/30 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#EBF4FB]"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-[#EBF4FB]"></div>
              <div className="relative z-10 flex flex-col flex-grow">
                <span className="inline-block text-[#2180C0] text-xs font-bold uppercase tracking-[0.18em] mb-4">Pillar 02</span>
                <h3 className="text-3xl font-extrabold text-[#0D3A5C] mb-4 leading-tight tracking-tight">Technology &amp; Digital Solutions</h3>
                <p className="text-slate-500 text-base leading-relaxed mb-8">Educational software, AI training, no-code workflow automation, executive dashboards, AI tool selection, and transformation workshops.</p>
                <ul className="space-y-3 mb-10 flex-grow">
                  {[
                    "Educational Web/App",
                    "AI Training",
                    "Workflow Automation (No Code)",
                    "Dashboard Automation",
                    "AI Tool selection & Implementation",
                    "Discovery Workshop",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2180C0] flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/services#technology" className="inline-flex items-center gap-2 bg-[#0D3A5C] text-white px-7 py-3.5 rounded-xl font-bold hover:bg-[#2180C0] transition-all duration-300 shadow-md w-fit">
                  Explore Tech Solutions <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-28 bg-white border-t border-slate-100">
        <FadeInSection className="max-w-7xl mx-auto px-6" delay={0.1}>
          <SectionHeader
            eyebrow="Our Process"
            title="How AlliedOne Works"
            subtitle="From discovery to deployment, we handle every step with precision."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[2.75rem] left-[calc(33.333%-1rem)] right-[calc(33.333%-1rem)] h-px bg-[#2180C0]/20 z-0"></div>
            {[
              { step: "01", icon: <Search className="w-6 h-6" />, title: "Finding Your Problem", desc: "We assess your current workflows, identify AI opportunities, and map out where automation creates the highest ROI." },
              { step: "02", icon: <Cpu className="w-6 h-6" />, title: "Making a Plan to Fix It", desc: "Our team architects and builds your custom AI system — from chatbots and automations to full CRM and marketing infrastructure." },
              { step: "03", icon: <Rocket className="w-6 h-6" />, title: "Implementation", desc: "We go live, monitor performance, and continuously optimize so your systems improve over time without manual effort." },
            ].map((step) => (
              <div key={step.step} className="text-center relative z-10 flex flex-col items-center">
                <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-[#0D3A5C] text-white flex items-center justify-center mx-auto mb-6 shadow-lg relative">
                  {step.icon}
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#2180C0] text-white text-[10px] font-extrabold flex items-center justify-center">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D3A5C]">{step.title}</h3>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* AI BOT HIGHLIGHT */}
      <section className="py-28 bg-[#EBF4FB]">
        <FadeInSection className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center" delay={0.1}>
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-200">
              <div className="w-11 h-11 rounded-xl bg-[#0D3A5C] flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0D3A5C]">AlliedOne Assistant</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs text-slate-400 font-medium">Online</span>
                </div>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="bg-[#F8FAFC] rounded-2xl rounded-tl-sm p-4 max-w-[85%] text-slate-700 border border-slate-100 shadow-sm">
                Hi! Thanks for reaching out. What can we help you build?
              </div>
              <div className="bg-[#2180C0] rounded-2xl rounded-tr-sm p-4 max-w-[80%] ml-auto text-white">
                I&apos;d like to automate my customer support and leads.
              </div>
              <div className="bg-[#F8FAFC] rounded-2xl rounded-tl-sm p-4 max-w-[90%] text-slate-700 border border-slate-100 shadow-sm leading-relaxed">
                Perfect. We can deploy a custom AI agent directly to your Facebook or LinkedIn channels within 48 hours. Should we schedule a quick demo?
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[#2180C0] text-xs font-bold uppercase tracking-[0.18em] mb-3">Digital Marketing + AI</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D3A5C] mt-1 mb-5 tracking-tight">Instant AI Responses to Your Ads</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              When someone comments on, clicks, or messages via your Facebook or LinkedIn ad, our AI bot sends them an instant, personalized services list — keeping your brand responsive 24/7 without any manual effort.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Facebook Messenger auto-responder",
                "LinkedIn ad-interaction bot",
                "Instant service list delivery",
                "Scalable to full conversational AI",
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-slate-600 text-sm">
                  <CheckCircle className="w-5 h-5 text-[#2180C0] flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0D3A5C] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#2180C0] transition-all shadow-md text-base">
              Set Up Your Bot <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeInSection>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#F8FAFC]">
        <FadeInSection className="max-w-7xl mx-auto px-6" delay={0.1}>
          <FAQSection />
        </FadeInSection>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-white" id="newsletter">
        <FadeInSection className="max-w-6xl mx-auto px-6" delay={0.1}>
          <NewsletterSignup />
        </FadeInSection>
      </section>

      {/* CONTACT FORM */}
      <section className="py-28 bg-[#F8FAFC] border-t border-slate-100" id="contact">
        <FadeInSection className="max-w-7xl mx-auto px-6" delay={0.1}>
          <SectionHeader
            eyebrow="Connect With Us"
            title={<>Let&apos;s Build Your <span className="text-[#2180C0]">AI Future.</span></>}
            subtitle="Drop us a message below. Whether it's a simple automation workflow or a comprehensive enterprise AI rollout, our engineering team is ready to deliver."
          />
          <LeadCaptureForm />
        </FadeInSection>
      </section>

    </div>
  );
}
