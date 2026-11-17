"use client";

import React, { useState } from "react";
import Logo from "@/components/Logo";
import { X, Lock, Mail, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage("Demo credentials validated. Welcome to CodvianTech Core.");
      setTimeout(() => {
        onClose();
        setStatusMessage("");
      }, 1500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090D16]/85 backdrop-blur-xl animate-fadeIn">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Ambient Sapphire Glow */}
      <div className="ambient-glow w-96 h-96 -top-20 -left-20 bg-blue-600/20 pointer-events-none" />
      <div className="ambient-glow w-96 h-96 -bottom-20 -right-20 bg-cyan-500/15 pointer-events-none" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-[420px] rounded-2xl bg-[#0D1527]/95 border border-white/[0.12] p-7 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
          <Logo size="sm" alt="CodvianTech" />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Card Title */}
        <div className="py-5 text-center">
          <div className="w-12 h-12 mx-auto rounded-xl bg-blue-500/[0.08] border border-blue-500/25 flex items-center justify-center text-cyan-400 mb-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-white tracking-tight">
            Sign In
          </h3>
          <p className="text-xs text-brand-muted mt-1.5 font-normal">
            Enterprise Client & Administrative Console
          </p>
        </div>

        {statusMessage ? (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs text-center font-medium my-4 animate-fadeIn">
            <ShieldCheck className="w-5 h-5 mx-auto mb-1 text-emerald-400" />
            {statusMessage}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@enterprise.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#090D16] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-colors"
                />
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  Password
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Password recovery link sent to registered email address.");
                  }}
                  className="text-[11px] text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Forgot your password?
                </a>
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#090D16] border border-white/[0.1] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-colors"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              </div>
            </div>

            {/* Prominent Sapphire & Cyan Gradient Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#22D3EE] hover:opacity-95 shadow-[0_0_24px_rgba(6,182,212,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>Submit</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <div className="pt-2 text-center">
              <p className="text-[11px] text-slate-500">
                Encrypted with AES-256 GCM • Zero-Trust Access
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
