import Image from "next/image";

export default function GSBDPage() {
  return (
    <div className="min-h-[90vh] bg-[#081828] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 w-40 h-40 md:w-56 md:h-56 mb-12">
        <Image 
          src="/gsbd-logo.png" 
          alt="GLOBAL SUPPLY BD Logo" 
          fill 
          className="object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          priority
        />
      </div>
      
      <h1 className="relative z-10 text-4xl md:text-6xl lg:text-[5rem] font-extrabold tracking-tight text-white mb-6">
        GLOBAL SUPPLY BD
      </h1>
      
      <p className="relative z-10 text-lg md:text-2xl text-cyan-300 font-bold tracking-[0.3em] uppercase mb-16">
        Export • Import • Supply
      </p>
      
      <div className="relative z-10 inline-flex flex-col items-center gap-4 px-10 py-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/30">
          <span className="w-4 h-4 rounded-full bg-amber-400 animate-ping absolute"></span>
          <span className="w-3 h-3 rounded-full bg-amber-400 relative z-10"></span>
        </div>
        <p className="text-slate-300 text-lg font-medium">
          Under construction. <span className="text-white font-bold block mt-1">Coming soon.</span>
        </p>
      </div>
    </div>
  );
}
