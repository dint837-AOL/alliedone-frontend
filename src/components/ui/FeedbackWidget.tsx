"use client";

import { useState } from "react";
import { Bug, X, Send, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

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
      toast.success("Feedback submitted successfully!", {
        description: "Thank you for helping us improve AlliedOne."
      });
      setTimeout(() => {
        setIsOpen(false);
        setStatus("idle");
        setFormData({ name: "", email: "", type: "BUG_REPORT", message: "" });
      }, 1500);
    } catch (err: any) {
      console.error(err);
      let msg = err.message || "Failed to submit. Please try again later.";
      if (msg === "Failed to fetch") {
        msg = "Network or CORS error. The request may have been processed, but the response was blocked.";
      }
      setErrorMessage(msg);
      setStatus("error");
      toast.error("Failed to submit feedback", {
        description: msg
      });
    }
  };

  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex items-center">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[calc(100vw-3rem)] sm:w-[380px] mr-2 md:mr-4 max-h-[85vh] flex flex-col overflow-hidden rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-slate-200/60 bg-white/95 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-[#0D3A5C] px-6 py-4 flex items-center justify-between text-white shadow-sm z-10 relative overflow-hidden flex-shrink-0">
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
            <div className="p-6 bg-slate-50/50 flex-grow overflow-y-auto">
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
        whileHover={{ x: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#0D3A5C] text-white shadow-lg border border-r-0 border-[#1A5C8A] flex flex-col items-center justify-center rounded-l-xl hover:bg-[#1A5C8A] transition-colors z-50 py-3 px-2 gap-2"
      >
        {isOpen ? (
          <X className="w-4 h-4" />
        ) : (
          <Bug className="w-4 h-4" />
        )}
        <span 
          className="text-xs font-bold tracking-widest uppercase rotate-180" 
          style={{ writingMode: 'vertical-rl' }}
        >
          Feedback
        </span>
      </motion.button>
    </div>
  );
}
