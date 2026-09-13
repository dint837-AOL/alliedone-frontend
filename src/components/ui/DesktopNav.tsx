"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const globalTradeServices = [
  { name: "Global Sourcing and Procurement", href: "/services#global-sourcing-procurement" },
  { name: "Import and Trade Solutions", href: "/services#import-trade-solutions" },
  { name: "Export and Global Market Access", href: "/services#export-global-market-access" },
  { name: "International Indenting & Representation", href: "/services#international-indenting-representation" },
  { name: "Supply Chain and Logistics Coordination", href: "/services#supply-chain-logistics-coordination" },
];

const topLinksBeforeServices = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const topLinksAfterServices = [
  { name: "Contact", href: "/contact" },
];

export default function DesktopNav() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
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
              isActive ? "text-[#0A5486]" : "text-slate-600 hover:text-[#0095DA]"
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

      {/* Services dropdown — hover to open, click navigates to /services */}
      <div
        className="relative"
        ref={dropdownRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href="/services"
          onClick={() => setServicesOpen(false)}
          className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm lg:text-base font-bold transition-colors ${
            isServicesActive ? "text-[#0A5486] bg-slate-100" : "text-slate-600 hover:text-[#0095DA]"
          }`}
        >
          Services
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
          />
        </Link>

        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50"
            >
              <div className="w-[360px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 overflow-hidden">
                <div className="space-y-1">
                  {globalTradeServices.map((s) => (
                    <Link
                      key={s.name}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-[#EBF4FB] hover:text-[#0A5486] transition-all group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0095DA] flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                      <span className="leading-snug">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Remaining links (Contact) */}
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
              isActive ? "text-[#0A5486]" : "text-slate-600 hover:text-[#0095DA]"
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
