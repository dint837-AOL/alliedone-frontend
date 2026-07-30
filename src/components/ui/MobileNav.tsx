"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

/**
 * Mobile navigation component.
 * Features a hamburger menu that toggles a dropdown overlay with navigation links.
 * Automatically closes when a link is clicked.
 * 
 * @returns {JSX.Element} The rendered MobileNav component.
 */
export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="absolute top-[88px] left-0 right-0 bg-white border-b border-slate-200 shadow-xl py-6 px-6 flex flex-col gap-5 animate-in slide-in-from-top-2">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

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
          
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#2180C0] text-white px-6 py-4 mt-2 rounded-xl text-center text-base font-bold shadow-md hover:bg-[#1A5C8A] transition-colors"
          >
            Schedule a Demo
          </Link>
        </div>
      )}
    </div>
  );
}
