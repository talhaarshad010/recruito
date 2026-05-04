"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Command, Bell, User, LayoutDashboard, Briefcase, FileText } from "lucide-react";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";

export default function CandidateLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { label: "Overview", href: "/candidate/dashboard", icon: LayoutDashboard },
    { label: "Browse Jobs", href: "/candidate/jobs", icon: Briefcase },
    { label: "My Applications", href: "/candidate/applications", icon: FileText },
    { label: "My Profile", href: "/candidate/profile", icon: User },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center transition-transform group-hover:rotate-12">
                <Command size={18} className="text-white" />
              </div>
              <span className="text-lg font-black text-black tracking-tight uppercase">Recruito</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative py-6 ${
                      isActive ? "text-black" : "text-gray-400 hover:text-black"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="p-2 text-gray-400 hover:text-black transition-all">
              <Bell size={20} />
            </button>
            <div className="w-px h-6 bg-gray-100" />
            <Link href="/candidate/profile" className="flex items-center gap-3 group">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-black uppercase tracking-tight">Sarah Chen</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Candidate</p>
              </div>
              <Avatar initials="SC" size="sm" className="bg-gray-100 text-gray-900 font-bold border border-gray-100 group-hover:border-black transition-all" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-6 flex-1 bg-gray-50/30">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">© 2024 Recruito Candidate Portal</p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] font-bold text-gray-400 hover:text-black uppercase tracking-widest">Support</a>
            <a href="#" className="text-[10px] font-bold text-gray-400 hover:text-black uppercase tracking-widest">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
