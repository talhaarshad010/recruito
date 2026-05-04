"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Users,
  Zap,
  Shield,
  ChevronRight,
  PlayCircle,
  Command,
  Plus,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center transition-transform group-hover:rotate-12">
              <Command size={18} className="text-white" />
            </div>
            <span className="text-lg font-black text-black tracking-tight uppercase">Recruito</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Platform", "Solutions", "AI engine", "Pricing"].map((item) => (
              <a key={item} href="#" className="text-xs font-bold text-gray-500 hover:text-black transition-colors uppercase tracking-widest">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="font-bold">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button variant="primary" size="sm" className="rounded-lg px-5">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          {/* New Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-8 shadow-sm">
            <span className="text-[10px] font-black text-black uppercase tracking-widest">New</span>
            <div className="w-px h-3 bg-gray-200" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">AI Scoring 2.0 is live</span>
            <ChevronRight size={10} className="text-gray-400" />
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-black tracking-tight leading-[0.95] mb-8 animate-slide-up">
            HIRE WITH<br />
            PRECISION.
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Recruito uses state-of-the-art neural engines to score, rank, and 
            schedule your next 100 hires automatically.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="h-14 px-8 text-sm font-black uppercase tracking-widest rounded-xl">
                Start building today
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="h-14 px-8 text-sm font-black uppercase tracking-widest rounded-xl">
              Book a session
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Preview Card */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[40px] p-2 bg-gray-100 border border-gray-200 shadow-2xl shadow-black/5">
            <div className="bg-white rounded-[32px] border border-gray-200 overflow-hidden">
              {/* Fake UI Header */}
              <div className="h-14 border-b border-gray-100 bg-gray-50/50 flex items-center px-6 justify-between">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                </div>
                <div className="flex items-center gap-3 px-4 py-1 rounded-lg border border-gray-200 bg-white shadow-sm">
                  <Command size={10} className="text-gray-400" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Dashboard</span>
                </div>
                <div className="w-10" />
              </div>
              
              {/* Fake Dashboard Content */}
              <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div className="h-48 rounded-[24px] border-2 border-dashed border-gray-100 flex items-center justify-center">
                    <BarChart3 size={32} className="text-gray-200" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 rounded-[24px] bg-gray-50" />
                    <div className="h-32 rounded-[24px] bg-gray-50" />
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-16 rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100" />
                      <div className="flex-1 space-y-1">
                        <div className="h-2 w-20 bg-gray-100 rounded" />
                        <div className="h-1.5 w-12 bg-gray-50 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-6 border-t border-gray-100 bg-gray-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap size={20} />,
                title: "Velocity",
                desc: "Reduce time-to-hire from weeks to hours with automated screening engines.",
              },
              {
                icon: <Shield size={20} />,
                title: "Accuracy",
                desc: "99.2% alignment with human hiring manager scores in double-blind tests.",
              },
              {
                icon: <Users size={20} />,
                title: "Integrity",
                desc: "Fully anonymized evaluation pipelines to eliminate unconscious bias.",
              },
            ].map((f, i) => (
              <div key={i} className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-white">
                  {f.icon}
                </div>
                <h3 className="text-lg font-black text-black uppercase tracking-tight">{f.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center">
              <Command size={14} className="text-white" />
            </div>
            <span className="text-base font-black text-black tracking-tight uppercase">Recruito</span>
          </div>
          <div className="flex items-center gap-8">
            {["Twitter", "GitHub", "Legal", "Security"].map(link => (
              <a key={link} href="#" className="text-[10px] font-black text-gray-400 hover:text-black uppercase tracking-widest">{link}</a>
            ))}
          </div>
          <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">© 2024 Recruito. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
