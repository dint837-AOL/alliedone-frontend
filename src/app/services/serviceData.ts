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
  // PILLAR 2: TECHNOLOGY & DIGITAL SOLUTIONS
  // ==========================================
  {
    slug: "educational-web-app",
    category: "Technology & Digital Solutions",
    title: "Educational Web/App for Class IX, X, SSC, XI, XII, HSC and University admission candidates",
    coreValue: "Comprehensive digital learning and exam preparation platforms engineered for modern students from secondary to university entrance.",
    heroHeadline: "Next-Gen Educational Apps & Web Platforms",
    subHeadline: "Interactive learning portals, model tests, live quizzes, and smart performance analytics designed for Class IX–XII, SSC, HSC, and University admission examinees.",
    whatWeOffer: [
      {
        title: "Dynamic Question Bank & Model Tests",
        description: "Curated chapter-by-chapter question repositories with instant evaluation and detailed answer explanations."
      },
      {
        title: "Live Analytics & Diagnostic Reports",
        description: "Real-time performance tracking pinpointing student strengths, weaknesses, and subject-wise accuracy."
      },
      {
        title: "Video Lessons & Interactive Quizzes",
        description: "Structured multimedia syllabus delivery with milestone assessments and revision modules."
      },
      {
        title: "Admission Exam Simulations",
        description: "Full-length timed mock tests tailored for Engineering, Medical, and Public University admission exams."
      }
    ],
    ctaText: "Explore EdTech Solutions"
  },
  {
    slug: "ai-training",
    category: "Technology & Digital Solutions",
    title: "AI Training for students, professionals, job seekers, and entrepreneurs",
    coreValue: "Empowering learners and leaders with practical, job-ready Artificial Intelligence, prompt engineering, and automation skills.",
    heroHeadline: "Practical AI Training for Career & Business Growth",
    subHeadline: "Hands-on, outcome-driven programs designed to take students, working professionals, job seekers, and business owners from beginner to confident AI practitioners.",
    whatWeOffer: [
      {
        title: "Student Academic & Skill Fast-Track",
        description: "Practical modules on utilizing AI for research, coding assistance, document synthesis, and creative projects."
      },
      {
        title: "Professional Productivity Masterclasses",
        description: "Empowering corporate teams to multiply daily output using custom GPTs, Copilots, and workflow AI tools."
      },
      {
        title: "Job Seeker Career & Portfolio Prep",
        description: "Building in-demand AI competencies, automated resume building, and demonstrable portfolio projects."
      },
      {
        title: "Entrepreneur AI Strategy Blueprints",
        description: "Equipping founders with AI operational playbooks to launch, market, and scale with minimal team overhead."
      }
    ],
    ctaText: "Enroll in AI Training"
  },
  {
    slug: "workflow-automation-no-code",
    category: "Technology & Digital Solutions",
    title: "Workflow Automation (No Code)",
    coreValue: "Eliminate repetitive manual tasks and connect all your operational software without writing a single line of code.",
    heroHeadline: "End-to-End No-Code Workflow Automation",
    subHeadline: "Connect CRMs, Google Workspace, WhatsApp, databases, payment systems, and form builders into resilient, automated operational pipelines.",
    whatWeOffer: [
      {
        title: "Make.com & Zapier Integration",
        description: "Custom multi-step automation scenarios linking all your business software into one unified ecosystem."
      },
      {
        title: "Lead Ingestion & CRM Routing",
        description: "Instantaneous capture of leads from Meta/Google ads and landing pages directly into your sales pipeline."
      },
      {
        title: "Automated Notifications & Reminders",
        description: "Trigger SMS, WhatsApp, and email alerts for payment confirmations, meeting bookings, and task deadlines."
      },
      {
        title: "Data Sync & Error-Free Reconciliation",
        description: "Eliminate manual copy-pasting across spreadsheets, inventory databases, and financial records."
      }
    ],
    ctaText: "Automate Your Workflows"
  },
  {
    slug: "dashboard-automation",
    category: "Technology & Digital Solutions",
    title: "Dashboard Automation",
    coreValue: "Real-time visibility into your business metrics with automated data pipelines and interactive executive dashboards.",
    heroHeadline: "Automated Business Intelligence & Real-Time Dashboards",
    subHeadline: "Consolidate fragmented data across sales, operations, marketing, and finance into dynamic, self-updating visual dashboards for confident decision-making.",
    whatWeOffer: [
      {
        title: "Automated Multi-Source Data Pipelines",
        description: "Seamless data extraction and transformation from databases, CRMs, e-commerce stores, and ad platforms."
      },
      {
        title: "Executive & Operational KPI Dashboards",
        description: "Interactive visualizations tailored for leadership, department heads, and operational teams."
      },
      {
        title: "Real-Time Sales & Revenue Tracking",
        description: "Live monitoring of key growth metrics, conversion rates, customer lifetime values, and cash flow."
      },
      {
        title: "Scheduled PDF Reports & Alert Triggers",
        description: "Automated daily/weekly summary reports delivered directly to your inbox or Slack/WhatsApp groups."
      }
    ],
    ctaText: "Build Your Dashboard"
  },
  {
    slug: "ai-tool-selection-implementation",
    category: "Technology & Digital Solutions",
    title: "AI Tool selection & Implementation",
    coreValue: "Navigating the modern AI landscape to handpick, integrate, and customize the highest-ROI AI stack for your organization.",
    heroHeadline: "Strategic AI Tool Selection & Seamless Deployment",
    subHeadline: "Avoid trial-and-error costs. We objectively evaluate, benchmark, and deploy the most effective AI models and software tailored to your industry.",
    whatWeOffer: [
      {
        title: "Objective AI Readiness Audit",
        description: "Deep evaluation of current technology infrastructure, data security, and high-impact AI opportunities."
      },
      {
        title: "Model & Vendor Selection",
        description: "Independent guidance comparing commercial LLMs (OpenAI, Gemini, Anthropic) vs. secure self-hosted open-source models."
      },
      {
        title: "Custom Integration & API Deployment",
        description: "Seamless embedding of AI capabilities into your existing software, CMS, or internal employee tools."
      },
      {
        title: "Staff Onboarding & SOP Engineering",
        description: "Creating practical operating procedures and hands-on guidance to ensure rapid team adoption."
      }
    ],
    ctaText: "Schedule AI Tool Audit"
  },
  {
    slug: "discovery-workshop",
    category: "Technology & Digital Solutions",
    title: "Discovery Workshop",
    coreValue: "Intensive collaborative sessions to identify operational bottlenecks, digital opportunities, and AI-driven growth vectors.",
    heroHeadline: "Uncover High-Impact Digital & Automation Opportunities",
    subHeadline: "A structured, interactive deep-dive with your leadership and core team to formulate a clear, prioritized digital transformation roadmap.",
    whatWeOffer: [
      {
        title: "Operational Bottleneck Mapping",
        description: "Analyzing every stage of your customer journey and internal processes to reveal inefficiencies and waste."
      },
      {
        title: "AI & Automation Opportunity Prioritization",
        description: "Scoring potential initiatives by ease of execution, upfront cost, and expected return on investment."
      },
      {
        title: "Tech Stack & Architecture Review",
        description: "Evaluating current tools and software licenses to eliminate redundancy and improve compatibility."
      },
      {
        title: "Actionable 30-60-90 Day Roadmap",
        description: "A concrete milestone blueprint detailing immediate quick-wins and long-term modernization strategies."
      }
    ],
    ctaText: "Book a Discovery Workshop"
  }
];
