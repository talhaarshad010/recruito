"use client";

import React, { useState } from "react";
import Sidebar from "@/components/hr/Sidebar";
import Topbar from "@/components/hr/Topbar";

export default function HRLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div
        className={`transition-all duration-500 ${
          collapsed ? "ml-[80px]" : "ml-[260px]"
        }`}
      >
        <Topbar />
        <main className="p-8 max-w-[1600px] mx-auto">{children}</main>
      </div>
    </div>
  );
}
