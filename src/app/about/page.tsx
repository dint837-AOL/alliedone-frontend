import Link from "next/link";
import { ArrowRight, CheckCircle, Target, Shield, Zap, Globe, Users, BookOpen } from "lucide-react";

export const metadata = {
  title: "About Us | AlliedOne Limited",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* ── HERO SECTION ── */}
      <section className="bg-[#0D3A5C] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full border border-white/5"></div>
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full border border-white/5"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Building Tomorrow, Today.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            AlliedOne Limited is a progressive technology-enabled business group based in Bangladesh, driving innovation across digital transformation, global trade, and educational technology.
          </p>
        </div>
      </section>

      {/* ── MESSAGE FROM THE CEO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#F8FAFC] border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative">
            <div className="absolute -top-6 left-10 text-[#2180C0] opacity-20">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#0D3A5C] mb-6 relative z-10">Message from the CEO</h2>
            <div className="text-slate-600 space-y-4 text-base md:text-lg leading-relaxed relative z-10">
              <p>
                Welcome to AlliedOne Limited and thank you for your interest in our company.
              </p>
              <p>
                Over the course of the last 14 years, my career has revolved around the tangible aspects of international business. From creating international business operations to supply chain management, governmental procurement and cooperation with agencies by means of GLOBAL SUPPLY BD. (GSBD), I gained firsthand knowledge of the difficulties and intricacies of industry through real-life experience.
              </p>
              <p>
                It soon became clear to me that only those organizations will survive in the coming years which can skillfully combine industry practicality with technology advancements.
              </p>
              <p>
                That is why AlliedOne Limited was established. Alongside my continuous work in international trade and industrial sourcing through strategic alliances with our partners all over the world, this company was created with a single-minded dedication – to bring AI, business automation and digitalization solutions to organizations.
              </p>
              <p>
                Being aware of the physical market, starting from the supply chain of materials up to highly complex distribution systems, AlliedOne does not develop technologies for themselves only; we have been developing technologies to address specific problems on the market. We bridge the old trading floor and the new digital world.
              </p>
              <p>
                It is my conviction that successful businesses operate based on four main principles: trust, implementation, technology, and long-term cooperation. If you are a company, that aims at digitization, a tech company that wants to collaborate, or an international business company that seeks a dependable business partner in Bangladesh, AlliedOne can become your business booster.
              </p>
              <p>
                Thank you to all our customers, business partners, and stakeholders for your loyalty and cooperation!
              </p>
              <div className="pt-6">
                <p className="font-bold text-[#0D3A5C]">Mohammad Ahsan Kabir</p>
                <p className="text-sm text-slate-500">Chief Executive Officer, AlliedOne Limited</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="w-14 h-14 bg-[#EBF4FB] rounded-2xl flex items-center justify-center text-[#2180C0] mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#0D3A5C] mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To become a leading technology-enabled business group recognized nationally and internationally for innovation, operational excellence, ethical business practices, and sustainable growth.
            </p>
          </div>
          
          {/* Mission */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full">
            <div className="w-14 h-14 bg-[#EBF4FB] rounded-2xl flex items-center justify-center text-[#2180C0] mb-6">
              <Globe className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#0D3A5C] mb-4">Our Mission</h3>
            <ul className="text-slate-600 leading-relaxed space-y-3">
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-[#2180C0] shrink-0" /> Provide innovative digital solutions that address the needs of businesses.</li>
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-[#2180C0] shrink-0" /> Help businesses grow faster using technology and automation.</li>
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-[#2180C0] shrink-0" /> Contribute towards providing quality education using digital means.</li>
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-[#2180C0] shrink-0" /> Leverage strong international partnerships for supply chain management.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC PILLARS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#2180C0] text-xs font-bold uppercase tracking-widest mb-3">Our Core Focus</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D3A5C] mb-4">Strategic Business Pillars</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap className="w-6 h-6" />, title: "Technology & Innovation", desc: "Creating software, AI, automation systems, and digital solutions to improve business performance." },
              { icon: <BookOpen className="w-6 h-6" />, title: "Education & Human Capital", desc: "Providing technology-based education solutions and ICT skills development programs." },
              { icon: <Globe className="w-6 h-6" />, title: "International Trade", desc: "Enabling imports/exports of raw materials through reliable global sourcing." },
              { icon: <Users className="w-6 h-6" />, title: "Institutional Solutions", desc: "Serving governments and institutions with procurement, tech, and business solutions." },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-[#F8FAFC] border border-slate-100 p-8 rounded-2xl hover:border-[#2180C0]/30 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#2180C0] mb-6">
                  {pillar.icon}
                </div>
                <h4 className="text-lg font-bold text-[#0D3A5C] mb-3">{pillar.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-24 bg-[#0D3A5C] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Core Values</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg">The principles guiding our governance structure and daily operations.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Integrity", desc: "Honesty, transparency, and accountability in every business activity." },
              { title: "Innovation", desc: "Continuously seeking smarter solutions through creative thinking." },
              { title: "Customer Success", desc: "The success of our clients defines our own success." },
              { title: "Excellence", desc: "Pursuing the highest standards in quality, execution, and delivery." },
              { title: "Collaboration", desc: "Building long-term partnerships to create sustainable growth." },
              { title: "Continuous Learning", desc: "Embracing adaptability and constant improvement." },
            ].map((value) => (
              <div key={value.title} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <Shield className="w-6 h-6 text-[#5BAEE8] mb-4" />
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-sm text-slate-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D3A5C] mb-6">Innovative Solutions. Reliable Partnerships.</h2>
          <p className="text-lg text-slate-500 mb-10">
            No matter whether you require a technology partner, a digital transformation consultant, or an international sourcing expert, AlliedOne Limited is here for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2180C0] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1A5C8A] transition-all shadow-lg text-base"
          >
            Work With Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
