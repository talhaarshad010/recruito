"use client";

import React, { useState } from "react";
import { 
  FileText, 
  Search, 
  Filter, 
  MoreVertical, 
  ExternalLink,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronRight
} from "lucide-react";
import Card, { CardHeader, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SearchInput from "@/components/ui/SearchInput";
import { myApplications } from "@/lib/dummy-data";

const statusVariant: Record<string, "success" | "warning" | "danger" | "info" | "default"> = {
  Applied: "default",
  "Under Review": "info",
  Interview: "warning",
  Offered: "success",
  Rejected: "danger",
};

export default function MyApplicationsPage() {
  const [search, setSearch] = useState("");

  const filtered = myApplications.filter(app => 
    app.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
    app.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="pb-8 border-b border-gray-100">
        <h1 className="text-3xl font-black text-black tracking-tight uppercase">My Applications</h1>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">
          Tracking: {myApplications.length} Positions · Last Update: Just Now
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <SearchInput 
          placeholder="Search company or position..." 
          value={search} 
          onChange={setSearch} 
          className="w-full lg:w-96" 
        />
        <div className="flex items-center gap-3">
          <Badge variant="outline">Filter by Status</Badge>
          <div className="w-px h-6 bg-gray-100" />
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{filtered.length} Applications</span>
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((app) => (
          <Card key={app.id} hover padding="none" className="overflow-hidden group">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex-1 p-6 flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center font-black text-black text-xl group-hover:bg-black group-hover:text-white transition-all duration-300">
                  {app.logo}
                </div>
                <div>
                  <h3 className="text-base font-black text-black uppercase tracking-tight mb-1">{app.jobTitle}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{app.company}</span>
                    <div className="w-1 h-1 rounded-full bg-gray-200" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Applied {app.appliedDate}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 md:w-48 flex items-center justify-start md:justify-center border-t md:border-t-0 md:border-l border-gray-50">
                <Badge variant={statusVariant[app.status]} dot>{app.status}</Badge>
              </div>

              <div className="p-6 md:w-64 flex items-center justify-end gap-3 border-t md:border-t-0 md:border-l border-gray-50">
                <Button variant="outline" size="sm" className="rounded-lg text-[10px] font-black uppercase tracking-widest">
                  View Job
                </Button>
                <Button variant="ghost" size="sm" className="rounded-lg">
                  <MoreVertical size={16} className="text-gray-400" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
