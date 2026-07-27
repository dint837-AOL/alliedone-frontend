import FadeInSection from "@/components/ui/FadeInSection";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | AlliedOne",
  description: "Privacy Policy for AlliedOne Limited",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="bg-[#0D3A5C] relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full border border-white/5"></div>
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full border border-white/5"></div>
        </div>
        
        <FadeInSection className="max-w-7xl mx-auto px-6 relative z-10 text-center" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-slate-100 text-xs font-bold mb-6 uppercase tracking-widest border border-white/15 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Legal & Compliance
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            How we collect, use, and protect your data across AlliedOne Limited platforms.
          </p>
        </FadeInSection>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <FadeInSection className="max-w-4xl mx-auto px-6" delay={0.2}>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 text-slate-600 leading-relaxed space-y-6">
            
            <p>
              AlliedOne Limited is a progressive Bangladeshi private limited company headquartered in Dhaka, Bangladesh, operating in technology, artificial intelligence, digital transformation, educational technology, international trade, and government/institutional business solutions.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website (<a href="http://www.alliedoneltd.com" className="text-[#2180C0] font-semibold hover:underline">www.alliedoneltd.com</a>), interact with our services, or communicate with us through our contact forms, email, phone, or WhatsApp.
            </p>
            <p>
              By using our website or services, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our website or services.
            </p>

            <h2 className="text-2xl font-extrabold text-[#0D3A5C] mt-12 mb-6 border-b border-slate-100 pb-3">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            
            <h3 className="text-lg font-bold text-[#1A5C8A] mt-8 mb-3">a) Information You Provide Directly</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number / WhatsApp number</li>
              <li>Company or organization name</li>
              <li>Job title</li>
              <li>Messages, inquiries, or details submitted through our contact form</li>
              <li>Information submitted when requesting a consultation, quote, or partnership discussion</li>
              <li>Information submitted in connection with recruitment/hiring services, if applicable</li>
              <li>Information submitted by students or institutions using our Educational Technology platforms (e.g., SSC/HSC preparation, university admission preparation, online assessments), where applicable</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1A5C8A] mt-8 mb-3">b) Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website/source</li>
              <li>Cookies and similar tracking technologies (see Section 6)</li>
            </ul>

            <h3 className="text-lg font-bold text-[#1A5C8A] mt-8 mb-3">c) Information from Business Interactions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Details shared in the course of international trade, sourcing, procurement, or supply chain engagements</li>
              <li>Documents or information exchanged during government or institutional procurement processes</li>
              <li>Information shared during technology, software, or AI project engagements (e.g., business requirements, workflows, or data needed to configure automation, chatbots, or CRM systems)</li>
            </ul>

            <h2 className="text-2xl font-extrabold text-[#0D3A5C] mt-12 mb-6 border-b border-slate-100 pb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries submitted through our website or contact channels</li>
              <li>Provide, operate, and improve our services across our business divisions (Technology, Artificial Intelligence, Digital Marketing, Educational Technology, International Trade, and Government &amp; Institutional Business)</li>
              <li>Communicate with you about consultations, quotes, project updates, or partnership opportunities</li>
              <li>Deliver AI automation services you have requested (e.g., chatbots, WhatsApp automation, CRM workflow automation, lead capture automation)</li>
              <li>Process and facilitate international trade, sourcing, or procurement engagements</li>
              <li>Provide educational technology services, including learning platforms, assessments, and related support</li>
              <li>Improve our website&apos;s functionality, content, and user experience</li>
              <li>Comply with applicable legal, regulatory, or governmental requirements</li>
              <li>Maintain the security and integrity of our website and systems</li>
            </ul>

            <h2 className="text-2xl font-extrabold text-[#0D3A5C] mt-12 mb-6 border-b border-slate-100 pb-3">3. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share information in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-[#0D3A5C]">With service providers</strong>: third parties that help us operate our website, hosting, email, CRM, or automation tools (e.g., hosting providers, email service providers, form/automation platforms), solely to help us deliver our services.</li>
              <li><strong className="text-[#0D3A5C]">With business, government, or institutional partners</strong>: where necessary to fulfill a specific engagement (e.g., procurement, sourcing, supply chain, or institutional project) you or your organization have entered into with us.</li>
              <li><strong className="text-[#0D3A5C]">For legal reasons</strong>: if required by law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of AlliedOne Limited, our clients, or others.</li>
              <li><strong className="text-[#0D3A5C]">Business transfers</strong>: in connection with a merger, acquisition, restructuring, or sale of assets, where permitted by law.</li>
            </ul>

            <h2 className="text-2xl font-extrabold text-[#0D3A5C] mt-12 mb-6 border-b border-slate-100 pb-3">4. Data Retention</h2>
            <p>We retain personal information only for as long as necessary to fulfill the purposes described in this Policy, to comply with our legal obligations, resolve disputes, and enforce our agreements, unless a longer retention period is required or permitted by law.</p>

            <h2 className="text-2xl font-extrabold text-[#0D3A5C] mt-12 mb-6 border-b border-slate-100 pb-3">5. Data Security</h2>
            <p>We implement reasonable technical and organizational measures designed to protect the confidentiality, integrity, and availability of your information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-2xl font-extrabold text-[#0D3A5C] mt-12 mb-6 border-b border-slate-100 pb-3">6. Cookies and Tracking Technologies</h2>
            <p>Our website may use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remember your preferences</li>
              <li>Understand how visitors use our website</li>
              <li>Improve website performance and content</li>
            </ul>
            <p>You can control or disable cookies through your browser settings. Disabling cookies may affect the functionality of certain parts of our website.</p>

            <h2 className="text-2xl font-extrabold text-[#0D3A5C] mt-12 mb-6 border-b border-slate-100 pb-3">7. Third-Party Links and Services</h2>
            <p>Our website may contain links to third-party websites or services (including social media platforms such as Facebook and LinkedIn). We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their respective privacy policies.</p>

            <h2 className="text-2xl font-extrabold text-[#0D3A5C] mt-12 mb-6 border-b border-slate-100 pb-3">8. Children&apos;s Privacy (Educational Technology Services)</h2>
            <p>Where our Educational Technology Division provides services intended for students (e.g., SSC/HSC preparation, university admission preparation), we are committed to handling any information relating to minors responsibly and in compliance with applicable law. Where a student is a minor, we encourage parents, guardians, or educational institutions to review this Policy and supervise the student&apos;s use of our platforms. We do not knowingly collect more information from minors than is necessary to provide the relevant educational service.</p>

            <h2 className="text-2xl font-extrabold text-[#0D3A5C] mt-12 mb-6 border-b border-slate-100 pb-3">9. Your Rights</h2>
            <p>Depending on applicable law, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information, subject to legal or contractual obligations</li>
              <li>Withdraw consent, where processing is based on consent</li>
              <li>Object to certain processing of your information</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the details in Section 11 below.</p>

            <h2 className="text-2xl font-extrabold text-[#0D3A5C] mt-12 mb-6 border-b border-slate-100 pb-3">10. International Data Transfers</h2>
            <p>Given our involvement in international trade, sourcing, and global business development, information may be processed or stored in countries other than Bangladesh. Where this occurs, we take reasonable steps to ensure your information continues to be protected in accordance with this Privacy Policy.</p>

            <h2 className="text-2xl font-extrabold text-[#0D3A5C] mt-12 mb-6 border-b border-slate-100 pb-3">11. Contact Us</h2>
            <p>If you have questions, concerns, or requests regarding this Privacy Policy or how we handle your information, please contact us:</p>
            <div className="bg-[#F0F7FF] p-6 md:p-8 rounded-xl border border-blue-100 mt-6 shadow-sm">
              <p className="mb-2"><strong className="text-[#0D3A5C] text-lg">AlliedOne Limited</strong></p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li><strong>Head Office:</strong> Dhaka, Bangladesh</li>
                <li><strong>Corporate Email:</strong> <a href="mailto:info@alliedoneltd.com" className="text-[#2180C0] font-semibold hover:underline">info@alliedoneltd.com</a></li>
                <li><strong>Website:</strong> <a href="http://www.alliedoneltd.com" className="text-[#2180C0] font-semibold hover:underline">www.alliedoneltd.com</a></li>
                <li><strong>Facebook:</strong> <a href="http://www.facebook.com/alliedoneltd" className="text-[#2180C0] font-semibold hover:underline">www.facebook.com/alliedoneltd</a></li>
                <li><strong>LinkedIn:</strong> <a href="http://www.linkedin.com/company/alliedoneltd" className="text-[#2180C0] font-semibold hover:underline">www.linkedin.com/company/alliedoneltd</a></li>
              </ul>
            </div>

            <h2 className="text-2xl font-extrabold text-[#0D3A5C] mt-12 mb-6 border-b border-slate-100 pb-3">12. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. We will post the updated version on this page with a revised &quot;Last updated&quot; date. We encourage you to review this Policy periodically.</p>
            
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
