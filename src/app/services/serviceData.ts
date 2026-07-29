export interface ServiceDetail {
  slug: string;
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
  {
    slug: "ai-opportunity-implementation",
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
    slug: "digital-marketing-ai-agency",
    title: "Digital Marketing & AI Agency",
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
  },
  {
    slug: "email-automation-consulting",
    title: "Email Automation Consulting",
    coreValue: "Convert and retain customers with strategic design for automated email workflows.",
    heroHeadline: "Email Workflows That Convert on Autopilot",
    subHeadline: "We design and implement intelligent email automation strategies that nurture leads, onboard users, and drive continuous re-engagement.",
    whatWeOffer: [
      {
        title: "Automated Workflow Design",
        description: "Strategic setup of welcome series, lead nurture sequences, and re-engagement campaigns."
      },
      {
        title: "Audience Segmentation",
        description: "Intelligent grouping of your user base to ensure highly targeted and relevant messaging."
      },
      {
        title: "Deliverability Optimization",
        description: "Technical configuration and best practices to ensure your emails actually land in the inbox."
      }
    ],
    ctaText: "Optimize Your Emails"
  },
  {
    slug: "ats-hr-tech-architecture",
    title: "ATS & HR Tech Architecture",
    coreValue: "Scale your hiring with high-level strategy for AI-driven candidate screening and interview automation.",
    heroHeadline: "Next-Generation Hiring Architecture",
    subHeadline: "Streamline your recruitment pipeline with advanced applicant tracking systems and AI-powered screening technologies.",
    whatWeOffer: [
      {
        title: "AI Screening Systems",
        description: "Design automated screening mechanisms to quickly identify the best candidates."
      },
      {
        title: "Interview Automation",
        description: "Architect systems that handle scheduling and initial candidate assessments automatically."
      },
      {
        title: "Funnel Optimization",
        description: "Comprehensive strategy to reduce time-to-hire and improve the overall candidate experience."
      }
    ],
    ctaText: "Upgrade Your HR Tech"
  }
];
