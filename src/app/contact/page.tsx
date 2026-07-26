import LeadCaptureForm from "@/components/sections/LeadCaptureForm";

export const metadata = {
  title: "Contact Us | AlliedOne",
  description: "Get in touch with AlliedOne for AI automation and consulting.",
};

export default function ContactPage() {
  return (
    <div className="bg-brand-light min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Ready to <span className="text-brand-blue">Automate?</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you with a tailored strategy for your business.
          </p>
        </div>
        
        {/* Render the Client Component Form */}
        <LeadCaptureForm />
      </div>
    </div>
  );
}
