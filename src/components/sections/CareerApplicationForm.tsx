"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { toast } from "sonner";

/**
 * Zod validation schema for the Career Application Form.
 */
const careerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Must be a valid email address"),
  phone: z.string().min(5, "Phone number is required"),
  role: z.enum([
    "GENERAL_CONSIDERATION",
    "UI_UX_DESIGNER",
    "CONTENT_WRITER",
    "VIDEO_EDITOR",
    "SOCIAL_MEDIA_MARKETER"
  ]),
  resumeUrl: z.string().url("Must be a valid URL (e.g., Google Drive, LinkedIn, Portfolio)"),
  message: z.string().optional(),
});

type CareerFormData = z.infer<typeof careerSchema>;

export default function CareerApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareerFormData>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      role: "GENERAL_CONSIDERATION"
    }
  });

  const onSubmit = async (data: CareerFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Assuming you have an API endpoint or using the same CRM pattern
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      setSubmitStatus("success");
      toast.success("Application Submitted!", {
        description: "Thank you for your interest. We will be in touch soon."
      });
      reset(); 
    } catch (error: any) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      
      let msg = error.message || "Failed to submit application";
      if (msg.includes("Failed to fetch")) {
        msg = "Network error. The request may have been processed, but the response was blocked.";
      }
      
      toast.error("Failed to submit application", {
        description: msg
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 w-full max-w-3xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-extrabold text-[#0D3A5C] mb-3">Drop Your CV</h3>
      <p className="text-slate-500 text-sm md:text-base mb-8">Apply for a specific role or submit your resume for general consideration.</p>
      
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg text-sm font-medium border border-green-100">
          Thank you! Your application has been received. Our HR team will review it shortly.
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

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-[#0D3A5C] mb-1.5">Email Address *</label>
            <input
              {...register("email")}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#2180C0] focus:border-transparent outline-none transition-all text-slate-800"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
           {/* Phone Field */}
          <div>
            <label className="block text-sm font-semibold text-[#0D3A5C] mb-1.5">Phone Number *</label>
            <input
              {...register("phone")}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#2180C0] focus:border-transparent outline-none transition-all text-slate-800"
              placeholder="+880 1..."
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>}
          </div>

          {/* Role Field */}
          <div>
            <label className="block text-sm font-semibold text-[#0D3A5C] mb-1.5">Applying For *</label>
            <div className="relative">
              <select
                {...register("role")}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#2180C0] focus:border-transparent outline-none transition-all text-slate-800 appearance-none pr-10"
              >
                <option value="GENERAL_CONSIDERATION">General Consideration</option>
                <option value="UI_UX_DESIGNER">UI/UX Designer</option>
                <option value="CONTENT_WRITER">Content Writer</option>
                <option value="VIDEO_EDITOR">Video Editor</option>
                <option value="SOCIAL_MEDIA_MARKETER">Social Media Marketer</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
            {errors.role && <p className="text-red-500 text-xs mt-1 font-medium">{errors.role.message}</p>}
          </div>
        </div>

        {/* Resume URL Field */}
        <div>
          <label className="block text-sm font-semibold text-[#0D3A5C] mb-1.5">Resume Link (Google Drive, LinkedIn, Portfolio) *</label>
          <input
            {...register("resumeUrl")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#2180C0] focus:border-transparent outline-none transition-all text-slate-800"
            placeholder="https://..."
          />
          {errors.resumeUrl && <p className="text-red-500 text-xs mt-1 font-medium">{errors.resumeUrl.message}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-semibold text-[#0D3A5C] mb-1.5">Cover Letter / Message (Optional)</label>
          <textarea
            {...register("message")}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#2180C0] focus:border-transparent outline-none transition-all resize-none text-slate-800"
            placeholder="Tell us why you'd be a great fit for AlliedOne Tech..."
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
            "Submit Application"
          )}
        </button>

        {/* Legal Disclaimer */}
        <p className="text-xs text-slate-500 text-center mt-4">
          By submitting this application, you agree to our{" "}
          <Link href="/privacy" className="text-brand-blue hover:underline">Privacy Policy</Link>.
        </p>
      </form>
    </div>
  );
}
