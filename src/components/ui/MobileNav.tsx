"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Bug, ChevronDown, ChevronUp } from "lucide-react";

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
            <div className="pl-4 border-l-2 border-slate-200 space-y-4 mb-2">
              <p className="text-xs text-slate-500 leading-relaxed pt-1">
                AlliedOne Limited works through 2 divisions, delivering comprehensive solutions under the same corporate identity.
              </p>

              <div>
                <p className="text-xs font-extrabold text-[#0D3A5C] uppercase tracking-wider">
                  Division 1: Technology & Digital Solutions
                </p>
                <div className="space-y-1 mt-2">
                  {division1Services.map((s, idx) => (
                    <Link key={s.href} href={s.href} onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#1A5C8A] transition-colors py-1">
                      <span className="w-4 h-4 rounded bg-slate-100 text-[#2180C0] text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-extrabold text-[#0D3A5C] uppercase tracking-wider pt-2 border-t border-slate-100">
                  Division 2: Human Resource Development
                </p>
                <div className="space-y-1 mt-2">
                  {division2Services.map((s, idx) => (
                    <Link key={s.href} href={s.href} onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#1A5C8A] transition-colors py-1">
                      <span className="w-4 h-4 rounded bg-slate-100 text-[#2180C0] text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
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
