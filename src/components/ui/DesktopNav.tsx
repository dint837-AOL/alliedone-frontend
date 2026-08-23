"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const globalTradeServices = [
  { name: "Global Sourcing & Procurement", href: "/services/global-sourcing-procurement" },
  { name: "Import & Trade Solutions", href: "/services/import-trade-solutions" },
  { name: "Export & Global Market Access", href: "/services/export-global-market-access" },
  { name: "International Indenting & Representation", href: "/services/international-indenting-representation" },
  { name: "Supply Chain & Logistics Coordination", href: "/services/supply-chain-logistics-coordination" },
];

const digitalServices = [
  { name: "Web Development & Design", href: "/services/web-development-design" },
  { name: "AI & Business Automation", href: "/services/ai-business-automation" },
  { name: "Education, Training & Skills Development", href: "/services/education-training-skills-development" },
  { name: "Enterprise Software & Digital Solutions", href: "#", comingSoon: true },
  { name: "Smart Utilities & Digital Productivity Applications", href: "#", comingSoon: true },
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
              className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[700px] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-0">
                {/* Global Trade Column — First */}
                <div className="p-5 border-r border-slate-100">
                  <p className="text-[10px] font-extrabold text-[#0D3A5C] uppercase tracking-[0.18em] mb-3 px-2">Global Trade</p>
                  <div className="space-y-0.5">
                    {globalTradeServices.map((s) => (
                      <Link
                        key={s.name}
                        href={s.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-[#EBF4FB] hover:text-[#0D3A5C] transition-all group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2180C0] flex-shrink-0 mt-1.5 group-hover:scale-125 transition-transform"></span>
                        <span className="leading-snug">{s.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Digital Solutions Column — Second */}
                <div className="p-5">
                  <p className="text-[10px] font-extrabold text-[#0D3A5C] uppercase tracking-[0.18em] mb-3 px-2">Digital Solutions</p>
                  <div className="space-y-0.5">
                    {digitalServices.map((s) => (
                      <Link
                        key={s.name}
                        href={s.href}
                        onClick={(e) => {
                          if (s.comingSoon) e.preventDefault();
                          else setServicesOpen(false);
                        }}
                        className={`flex items-start gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                          s.comingSoon 
                            ? "text-slate-400 cursor-default" 
                            : "text-slate-700 hover:bg-[#EBF4FB] hover:text-[#0D3A5C]"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 transition-transform ${
                          s.comingSoon ? "bg-slate-200" : "bg-cyan-500 group-hover:scale-125"
                        }`}></span>
                        <span className="leading-snug flex-1">{s.name}</span>
                        {s.comingSoon && (
                          <span className="ml-2 text-[9px] font-black uppercase tracking-wider text-white bg-[#FF5F15] px-1.5 py-0.5 rounded shadow-sm flex-shrink-0 mt-0.5">
                            Soon
                          </span>
                        )}
                      </Link>
                    ))}
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
