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
        "Message Sent Successfully!",
        "Thanks for reaching out! Our team has received your message and will get back to you shortly."
      );
    } catch (err: any) {
      console.error(err);
      showToast("error", "Could Not Send Message", err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Contact Info Column */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            {settings.contact_info_title}
          </h3>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed mt-3">
            {settings.contact_info_desc}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-panel/90 border border-brand-line">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-sm font-semibold text-white">Call or WhatsApp</strong>
              <a href={`tel:${phoneClean}`} className="text-xs text-brand-muted hover:text-white transition-colors font-medium">
                {settings.contact_phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-panel/90 border border-brand-line">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-brand-cyan flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-sm font-semibold text-white">Email Us Directly</strong>
              <a href={`mailto:${settings.contact_email}`} className="text-xs text-brand-muted hover:text-white transition-colors">
                {settings.contact_email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-panel/90 border border-brand-line">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-brand-blue flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-sm font-semibold text-white">Headquarters</strong>
              <span className="text-xs text-brand-muted">{settings.headquarters}</span>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-panel/90 border border-brand-line">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-sm font-semibold text-white">Quick Response</strong>
              <span className="text-xs text-brand-muted">{settings.response_time_text}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Column */}
      <div className="lg:col-span-7">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-brand-line shadow-2xl relative">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Thanks, {formData.name}!
              </h3>
              <p className="text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                We have received your message. One of our lead developers will review your project details and write back to you at <strong>{formData.email}</strong> shortly.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Send another note
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-brand-line text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue text-sm"
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-brand-line text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue text-sm"
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-brand-line text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    What can we help you with? *
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-brand-line text-white focus:outline-none focus:border-brand-blue text-sm"
                  >
                    <option value="">Select a service</option>
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-brand-line text-white focus:outline-none focus:border-brand-blue text-sm"
                >
                  <option value="">Choose an estimated budget</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="$100,000+">$100,000+</option>
                  <option value="Flexible / Need guidance">Flexible / Just exploring options</option>
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
                  placeholder="What are you trying to build or improve? Any specific features, deadlines, or existing tools you’d like us to know about?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-brand-line text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue text-sm resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-brand-blue to-[#3366e2] hover:from-[#6594ff] hover:to-[#4577f1] shadow-xl shadow-brand-blue/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Your Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Your Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center pt-2">
                We respect your privacy. We will never share your email or send you spam.
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
    <div className="py-16 lg:py-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow={settings.contact_eyebrow || "Get In Touch"}
          title={settings.contact_title || "Let’s discuss what you are"}
          gradientWord={settings.contact_gradient || "planning."}
          description={settings.contact_description || "Send us a quick message below and we will be in touch with practical ideas on how to bring your project to life."}
        />

        <div className="my-16">
          <Suspense fallback={<div className="text-center py-12 text-brand-muted">Loading contact form...</div>}>
            <ContactFormContent />
          </Suspense>
        </div>

        {/* FAQ Section in Natural Human Language */}
        <div className="my-20 p-8 sm:p-12 rounded-3xl bg-brand-panel/80 border border-brand-line max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-bold text-brand-cyan uppercase tracking-wider mb-2">
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
                a: "A senior developer on our team will read through your note, think about the best technical approach, and write back to you within 24 hours to schedule a short call or answer your questions.",
              },
              {
                q: "Can we sign a non-disclosure agreement (NDA) first?",
                a: "Absolutely. We are very accustomed to signing mutual NDAs before you share any confidential business details or proprietary ideas.",
              },
              {
                q: "Do I actually own the code we build together?",
                a: "Yes, 100%. Everything we write for your project belongs completely to you. When the work is done, all source code and assets are transferred directly to your own accounts.",
              },
              {
                q: "What if we need changes after the project launches?",
                a: "We stay right by your side. We offer simple monthly support plans to keep everything running, add small improvements, and answer any questions your staff might have.",
              },
            ].map((faq, fIdx) => (
              <div key={fIdx} className="p-5 rounded-2xl bg-slate-900/60 border border-brand-line/60 space-y-2">
                <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
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
