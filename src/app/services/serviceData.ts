export interface ServiceDetail {
  slug: string;
  category: "Global Trade & Institutional Business" | "Technology & Digital Solutions";
  title: string;
  coreValue: string;
  heroHeadline: string;
  subHeadline: string;
  whatWeOffer: {
    title: string;
    description: string;
  }[];
  ctaText: string;
}

export const servicesData: ServiceDetail[] = [
  // ==========================================
  // PILLAR 1: GLOBAL TRADE & INSTITUTIONAL BUSINESS
  // ==========================================
  {
    slug: "import-strategic-sourcing",
    category: "Global Trade & Institutional Business",
    title: "Import & Strategic Sourcing",
    coreValue: "Reliable sourcing of critical raw materials, ingredients, and industrial supplies from global markets.",
    heroHeadline: "Connecting Your Business with Global Markets",
    subHeadline: "We identify, evaluate, and procure high-quality industrial chemicals, food ingredients, construction materials, and raw inputs from trusted international suppliers.",
    whatWeOffer: [
      {
        title: "Supplier Identification & Vetting",
        description: "Locating and auditing reliable international manufacturers across China, India, UAE, and beyond."
      },
      {
        title: "Industrial Supply Sourcing",
        description: "Procurement of specialized inputs including industrial chemicals, spices, and feed mill raw materials."
      },
      {
        title: "Price & Contract Negotiation",
        description: "Securing competitive pricing and favorable contract terms on behalf of our clients."
      },
      {
        title: "End-to-End Import Logistics",
        description: "Managing the complexities of international shipping, customs clearance, and local delivery."
      }
    ],
    ctaText: "Discuss Sourcing Needs"
  },
  {
    slug: "industrial-supply-solutions",
    category: "Global Trade & Institutional Business",
    title: "Industrial Supply Solutions",
    coreValue: "Supporting manufacturing and industrial organizations with dependable sourcing and coordinated supply of production inputs.",
    heroHeadline: "Dependable Supply for Uninterrupted Production",
    subHeadline: "We provide comprehensive industrial supply solutions, ensuring your manufacturing facilities have the critical inputs they need, exactly when they need them.",
    whatWeOffer: [
      {
        title: "Raw Material Provision",
        description: "Consistent supply of industrial chemicals, manufacturing components, and production inputs."
      },
      {
        title: "Just-In-Time Delivery",
        description: "Coordinating delivery schedules to optimize inventory costs and minimize warehouse overhead."
      },
      {
        title: "Quality Assurance",
        description: "Rigorous quality checks on all supplied materials to ensure compliance with production standards."
      },
      {
        title: "Vendor Managed Inventory",
        description: "Proactive management of stock levels to prevent production downtime."
      }
    ],
    ctaText: "Explore Industrial Supply"
  },
  {
    slug: "supply-chain-logistics",
    category: "Global Trade & Institutional Business",
    title: "Supply Chain & Logistics Coordination",
    coreValue: "Coordinating procurement, logistics, documentation, shipment follow-up, and supplier communication to support efficient international trade.",
    heroHeadline: "Seamless Global Logistics Management",
    subHeadline: "Navigate the complexities of international trade with our expert supply chain and logistics coordination services.",
    whatWeOffer: [
      {
        title: "Shipment Tracking & Follow-up",
        description: "Real-time monitoring of international freight from origin to final destination."
      },
      {
        title: "Customs & Documentation",
        description: "Expert handling of all import/export documentation, Letters of Credit, and customs clearance procedures."
      },
      {
        title: "Supplier Communication",
        description: "Acting as your primary liaison with overseas suppliers to resolve issues and expedite orders."
      },
      {
        title: "Freight Optimization",
        description: "Securing the most cost-effective and reliable freight routes via sea, air, and land."
      }
    ],
    ctaText: "Optimize Your Supply Chain"
  },
  {
    slug: "export-facilitation",
    category: "Global Trade & Institutional Business",
    title: "Export Facilitation",
    coreValue: "Connecting high-quality local agricultural and consumer products with international buyers.",
    heroHeadline: "Taking Local Excellence to the Global Stage",
    subHeadline: "We facilitate the successful export of premium Bangladeshi products—including Hilsa fish, aromatic rice, and fresh produce—to high-demand international markets.",
    whatWeOffer: [
      {
        title: "International Market Matching",
        description: "Identifying lucrative overseas markets and connecting local producers with reliable international buyers."
      },
      {
        title: "Compliance & Documentation",
        description: "Ensuring all export shipments meet strict international quality standards and regulatory requirements."
      },
      {
        title: "Premium Agricultural Exports",
        description: "Specialized handling and export of fresh fruits, vegetables, aromatic rice, and Hilsa fish."
      },
      {
        title: "Logistics Coordination",
        description: "End-to-end supply chain management ensuring products arrive fresh, on time, and intact."
      }
    ],
    ctaText: "Explore Export Services"
  },
  {
    slug: "international-indenting",
    category: "Global Trade & Institutional Business",
    title: "International Indenting & Representation",
    coreValue: "Professional commercial representation to facilitate business between international manufacturers and local buyers.",
    heroHeadline: "Your Trusted Commercial Representative",
    subHeadline: "We act as the vital bridge between global manufacturers and qualified domestic buyers, ensuring smooth, transparent, and mutually beneficial trade agreements.",
    whatWeOffer: [
      {
        title: "Commercial Representation",
        description: "Acting as the official local representative for international brands and manufacturers."
      },
      {
        title: "Buyer-Seller Matching",
        description: "Identifying qualified institutional buyers for imported industrial and consumer products."
      },
      {
        title: "Trade Agreement Facilitation",
        description: "Structuring and negotiating indenting agreements that protect the interests of all parties."
      },
      {
        title: "Local Market Intelligence",
        description: "Providing international partners with actionable insights into local market demand and regulations."
      }
    ],
    ctaText: "Partner With Us"
  },

  // ==========================================
  {
    slug: "government-procurement",
    category: "Global Trade & Institutional Business",
    title: "Government Procurement & Institutional Supply",
    coreValue: "Transparent, efficient, and professionally managed commercial relationships.",
    heroHeadline: "Building Trusted Institutional Relationships",
    subHeadline: "AlliedOne Limited supports government organizations, corporate institutions, and international business partners through responsible procurement support and strategic sourcing.",
    whatWeOffer: [
      {
        title: "1. Opportunity Identification",
        description: "Identifying and evaluating public and institutional procurement opportunities."
      },
      {
        title: "2. Tender Requirement Analysis",
        description: "Comprehensive breakdown of technical and commercial tender specifications."
      },
      {
        title: "3. Supplier & Product Evaluation",
        description: "Vetting and validating domestic and international suppliers for compliance and quality."
      },
      {
        title: "4. Commercial Proposal Preparation",
        description: "Drafting competitive, fully-compliant commercial and technical proposals."
      },
      {
        title: "5. Procurement Execution",
        description: "Managing the end-to-end purchasing process and contract coordination."
      },
      {
        title: "6. Delivery & Documentation",
        description: "Coordinating logistics, shipment follow-up, and final compliance documentation."
      }
    ],
    ctaText: "Discuss Procurement Needs"
  },

  // ==========================================
  // PILLAR 3: TECHNOLOGY & DIGITAL SOLUTIONS
  // ==========================================
  {
    slug: "ai-opportunity-implementation",
    category: "Technology & Digital Solutions",
    title: "AI Opportunity & Implementation",
    coreValue: "Uncover high-value AI use cases and execute a seamless roadmap to modernize your business.",
    heroHeadline: "Turn AI Potential into Operational Profit",
    subHeadline: "We evaluate your workflows, pinpoint high-impact AI opportunities, and implement bespoke AI solutions designed for measurable ROI.",
    whatWeOffer: [
      {
        title: "AI Readiness & ROI Assessment",
        description: "Audit your current tech stack and operational bottlenecks to identify where AI will yield the highest immediate return."
      },
      {
        title: "Custom AI Roadmapping",
        description: "Design a step-by-step adoption strategy covering data readiness, software selection, and rollout phases."
      },
      {
        title: "Workflow & SOP Engineering",
        description: "Re-architect standard operating procedures to seamlessly weave AI tools into your daily team workflows."
      },
      {
        title: "Vendor & Tool Selection",
        description: "Objective guidance on selecting the best LLMs, agentic tools, and platforms tailored to your industry."
      }
    ],
    ctaText: "Schedule an AI Audit"
  },
  {
    slug: "process-automation-strategy",
    category: "Technology & Digital Solutions",
    title: "Process Automation Strategy",
    coreValue: "Reclaim hours of manual work with intelligent, end-to-end operational workflows.",
    heroHeadline: "Scale Operations Without Adding Overhead",
    subHeadline: "Eliminate friction, human error, and manual data transfers with enterprise-grade business process automation.",
    whatWeOffer: [
      {
        title: "Workflow & Approval Systems",
        description: "Automate complex, multi-step approval flows for procurement, contracts, and internal requests."
      },
      {
        title: "HR & Workforce Automation",
        description: "Streamline candidate screening, employee onboarding, leave tracking, and attendance systems."
      },
      {
        title: "Back-Office Integration",
        description: "Connect isolated tools (CRMs, ERPs, spreadsheets, and databases) into one unified operational network."
      },
      {
        title: "Inventory & Resource Management",
        description: "Set up automated triggers for stock updates, automated reordering, and resource planning."
      }
    ],
    ctaText: "Automate Your Operations"
  },
  {
    slug: "whatsapp-messaging-bots",
    category: "Technology & Digital Solutions",
    title: "WhatsApp & Messaging Bots",
    coreValue: "Convert inquiries into sales 24/7 with instant, intelligent chat automation across your primary messaging channels.",
    heroHeadline: "Instant Lead Engagement on WhatsApp, Messenger & Beyond",
    subHeadline: "Never lose a lead to response delay. Deploy conversational AI bots that qualify prospects, answer FAQs, and book meetings around the clock.",
    whatWeOffer: [
      {
        title: "Instant Social Ad Responders",
        description: "Automatically message users who click, comment, or interact with your Facebook and LinkedIn ads in real time."
      },
      {
        title: "WhatsApp & Messenger Workflows",
        description: "Build interactive chat flows for automated lead capture, FAQs, and service menu routing."
      },
      {
        title: "24/7 AI Support Agents",
        description: "Train conversational bots on your business data to handle customer inquiries instantly without agent intervention."
      },
      {
        title: "Seamless CRM Ingestion",
        description: "Automatically push contact data, conversation notes, and user preferences directly into your CRM directory."
      }
    ],
    ctaText: "Build Your AI Bot"
  },
  {
    slug: "email-automation-consulting",
    category: "Technology & Digital Solutions",
    title: "Email Automation Consulting",
    coreValue: "Transform your email list into a reliable revenue engine through highly targeted, automated nurturing.",
    heroHeadline: "Data-Driven Nurture Campaigns That Convert",
    subHeadline: "Stop blasting generic emails. We design and deploy intelligent, behavior-triggered email sequences that build trust, educate prospects, and drive sales on autopilot.",
    whatWeOffer: [
      {
        title: "Automated Nurture Workflows",
        description: "Design multi-step email drip campaigns that automatically guide prospects from initial opt-in to final conversion."
      },
      {
        title: "Audience Segmentation Strategy",
        description: "Divide your audience based on behavior, purchase history, and engagement to deliver hyper-relevant messaging."
      },
      {
        title: "Deliverability Optimization",
        description: "Technical configuration of SPF, DKIM, and DMARC to ensure your emails reliably hit the primary inbox, not the spam folder."
      },
      {
        title: "Copywriting & Campaign Analytics",
        description: "Persuasive email copy combined with continuous A/B testing of subject lines, send times, and call-to-actions."
      }
    ],
    ctaText: "Optimize Your Emails"
  },
  {
    slug: "skill-development",
    category: "Technology & Digital Solutions",
    title: "Skill Development",
    coreValue: "Future-proof your workforce by equipping them with the practical skills needed to thrive in an AI-driven economy.",
    heroHeadline: "Corporate Training for the Modern Digital Era",
    subHeadline: "Technology is only as effective as the team using it. Our targeted corporate training programs bridge the gap between human talent and advanced automation tools.",
    whatWeOffer: [
      {
        title: "AI Tools Proficiency Training",
        description: "Hands-on workshops teaching your staff how to leverage ChatGPT, Midjourney, and specialized AI agents in their daily work."
      },
      {
        title: "Digital Marketing Execution",
        description: "Actionable training in SEO, paid media management, and data analysis for internal marketing teams."
      },
      {
        title: "Workflow Automation Basics",
        description: "Teach key employees how to build and manage simple Zapier or Make.com automations to solve their own operational bottlenecks."
      },
      {
        title: "Customized Corporate Bootcamps",
        description: "Intensive, role-specific training programs designed entirely around your company's proprietary tech stack and operational goals."
      }
    ],
    ctaText: "Train Your Team"
  },
  {
    slug: "digital-marketing-ai-agency",
    category: "Technology & Digital Solutions",
    title: "AI Agency",
    coreValue: "Supercharge your growth engine with data-driven advertising and rapid, AI-powered response systems.",
    heroHeadline: "Next-Gen Marketing Engineered for High Conversions",
    subHeadline: "Drive qualified demand through targeted ad campaigns and instant AI lead-capture experiences that maximize ad spend ROI.",
    whatWeOffer: [
      {
        title: "Paid Media Campaigns (Meta & Google)",
        description: "Data-backed ad creation, precise audience targeting, and continuous budget optimization."
      },
      {
        title: "Agentic Ad-Interaction Flows",
        description: "Connect paid ads directly to automated messaging systems that immediately deliver your service offerings to warm leads."
      },
      {
        title: "Search Engine Optimization (SEO)",
        description: "Implement AI-enhanced search strategies to dominate organic search results for core keywords."
      },
      {
        title: "Campaign & Lead Analytics",
        description: "Track every click from ad impression to CRM lead ingestion with real-time performance tracking."
      }
    ],
    ctaText: "Launch Your Campaign"
  },
  {
    slug: "ai-content-studio",
    category: "Technology & Digital Solutions",
    title: "AI Content Studio",
    coreValue: "Scale high-quality content creation effortlessly without sacrificing brand voice or authority.",
    heroHeadline: "On-Demand Brand Content Powered by AI & Human Strategy",
    subHeadline: "Produce compelling social media campaigns, video scripts, blogs, and marketing assets at a fraction of the traditional turnaround time.",
    whatWeOffer: [
      {
        title: "Social Media Content Creation",
        description: "Bulk production of platform-optimized posts, captions, graphics, and carousel copy."
      },
      {
        title: "Video Scripts & Storyboarding",
        description: "Engaging scripts designed for short-form video (Reels, TikTok) and long-form video campaigns."
      },
      {
        title: "Blog & Thought Leadership Writing",
        description: "SEO-optimized articles and long-form copy crafted to establish industry authority."
      },
      {
        title: "Pitch Decks & Marketing Collateral",
        description: "Persuasive presentation decks, product descriptions, landing page copy, and sales assets."
      }
    ],
    ctaText: "Explore Content Packages"
  }
];
