import Link from "next/link";
import {
  Lightbulb, Workflow, MessageSquare, TrendingUp, PenTool, Mail, GraduationCap,
  ArrowRight, CheckCircle, Landmark
} from "lucide-react";

export const metadata = {
  title: "Services | AlliedOne",
  description: "Explore our comprehensive suite of AI, Automation, and Digital Marketing services.",
};

const servicesList = [
  {
    icon: <Landmark className="w-6 h-6" />,
    name: "Government Procurement & Supply",
    tagline: "Transparent, efficient, and professionally managed commercial relationships.",
    items: [
      "Tender Requirement Analysis",
      "Supplier & Product Evaluation",
      "Commercial Proposal Preparation",
    ],
    slug: "government-procurement",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    name: "AI Opportunity & Implementation",
    tagline: "We identify exactly where AI can create the most value — then build the roadmap to get there.",
    items: [
      "AI readiness and opportunity assessment",
      "Custom implementation roadmap and SOP design",
      "Guided rollout support to ensure adoption",
    ],
    slug: "ai-opportunity-implementation",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    name: "Process Automation Strategy",
    tagline: "A proven methodology for mapping and automating the recurring work that consumes staff time.",
    items: [
      "Approval and sign-off workflow design",
      "Inventory tracking and management automation",
      "Attendance, HR, and leave management blueprints",
    ],
    slug: "process-automation-strategy",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    name: "WhatsApp & Messaging Bots",
    tagline: "Advisory on conversational architecture and communication flow design for customer-facing bots.",
    items: [
      "Conversation flow and architecture design",
      "Messaging API integration planning",
      "Bot performance and escalation path strategy",
    ],
    slug: "whatsapp-messaging-bots",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    name: "Email Automation Consulting",
    tagline: "Maximize engagement with automated nurture workflows, segmentation, and deliverability optimization.",
    items: [
      "Automated nurture workflow design",
      "Audience segmentation and personalization strategy",
      "Deliverability and inbox placement optimization",
    ],
    slug: "email-automation-consulting",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    name: "Skill Development",
    tagline: "Corporate training programs designed to empower your workforce with modern technology and automation skills.",
    items: [
      "Corporate training programs for AI tools",
      "Digital marketing execution workshops",
      "Workflow automation and tool proficiency",
    ],
    slug: "skill-development",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    name: "Digital Marketing & AI Agency",
    tagline: "Full funnel digital marketing execution across the channels that drive measurable growth.",
    items: [
      "Facebook and Google Ads management",
      "SEO strategy and execution",
      "AI assisted lead generation campaigns",
    ],
    slug: "digital-marketing-ai-agency",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    name: "AI Content Studio",
    tagline: "AI-assisted content production across every format a growing brand needs.",
    items: [
      "Social media content and video scripts",
      "Blog posts and product descriptions",
      "Marketing copy and presentation design",
    ],
    slug: "ai-content-studio",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* ── Page Header ── */}
      <section className="bg-[#0D3A5C] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border border-white/5"></div>
          <div className="absolute -bottom-12 -left-12 w-[300px] h-[300px] rounded-full border border-white/5"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 text-center">
          <span className="inline-block text-[#5BAEE8] text-xs font-bold uppercase tracking-[0.18em] mb-4">What We Offer</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.08]">
            Transform Your Business
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From strategic AI roadmaps to hands-on digital marketing execution, we provide the tools and expertise to scale your operations efficiently.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, sIdx) => (
            <div key={sIdx} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#2180C0]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF4FB] text-[#2180C0] group-hover:bg-[#2180C0] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0D3A5C] mb-3 leading-tight">{service.name}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">{service.tagline}</p>
              
              <div className="bg-slate-50 rounded-xl p-5 mb-8">
                <ul className="space-y-3">
                  {service.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                      <CheckCircle className="w-4 h-4 text-[#2180C0] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {service.slug && (
                <Link 
                  href={`/services/${service.slug}`}
                  className="mt-auto w-full flex items-center justify-center gap-2 bg-[#F8FAFC] group-hover:bg-[#2180C0] text-[#0D3A5C] group-hover:text-white transition-all duration-300 border border-slate-200 group-hover:border-[#2180C0] rounded-xl px-5 py-3.5 font-bold shadow-sm"
                >
                  Learn More in Detail
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-[#0D3A5C] rounded-2xl p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Ready to get started?</h2>
          <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
            Book a free consultation to discuss which services align best with your current growth goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#2180C0] text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#0D3A5C] transition-all duration-300 shadow-md"
          >
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
