'use client';
import Image from "next/image";
import Link from "next/link";
import LeadCaptureForm from "@/components/sections/LeadCaptureForm";
import NewsletterSignup from "@/components/sections/NewsletterSignup";
import FAQSection from "@/components/sections/FAQSection";
import FadeInSection from "@/components/ui/FadeInSection";
import {
  Mail, Bot, Cpu, Search, Rocket, CheckCircle, ArrowRight
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

      {/* ══════════════════════════════════════════════
          HERO — Full viewport, blurred bg + gradient
      ══════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "calc(100vh - 73px)", minHeight: "520px" }}
      >

          {/* Background photo — no blur, no zoom, placed as-is */}
          <Image
            src="/image copy.png"
            alt="AlliedOne Global Trade & Technology Solutions"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />

          {/* Bluish gradient spanning the whole section — makes text pop on a dark blue overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D3A5C]/95 via-[#0D3A5C]/75 to-[#0D3A5C]/20 pointer-events-none" />

          {/* Content: more left padding for breathing room */}
          <div className="absolute inset-0 flex flex-col justify-between pl-14 pr-8 sm:pl-20 sm:pr-12 pt-8 pb-6">

            {/* TOP-LEFT: Headline + subtitle + buttons (on light/white gradient bg) */}
            <div className="max-w-[560px]">
              <h1
                className="font-black tracking-tight leading-[1.1] mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3.3rem)" }}
              >
                <span className="block text-white drop-shadow-sm">
                  Global Trade
                </span>
                <span className="block text-sky-200 drop-shadow-sm">
                  Technology
                </span>
                <span className="block text-slate-100 whitespace-nowrap drop-shadow-sm">
                  Trusted Partnerships
                </span>
              </h1>

              <p className="text-white/90 text-[14px] sm:text-[15px] leading-relaxed mb-5 max-w-[370px] font-medium drop-shadow-sm">
                Two independent, specialized businesses —<br />
                one shared commitment to reliability, expertise,<br />
                and long-term partnership.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="#our-businesses"
                  className="inline-flex items-center gap-2 bg-[#006A4E] hover:bg-[#005540] text-white px-5 py-2.5 rounded-md text-[13.5px] font-bold shadow-md transition-all hover:-translate-y-0.5"
                >
                  <span>Explore Our Businesses</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/30 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-md text-[13.5px] font-bold backdrop-blur-sm transition-all hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
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
