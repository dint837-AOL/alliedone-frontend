"use client";

import { useState } from "react";
import { Mail, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

export default function NewsletterWidget() {
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
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div className="mt-8 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex flex-col items-center justify-center text-center">
        <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-2" />
        <h4 className="text-emerald-50 font-bold text-sm">Subscribed!</h4>
        <p className="text-emerald-100/70 text-xs mt-1">Check your inbox.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-[#0a2e4a] border border-[#164a75] rounded-xl p-5 shadow-inner">
      <h4 className="text-white font-bold text-sm mb-1 flex items-center gap-2">
        <Mail className="w-4 h-4 text-[#5BAEE8]" />
        Weekly Insights
      </h4>
      <p className="text-slate-300 text-xs mb-4 leading-relaxed">
        Get AI automation tips delivered to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === "loading"}
          className="w-full bg-[#061d30] border border-[#164a75] text-sm text-slate-200 placeholder:text-slate-500 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#5BAEE8] focus:ring-1 focus:ring-[#5BAEE8] transition-all"
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="w-full bg-[#2180C0] hover:bg-[#5BAEE8] text-white text-sm font-bold rounded-lg px-3 py-2.5 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              Subscribe <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
        {status === "error" && (
          <p className="text-red-400 text-[10px] mt-1 font-medium">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
