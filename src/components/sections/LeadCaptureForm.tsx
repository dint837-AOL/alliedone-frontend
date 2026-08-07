"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { toast } from "sonner";

/**
 * Zod validation schema for the Lead Capture Form.
 * Mirrors the backend schema for strict type safety.
 */
const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  contactInfo: z.string().min(5, "Email or phone number is required").refine(val => {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    const isPhone = /^\+?[\d\s\-\(\)]{7,20}$/.test(val);
    return isEmail || isPhone;
  }, "Must be a valid email address or phone number"),
  serviceInterest: z.enum([
    "GLOBAL_TRADE_SOURCING",
    "GLOBAL_TRADE_EXPORT",
    "GLOBAL_TRADE_INDENTING",
    "GOVERNMENT_PROCUREMENT",
    "AI_OPPORTUNITY_CONSULTING",
    "PROCESS_AUTOMATION_STRATEGY",
    "WHATSAPP_BOTS_STRATEGY",
    "EMAIL_AUTOMATION_CONSULTING",
    "ATS_HR_TECH_ARCHITECTURE",
    "DIGITAL_MARKETING_AGENCY",
    "AI_CONTENT_STUDIO",
    "OTHER",
  ]),
  problemDescription: z.string().optional(),
  notes: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

/**
 * Form component to capture user leads and project inquiries.
 * Uses react-hook-form for state management and Zod for schema validation.
 * Submits data directly to the backend CRM API.
 * 
 * @returns {JSX.Element} The rendered LeadCaptureForm component.
 */
export default function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  /**
   * Handles the form submission by sending the validated data to the backend API.
   * Updates local UI state (loading, success, error) based on the network response.
   * 
   * @param {LeadFormData} data - The validated form data matching the Zod schema.
   */
  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (errorData.errors && errorData.errors.length > 0) {
          throw new Error(errorData.errors[0].message);
        }
        throw new Error(errorData.message || `Server error: ${response.status}`);
      }

      setSubmitStatus("success");
      toast.success("Message Sent Successfully!", {
        description: "We'll be in touch shortly."
      });
      reset(); // Clear the form on success
    } catch (error: any) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      
      let msg = error.message || "Failed to send message";
      if (msg === "Failed to fetch") {
        msg = "Network or CORS error. The request may have been processed, but the response was blocked.";
      }
      
      toast.error("Failed to send message", {
        description: msg
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 max-w-2xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-extrabold text-[#0D3A5C] mb-3">Let&apos;s discuss your project</h3>
      <p className="text-slate-500 text-sm md:text-base mb-8">Tell us a bit about your business and what you&apos;re looking to achieve.</p>
      
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg text-sm font-medium border border-green-100">
          Thank you! Your request has been received. Our team will contact you shortly.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-lg text-sm font-medium border border-red-100">
          Something went wrong. Please try again later.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-[#0D3A5C] mb-1.5">Full Name *</label>
            <input
              {...register("name")}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#2180C0] focus:border-transparent outline-none transition-all text-slate-800"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
          </div>

          {/* Company Field */}
          <div>
            <label className="block text-sm font-semibold text-[#0D3A5C] mb-1.5">Company</label>
            <input
              {...register("company")}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#2180C0] focus:border-transparent outline-none transition-all text-slate-800"
              placeholder="Your Company Ltd."
            />
          </div>
        </div>

        {/* Contact Info Field */}
        <div>
          <label className="block text-sm font-semibold text-[#0D3A5C] mb-1.5">Email or Phone *</label>
          <input
            {...register("contactInfo")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#2180C0] focus:border-transparent outline-none transition-all text-slate-800"
            placeholder="john@example.com"
          />
          {errors.contactInfo && <p className="text-red-500 text-xs mt-1 font-medium">{errors.contactInfo.message}</p>}
        </div>

        {/* Service Interest Field */}
        <div>
          <label className="block text-sm font-semibold text-[#0D3A5C] mb-1.5">Service of Interest *</label>
          <div className="relative">
            <select
              {...register("serviceInterest")}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#2180C0] focus:border-transparent outline-none transition-all text-slate-800 appearance-none pr-10"
            >
              <optgroup label="Global Trade & Institutional Business">
                <option value="GLOBAL_TRADE_SOURCING">Import & Strategic Sourcing</option>
                <option value="GLOBAL_TRADE_EXPORT">Export Facilitation</option>
                <option value="GLOBAL_TRADE_INDENTING">International Indenting & Representation</option>
                <option value="GOVERNMENT_PROCUREMENT">Government Procurement & Supply</option>
              </optgroup>
              <optgroup label="Technology & Digital Solutions">
                <option value="AI_OPPORTUNITY_CONSULTING">AI Opportunity & Implementation</option>
                <option value="PROCESS_AUTOMATION_STRATEGY">Process Automation Strategy</option>
                <option value="WHATSAPP_BOTS_STRATEGY">WhatsApp & Messaging Bots</option>
                <option value="EMAIL_AUTOMATION_CONSULTING">Email Automation Consulting</option>
                <option value="ATS_HR_TECH_ARCHITECTURE">ATS & HR Tech Architecture</option>
                <option value="DIGITAL_MARKETING_AGENCY">Digital Marketing & AI Agency</option>
                <option value="AI_CONTENT_STUDIO">AI Content Studio</option>
              </optgroup>
              <option value="OTHER">Other / General Inquiry</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Problem Description Field */}
        <div>
          <label className="block text-sm font-semibold text-[#0D3A5C] mb-1.5">Please describe your exact problem or project</label>
          <textarea
            {...register("problemDescription")}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#2180C0] focus:border-transparent outline-none transition-all resize-none text-slate-800"
            placeholder="Tell us about the challenges you're facing and what you need help with..."
          ></textarea>
        </div>

        {/* Notes Field */}
        <div>
          <label className="block text-sm font-semibold text-[#0D3A5C] mb-1.5">Additional Notes (Optional)</label>
          <textarea
            {...register("notes")}
            rows={2}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#2180C0] focus:border-transparent outline-none transition-all resize-none text-slate-800"
            placeholder="Any other details you'd like to share..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#2180C0] text-white py-4 rounded-xl font-bold hover:bg-[#1A5C8A] transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 text-base mt-2"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Submitting...
            </>
          ) : (
            "Send Message"
          )}
        </button>

        {/* Legal Disclaimer */}
        <p className="text-xs text-slate-500 text-center mt-4">
          By submitting this form, you agree to our{" "}
          <Link href="/terms" className="text-brand-blue hover:underline">Terms of Service</Link>
          {" "}and{" "}
          <Link href="/privacy" className="text-brand-blue hover:underline">Privacy Policy</Link>.
        </p>
      </form>
    </div>
  );
}
