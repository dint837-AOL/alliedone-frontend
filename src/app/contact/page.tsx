import LeadCaptureForm from "@/components/sections/LeadCaptureForm";

export const metadata = {
  title: "Contact Us | AlliedOne Limited",
  description: "Get in touch with AlliedOne and Global Supply BD. for global sourcing, trade solutions, and indenting representation.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[#0095DA] text-xs font-bold tracking-[0.18em] mb-3">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A5486] mb-4 tracking-tight">
            Connect With <span className="text-[#0095DA]">Our Team</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and our trade and sourcing specialists will get back to you with a tailored strategy for your business.
          </p>
        </div>
        
        {/* Render the Client Component Form */}
        <div className="max-w-2xl mx-auto">
          <LeadCaptureForm />
        </div>
      </div>
    </div>
  );
}
