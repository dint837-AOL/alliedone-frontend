"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Does AlliedOne Limited only operate in technology?",
    answer:
      "No. AlliedOne Limited is a diversified business company with capabilities in international trade, industrial supply, government procurement, and technology solutions.",
  },
  {
    question: "Has AlliedOne Limited discontinued its trading business?",
    answer:
      "No. Technology expansion is a strategic extension of our existing business capabilities.",
  },
  {
    question: "What industries do you serve?",
    answer: (
      <>
        <p className="mb-2">We support:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Manufacturing</li>
          <li>Trading Companies</li>
          <li>Government Institutions</li>
          <li>Educational Organizations</li>
          <li>SMEs</li>
          <li>Corporate Businesses</li>
        </ul>
      </>
    ),
  },
  {
    question: "Can international companies work with AlliedOne Limited?",
    answer:
      "Yes. We welcome collaboration with international suppliers, buyers, technology companies, and strategic partners.",
  },
  {
    question: "What products does AlliedOne typically import and export?",
    answer: (
      <>
        <p className="mb-2">Our trade portfolio includes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Imports:</strong> Food ingredients, spices, industrial chemicals, construction materials, and feed mill raw materials.</li>
          <li><strong>Exports:</strong> Hilsa fish, premium aromatic rice, fresh fruits & vegetables, and selected agricultural products.</li>
        </ul>
      </>
    ),
  },
  {
    question: "What kind of technology and digital solutions do you offer?",
    answer:
      "We offer custom business software, web and mobile applications, AI chatbots and workflow automation, digital marketing, and educational technology platforms.",
  },
  {
    question: "Which global markets does AlliedOne operate in?",
    answer:
      "Our major sourcing markets include China, India, UAE, Australia, Ukraine, Oman, and Hong Kong. We also actively export to markets such as India, UAE, and China.",
  },
  {
    question: "How do you ensure quality and manage risk?",
    answer:
      "We maintain high standards through rigorous supplier evaluation, product quality reviews, strict documentation management, and continuous delivery monitoring.",
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
        <span className="inline-block text-[#2180C0] text-xs font-bold uppercase tracking-[0.18em] mb-3">
          FAQ
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D3A5C] mt-1 mb-4 tracking-tight">
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
                isOpen ? "bg-white shadow-md border-[#2180C0]/20" : "bg-[#F8FAFC] hover:bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors ${isOpen ? "text-[#2180C0]" : "text-[#0D3A5C]"}`}>
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "bg-[#2180C0]/10 rotate-180" : "bg-slate-200"
                  }`}
                >
                  <ChevronDown className={`w-5 h-5 ${isOpen ? "text-[#2180C0]" : "text-slate-500"}`} />
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
