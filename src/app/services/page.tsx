import Link from "next/link";
import {
  Lightbulb, Workflow, MessageSquare, TrendingUp, PenTool, Mail, GraduationCap,
  ArrowRight, CheckCircle, Landmark, Globe, Briefcase, Network
} from "lucide-react";
import { servicesData } from "./serviceData";

export const metadata = {
  title: "Services | AlliedOne",
  description: "Explore our comprehensive suite of Trade, Procurement, and Digital services.",
};

// Group services by category
const globalTradeServices = servicesData.filter(s => s.category === "Global Trade & Industrial Solutions");
const govProcurementServices = servicesData.filter(s => s.category === "Government Procurement & Institutional Business");
const techServices = servicesData.filter(s => s.category === "Technology & Digital Solutions");

// Helper function to assign icons based on slug
const getIconForSlug = (slug: string) => {
  switch (slug) {
    case "import-strategic-sourcing": return <Globe className="w-6 h-6" />;
    case "export-facilitation": return <Network className="w-6 h-6" />;
    case "international-indenting": return <Briefcase className="w-6 h-6" />;
    case "government-procurement": return <Landmark className="w-6 h-6" />;
    case "ai-opportunity-implementation": return <Lightbulb className="w-6 h-6" />;
    case "process-automation-strategy": return <Workflow className="w-6 h-6" />;
    case "whatsapp-messaging-bots": return <MessageSquare className="w-6 h-6" />;
    case "email-automation-consulting": return <Mail className="w-6 h-6" />;
    case "skill-development": return <GraduationCap className="w-6 h-6" />;
    case "digital-marketing-ai-agency": return <TrendingUp className="w-6 h-6" />;
    case "ai-content-studio": return <PenTool className="w-6 h-6" />;
    default: return <CheckCircle className="w-6 h-6" />;
  }
};

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
            From global strategic sourcing and government procurement to hands-on AI and digital implementation, we provide the infrastructure and expertise to scale your operations efficiently.
          </p>
        </div>
      </section>

      {/* ── PILLAR 1: Global Trade ── */}
      <section className="max-w-7xl mx-auto px-6 py-20" id="global-trade">
        <div className="mb-12 border-b border-slate-200 pb-6">
          <span className="text-[#2180C0] text-sm font-bold uppercase tracking-widest">Pillar 01</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D3A5C] mt-2">Global Trade & Industrial Solutions</h2>
          <p className="text-slate-500 mt-3 max-w-2xl text-lg">Reliable sourcing of critical raw materials, commercial representation, and export facilitation across international markets.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {globalTradeServices.map((service, sIdx) => (
            <ServiceCard key={sIdx} service={service} />
          ))}
        </div>
      </section>

      {/* ── PILLAR 2: Gov Procurement ── */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white border-y border-slate-200" id="government-procurement">
        <div className="mb-12 border-b border-slate-200 pb-6">
          <span className="text-[#2180C0] text-sm font-bold uppercase tracking-widest">Pillar 02</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D3A5C] mt-2">Government Procurement & Institutional Business</h2>
          <p className="text-slate-500 mt-3 max-w-2xl text-lg">Navigating complex public and institutional contracts with transparency, efficiency, and professional compliance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {govProcurementServices.map((service, sIdx) => (
            <ServiceCard key={sIdx} service={service} />
          ))}
        </div>
      </section>

      {/* ── PILLAR 3: Tech ── */}
      <section className="max-w-7xl mx-auto px-6 py-20" id="technology">
        <div className="mb-12 border-b border-slate-200 pb-6">
          <span className="text-[#2180C0] text-sm font-bold uppercase tracking-widest">Pillar 03</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D3A5C] mt-2">Technology & Digital Solutions</h2>
          <p className="text-slate-500 mt-3 max-w-2xl text-lg">Modernizing businesses with process automation, conversational AI, digital marketing, and intelligent software.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techServices.map((service, sIdx) => (
            <ServiceCard key={sIdx} service={service} />
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-[#0D3A5C] rounded-2xl p-12 md:p-16 text-center shadow-xl">
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

// Extracted ServiceCard component for cleaner code
function ServiceCard({ service }: { service: any }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#2180C0]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      <div className="w-14 h-14 rounded-2xl bg-[#EBF4FB] text-[#2180C0] group-hover:bg-[#2180C0] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 shadow-sm">
        {getIconForSlug(service.slug)}
      </div>
      <h3 className="text-xl font-bold text-[#0D3A5C] mb-3 leading-tight">{service.title}</h3>
      <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">{service.coreValue}</p>
      
      <div className="bg-slate-50 rounded-xl p-5 mb-8">
        <ul className="space-y-3">
          {service.whatWeOffer.slice(0, 3).map((item: any, iIdx: number) => (
            <li key={iIdx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
              <CheckCircle className="w-4 h-4 text-[#2180C0] flex-shrink-0 mt-0.5" />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      
      <Link 
        href={`/services/${service.slug}`}
        className="mt-auto w-full flex items-center justify-center gap-2 bg-[#F8FAFC] group-hover:bg-[#2180C0] text-[#0D3A5C] group-hover:text-white transition-all duration-300 border border-slate-200 group-hover:border-[#2180C0] rounded-xl px-5 py-3.5 font-bold shadow-sm"
      >
        Learn More in Detail
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
