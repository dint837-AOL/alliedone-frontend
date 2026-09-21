"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQProps {
  content?: {
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
}

export default function FAQSection({ content }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Fallbacks if no content passed (e.g. if used somewhere without CMS data yet)
  const title = content?.title || "Frequently Asked Questions";
  const subtitle = content?.subtitle || "Everything you need to know about how we operate and who we serve.";
  const faqs = content?.items || [];

  if (faqs.length === 0) return null;

  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="text-center mb-12">
        <span className="inline-block text-[#0095DA] text-xs font-bold tracking-[0.18em] mb-3">
          FAQ
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A5486] mt-1 mb-4 tracking-tight">
          {title}
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={false}
              className={`border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen ? "bg-white shadow-md border-[#0095DA]/20" : "bg-[#F8FAFC] hover:bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors ${isOpen ? "text-[#0095DA]" : "text-[#0A5486]"}`}>
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "bg-[#0095DA]/10 rotate-180" : "bg-slate-200"
                  }`}
                >
                  <ChevronDown className={`w-5 h-5 ${isOpen ? "text-[#0095DA]" : "text-slate-500"}`} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed text-base whitespace-pre-wrap">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
