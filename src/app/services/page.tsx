import {
  Globe, Truck, Briefcase, Landmark, CheckCircle, Ship
} from "lucide-react";

export const metadata = {
  title: "Services | AlliedOne Limited",
  description: "Global Sourcing, Import, Export, Indenting, and Logistics Coordination — Global Supply BD.",
};

const topRowServices = [
  {
    id: "global-sourcing-procurement",
    title: "Global Sourcing & Procurement",
    icon: <Globe className="w-6 h-6 text-[#0095DA]" />,
    desc: "Connecting Bangladeshi businesses with verified international manufacturers through rigorous techno-commercial negotiation and end-to-end procurement.",
    bullets: [
      "Global Supplier Identification & Verification",
      "RFQ Preparation & Quotation Analysis",
      "Price & Commercial Terms Negotiation",
      "Pre-Shipment Quality Inspection Coordination",
    ],
  },
  {
    id: "import-trade-solutions",
    title: "Import & Trade Solutions",
    icon: <Landmark className="w-6 h-6 text-[#0095DA]" />,
    desc: "Managing complex cross-border imports, banking instruments, regulatory clearance, and major institutional supply execution.",
    bullets: [
      "LC / TT Banking & Trade Finance Coordination",
      "Customs Tariffs, HS Code & Regulatory Compliance",
      "Proforma Invoice (PI) & Commercial Contract Vetting",
      "Government & Private Tender Supply Execution",
    ],
  },
  {
    id: "export-global-market-access",
    title: "Export & Global Market Access",
    icon: <Ship className="w-6 h-6 text-[#0095DA]" />,
    desc: "Assisting Bangladeshi producers in entering international markets through targeted buyer outreach, trade compliance, and export execution.",
    bullets: [
      "Quality Export-Ready Product Sourcing",
      "International Buyer Identification & Matching",
      "Export Costing & Professional Offer Presentation",
      "Export Documentation (Exp, Form C, GSP, CoO)",
    ],
  },
];

const bottomRowServices = [
  {
    id: "international-indenting-representation",
    title: "International Indenting & Representation",
    icon: <Briefcase className="w-6 h-6 text-[#0095DA]" />,
    desc: "Acting as the authorized local agent and strategic partner for overseas manufacturers expanding their market footprint in Bangladesh.",
    bullets: [
      "Foreign Principal & Brand Representation",
      "Local Buyer, Dealer & Distributor Network Development",
      "Indenting, Order Booking & Commission Management",
      "Technical Presentations & Commercial Negotiation",
    ],
  },
  {
    id: "supply-chain-logistics-coordination",
    title: "Supply Chain & Logistics Coordination",
    icon: <Truck className="w-6 h-6 text-[#0095DA]" />,
    desc: "Orchestrating multi-modal transport, customs oversight, and final delivery to keep cargo moving without delays.",
    bullets: [
      "Shipping Space Booking & Container Allocation",
      "Port Clearance & Customs Brokerage Supervision",
      "Real-Time Cargo Tracking & Milestone Updates",
      "Demurrage Control & Last-Mile Delivery Coordination",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* ── Page Header: Just one sentence under What We Offer ── */}
      <section className="bg-[#0A5486] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border border-white/5"></div>
          <div className="absolute -bottom-12 -left-12 w-[300px] h-[300px] rounded-full border border-white/5"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 relative z-10 text-center">
          <span className="inline-block text-[#0095DA] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            What We Offer
          </span>
          <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
            We power international trade and supply as a modern solution for businesses.
          </p>
        </div>
      </section>

      {/* ── Services Section: Global Supply BD. (3 on first row, 2 on second row) ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 pb-24">
        <div className="mb-10 border-b border-slate-200 pb-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A5486]">
            Global Supply BD.
          </h2>
        </div>

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {topRowServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Second row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bottomRowServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

    </main>
  );
}

function ServiceCard({
  service,
}: {
  service: {
    id: string;
    title: string;
    icon: React.ReactNode;
    desc: string;
    bullets: string[];
  };
}) {
  return (
    <div
      id={service.id}
      className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-[#0095DA]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group scroll-mt-24"
    >
      <div className="w-14 h-14 rounded-2xl bg-[#EBF4FB] text-[#0095DA] group-hover:bg-[#0A5486] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 shadow-sm">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-[#0A5486] mb-3 leading-tight">{service.title}</h3>
      <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">{service.desc}</p>

      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
        <ul className="space-y-3">
          {service.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-slate-700 text-sm font-medium">
              <CheckCircle className="w-4 h-4 text-[#0095DA] flex-shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
