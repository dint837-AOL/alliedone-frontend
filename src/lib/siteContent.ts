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

export interface HomepageContent {
  hero: HeroContent;
  portfolio: PortfolioSectionContent;
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
};

// ─── Fetcher ──────────────────────────────────────────────────────────────────

export async function fetchSiteContent(key: string): Promise<HomepageContent> {
  const rawBase = process.env.NEXT_PUBLIC_API_URL;
  if (!rawBase || rawBase.includes('3001')) {
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
