import { CheckCircle } from "lucide-react";
import { fetchSiteContent } from "@/lib/siteContent";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Services | AlliedOne Limited",
  description: "Global Sourcing, Import, Export, Indenting, and Logistics Coordination — Global Supply BD.",
};

export default async function ServicesPage() {
  const content = await fetchSiteContent('homepage');
  const servicesData = content.services!;
  const services = servicesData.services || [];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* ── Page Header: Just one sentence under What We Offer ── */}
      <section className="bg-[#0A5486] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border border-white/5"></div>
          <div className="absolute -bottom-12 -left-12 w-[300px] h-[300px] rounded-full border border-white/5"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 relative z-10 text-center">
          <span className="inline-block text-[#0095DA] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            What We Offer
          </span>
          <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
            {servicesData.title || "We power international trade and supply as a modern solution for businesses."}
          </p>
        </div>
      </section>

      {/* ── Services Section: Global Supply BD. ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 pb-24">
        <div className="mb-10 border-b border-slate-200 pb-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A5486]">
            Global Supply BD.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>

    </main>
  );
}

function ServiceCard({
  service,
}: {
  service: {
    title: string;
    desc: string;
  };
}) {
  return (
    <div
      className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-[#0095DA]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group scroll-mt-24"
    >
      <div className="w-14 h-14 rounded-2xl bg-[#EBF4FB] text-[#0095DA] group-hover:bg-[#0A5486] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 shadow-sm">
        <CheckCircle className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-bold text-[#0A5486] mb-3 leading-tight">{service.title}</h3>
      <p className="text-slate-600 text-base mb-6 leading-relaxed flex-grow whitespace-pre-wrap">{service.desc}</p>
    </div>
  );
}
