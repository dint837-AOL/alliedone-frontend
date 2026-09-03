import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "GLOBAL SUPPLY BD. | AlliedOne Limited",
  description: "Global Supply BD — Export, Import, and Industrial Supply Solutions by AlliedOne Limited.",
};

export default function GSBDPage() {
  return (
    <div className="relative min-h-[92vh] flex flex-col items-center justify-center p-6 text-center overflow-hidden bg-[#081828]">
      {/* ── Full Width Background Image with subtle gradient ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gsbd-hero.png"
          alt="Global Supply BD Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Medium-opacity rich brand gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081828]/85 via-[#0D3A5C]/60 to-[#081828]/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#081828]/90 via-[#081828]/25 to-[#081828]/60"></div>
        <div className="absolute inset-0 bg-radial from-blue-900/30 via-transparent to-transparent"></div>
      </div>

      {/* Atmospheric Glowing Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#2180C0]/20 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* ── Main Hero Content ── */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Clean Logo without box or frame */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6">
          <Image 
            src="/gsbd-logo.png" 
            alt="GLOBAL SUPPLY BD. Logo" 
            fill 
            className="object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
            priority
          />
        </div>
        
        {/* Main Heading with Fullstop */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black tracking-tight text-white mb-4 leading-[1.08] drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
          GLOBAL SUPPLY BD<span className="text-cyan-400">.</span>
        </h1>
        
        {/* Subtitle / Tagline without emojis */}
        <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md mb-10 shadow-lg">
          <span className="text-xs sm:text-sm md:text-base text-cyan-200 font-bold tracking-[0.25em] uppercase drop-shadow">
            Export • Import • Supply
          </span>
        </div>
        
        {/* Coming Soon Status Box */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-xl shadow-2xl mb-8">
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
          className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors text-sm font-semibold bg-black/40 hover:bg-black/60 px-6 py-3 rounded-full border border-white/20 backdrop-blur-md shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to AlliedOne Homepage
        </Link>
      </div>
    </div>
  );
}
