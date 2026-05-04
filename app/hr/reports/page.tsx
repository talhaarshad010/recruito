"use client";

import React from "react";
import { 
  FileBarChart, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Clock, 
  Download, 
  Calendar,
  ChevronRight,
  Filter,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import Card, { CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import HiringTrendsChart from "@/components/charts/HiringTrendsChart";
import DepartmentChart from "@/components/charts/DepartmentChart";
import ApplicationSourceChart from "@/components/charts/ApplicationSourceChart";

export default function ReportsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between pb-8 border-b border-gray-100">
        <div>
          <h1 className="text-3xl font-black text-black tracking-tight uppercase">Analytical Intelligence</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">
            Data Integrity: 100% · Real-time Analytics Enabled
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" icon={<Calendar size={14} />}>Last 30 Days</Button>
          <Button variant="primary" size="sm" icon={<Download size={14} />}>Export Data</Button>
        </div>
      </div>

      {/* High-Level Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Hire Efficiency", value: "84%", trend: "+2.4%", status: "up" },
          { label: "Cost Per Hire", value: "$2.4k", trend: "-12%", status: "down" },
          { label: "Retention Rate", value: "92%", trend: "+0.8%", status: "up" },
          { label: "Diversity Index", value: "0.82", trend: "+0.05", status: "up" },
        ].map((m, i) => (
          <Card key={i} hover>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{m.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-2xl font-black text-black">{m.value}</h3>
              <div className={`flex items-center gap-0.5 text-[10px] font-black ${m.status === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                {m.status === 'up' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {m.trend}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Hiring Trends Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="uppercase tracking-widest text-xs">Pipeline Velocity (Applications vs Hires)</CardTitle>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-black" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Applications</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Hires</span>
              </div>
            </div>
          </CardHeader>
          <HiringTrendsChart />
        </Card>

        {/* Small Data Cards */}
        <div className="space-y-6">
          <Card>
            <CardTitle className="uppercase tracking-widest text-xs mb-6">Source Effectiveness</CardTitle>
            <div className="space-y-4">
              {[
                { name: "LinkedIn", value: 42, color: "bg-black" },
                { name: "Referrals", value: 28, color: "bg-gray-400" },
                { name: "Job Boards", value: 18, color: "bg-gray-200" },
                { name: "Direct", value: 12, color: "bg-gray-100" },
              ].map((s) => (
                <div key={s.name} className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-gray-900">{s.name}</span>
                    <span className="text-gray-400">{s.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                    <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-gray-50 border-gray-100">
            <CardTitle className="uppercase tracking-widest text-xs mb-4">Optimization Insight</CardTitle>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              Employee referrals are generating the highest quality candidates with a **42% lower cost per hire** compared to external job boards.
            </p>
            <button className="mt-4 text-[10px] font-black text-black uppercase tracking-[0.2em] flex items-center gap-1 hover:gap-2 transition-all">
              Launch Campaign <ChevronRight size={12} />
            </button>
          </Card>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="uppercase tracking-widest text-xs">Department Allocation</CardTitle>
          </CardHeader>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-50 rounded-3xl">
             <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Geospatial Distribution Data</span>
          </div>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="uppercase tracking-widest text-xs">Time to Fill (By Unit)</CardTitle>
          </CardHeader>
          <div className="space-y-4">
            {[
              { unit: "Engineering", days: 14, status: "Optimal" },
              { unit: "Design", days: 22, status: "Alert" },
              { unit: "Marketing", days: 18, status: "Optimal" },
              { unit: "Sales", days: 28, status: "Critical" },
            ].map((u) => (
              <div key={u.unit} className="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:border-gray-100 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Briefcase size={14} className="text-gray-400" />
                  </div>
                  <span className="text-xs font-bold text-black">{u.unit}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black text-black">{u.days}D</span>
                  <Badge variant={u.status === 'Critical' ? 'danger' : u.status === 'Alert' ? 'warning' : 'success'} className="text-[8px]">{u.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
