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
    <div className="bg-[#0D3A5C] rounded-3xl overflow-hidden relative shadow-2xl">
      {/* Decorative abstract shapes */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#2180C0]/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#2180C0]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="px-8 py-12 md:p-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
            <Mail className="w-3.5 h-3.5" />
            Weekly Insights
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Stay ahead of the curve.
          </h2>
          <p className="text-blue-100/80 text-lg leading-relaxed max-w-lg">
            Join our newsletter to get actionable tips on AI automation, digital marketing, and modernizing your business workflows.
          </p>
        </div>

        <div className="md:w-1/2 w-full max-w-md">
          {status === "success" ? (
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center backdrop-blur-sm animate-in fade-in zoom-in duration-300">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">You're Subscribed!</h3>
              <p className="text-blue-100/80 text-sm">Keep an eye on your inbox for your welcome email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={status === "loading"}
                    className="w-full pl-11 pr-4 py-4 rounded-xl bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5BAEE8] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading" || !email}
                  className="whitespace-nowrap inline-flex items-center justify-center gap-2 bg-[#2180C0] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#5BAEE8] transition-colors disabled:opacity-70 disabled:cursor-not-allowed h-full"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Subscribe <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              {status === "error" && (
                <p className="absolute -bottom-7 left-2 text-red-400 text-sm font-medium animate-in slide-in-from-top-1">
                  {errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
