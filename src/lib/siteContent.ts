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
    headline: ['GLOBAL TRADE', 'TECHNOLOGY', 'TRUST'],
    subtitle:
      'Two independent, specialized businesses —\none shared commitment to reliability, expertise,\nand long-term partnership.',
    backgroundImage: '/image copy.png',
  },
  portfolio: {
    eyebrow: 'Full Portfolio',
    title: 'Everything We Offer',
    subtitle:
      'Two core business pillars built on decades of expertise and cutting-edge technology — working together for your growth.',
    pillar1: {
      eyebrow: 'Pillar 01',
      title: 'Global Trade & Institutional Business',
      description:
        'Reliable sourcing, export facilitation, commercial representation, and government procurement support — connecting Bangladesh with global markets.',
      bullets: [
        'Import & Strategic Sourcing',
        'Industrial Supply Solutions',
        'Export Facilitation',
        'Supply Chain & Logistics Coordination',
        'International Indenting & Representation',
        'Government Procurement & Institutional Supply',
      ],
      ctaText: 'Explore Global Trade',
      ctaHref: '/services#global-trade',
    },
    pillar2: {
      eyebrow: 'Pillar 02',
      title: 'Technology & Digital Solutions',
      description:
        'Educational software, AI training, no-code workflow automation, executive dashboards, AI tool selection, and transformation workshops.',
      bullets: [
        'Educational Web/App',
        'AI Training',
        'Workflow Automation (No Code)',
        'Dashboard Automation',
        'AI Tool selection & Implementation',
        'Discovery Workshop',
      ],
      ctaText: 'Explore Tech Solutions',
      ctaHref: '/services#technology',
    },
  },
};

// ─── Fetcher ──────────────────────────────────────────────────────────────────

export async function fetchSiteContent(key: string): Promise<HomepageContent> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  try {
    const res = await fetch(`${apiBase}/api/admin/content/${key}`, {
      // No auth needed for public reads (content key is public)
      next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
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
