import { Target, Compass } from "lucide-react";
import { fetchSiteContent } from "@/lib/siteContent";

export const metadata = {
  title: "About Us | AlliedOne Limited",
  description: "Bridging International Trade and Supply — AlliedOne Limited, Dhaka.",
};

export default async function AboutPage() {
  const content = await fetchSiteContent('homepage');
  const about = content.about!;

  return (
    <div className="w-full">
      {/* ── HERO SECTION ── */}
      <section className="bg-[#0A5486] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full border border-white/5"></div>
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full border border-white/5"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 relative z-10 text-center">
          <span className="inline-block text-[#0095DA] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            About AlliedOne Limited
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            {about.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium whitespace-pre-wrap">
            {about.description}
          </p>
        </div>
      </section>

      {/* ── MESSAGE FROM THE CEO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm relative">
            <div className="absolute -top-6 left-10 text-[#0095DA] opacity-20">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#0A5486] mb-6 relative z-10">Message from the CEO</h2>
            <div className="text-slate-700 space-y-4 text-base md:text-lg leading-relaxed relative z-10">
              <p>
                At AlliedOne, we believe that real, lasting business success comes from combining hard-earned experience with the tools of tomorrow.
              </p>
              <p>
                Over the past 14+ years, our trade business, Global Supply BD. (GSBD), has built lasting relationships with international suppliers, buyers, and institutional partners across the globe — learning, first-hand, what businesses actually need to grow with confidence.
              </p>
              <p>
                Today, through AlliedOne Digital, we are bringing that same commitment to reliability and results into the world of technology — helping businesses automate their operations, build a stronger digital presence, and access practical, modern skills training.
              </p>
              <p>
                Whether you are looking for a dependable global trade partner or a technology team that understands real business needs, we look forward to working with you.
              </p>
              <div className="pt-6 border-t border-slate-200 mt-6">
                <p className="font-bold text-[#0A5486] text-lg">Mohammad Ahsan Kabir</p>
                <p className="text-sm text-slate-500 font-medium">Chief Executive Officer, AlliedOne Limited</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VISION & OUR MISSION ── */}
      <section className="py-20 pb-28 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1: Vision */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#EBF4FB] rounded-2xl flex items-center justify-center text-[#0095DA] mb-6 shadow-sm">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A5486] mb-3">Our Vision:</h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg flex-grow whitespace-pre-wrap">
                {about.vision}
              </p>
            </div>

            {/* Box 2: Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#EBF4FB] rounded-2xl flex items-center justify-center text-[#0095DA] mb-6 shadow-sm">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A5486] mb-3">Our Mission:</h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg flex-grow whitespace-pre-wrap">
                {about.mission}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
