import Link from "next/link";
import {
  Lightbulb, Workflow, MessageSquare, Mail, Users, TrendingUp, PenTool,
  ArrowRight, CheckCircle
} from "lucide-react";

export const metadata = {
  title: "Services | AlliedOne",
  description: "Explore our comprehensive suite of AI, Automation, and Digital Marketing services.",
};

const serviceCategories = [
  {
    eyebrow: "Business Consultation",
    title: "Strategic AI Frameworks",
    description: "Strategic frameworks to integrate AI and automation into your core operations.",
    services: [
      {
        icon: <Lightbulb className="w-5 h-5" />,
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
        icon: <Workflow className="w-5 h-5" />,
        name: "Process Automation Strategy",
        tagline: "A proven methodology for mapping and automating the recurring work that consumes staff time.",
        items: [
          "Approval and sign-off workflow design",
          "Inventory tracking and management automation",
          "Attendance, HR, and leave management blueprints",
        ],
        slug: "process-automation-strategy",
      },
    ],
  },
  {
    eyebrow: "Developer Services",
    title: "Technical Architecture",
    description: "Custom integrations and technical architecture for modern automated workflows.",
    services: [
      {
        icon: <MessageSquare className="w-5 h-5" />,
        name: "WhatsApp & Messaging Bots",
        tagline: "Advisory on conversational architecture and communication flow design for customer-facing bots.",
        items: [
          "Conversation flow and architecture design",
          "Messaging API integration planning",
          "Bot performance and escalation path strategy",
        ],
        slug: "whatsapp-messaging-bots",
      },
    ],
  },
  {
    eyebrow: "Digital Marketing",
    title: "AI-Powered Growth",
    description: "Data-driven marketing execution powered by artificial intelligence.",
    services: [
      {
        icon: <TrendingUp className="w-5 h-5" />,
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
        icon: <PenTool className="w-5 h-5" />,
        name: "AI Content Studio",
        tagline: "AI-assisted content production across every format a growing brand needs.",
        items: [
          "Social media content and video scripts",
          "Blog posts and product descriptions",
          "Marketing copy and presentation design",
        ],
        slug: "ai-content-studio",
      },
    ],
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
        <div className="space-y-20">
          {serviceCategories.map((category, catIdx) => (
            <div key={catIdx}>
              {/* Category header */}
              <div className="mb-10 border-b border-slate-200 pb-6">
                <span className="text-[#2180C0] text-xs font-bold uppercase tracking-[0.18em]">{category.eyebrow}</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D3A5C] mt-1">{category.title}</h2>
                <p className="text-slate-500 mt-2">{category.description}</p>
              </div>

              {/* Services in this category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.services.map((service, sIdx) => (
                  <div key={sIdx} className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#2180C0]/30 hover:shadow-md transition-all duration-200 flex flex-col">
                    <div className="w-11 h-11 rounded-xl bg-[#EBF4FB] text-[#2180C0] flex items-center justify-center mb-5">
                      {service.icon}
                    </div>
                    <h3 className="text-base font-bold text-[#0D3A5C] mb-2">{service.name}</h3>
                    <p className="text-slate-400 text-sm mb-5 leading-relaxed">{service.tagline}</p>
                    <ul className="space-y-2.5 mt-auto">
                      {service.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5 text-slate-600 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#2180C0] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {service.slug && (
                      <Link 
                        href={`/services/${service.slug}`}
                        className="mt-6 flex items-center gap-1.5 text-sm font-bold text-[#2180C0] hover:text-[#0D3A5C] transition-colors group"
                      >
                        Learn More in Detail
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
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
