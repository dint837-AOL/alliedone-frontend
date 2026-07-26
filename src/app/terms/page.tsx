export const metadata = {
  title: "Terms of Service | AlliedOne Limited",
  description: "Read the full Terms of Service for AlliedOne Limited, governing your use of our website and services.",
};

const sections = [
  {
    id: "about",
    title: "1. About AlliedOne Limited",
    content: (
      <>
        <p>
          AlliedOne Limited is a Bangladeshi private limited company operating across six business divisions: Technology &amp; Digital Innovation, Artificial Intelligence &amp; Automation, Digital Marketing, Educational Technology, International Trade &amp; Supply Chain, and Government &amp; Institutional Solutions.
        </p>
        <p className="mt-3">
          These Terms apply across all divisions unless a separate signed agreement or statement of work states otherwise, in which case that agreement will govern for the specific engagement it covers.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    content: (
      <p>
        By using our Website or Services, you represent that you are at least 18 years of age (or the age of majority in your jurisdiction) and, where acting on behalf of a company, government body, or institution, that you have authority to bind that organization to these Terms. Our Educational Technology Services are addressed separately in Section 9.
      </p>
    ),
  },
  {
    id: "services",
    title: "3. Our Services",
    content: (
      <>
        <p className="mb-3">Depending on the division and engagement, our Services may include, without limitation:</p>
        <ul className="space-y-2 list-none">
          {[
            "Software development, web development, mobile applications, cloud solutions, and enterprise applications",
            "AI chatbots, WhatsApp and Messenger automation, lead capture and CRM workflow automation, and business process automation",
            "Digital marketing services including SEO, social media marketing, paid advertising, branding, and content marketing",
            "Educational technology platforms, including examination preparation, university admission preparation, online assessment, and learning management tools",
            "International trade, industrial sourcing, import/export, and supply chain services",
            "Government and institutional procurement support, project-based services, and strategic collaboration",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start text-slate-600">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2180C0] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-slate-600">
          Specific deliverables, timelines, fees, and scope for any engagement will be set out in a proposal, quotation, statement of work, purchase order, or signed agreement (a &quot;Service Agreement&quot;). Where these Terms conflict with a Service Agreement, the Service Agreement controls for that engagement.
        </p>
      </>
    ),
  },
  {
    id: "payment",
    title: "4. Quotations, Fees & Payment",
    content: (
      <ul className="space-y-3 list-none">
        {[
          "Quotations and proposals are valid for the period stated in the document, or 30 days if no period is stated, and do not constitute a binding offer until accepted in writing.",
          "Fees, currency, payment schedule, and invoicing terms will be specified in the applicable Service Agreement or invoice.",
          "Unless otherwise agreed, invoices are due within the timeframe stated on the invoice. Late payments may result in suspension of Services and may accrue late fees permitted under applicable Bangladeshi law.",
          "Client is responsible for any applicable taxes, duties, customs charges, or bank/transfer fees associated with payment, except taxes on AlliedOne's net income.",
          "For international trade, sourcing, and procurement engagements, payment terms, letters of credit, incoterms, and related conditions will be governed by the specific trade contract or purchase agreement between the parties.",
        ].map((item, i) => (
          <li key={i} className="flex gap-3 items-start text-slate-600">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2180C0] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "client",
    title: "5. Client Responsibilities",
    content: (
      <>
        <p className="mb-3 text-slate-600">To enable us to deliver Services effectively, Client agrees to:</p>
        <ul className="space-y-2 list-none">
          {[
            "Provide accurate, complete, and timely information, content, credentials, and access required for the engagement",
            "Review and approve deliverables within agreed timeframes",
            "Obtain any necessary rights, licenses, or permissions for content, data, or materials provided to us",
            "Comply with applicable laws in connection with its use of our Services, including data protection, advertising, export control, and procurement regulations",
            "Not use our Services for any unlawful, fraudulent, infringing, or harmful purpose",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start text-slate-600">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2180C0] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "ai",
    title: "6. Artificial Intelligence & Automation Services",
    content: (
      <ul className="space-y-3 list-none">
        {[
          "AI-generated or AI-assisted outputs (e.g., chatbot responses) may occasionally be inaccurate or incomplete; Client is responsible for reviewing and approving how such outputs are used, particularly for customer-facing or decision-making purposes.",
          "Client is responsible for ensuring that its use of automation tools (including WhatsApp, Messenger, and CRM integrations) complies with the terms of service of the relevant third-party platforms and applicable messaging/marketing consent laws.",
          "We do not guarantee specific business outcomes (such as lead volume, conversion rates, or cost savings) from AI or automation Services unless expressly stated in a Service Agreement.",
        ].map((item, i) => (
          <li key={i} className="flex gap-3 items-start text-slate-600">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2180C0] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "marketing",
    title: "7. Digital Marketing Services",
    content: (
      <p className="text-slate-600">
        Digital marketing results (e.g., search rankings, traffic, engagement, ad performance) depend on factors outside our control, including third-party platform algorithms, market conditions, and budget. We do not guarantee specific rankings, traffic, or return on ad spend unless expressly stated in a Service Agreement. Client remains responsible for compliance of its advertising content with applicable advertising standards and platform policies.
      </p>
    ),
  },
  {
    id: "software",
    title: "8. Website Development & Software Deliverables",
    content: (
      <ul className="space-y-3 list-none">
        {[
          "Unless otherwise agreed in writing, ownership of custom deliverables (e.g., custom code, designs) transfers to Client upon full payment; AlliedOne retains ownership of pre-existing tools, frameworks, templates, and know-how used to build the deliverable, and grants Client a license to use such underlying components as part of the delivered product.",
          "Third-party software, plugins, themes, licenses, or hosting services procured on Client's behalf remain subject to the relevant third party's terms, and any recurring fees (hosting, licenses, subscriptions) are Client's responsibility unless otherwise agreed.",
          "Ongoing support, maintenance, and updates are provided only where included in a Service Agreement or separate support plan.",
        ].map((item, i) => (
          <li key={i} className="flex gap-3 items-start text-slate-600">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2180C0] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "edtech",
    title: "9. Educational Technology Services",
    content: (
      <>
        <p className="text-slate-600 mb-3">
          Our Educational Technology Division may offer platforms and services intended for students, including SSC/HSC examination preparation, university admission preparation, and online assessments.
        </p>
        <ul className="space-y-3 list-none">
          {[
            "Where a user is a minor, we require that a parent, guardian, or the enrolling educational institution reviews and accepts these Terms and our Privacy Policy on the student's behalf, and supervises the student's use of the platform.",
            "Educational content is provided for exam and skills preparation purposes and does not guarantee any specific examination result, admission outcome, or grade.",
            "Institutions using our platforms on behalf of students are responsible for obtaining any consents required under applicable law prior to enrolling students.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start text-slate-600">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2180C0] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "trade",
    title: "10. International Trade, Sourcing & Procurement",
    content: (
      <p className="text-slate-600">
        Engagements involving import, export, industrial sourcing, supply chain management, or government/institutional procurement are governed primarily by the specific trade contract, purchase order, tender documentation, or procurement agreement entered into between the parties. Where such a specific agreement exists, it takes precedence over these Terms with respect to that engagement. General principles of confidentiality, payment, and dispute resolution in these Terms apply to the extent not otherwise addressed.
      </p>
    ),
  },
  {
    id: "ip",
    title: "11. Intellectual Property",
    content: (
      <ul className="space-y-3 list-none">
        {[
          "All content on the Website, including text, graphics, logos, trademarks, and design, is owned by or licensed to AlliedOne Limited and is protected by applicable intellectual property laws.",
          "You may not copy, reproduce, distribute, or create derivative works from our Website content without our prior written consent, except as necessary to use the Services as intended.",
          "Client retains ownership of its pre-existing intellectual property, data, and content shared with us, and grants AlliedOne a limited license to use such materials solely to perform the Services.",
        ].map((item, i) => (
          <li key={i} className="flex gap-3 items-start text-slate-600">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2180C0] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "confidentiality",
    title: "12. Confidentiality",
    content: (
      <p className="text-slate-600">
        Each party agrees to keep confidential any non-public business, technical, financial, or client information disclosed by the other party in connection with an engagement, and to use it only for the purposes of that engagement, except where disclosure is required by law, regulation, or governmental authority.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "13. Third-Party Services and Links",
    content: (
      <p className="text-slate-600">
        Our Website and Services may reference, integrate with, or link to third-party platforms (such as hosting providers, payment processors, WhatsApp, Facebook/Meta, or LinkedIn). We are not responsible for the availability, content, or practices of third-party services, and your use of them is subject to their own terms and policies.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "14. Disclaimers",
    content: (
      <p className="text-slate-600">
        Our Website and Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the fullest extent permitted by applicable law, AlliedOne Limited disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, and uninterrupted or error-free operation. We do not warrant that our Website will be secure, error-free, or continuously available.
      </p>
    ),
  },
  {
    id: "liability",
    title: "15. Limitation of Liability",
    content: (
      <p className="text-slate-600">
        To the fullest extent permitted by applicable law, AlliedOne Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of profits, revenue, data, or business opportunity, arising out of or related to your use of our Website or Services. Our total aggregate liability for any claim arising from a specific engagement shall not exceed the total fees paid by Client to AlliedOne for that engagement in the six (6) months preceding the event giving rise to the claim, except where such limitation is not permitted by applicable law.
      </p>
    ),
  },
  {
    id: "indemnification",
    title: "16. Indemnification",
    content: (
      <p className="text-slate-600">
        You agree to indemnify and hold harmless AlliedOne Limited, its officers, employees, and partners from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your breach of these Terms, misuse of our Services, or violation of applicable law or third-party rights.
      </p>
    ),
  },
  {
    id: "termination",
    title: "17. Term, Suspension & Termination",
    content: (
      <ul className="space-y-3 list-none">
        {[
          "These Terms apply for as long as you use our Website or Services and remain in effect for any ongoing Service Agreement, subject to that agreement's own termination provisions.",
          "We may suspend or restrict access to our Website or Services where necessary to protect security, comply with law, or address non-payment, with notice where reasonably practicable.",
          "Either party may terminate a Service Agreement in accordance with its terms; termination does not relieve Client of the obligation to pay for Services already rendered.",
        ].map((item, i) => (
          <li key={i} className="flex gap-3 items-start text-slate-600">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2180C0] shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "governing-law",
    title: "18. Governing Law & Dispute Resolution",
    content: (
      <p className="text-slate-600">
        These Terms are governed by the laws of the People&apos;s Republic of Bangladesh, without regard to conflict-of-law principles. The parties agree to first attempt to resolve any dispute through good-faith negotiation. If a dispute cannot be resolved amicably, it shall be subject to the exclusive jurisdiction of the competent courts of Dhaka, Bangladesh, unless a separate Service Agreement specifies a different dispute resolution mechanism (e.g., arbitration) for that engagement.
      </p>
    ),
  },
  {
    id: "changes",
    title: "19. Changes to These Terms",
    content: (
      <p className="text-slate-600">
        We may update these Terms from time to time to reflect changes in our Services, business structure, or legal requirements. We will post the updated version on this page with a revised &quot;Last updated&quot; date. Continued use of our Website or Services after changes take effect constitutes acceptance of the revised Terms. Material changes affecting an active Service Agreement will be communicated directly to the affected Client.
      </p>
    ),
  },
  {
    id: "severability",
    title: "20. Severability & Entire Agreement",
    content: (
      <p className="text-slate-600">
        If any provision of these Terms is found unenforceable, the remaining provisions will continue in full force and effect. These Terms, together with any applicable Service Agreement and our Privacy Policy, constitute the entire agreement between you and AlliedOne Limited regarding your use of our Website and Services.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-[#0D3A5C] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-white/5" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full border border-white/5" />
        </div>
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            These Terms govern your access to and use of the AlliedOne Limited website and all services we provide.
          </p>
          <p className="mt-5 inline-block text-xs font-bold text-[#5BAEE8] uppercase tracking-widest">
            Last Updated: July 24, 2026
          </p>
        </div>
      </section>

      {/* ── Intro Card ── */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            By accessing our Website, submitting an inquiry, engaging our Services, or otherwise doing business with us, you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) agree to be bound by these Terms. If you do not agree, please do not use our Website or Services.
          </p>
        </div>
      </div>

      {/* ── Sections ── */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="bg-white border border-slate-100 rounded-2xl p-7 md:p-10 shadow-sm"
          >
            <h2 className="text-lg md:text-xl font-bold text-[#0D3A5C] mb-4 pb-4 border-b border-slate-100">
              {section.title}
            </h2>
            <div className="text-sm md:text-base leading-relaxed">
              {section.content}
            </div>
          </div>
        ))}

        {/* ── Contact ── */}
        <div className="bg-[#0D3A5C] text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-xl font-bold mb-6">21. Contact Us</h2>
          <p className="text-slate-300 mb-6">If you have questions about these Terms, please contact us:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              { label: "Company", value: "AlliedOne Limited" },
              { label: "Head Office", value: "Dhaka, Bangladesh" },
              { label: "Corporate Email", value: "info@alliedoneltd.com" },
              { label: "Website", value: "www.alliedoneltd.com" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-[#5BAEE8] text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-white font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
