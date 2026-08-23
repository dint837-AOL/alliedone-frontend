"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Bug, ChevronDown, ChevronUp } from "lucide-react";

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

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#0D3A5C] hover:bg-slate-100 rounded-lg transition-colors"
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
                className={`font-bold text-lg transition-colors ${
                  isActive ? "text-[#1A5C8A] border-l-4 border-[#1A5C8A] pl-2" : "text-[#0D3A5C] hover:text-[#1A5C8A]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Services accordion */}
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center justify-between font-bold text-lg text-[#0D3A5C] hover:text-[#1A5C8A] transition-colors py-1"
          >
            Services
            {servicesOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>

          {servicesOpen && (
            <div className="pl-4 border-l-2 border-slate-200 space-y-3 mb-2">
              <p className="text-xs font-extrabold text-[#0D3A5C] uppercase tracking-wider mt-2">Global Trade</p>
              {globalTradeServices.map((s) => (
                <Link key={s.name} href={s.href} onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-slate-600 hover:text-[#1A5C8A] transition-colors py-1">
                  {s.name}
                </Link>
              ))}
              
              <p className="text-xs font-extrabold text-[#0D3A5C] uppercase tracking-wider pt-3">Digital Solutions</p>
              {digitalServices.map((s) => (
                <Link 
                  key={s.name} 
                  href={s.href} 
                  onClick={(e) => {
                    if (s.comingSoon) e.preventDefault();
                    else setIsOpen(false);
                  }}
                  className={`block text-sm font-medium transition-colors py-1 ${
                    s.comingSoon ? "text-slate-400" : "text-slate-600 hover:text-[#1A5C8A]"
                  }`}
                >
                  {s.name}
                  {s.comingSoon && <span className="ml-2 inline-block text-[9px] font-black uppercase tracking-wider text-white bg-[#FF5F15] px-1.5 py-0.5 rounded shadow-sm">Coming Soon</span>}
                </Link>
              ))}
            </div>
          )}

          {/* Remaining links (Careers, Contact) */}
          {topLinksAfterServices.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-bold text-lg transition-colors ${
                  isActive ? "text-[#1A5C8A] border-l-4 border-[#1A5C8A] pl-2" : "text-[#0D3A5C] hover:text-[#1A5C8A]"
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
            className="flex items-center gap-3 font-bold text-lg text-[#0D3A5C] hover:text-[#1A5C8A] transition-colors mt-2"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
              <Bug className="w-4 h-4 text-amber-600" />
            </div>
            Report an Issue
          </button>

          <Link
            href="/gsbd"
            onClick={() => setIsOpen(false)}
            className="bg-[#0D3A5C] text-white px-6 py-4 mt-4 rounded-xl flex items-center justify-center gap-2.5 text-base font-bold shadow-md hover:bg-[#1A5C8A] transition-colors"
          >
            <span className="w-6 h-6 rounded-md bg-white flex items-center justify-center p-0.5 flex-shrink-0 shadow-sm overflow-hidden">
              <Image
                src="/gsbd-logo.png"
                alt="Global Supply BD Logo"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </span>
            <span>GLOBAL SUPPLY BD.</span>
          </Link>
        </div>
      )}
    </div>
  );
}
