"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "AI Services", href: "/services" },
  { name: "Software", href: "/services" },
  { name: "Cloud Solutions", href: "/services" },
  { name: "About", href: "/about" },
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
            className={`relative px-4 py-2 rounded-full text-sm lg:text-base font-bold transition-colors ${
              isActive
                ? "text-white"
                : "text-slate-400 hover:text-cyan-400"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute inset-0 bg-white/10 rounded-full -z-10"
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
