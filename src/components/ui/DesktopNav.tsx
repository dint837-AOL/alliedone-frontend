"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const division1Services = [
  { name: "Business Automation", href: "/services/workflow-automation-no-code" },
  { name: "Website Development", href: "/services/website-development" },
  { name: "AI Implementation", href: "/services/ai-tool-selection-implementation" },
  { name: "Software Development", href: "/services/software-development" },
];

const division2Services = [
  { name: "Educational Web & App Platforms", href: "/services/educational-web-app" },
  { name: "Practical AI Training Programs", href: "/services/ai-training" },
];

const topLinksBeforeServices = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const topLinksAfterServices = [
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function DesktopNav() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <div className="hidden md:flex items-center gap-1">
      {/* Home and About links first */}
      {topLinksBeforeServices.map((link) => {
        const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`relative px-4 py-2 rounded-full text-sm lg:text-base font-bold transition-colors ${
              isActive ? "text-[#0D3A5C]" : "text-slate-600 hover:text-[#1A5C8A]"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute inset-0 bg-slate-100 rounded-full -z-10"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {link.name}
          </Link>
        );
      })}

      {/* Services dropdown — right after About */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className={`relative flex items-center gap-1 px-4 py-2 rounded-full text-sm lg:text-base font-bold transition-colors ${
            isServicesActive ? "text-[#0D3A5C] bg-slate-100" : "text-slate-600 hover:text-[#1A5C8A]"
          }`}
        >
          Services
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[680px] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden"
            >
              {/* Introduction Banner */}
              <div className="bg-[#F8FAFC] border-b border-slate-100 p-4 px-6 text-xs text-slate-600 leading-relaxed font-normal">
                AlliedOne Limited works through 2 divisions, each focusing on different goals and activities. The divisions are interdependent and support each other, enabling us to deliver comprehensive solutions under the same corporate identity.
              </div>

              <div className="grid grid-cols-2 gap-0">
                {/* Division 1: Technology and Digital Solutions */}
                <div className="p-5 border-r border-slate-100 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-extrabold text-[#0D3A5C] uppercase tracking-[0.14em] mb-1 px-2">
                      Division 1: Technology and Digital Solutions
                    </p>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-3 px-2">
                      Relevant activities:
                    </p>
                    <div className="space-y-1">
                      {division1Services.map((s, idx) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-[#EBF4FB] hover:text-[#0D3A5C] transition-all group"
                        >
                          <span className="w-5 h-5 rounded-md bg-[#EBF4FB] text-[#2180C0] text-xs font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-[#2180C0] group-hover:text-white transition-colors">
                            {idx + 1}
                          </span>
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Division 2: Human Resource Development */}
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-extrabold text-[#0D3A5C] uppercase tracking-[0.14em] mb-1 px-2">
                      Division 2: Human Resource Development
                    </p>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-3 px-2">
                      Relevant activities:
                    </p>
                    <div className="space-y-1">
                      {division2Services.map((s, idx) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-[#EBF4FB] hover:text-[#0D3A5C] transition-all group"
                        >
                          <span className="w-5 h-5 rounded-md bg-[#EBF4FB] text-[#2180C0] text-xs font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-[#2180C0] group-hover:text-white transition-colors">
                            {idx + 1}
                          </span>
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Remaining links (Careers, Contact) */}
      {topLinksAfterServices.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`relative px-4 py-2 rounded-full text-sm lg:text-base font-bold transition-colors ${
              isActive ? "text-[#0D3A5C]" : "text-slate-600 hover:text-[#1A5C8A]"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute inset-0 bg-slate-100 rounded-full -z-10"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
