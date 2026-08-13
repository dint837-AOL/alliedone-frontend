import type { Metadata } from "next";
import FadeInSection from "@/components/ui/FadeInSection";
import CareerApplicationForm from "@/components/sections/CareerApplicationForm";
import { Briefcase, Palette, ArrowRight, PenTool, Clapperboard, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | AlliedOne Tech",
  description: "Join the team at AlliedOne Tech and build the future of AI automation and enterprise software.",
};

const openings = [
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Dhaka",
    type: "Full-Time",
    icon: <Palette className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Content Writer",
    department: "Marketing",
    location: "Dhaka / Remote",
    type: "Full-Time",
    icon: <PenTool className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Video Editor",
    department: "Creative",
    location: "Dhaka",
    type: "Full-Time",
    icon: <Clapperboard className="w-6 h-6 text-orange-400" />
  },
  {
    title: "Social Media Marketer",
    department: "Marketing",
    location: "Dhaka / Remote",
    type: "Full-Time",
    icon: <BarChart2 className="w-6 h-6 text-blue-400" />
  }
];

export default function CareersPage() {
  return (
    <div className="w-full">
      {/* ══════════════════════════════════════════════
          HERO — Careers
      ══════════════════════════════════════════════ */}
      <section className="bg-[#0D3A5C] relative overflow-hidden pt-24 pb-20 border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <FadeInSection className="max-w-4xl mx-auto px-6 relative z-10 text-center" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-cyan-400 text-sm font-semibold mb-6 tracking-wide border border-cyan-400/20 backdrop-blur-sm">
            <Briefcase className="w-4 h-4" />
            Join Our Team
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Build the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tech &amp; Automation</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            We are always looking for passionate engineers, designers, and strategists to help us build intelligent solutions for businesses around the world.
          </p>
        </FadeInSection>
      </section>

      {/* ══════════════════════════════════════════════
          OPEN POSITIONS
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F8FAFC]">
        <FadeInSection className="max-w-7xl mx-auto px-6" delay={0.1}>
          <div className="text-center mb-16">
            <span className="inline-block text-[#2180C0] text-xs font-bold uppercase tracking-[0.18em] mb-3">Current Openings</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D3A5C] tracking-tight">Available Roles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {openings.map((job, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-cyan-400/50 transition-all duration-300 group cursor-default flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {job.icon}
                </div>
                <div className="mb-4 flex-grow">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{job.department}</div>
                  <h3 className="text-lg font-extrabold text-[#0D3A5C] mb-2 leading-snug group-hover:text-[#2180C0] transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-slate-500 font-medium mt-3">
                    <span className="bg-slate-100 px-2.5 py-1 rounded-md">{job.location}</span>
                    <span className="bg-slate-100 px-2.5 py-1 rounded-md">{job.type}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <span className="inline-flex items-center text-sm font-bold text-[#2180C0] group-hover:gap-1.5 transition-all">
                    Apply Below <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* ══════════════════════════════════════════════
          APPLICATION FORM
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-white" id="apply">
        <FadeInSection className="max-w-7xl mx-auto px-6" delay={0.2}>
          <div className="text-center mb-12">
             <span className="inline-block text-[#2180C0] text-xs font-bold uppercase tracking-[0.18em] mb-3">Submit Application</span>
             <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D3A5C] tracking-tight mb-4">Let&apos;s Get to Know You</h2>
             <p className="text-slate-500 max-w-xl mx-auto">Don&apos;t see a role that fits? Select &quot;General Consideration&quot; and drop your CV. We&apos;re always on the lookout for great talent.</p>
          </div>
          <CareerApplicationForm />
        </FadeInSection>
      </section>
    </div>
  );
}
