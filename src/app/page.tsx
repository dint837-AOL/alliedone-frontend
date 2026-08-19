import Image from "next/image";
import Link from "next/link";
import LeadCaptureForm from "@/components/sections/LeadCaptureForm";
import NewsletterSignup from "@/components/sections/NewsletterSignup";
import FAQSection from "@/components/sections/FAQSection";
import FadeInSection from "@/components/ui/FadeInSection";
import {
  Lightbulb, Workflow, MessageSquare, Mail, TrendingUp, PenTool,
  Bot, Cpu, Search, Rocket, CheckCircle, ArrowRight, GraduationCap
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
          HERO — IT Focus, Navy background
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-32 pb-40 min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="AlliedOne Background"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlays for readability and style */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081828]/95 via-[#0D3A5C]/75 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#081828] via-[#081828]/40 to-transparent"></div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 w-full" delay={0.1}>
          <div className="max-w-3xl flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-slate-100 text-sm font-semibold mb-10 tracking-wide border border-white/20 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              AlliedOne Limited
            </div>

            <ul className="mb-12 space-y-6 md:space-y-8">
              <li className="flex items-center gap-4 text-4xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.1] whitespace-nowrap">
                <div className="w-5 flex justify-center flex-shrink-0 mt-1">
                  <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(56,189,248,0.6)]"></span>
                </div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-300 drop-shadow-lg">
                  Smart Tech Solutions
                </span>
              </li>
              <li className="flex items-center gap-4 text-3xl md:text-4xl lg:text-[2.25rem] font-semibold text-slate-300">
                <div className="w-5 flex justify-center flex-shrink-0 mt-1">
                  <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-slate-400"></span>
                </div>
                <span className="text-slate-200">
                  International Business
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-extrabold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] text-base border border-blue-400/30"
              >
                Start Your AI Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-4 rounded-xl font-bold border border-white/30 hover:bg-white/20 transition-all text-base backdrop-blur-md"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>




      {/* ══════════════════════════════════════════════
          TRUST BAR — White with bottom borderr
      ══════════════════════════════════════════════ */}
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
              {/* Background decoration */}
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
                <Link
                  href="/services#global-trade"
                  className="inline-flex items-center gap-2 bg-white text-[#0D3A5C] px-7 py-3.5 rounded-xl font-bold hover:bg-[#2180C0] hover:text-white transition-all duration-300 shadow-md w-fit"
                >
                  Explore Global Trade
                  <ArrowRight className="w-4 h-4" />
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
                <Link
                  href="/services#technology"
                  className="inline-flex items-center gap-2 bg-[#0D3A5C] text-white px-7 py-3.5 rounded-xl font-bold hover:bg-[#2180C0] transition-all duration-300 shadow-md w-fit"
                >
                  Explore Tech Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ══════════════════════════════════════════════
          HOW IT WORKS — White background
      ══════════════════════════════════════════════ */}
      <section className="py-28 bg-white border-t border-slate-100">
        <FadeInSection className="max-w-7xl mx-auto px-6" delay={0.1}>
          <SectionHeader
            eyebrow="Our Process"
            title="How AlliedOne Works"
            subtitle="From discovery to deployment, we handle every step with precision."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
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

      {/* ══════════════════════════════════════════════
          AI BOT HIGHLIGHT — Soft blue-tinted background
      ══════════════════════════════════════════════ */}
      <section className="py-28 bg-[#EBF4FB]">
        <FadeInSection className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center" delay={0.1}>
          {/* Chat UI mockup */}
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

          {/* Text content */}
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
              Set Up Your Bot
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeInSection>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ SECTION
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F8FAFC]">
        <FadeInSection className="max-w-7xl mx-auto px-6" delay={0.1}>
          <FAQSection />
        </FadeInSection>
      </section>

      {/* ══════════════════════════════════════════════
          NEWSLETTER SIGNUP 
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-white" id="newsletter">
        <FadeInSection className="max-w-6xl mx-auto px-6" delay={0.1}>
          <NewsletterSignup />
        </FadeInSection>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT FORM — Light slate background
      ══════════════════════════════════════════════ */}
      <section className="py-28 bg-[#F8FAFC] border-t border-slate-100" id="contact">
        <FadeInSection className="max-w-7xl mx-auto px-6" delay={0.1}>
          <SectionHeader
            eyebrow="Connect With Us"
            title={<>Let&apos;s Build Your <span className="text-[#2180C0]">AI Future.</span></>}
            subtitle="Drop us a message below. Whether it&apos;s a simple automation workflow or a comprehensive enterprise AI rollout, our engineering team is ready to deliver."
          />
          <LeadCaptureForm />
        </FadeInSection>
      </section>

    </div>
  );
}
