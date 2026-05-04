"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Video,
  FileBarChart,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Command,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { label: "Dashboard", href: "/hr/dashboard", icon: LayoutDashboard },
  { label: "Jobs", href: "/hr/jobs", icon: Briefcase },
  { label: "Candidates", href: "/hr/candidates", icon: Users },
  { label: "Interviews", href: "/hr/interviews", icon: Video },
  { label: "Reports", href: "/hr/reports", icon: FileBarChart },
];

const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-100 transition-all duration-300 z-50 flex flex-col ${
        collapsed ? "w-[80px]" : "w-[260px]"
      } shadow-[1px_0_10px_rgba(0,0,0,0.02)]`}
    >
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-gray-50 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center">
            <Command size={20} className="text-white" />
          </div>
          {!collapsed && (
            <span className="text-lg font-black text-black tracking-tight">
              Recruito
            </span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-500 hover:text-black hover:bg-gray-50"
              }`}
            >
              <Icon
                size={20}
                className={isActive ? "text-white" : "group-hover:text-black"}
              />
              {!collapsed && (
                <span className="font-semibold text-sm tracking-tight">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-50">
        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 hover:text-black hover:bg-gray-50 transition-all cursor-pointer">
          <Settings size={20} />
          {!collapsed && <span className="font-semibold text-sm">Settings</span>}
        </button>
        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all cursor-pointer">
          <LogOut size={20} />
          {!collapsed && <span className="font-semibold text-sm">Log out</span>}
        </button>
      </div>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-black shadow-sm transition-all cursor-pointer"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>
    </aside>
  );
};

export default Sidebar;
