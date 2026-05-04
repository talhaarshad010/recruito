"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, Filter, Search, MoreVertical, Sparkles, TrendingUp, ChevronRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";
import SearchInput from "@/components/ui/SearchInput";
import Card from "@/components/ui/Card";
import { candidates } from "@/lib/dummy-data";

const statusVariant: Record<string, "success" | "warning" | "danger" | "info" | "purple" | "default"> = {
  New: "info",
  Screening: "warning",
  Interview: "purple",
  Shortlisted: "success",
  Rejected: "danger",
  Hired: "success",
};

export default function CandidatesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = candidates.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchStatus = statusFilter === "All" || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="flex items-center justify-between pb-8 border-b border-gray-100">
        <div>
          <h1 className="text-3xl font-black text-black tracking-tight uppercase">Talent Index</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">
            Verified: {candidates.length} · Global Sourcing Active
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" icon={<Filter size={16} />}>Filters</Button>
          <Button variant="primary" size="sm" icon={<Sparkles size={16} />}>AI Batch Score</Button>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <SearchInput 
          placeholder="Search identity or skill..." 
          value={search} 
          onChange={setSearch} 
          className="w-full lg:w-96" 
        />
        <div className="flex items-center gap-1 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {["All", "New", "Interview", "Shortlisted", "Hired"].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer whitespace-nowrap ${
                statusFilter === s ? "bg-black text-white shadow-sm" : "text-gray-400 hover:text-black hover:bg-gray-50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Grid view */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((candidate) => (
          <Card key={candidate.id} hover className="group flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Avatar initials={candidate.avatar} size="lg" className="bg-gray-100 text-gray-900 font-black border border-gray-100 group-hover:border-black transition-all" />
                <div>
                  <h3 className="text-sm font-black text-black uppercase tracking-tight">{candidate.name}</h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">{candidate.appliedFor}</p>
                </div>
              </div>
              <button className="p-2 rounded-lg hover:bg-gray-50 text-gray-400 hover:text-black transition-all cursor-pointer">
                <MoreVertical size={18} />
              </button>
            </div>

            <div className="flex-1 space-y-4">
              {/* Score Bar */}
              <div className="p-4 rounded-2xl bg-gray-50/50 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Readiness Index</span>
                  <span className="text-xs font-black text-black">{candidate.finalScore}%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-black rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${candidate.finalScore}%` }}
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {candidate.skills.slice(0, 3).map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-lg border border-gray-100 text-[9px] font-bold text-gray-400 uppercase tracking-widest group-hover:border-black/20 group-hover:text-black transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
              <Badge variant={statusVariant[candidate.status]} dot>{candidate.status}</Badge>
              <Link href={`/hr/candidates/${candidate.id}`}>
                <Button variant="ghost" size="sm" className="group/btn h-9 hover:bg-gray-50 px-4 text-[10px] uppercase font-black tracking-widest">
                  View Report
                  <ChevronRight size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
