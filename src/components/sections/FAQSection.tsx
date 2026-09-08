"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What core trade and sourcing services do you provide?",
    answer:
      "Through our trade division, Global Supply BD., we provide global sourcing and procurement, import and trade solutions, export and global market access, international indenting & representation, and end-to-end supply chain logistics coordination.",
  },
  {
    question: "How does Global Supply BD. support international manufacturers and buyers?",
    answer:
      "We act as an authorized local agent and indenting partner in Bangladesh for foreign principals, connecting them with verified domestic distributors, institutional tenders, and commercial buyers while managing commercial contracts, customs clearance, and delivery.",
  },
  {
    question: "What industries do you serve?",
    answer: (
      <>
        <p className="mb-2">We support a wide range of sectors:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Manufacturing &amp; Industrial Production</li>
          <li>Commercial Importers &amp; Trading Houses</li>
          <li>Government &amp; Public Institutions</li>
          <li>Agricultural &amp; Food Processing Enterprises</li>
          <li>SMEs and Corporate Businesses</li>
        </ul>
      </>
    ),
  },
  {
    question: "Which global markets does AlliedOne operate in?",
    answer:
      "Our major sourcing and trade corridors include China, India, UAE, Australia, Ukraine, Oman, and Hong Kong, with active export channels into South Asia and the Middle East.",
  },
  {
    question: "What products do you typically import and export?",
    answer: (
      <>
        <p className="mb-2">Our trade portfolio includes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Imports:</strong> Food ingredients, spices, industrial chemicals, construction materials, and feed mill raw materials.</li>
          <li><strong>Exports:</strong> Hilsa fish, premium aromatic rice, fresh agro-produce, and selected export-ready commodities.</li>
        </ul>
      </>
    ),
  },
  {
    question: "How do you ensure quality and manage trade risk?",
    answer:
      "We maintain rigorous standards through strict pre-shipment quality inspection, verified factory vetting, comprehensive LC/TT banking instrument compliance, and milestone-tracked logistics delivery.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="text-center mb-12">
        <span className="inline-block text-[#0095DA] text-xs font-bold uppercase tracking-[0.18em] mb-3">
          FAQ
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A5486] mt-1 mb-4 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Everything you need to know about how we operate and who we serve.
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
                    <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed text-base">
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
