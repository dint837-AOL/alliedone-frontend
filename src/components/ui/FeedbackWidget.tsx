"use client";

import { useState } from "react";
import { Bug, X, Send, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("Failed to submit. Please try again later.");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "BUG_REPORT",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    
    // NEXT_PUBLIC_API_URL usually includes '/api' at the end (e.g., https://.../api)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
    
    try {
      const res = await fetch(`${apiUrl}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        if (errorData.errors && errorData.errors.length > 0) {
          throw new Error(errorData.errors[0].message);
        }
        throw new Error(errorData.message || "Submission failed");
      }
      
      setStatus("success");
      setTimeout(() => {
        setIsOpen(false);
        setStatus("idle");
        setFormData({ name: "", email: "", type: "BUG_REPORT", message: "" });
      }, 3000);
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "Failed to submit. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 flex flex-col items-start">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[calc(100vw-2rem)] sm:w-[380px] mb-4 md:mb-5 flex flex-col overflow-hidden rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-slate-200/60 bg-white/95 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-[#0D3A5C] px-6 py-4 flex items-center justify-between text-white shadow-sm z-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent pointer-events-none"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-inner">
                  <AlertTriangle className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight text-slate-50">Report an Issue</h3>
                  <p className="text-[10px] text-blue-200/80 font-medium tracking-wide">Help us improve your experience</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all relative z-10 active:scale-95 text-white/90 border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6 bg-slate-50/50 flex-grow">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg">Thank you!</h4>
                  <p className="text-sm text-slate-500 mt-2">Your feedback has been sent to our engineering team.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 block">Your Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full text-sm px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2180C0] bg-white transition-all shadow-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 block">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full text-sm px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2180C0] bg-white transition-all shadow-sm"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 block">Issue Type</label>
                    <select 
                      name="type" 
                      value={formData.type} 
                      onChange={handleChange}
                      className="w-full text-sm px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2180C0] bg-white transition-all shadow-sm"
                    >
                      <option value="BUG_REPORT">Report a Bug / Glitch</option>
                      <option value="SUGGESTION">Logic Mismatch / Suggestion</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 block">Description</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full text-sm px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2180C0] bg-white transition-all shadow-sm resize-none"
                      placeholder="Please describe the issue..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-500 font-medium bg-red-50 p-2 rounded border border-red-100">{errorMessage}</p>
                  )}

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="mt-2 w-full bg-[#0D3A5C] text-white py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-[#1A5C8A] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? "Submitting..." : (
                      <>Submit Feedback <Send className="w-3 h-3" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-slate-600 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)] border border-slate-100 flex items-center justify-center relative hover:text-amber-600 hover:border-amber-100 transition-colors z-50 group"
      >
        <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 rounded-full transition-colors"></div>
        {isOpen ? (
          <X className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
        ) : (
          <Bug className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
        )}
      </motion.button>
    </div>
  );
}
