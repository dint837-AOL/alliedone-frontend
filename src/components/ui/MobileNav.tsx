"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Bug, ChevronDown, ChevronUp } from "lucide-react";

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

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#0A5486] hover:bg-slate-100 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-white border-b border-slate-200 shadow-xl py-6 px-6 flex flex-col gap-2 animate-in slide-in-from-top-2 z-50 max-h-[85vh] overflow-y-auto">
          
          {/* Home and About first */}
          {topLinksBeforeServices.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-bold text-lg transition-colors py-1 ${
                  isActive ? "text-[#0095DA] border-l-4 border-[#0095DA] pl-2" : "text-[#0A5486] hover:text-[#0095DA]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Services accordion */}
          <div className="py-1">
            <div className="flex items-center justify-between">
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="font-bold text-lg text-[#0A5486] hover:text-[#0095DA] transition-colors"
              >
                Services
              </Link>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="p-1 text-[#0A5486] hover:text-[#0095DA]"
                aria-label="Toggle services list"
              >
                {servicesOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>

            {servicesOpen && (
              <div className="pl-4 border-l-2 border-slate-200 space-y-2 mt-2 mb-2">
                {globalTradeServices.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-semibold text-slate-700 hover:text-[#0095DA] transition-colors py-1.5"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Remaining links (Contact) */}
          {topLinksAfterServices.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-bold text-lg transition-colors py-1 ${
                  isActive ? "text-[#0095DA] border-l-4 border-[#0095DA] pl-2" : "text-[#0A5486] hover:text-[#0095DA]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Feedback Trigger */}
          <button
            onClick={() => {
              setIsOpen(false);
              window.dispatchEvent(new Event("open-feedback"));
            }}
            className="flex items-center gap-3 font-bold text-lg text-[#0A5486] hover:text-[#0095DA] transition-colors mt-2"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
              <Bug className="w-4 h-4 text-amber-600" />
            </div>
            Report an Issue
          </button>
        </div>
      )}
    </div>
  );
}
