import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata = {
  title: "GLOBAL SUPPLY BD. | AlliedOne Limited",
  description: "Global Supply BD — Export, Import, and Industrial Supply Solutions by AlliedOne Limited.",
};

export default function GSBDPage() {
  return (
    <div className="relative min-h-[92vh] flex flex-col items-center justify-center p-6 text-center overflow-hidden bg-[#081828]">
      {/* ── Full Width Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image.png"
          alt="Global Supply BD Background"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081828]/95 via-[#0D3A5C]/85 to-[#081828]/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#081828] via-[#081828]/50 to-[#081828]/70"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>

      {/* Atmospheric Glowing Orbs */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/20 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-cyan-400/15 rounded-full blur-[130px] pointer-events-none z-0"></div>

      {/* ── Main Hero Card / Content ── */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Brand Logo Badge */}
        <div className="relative mb-6 group">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-xl rounded-3xl p-3.5 border border-white/25 shadow-2xl shadow-cyan-900/50 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <div className="relative w-full h-full">
              <Image 
                src="/gsbd-logo.png" 
                alt="GLOBAL SUPPLY BD. Logo" 
                fill 
                className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                priority
              />
            </div>
          </div>
          <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 border-3 border-[#081828] rounded-full animate-pulse shadow-lg"></span>
        </div>
        
        {/* Main Heading with Fullstop */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black tracking-tight text-white mb-4 leading-[1.08] drop-shadow-md">
          GLOBAL SUPPLY BD<span className="text-cyan-400">.</span>
        </h1>
        
        {/* Subtitle / Tagline */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8 shadow-inner">
          <Sparkles className="w-4 h-4 text-cyan-300" />
          <span className="text-xs sm:text-sm md:text-base text-cyan-200 font-bold tracking-[0.25em] uppercase">
            Export • Import • Supply
          </span>
          <Sparkles className="w-4 h-4 text-cyan-300" />
        </div>

        <p className="text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl mx-auto leading-relaxed mb-10 font-normal drop-shadow">
          Powering international commerce through verified global sourcing, industrial supply chains, and institutional procurement solutions.
        </p>
        
        {/* Coming Soon Status Box */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/40 relative">
            <span className="w-3.5 h-3.5 rounded-full bg-amber-400 animate-ping absolute"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 relative z-10"></span>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">Platform Status</p>
            <p className="text-white text-base font-semibold">
              Under Active Development • <span className="text-cyan-300">Launching Soon</span>
            </p>
          </div>
        </div>

        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-semibold bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to AlliedOne Homepage
        </Link>
      </div>
    </div>
  );
}
