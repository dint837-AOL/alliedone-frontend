import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronLeft } from "lucide-react";
import { servicesData } from "../serviceData";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  if (!service) {
    return {
      title: "Service Not Found | AlliedOne",
    };
  }
  return {
    title: `${service.title} | AlliedOne`,
    description: service.coreValue,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* ── Floating Back Button ── */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <Link
          href="/services"
          className="flex items-center gap-2 bg-[#2180C0] hover:bg-[#5BAEE8] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-2xl shadow-[#2180C0]/50 transition-all hover:-translate-y-1 border-2 border-white/90 backdrop-blur-md"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Services
        </Link>
      </div>

      {/* ── Page Header ── */}
      <section className="bg-[#0D3A5C] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border border-white/5"></div>
          <div className="absolute -bottom-12 -left-12 w-[300px] h-[300px] rounded-full border border-white/5"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.08]">
              {service.heroHeadline}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl">
              {service.subHeadline}
            </p>
          </div>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Value Proposition */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-[#2180C0] text-xs font-bold uppercase tracking-[0.18em]">Core Value</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D3A5C] mt-2 mb-6 leading-tight">
              {service.coreValue}
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#0D3A5C] mb-4">Ready to accelerate?</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                Take the first step towards transforming your business with our specialized expertise.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2180C0] text-white px-6 py-3.5 rounded-xl font-bold hover:bg-[#0D3A5C] transition-all duration-300 shadow-sm"
              >
                {service.ctaText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-[#2180C0] text-xs font-bold uppercase tracking-[0.18em]">What We Offer</span>
              <h2 className="text-3xl font-extrabold text-[#0D3A5C] mt-2 mb-10">Our Approach & Deliverables</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.whatWeOffer.map((offer, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-[#2180C0]/30 hover:shadow-md transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-[#EBF4FB] text-[#2180C0] flex items-center justify-center mb-5">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0D3A5C] mb-3 leading-tight">{offer.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{offer.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>

    </main>
  );
}
