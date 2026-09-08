import Image from "next/image";
import Link from "next/link";
import LeadCaptureForm from "@/components/sections/LeadCaptureForm";
import FAQSection from "@/components/sections/FAQSection";
import FadeInSection from "@/components/ui/FadeInSection";
import { fetchSiteContent } from "@/lib/siteContent";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

// ── Shared section header pattern ────────────────────────────
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: React.ReactNode }) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block text-[#0095DA] text-xs font-bold uppercase tracking-[0.18em] mb-3">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A5486] mt-1 mb-4 tracking-tight">{title}</h2>
      {subtitle && <div className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</div>}
    </div>
  );
}

export const metadata = {
  title: "AlliedOne | Global Trade & Sourcing",
  description:
    "AlliedOne Limited operates and facilitates international business, working closely with import export, sourcing and procurement and trade representation.",
  openGraph: {
    title: "AlliedOne | Global Trade & Sourcing",
    description:
      "AlliedOne Limited operates and facilitates international business, working closely with import export, sourcing and procurement and trade representation.",
  },
};

export default async function Home() {
  // Fetch CMS content — falls back to hardcoded defaults if backend is down
  const content = await fetchSiteContent('homepage');
  const { hero, portfolio } = content;

  return (
    <div className="w-full">

      {/* ══════════════════════════════════════════════
          HERO — Full viewport, blurred bg + gradient
      ══════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "calc(100vh - 73px)", minHeight: "520px" }}
      >
        {/* Background photo */}
        <Image
          src={hero.backgroundImage || "/hero-banner.png"}
          alt="AlliedOne Global Trade & Sourcing"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          unoptimized={hero.backgroundImage?.startsWith('http')}
        />

        {/* Bluish gradient spanning the whole section */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0A5486]/95 via-[#0A5486]/90 to-[#0A5486]/30 pointer-events-none" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-start pl-8 sm:pl-16 lg:pl-24 pr-8 pt-16 sm:pt-20 lg:pt-24 pb-10">
          <div className="max-w-[850px]">
            <h1
              className="font-black tracking-[0.04em] leading-[1.15] mb-5 uppercase text-white drop-shadow-sm flex flex-col gap-1.5 sm:gap-2"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)" }}
            >
              <span>INTERNATIONAL TRADE</span>
              <span>GLOBAL SOURCING</span>
              <span>STRATEGIC PARTNERSHIPS</span>
            </h1>

            <p className="text-white/95 text-[15px] sm:text-[17px] leading-relaxed max-w-[540px] font-medium drop-shadow-sm">
              {hero.subtitle || "We work with end-to-end import and export logistics, strategic sourcing and represent global trade."}
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PORTFOLIO — Everything We Offer (2 Boxes)
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F8FAFC]">
        <FadeInSection className="max-w-7xl mx-auto px-6" delay={0.1}>
          <SectionHeader
            eyebrow={portfolio.eyebrow || "Full Portfolio"}
            title={portfolio.title || "Everything We Offer"}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Box 1 (LEFT): Picture placeholder for Global Supply BD. */}
            <div className="relative bg-white border-2 border-dashed border-slate-300 rounded-3xl p-8 sm:p-12 min-h-[420px] flex flex-col items-center justify-center text-center overflow-hidden group hover:border-[#0095DA] transition-colors shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#EBF4FB] border border-slate-200 shadow-sm flex items-center justify-center text-[#0095DA] mb-4 group-hover:scale-110 transition-transform">
                <ImageIcon className="w-8 h-8" />
              </div>
              <p className="text-2xl font-bold text-[#0A5486] mb-2">Global Supply BD.</p>
              <p className="text-sm text-slate-400 font-medium max-w-sm">
                Placeholder for Global Supply BD. photograph / image showcase
              </p>
            </div>

            {/* Box 2 (RIGHT): Writing section with 5 services */}
            <div className="group relative bg-[#0A5486] rounded-3xl p-8 sm:p-12 text-white shadow-xl overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-white/5 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="border-b border-white/15 pb-5 mb-6">
                  <span className="inline-block text-[#0095DA] text-xs font-bold uppercase tracking-[0.18em] mb-2">
                    Trade Division
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Global Supply BD.
                  </h3>
                </div>

                <ul className="space-y-4 my-auto py-2">
                  {[
                    "Global Sourcing and Procurement",
                    "Import and Trade Solutions",
                    "Export and Global Market Access",
                    "International Indenting & Representation",
                    "Supply Chain and Logistics Coordination",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3.5 text-slate-100 text-base sm:text-lg font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#0095DA] flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8 mt-4 border-t border-white/10">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 bg-white text-[#0A5486] px-8 py-4 rounded-xl font-bold hover:bg-[#0095DA] hover:text-white transition-all duration-300 shadow-md w-fit"
                  >
                    Explore Services <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ SECTION
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-slate-100">
        <FadeInSection className="max-w-5xl mx-auto px-6" delay={0.1}>
          <FAQSection />
        </FadeInSection>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT FORM SECTION
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F8FAFC] border-t border-slate-200/80" id="contact">
        <FadeInSection className="max-w-5xl mx-auto px-6" delay={0.1}>
          <SectionHeader
            eyebrow="Connect With Us"
            title={<>Let&apos;s Build Your <span className="text-[#0095DA]">Global Trade Future.</span></>}
            subtitle="Drop us a message below. Whether you require strategic sourcing, import/export facilitation, or institutional supply execution, our team is ready to deliver."
          />
          <LeadCaptureForm />
        </FadeInSection>
      </section>

    </div>
  );
}
