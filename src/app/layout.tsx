import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/ui/MobileNav";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
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
                className="h-14 w-auto object-contain"
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
                <div className="inline-flex items-center gap-2 mb-5 bg-white rounded-2xl px-3 py-2 shadow-md">
                  <Image src="/logo-mark-v2.png" alt="AlliedOne Logo" width={120} height={100} className="h-10 w-auto object-contain" />
                  <span className="font-extrabold text-2xl text-[#0D3A5C] tracking-tight leading-none">AlliedOne</span>
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
                    <a href="tel:+8801601440044" className="hover:text-white transition-colors">+880 1601-440044</a>
                  </p>
                </div>
                {/* Social Links */}
                <div className="flex gap-4 mt-5">
                  <a href="https://www.linkedin.com/company/alliedoneltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                    className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-[#0077b5] shadow-lg hover:shadow-[#0077b5]/30 hover:-translate-y-1 flex items-center justify-center transition-all duration-300">
                    <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/alliedoneltd" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                    className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-[#1877f2] shadow-lg hover:shadow-[#1877f2]/30 hover:-translate-y-1 flex items-center justify-center transition-all duration-300">
                    <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="https://wa.me/8801601440044" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                    className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-[#25D366] shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-1 flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Services column */}
              <div>
                <h4 className="text-white font-bold mb-5 uppercase text-xs tracking-widest">Services</h4>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li><Link href="/services/ai-opportunity-implementation" className="hover:text-white transition-colors">AI Opportunity & Implementation</Link></li>
                  <li><Link href="/services/process-automation-strategy" className="hover:text-white transition-colors">Process Automation Strategy</Link></li>
                  <li><Link href="/services/whatsapp-messaging-bots" className="hover:text-white transition-colors">WhatsApp & Messaging Bots</Link></li>
                  <li><Link href="/services/digital-marketing-ai-agency" className="hover:text-white transition-colors">Digital Marketing & AI Agency</Link></li>
                  <li><Link href="/services/ai-content-studio" className="hover:text-white transition-colors">AI Content Studio</Link></li>
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
        <ScrollToTop />
      </body>
    </html>
  );
}
