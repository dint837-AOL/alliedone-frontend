"use client";

import { useState } from "react";
import { Mail, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
      const res = await fetch(`${apiUrl}/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        if (errorData.errors && errorData.errors.length > 0) {
          throw new Error(errorData.errors[0].message);
        }
        throw new Error(errorData.message || "Failed to subscribe");
      }

      setStatus("success");
      setEmail("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(33,128,192,0.15)] border border-slate-200">
      {/* Background Gradient & Mesh */}
      <div className="absolute inset-0 bg-[#0D3A5C] z-0"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2180C0]/60 via-transparent to-transparent opacity-80 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#5BAEE8]/40 via-transparent to-transparent opacity-50 z-0 pointer-events-none"></div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] z-0"></div>

      <div className="px-8 py-16 md:p-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-[55%] text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#5BAEE8] text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-white/20 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Weekly Industry Insights
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Automate to dominate. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BAEE8] to-white">
              Stay ahead of the curve.
            </span>
          </h2>
          <p className="text-blue-100/90 text-lg leading-relaxed max-w-lg font-light">
            Join visionary leaders receiving our best strategies on <strong className="font-semibold text-white">AI implementation, workflow automation</strong>, and scaling operations—delivered directly to your inbox every week.
          </p>
        </div>

        <div className="md:w-[45%] w-full max-w-md relative">
          {/* Glass pane behind form */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl -z-10 transform scale-[1.03] translate-y-1"></div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300 py-4">
                <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center mb-5 ring-4 ring-emerald-400/10">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-white font-extrabold text-2xl mb-2">Welcome Aboard!</h3>
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  You're officially subscribed. Keep an eye on your inbox for our welcome email and exclusive AI strategies.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
                <h3 className="text-white font-bold text-xl mb-2 text-center md:text-left">Get Exclusive Access</h3>
                
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-200" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    required
                    disabled={status === "loading"}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#061d30]/60 border border-white/20 text-white placeholder:text-blue-200/50 focus:outline-none focus:border-[#5BAEE8] focus:ring-1 focus:ring-[#5BAEE8] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-inner backdrop-blur-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading" || !email}
                  className="group w-full inline-flex items-center justify-center gap-2 bg-white text-[#0D3A5C] px-8 py-4 rounded-xl font-extrabold hover:bg-[#5BAEE8] hover:text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(91,174,232,0.4)]"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-5 h-5 animate-spin text-[#0D3A5C]" />
                  ) : (
                    <>
                      Subscribe Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium p-3 rounded-lg mt-2 text-center animate-in slide-in-from-top-1">
                    {errorMessage}
                  </div>
                )}
                <p className="text-center text-[10px] text-blue-200/50 mt-2">
                  No spam. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
