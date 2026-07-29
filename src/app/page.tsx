import Link from "next/link";
import LeadCaptureForm from "@/components/sections/LeadCaptureForm";
import FadeInSection from "@/components/ui/FadeInSection";
import {
  Lightbulb, Workflow, MessageSquare, Mail, Users, TrendingUp, PenTool,
  Bot, Cpu, Search, Rocket, CheckCircle, ArrowRight
} from "lucide-react";

// ── Shared section header pattern ────────────────────────────
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block text-[#2180C0] text-xs font-bold uppercase tracking-[0.18em] mb-3">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D3A5C] mt-1 mb-4 tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full">

      {/* ══════════════════════════════════════════════
          HERO — Full-bleed dark banner
      ══════════════════════════════════════════════ */}
      <section className="bg-[#0D3A5C] relative overflow-hidden">
        {/* Decorative background rings */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full border border-white/5"></div>
          <div className="absolute top-20 -right-20 w-[400px] h-[400px] rounded-full border border-white/5"></div>
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full border border-white/5"></div>
        </div>

        <FadeInSection className="max-w-7xl mx-auto px-6 py-32 md:py-40 relative z-10 flex flex-col items-center text-center" delay={0.1}>
          <div className="max-w-4xl flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-slate-100 text-sm font-semibold mb-8 tracking-wide border border-white/15 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              AlliedOne Limited
            </div>

            <div className="w-full flex flex-col items-center">
              <h1 className="text-[clamp(1.1rem,4.8vw,3.25rem)] font-extrabold tracking-tight text-white mb-8 leading-[1.3] w-full max-w-[56rem] mx-auto flex flex-col gap-y-3 md:gap-y-5">
                <div className="flex flex-row justify-between items-center w-full">
                  <span className="whitespace-nowrap">AI Automation</span>
                  <span className="text-[#5BAEE8] mx-2 md:mx-4">&bull;</span>
                  <span className="whitespace-nowrap">Business Solutions</span>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <span className="whitespace-nowrap">Global Trade</span>
                  <span className="text-[#5BAEE8] mx-2 md:mx-4">&bull;</span>
                  <span className="whitespace-nowrap">Digital Transformation</span>
                </div>
              </h1>

              {/* Mobile paragraph — justified block */}
              <p lang="en" className="block md:hidden text-[clamp(0.8rem,3.5vw,1rem)] text-slate-300 mb-12 leading-relaxed text-justify [text-align-last:justify] w-full mx-auto">
                AlliedOne Limited is a progressive Bangladeshi private limited company, built on the vision of becoming a trusted and reliable provider of innovative technology and business solutions, serving clients effectively across both local and international arenas with dedication and excellence.
              </p>
              {/* Desktop paragraph — fully justified block */}
              <p lang="en" className="hidden md:block text-xl text-slate-300 mb-12 leading-relaxed text-justify [text-align-last:justify] w-full max-w-[44rem] mx-auto">
                AlliedOne Limited is a progressive Bangladeshi private limited company formed on the basis of a dream of being a reliable provider of technology and business solutions in both local and international arenas accordingly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#2180C0] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1A5C8A] transition-all shadow-lg text-base"
              >
                Start Your AI Journey
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all text-base backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ══════════════════════════════════════════════
          TRUST BAR — White with bottom border
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

      {/* ══════════════════════════════════════════════
          CORE SERVICE LINES — Strong navy background to differentiate
      ══════════════════════════════════════════════ */}
      <section className="py-28 bg-[#F0F7FF] relative overflow-hidden border-y border-blue-100/50">
        {/* Subtle decorative rings */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-blue-900/5" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full border border-blue-900/5" />
        </div>
        <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10" delay={0.1}>
          <div className="text-center mb-16">
            <span className="inline-block text-brand-mid text-xs font-bold uppercase tracking-[0.18em] mb-3">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mt-1 mb-4 tracking-tight">Core Service Lines</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">Three specialized technology domains delivering measurable ROI for modern businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "AI Opportunity & Implementation",
                desc: "We identify exactly where AI and automation can create the most value for your business, then deliver a clear, actionable roadmap and standard operating procedures to implement it.",
                href: "/services",
                cta: "View Consulting Scope",
              },
              {
                icon: <Workflow className="w-6 h-6" />,
                title: "Process Automation Strategy",
                desc: "A proven methodology for mapping and automating recurring operational work — approval workflows, inventory tracking, attendance, HR, and leave management across your departments.",
                href: "/services",
                cta: "View Automation Tools",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Digital Marketing & AI Agency",
                desc: "Full funnel digital marketing execution across channels that drive measurable growth — Facebook & Google Ads, SEO strategy, AI-assisted lead generation, and an AI Content Studio.",
                href: "/services",
                cta: "View Agency Services",
              },
            ].map((service) => (
              <div key={service.title} className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-brand-mid/5 hover:-translate-y-1 transition-all duration-300 flex flex-col relative z-10">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-mid mb-6 group-hover:bg-brand-mid group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-brand-navy">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <Link href={service.href} className="inline-flex items-center gap-1.5 text-brand-mid text-sm font-bold hover:gap-3 transition-all duration-200">
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* ══════════════════════════════════════════════
          FULL SERVICE CATALOGUE — Light background
      ══════════════════════════════════════════════ */}
      <section className="py-28 bg-[#F8FAFC]">
        <FadeInSection className="max-w-7xl mx-auto px-6" delay={0.1}>
          <SectionHeader
            eyebrow="Full Portfolio"
            title="Everything We Offer"
            subtitle="A complete suite of AI-powered services designed to modernize every layer of your business."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Lightbulb className="w-5 h-5" />, title: "AI Opportunity & Implementation", desc: "AI readiness assessment, custom implementation roadmap, SOP design, and guided rollout support." },
              { icon: <Workflow className="w-5 h-5" />, title: "Process Automation Strategy", desc: "Approval workflows, inventory tracking, attendance, HR, and leave management automation." },
              { icon: <MessageSquare className="w-5 h-5" />, title: "WhatsApp & Messaging Bots", desc: "Conversation flow design, messaging API integration, and bot performance & escalation strategy." },
              { icon: <Mail className="w-5 h-5" />, title: "Email Automation Consulting", desc: "Automated nurture workflows, audience segmentation strategy, and deliverability optimization." },
              { icon: <Users className="w-5 h-5" />, title: "ATS & HR Tech Architecture", desc: "AI candidate screening design, interview automation architecture, and hiring funnel optimization." },
              { icon: <TrendingUp className="w-5 h-5" />, title: "Digital Marketing & AI Agency", desc: "Facebook and Google Ads management, SEO strategy & execution, and AI-assisted lead generation." },
              { icon: <PenTool className="w-5 h-5" />, title: "AI Content Studio", desc: "Social media content, video scripts, blog posts, product descriptions, and marketing copy." },
            ].map((item) => (
              <div key={item.title} className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-[#2180C0]/30 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 rounded-lg bg-[#EBF4FB] text-[#2180C0] flex items-center justify-center mb-4 group-hover:bg-[#2180C0] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="font-bold text-[#0D3A5C] mb-2 text-sm leading-snug">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
              { step: "01", icon: <Search className="w-6 h-6" />, title: "Discovery & Audit", desc: "We assess your current workflows, identify AI opportunities, and map out where automation creates the highest ROI." },
              { step: "02", icon: <Cpu className="w-6 h-6" />, title: "Design & Build", desc: "Our team architects and builds your custom AI system — from chatbots and automations to full CRM and marketing infrastructure." },
              { step: "03", icon: <Rocket className="w-6 h-6" />, title: "Deploy & Scale", desc: "We go live, monitor performance, and continuously optimize so your systems improve over time without manual effort." },
            ].map((step) => (
              <div key={step.step} className="text-center relative z-10 flex flex-col items-center">
                <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-[#0D3A5C] text-white flex items-center justify-center mx-auto mb-6 shadow-lg relative">
                  {step.icon}
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#2180C0] text-white text-[10px] font-extrabold flex items-center justify-center">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0D3A5C] mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
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
