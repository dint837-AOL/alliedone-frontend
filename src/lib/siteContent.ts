/**
 * siteContent.ts
 * Server-side helper for fetching CMS content from the backend API.
 * Falls back to hardcoded defaults if the API is unreachable.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface HeroContent {
  headline: [string, string, string]; // e.g. ["GLOBAL TRADE", "TECHNOLOGY", "TRUST"]
  subtitle: string;
  backgroundImage: string;            // public path, e.g. "/image copy.png"
}

export interface PillarContent {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
}

export interface PortfolioSectionContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  pillar1: PillarContent;
  pillar2: PillarContent;
}

export interface AboutContent {
  title: string;
  description: string;
  mission: string;
  vision: string;
}

export interface ServicesContent {
  title: string;
  description: string;
  services: { title: string; desc: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export interface ContactContent {
  title: string;
  subtitle: string;
  address: string;
  email: string;
  phone: string;
  facebook: string;
  linkedin: string;
  whatsapp: string;
}

export interface HomepageContent {
  hero: HeroContent;
  portfolio: PortfolioSectionContent;
  about?: AboutContent;
  services?: ServicesContent;
  faq?: FAQContent;
  contact?: ContactContent;
}

// ─── Defaults ────────────────────────────────────────────────────────────────

export const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  hero: {
    headline: ['INTERNATIONAL TRADE', 'GLOBAL SOURCING', 'STRATEGIC PARTNERSHIPS'],
    subtitle:
      'We work with end-to-end import and export logistics, strategic sourcing and represent global trade.',
    backgroundImage: '/hero-banner.png',
  },
  portfolio: {
    eyebrow: 'Full Portfolio',
    title: 'Everything We Offer',
    subtitle: '',
    pillar1: {
      eyebrow: '',
      title: 'Global Supply BD.',
      description:
        'Reliable sourcing, export facilitation, commercial representation, and institutional supply execution.',
      bullets: [
        'Global Sourcing and Procurement',
        'Import and Trade Solutions',
        'Export and Global Market Access',
        'International Indenting & Representation',
        'Supply Chain and Logistics Coordination',
      ],
      ctaText: 'Explore Services',
      ctaHref: '/services',
    },
    pillar2: {
      eyebrow: '',
      title: '',
      description: '',
      bullets: [],
      ctaText: '',
      ctaHref: '',
    },
  },
  about: {
    title: 'Who We Are',
    description: 'AlliedOne Limited operates and facilitates international business, working closely with import export, strategic sourcing and procurement and trade representation. We pride ourselves on executing seamless trade logistics, acting as a reliable institutional supplier and global supply partner.',
    mission: 'To bridge global markets by delivering reliable, high-quality sourcing and trade execution services that empower businesses to scale across borders.',
    vision: 'To be the most trusted global trade partner, recognized for transparency, efficiency, and excellence in international supply chain coordination.',
  },
  services: {
    title: 'Our Global Trade Solutions',
    description: 'From procurement to final delivery, AlliedOne provides end-to-end services tailored to meet the complex demands of international trade.',
    services: [
      { title: 'Global Sourcing & Procurement', desc: 'Identifying and verifying reliable suppliers worldwide to ensure the best quality and value for our clients.' },
      { title: 'Import & Trade Solutions', desc: 'Navigating complex customs, compliance, and import logistics to bring goods into your target market seamlessly.' },
      { title: 'Export & Global Market Access', desc: 'Facilitating the outbound movement of goods, connecting local manufacturers with lucrative international markets.' },
      { title: 'International Indenting & Representation', desc: 'Acting as an official commercial representative and liaison for global brands entering emerging markets.' },
      { title: 'Supply Chain & Logistics', desc: 'Coordinating multimodal transport, warehousing, and inventory management for end-to-end supply chain reliability.' }
    ]
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Clear answers for smooth global trade operations.',
    items: [
      { question: 'What regions do you primarily source from?', answer: 'We maintain strong supplier networks across Asia, Europe, and North America, tailoring our sourcing strategy to the specific product and quality requirements of our clients.' },
      { question: 'Do you handle customs clearance?', answer: 'Yes, we provide end-to-end trade solutions which include managing all customs documentation, tariffs, and regulatory compliance to ensure smooth border transitions.' },
      { question: 'Can you act as an exclusive agent for a brand?', answer: 'Yes, through our International Indenting & Representation service, we frequently act as the exclusive commercial representative for global brands entering new markets.' },
    ]
  },
  contact: {
    title: "Let's Build Your Global Trade Future.",
    subtitle: "Drop us a message below. Whether you require strategic sourcing, import/export facilitation, or institutional supply execution, our team is ready to deliver.",
    address: 'Dhaka, Bangladesh',
    email: 'info@alliedoneltd.com',
    phone: '+880 1601-440044',
    facebook: 'https://www.facebook.com/alliedoneltd',
    linkedin: 'https://www.linkedin.com/company/alliedoneltd/',
    whatsapp: 'https://wa.me/8801601440044'
  }
};

// ─── Fetcher ──────────────────────────────────────────────────────────────────

export async function fetchSiteContent(key: string): Promise<HomepageContent> {
  const rawBase = process.env.NEXT_PUBLIC_API_URL;
  if (!rawBase) {
    return DEFAULT_HOMEPAGE_CONTENT;
  }
  const apiBase = rawBase.replace(/\/api\/?$/, '').replace(/\/+$/, '');
  try {
    const res = await fetch(`${apiBase}/api/admin/content/${key}`, {
      cache: 'no-store',
    });
    if (!res.ok) return DEFAULT_HOMEPAGE_CONTENT;
    const data = await res.json();
    if (!data.value) return DEFAULT_HOMEPAGE_CONTENT;
    // Deep-merge with defaults so missing keys don't break the UI
    return deepMerge(DEFAULT_HOMEPAGE_CONTENT, data.value) as HomepageContent;
  } catch {
    return DEFAULT_HOMEPAGE_CONTENT;
  }
}

// ─── Utility ─────────────────────────────────────────────────────────────────

function deepMerge(target: any, source: any): any {
  if (typeof source !== 'object' || source === null) return source ?? target;
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      source[key] !== null &&
      typeof target[key] === 'object' &&
      !Array.isArray(target[key])
    ) {
      result[key] = deepMerge(target[key], source[key]);
    } else {
      result[key] = source[key] ?? target[key];
    }
  }
  return result;
}
