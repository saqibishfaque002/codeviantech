"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import { useToast } from "@/context/ToastContext";
import { useSettings } from "@/context/SettingsContext";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  HelpCircle,
  Phone,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const { showToast } = useToast();
  const settings = useSettings();
  const phoneClean = settings.contact_phone.replace(/[^0-9+]/g, "");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const budgetParam = searchParams.get("budget");

    if (serviceParam || budgetParam) {
      setFormData((prev) => ({
        ...prev,
        service: serviceParam || prev.service,
        budget: budgetParam || prev.budget,
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      showToast("error", "Missing Information", "Please let us know your name, email, service, and a short message.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to deliver your message.");
      }

      setSubmitted(true);
      showToast(
        "success",
        "Inquiry Received Successfully!",
        "Thanks for reaching out! A lead developer will review your scope and follow up shortly."
      );
    } catch (err: any) {
      console.error(err);
      showToast("error", "Could Not Send Message", err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
      {/* Contact Info Column */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            {settings.contact_info_title}
          </h3>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed mt-3 font-normal">
            {settings.contact_info_desc}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-sm font-semibold text-white">Direct Phone & WhatsApp</strong>
              <a href={`tel:${phoneClean}`} className="text-xs text-brand-muted hover:text-white transition-colors font-medium">
                {settings.contact_phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-sm font-semibold text-white">Official Engineering Inquiries</strong>
              <a href={`mailto:${settings.contact_email}`} className="text-xs text-brand-muted hover:text-white transition-colors">
                {settings.contact_email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-sm font-semibold text-white">Global Delivery Headquarters</strong>
              <span className="text-xs text-brand-muted">{settings.headquarters}</span>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-sm font-semibold text-white">Rapid Response SLA</strong>
              <span className="text-xs text-brand-muted">{settings.response_time_text}</span>
            </div>
          </div>
        </div>

        {/* Mutual NDA assurance */}
        <div className="p-4 rounded-xl bg-blue-500/[0.05] border border-blue-500/20 text-xs text-slate-300 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-blue-400 flex-shrink-0" />
          <span>We routinely sign mutual NDAs before reviewing proprietary designs or intellectual property.</span>
        </div>
      </div>

      {/* Form Column */}
      <div className="lg:col-span-7">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/[0.08] shadow-2xl relative">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Thank You, {formData.name}!
              </h3>
              <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                Your message has been received by our lead engineering team. We will review your project brief and follow up directly at <strong>{formData.email}</strong> within 24 hours.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" });
                  }}
                  className="btn-secondary text-xs uppercase tracking-wider font-semibold"
                >
                  Send another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Company Name (Optional)
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Where you work"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    What can we help build? *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-white/[0.1] text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm transition-colors"
                  >
                    <option value="">Select a service category</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Web or Mobile Application">Web or Mobile Application</option>
                    <option value="Business Management (ERP & CRM)">Business Management (ERP & CRM)</option>
                    <option value="Point of Sale (POS) System">Point of Sale (POS) System</option>
                    <option value="School Management Software">School Management Software</option>
                    <option value="Startup Product (MVP)">Startup Product (MVP)</option>
                    <option value="Cloud Setup & Integrations">Cloud Setup & Integrations</option>
                    <option value="Ongoing Technical Support">Ongoing Technical Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Expected Budget Range (Optional)
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-white/[0.1] text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm transition-colors"
                >
                  <option value="">Choose an estimated budget</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="$100,000+">$100,000+</option>
                  <option value="Flexible / Need guidance">Flexible / Seeking technical guidance</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Tell us a bit about your project *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="What are you trying to build or improve? Any specific features, deadlines, or existing systems you’d like us to know about?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-white/[0.1] text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm resize-y transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 text-sm font-bold shadow-xl"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Your Project Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry to Engineering</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center pt-1 font-mono">
                Strict privacy guarantee: Zero spam, zero third-party disclosure.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const settings = useSettings();

  return (
    <div className="py-20 lg:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          eyebrow={settings.contact_eyebrow || "Get In Touch"}
          title={settings.contact_title || "Let’s discuss what you are"}
          gradientWord={settings.contact_gradient || "planning."}
          description={settings.contact_description || "Send us a quick message below and our lead engineers will follow up with practical insights and architectural direction."}
        />

        <div className="my-16">
          <Suspense fallback={<div className="text-center py-12 text-brand-muted">Loading contact form...</div>}>
            <ContactFormContent />
          </Suspense>
        </div>

        {/* FAQ Section */}
        <div className="my-20 p-8 sm:p-12 rounded-3xl bg-[#0B101D] border border-white/[0.08] max-w-4xl mx-auto shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Common Questions</span>
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-white mb-6">
            Helpful things to know before getting started
          </h3>

          <div className="space-y-4">
            {[
              {
                q: "What happens after I send this message?",
                a: "A senior software engineer on our team will read through your note, evaluate the technical scope, and write back to you within 24 hours to schedule a short discovery call or answer your questions.",
              },
              {
                q: "Can we sign a mutual Non-Disclosure Agreement (NDA) first?",
                a: "Absolutely. We are very accustomed to signing mutual NDAs prior to any discussions about proprietary business workflows or sensitive IP.",
              },
              {
                q: "Do I own 100% of the code and assets built?",
                a: "Yes, completely. Everything we build belongs 100% to your organization. When the project is completed, all repositories, design files, and cloud accounts are transferred to you.",
              },
              {
                q: "What if we need ongoing feature enhancements after launch?",
                a: "We provide flexible post-launch engineering support plans covering automated monitoring, security updates, and dedicated monthly hours for rapid feature enhancements.",
              },
            ].map((faq, fIdx) => (
              <div key={fIdx} className="p-5 rounded-2xl bg-[#090D16] border border-white/[0.06] space-y-2">
                <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-normal">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
