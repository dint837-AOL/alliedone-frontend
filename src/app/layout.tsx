import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/ui/MobileNav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AlliedOne | AI & Digital Solutions",
  description: "Enterprise AI Automation, Consulting, and Digital Marketing — AlliedOne Limited, Dhaka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-brand-slate text-brand-dark flex flex-col min-h-screen antialiased`}>

        {/* ── Sticky Navigation ── */}
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-card">
          <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

            {/* Logo + Name */}
            <Link href="/" className="flex items-center gap-1.5">
              <Image
                src="/logo-mark-v2.png"
                alt="AlliedOne Logo"
                width={150}
                height={120}
                className="h-10 w-auto object-contain"
              />
              <span className="font-extrabold text-4xl text-brand-navy tracking-tight leading-none">AlliedOne</span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex gap-8 text-lg font-bold text-[#0D3A5C]">
              <Link href="/" className="hover:text-[#1A5C8A] transition-colors">Home</Link>
              <Link href="/services" className="hover:text-[#1A5C8A] transition-colors">Services</Link>
              <Link href="/about" className="hover:text-[#1A5C8A] transition-colors">About</Link>
              <Link href="/contact" className="hover:text-[#1A5C8A] transition-colors">Contact</Link>
            </div>

            {/* CTA Button & Mobile Nav */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-block bg-[#1A5C8A] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#0D3A5C] transition-all shadow-md"
              >
                Schedule a Demo
              </Link>
              <MobileNav />
            </div>
          </div>
        </nav>

        {/* ── Page Content ── */}
        <main className="flex-grow">{children}</main>

        {/* ── Footer ── */}
        <footer className="bg-[#0D3A5C] text-slate-100 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6">

            {/* Top 4-col grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#1A5C8A]">

              {/* Brand column */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-white rounded-2xl flex items-center justify-center w-14 h-14 flex-shrink-0 shadow-sm">
                    <Image src="/logo-mark-v2.png" alt="AlliedOne Logo" width={120} height={100} className="w-9 h-auto object-contain" />
                  </div>
                  <span className="font-extrabold text-3xl text-white tracking-tight">AlliedOne</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed mb-4">
                  Empowering businesses with intelligent AI automation, digital transformation, and global trade solutions.
                </p>
                <div className="text-sm text-slate-300 space-y-3 mb-5">
                  <p className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <a href="https://maps.app.goo.gl/ecKg11UdVs66DTFy8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      198, Bara Moghbazar, Dhaka-1217
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href="mailto:info@alliedoneltd.com" className="hover:text-white transition-colors">info@alliedoneltd.com</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <a href="https://wa.me/8801601440044" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+880 1601-440044</a>
                  </p>
                </div>
                {/* Social Links */}
                <div className="flex gap-4 mt-5">
                  <a href="https://www.linkedin.com/company/alliedoneltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                    className="w-8 h-8 rounded-full bg-slate-700 hover:bg-brand-mid flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/alliedoneltd" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    className="w-8 h-8 rounded-full bg-slate-700 hover:bg-brand-mid flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Services column */}
              <div>
                <h4 className="text-white font-bold mb-5 uppercase text-xs tracking-widest">Services</h4>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li><Link href="/services" className="hover:text-white transition-colors">AI Opportunity & Implementation</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Process Automation Strategy</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">WhatsApp & Messaging Bots</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Digital Marketing & AI Agency</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">AI Content Studio</Link></li>
                </ul>
              </div>

              {/* Company column */}
              <div>
                <h4 className="text-white font-bold mb-5 uppercase text-xs tracking-widest">Company</h4>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li><Link href="/about" className="hover:text-white hover:underline transition-all">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-white hover:underline transition-all">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-white hover:underline transition-all">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white hover:underline transition-all">Terms of Service</Link></li>
                </ul>
              </div>

              {/* Contact / CTA column */}
              <div>
                <h4 className="text-white font-bold mb-5 uppercase text-xs tracking-widest">Get in Touch</h4>
                <p className="text-sm text-slate-200 mb-5 leading-relaxed">
                  Ready to transform your business with AI? Let&apos;s talk.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-[#0D3A5C] px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-200 transition-all"
                >
                  Schedule a Demo &rarr;
                </Link>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-300">
              <p>&copy; {new Date().getFullYear()} AlliedOne Limited. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
