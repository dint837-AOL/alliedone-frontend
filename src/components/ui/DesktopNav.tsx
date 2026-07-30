"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

/**
 * Desktop navigation component.
 * Displays navigation links and handles active state styling based on the current pathname.
 * Uses Framer Motion for layout animations (e.g. active indicator).
 * 
 * @returns {JSX.Element} The rendered DesktopNav component.
 */
export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-2">
      {links.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`relative px-4 py-2 rounded-full text-base font-bold transition-colors ${
              isActive
                ? "text-[#0D3A5C]"
                : "text-slate-600 hover:text-[#1A5C8A]"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute inset-0 bg-slate-100 rounded-full -z-10"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
