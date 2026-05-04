"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Search, 
  Filter, 
  ChevronRight,
  ArrowRight,
  Sparkles,
  Heart
} from "lucide-react";
import Card, { CardHeader, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SearchInput from "@/components/ui/SearchInput";
import { browseJobs } from "@/lib/dummy-data";

export default function BrowseJobsPage() {
  const [search, setSearch] = useState("");

  const filtered = browseJobs.filter(job => 
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="pb-8 border-b border-gray-100">
        <h1 className="text-3xl font-black text-black tracking-tight uppercase">Career Index</h1>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">
          Open Positions: {browseJobs.length} · Sourced for you: 4 Matches
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        <SearchInput 
          placeholder="Search by title, skill, or location..." 
          value={search} 
          onChange={setSearch} 
          className="w-full lg:w-[500px]" 
        />
        <div className="flex items-center gap-3 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
          {["All Departments", "Engineering", "Design", "Product", "Marketing"].map(dept => (
            <button key={dept} className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black hover:bg-gray-100 transition-all whitespace-nowrap">
              {dept}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Job List */}
        <div className="lg:col-span-2 space-y-6">
          {filtered.map((job) => (
            <Card key={job.id} hover className="group relative">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-black uppercase tracking-tight mb-1">{job.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{job.department}</span>
                      <div className="w-1 h-1 rounded-full bg-gray-200" />
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{job.location}</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                  <Heart size={20} />
                </button>
              </div>

              <p className="text-xs text-gray-500 mb-8 line-clamp-2 leading-relaxed font-medium">
                {job.description}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <DollarSign size={14} className="text-gray-400" />
                    <span className="text-xs font-bold text-gray-900">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-gray-400" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{job.posted}</span>
                  </div>
                </div>
                <Button variant="primary" size="sm" className="rounded-lg text-[10px] font-black uppercase tracking-widest px-8">
                  Apply Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Right: Sidebar Info */}
        <div className="space-y-8">
          <Card className="bg-black text-white border-black">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={18} className="text-white" />
              <h4 className="font-bold text-white uppercase tracking-widest text-xs">AI Matcher</h4>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-6 font-medium">
              Based on your profile, we've identified **4 open roles** that match your skill set perfectly.
            </p>
            <Button variant="secondary" fullWidth className="bg-white text-black hover:bg-gray-100 text-xs py-2 rounded-lg">
              Show Matches
            </Button>
          </Card>

          <Card>
            <CardTitle className="uppercase tracking-widest text-[10px] mb-6">Recent Trends</CardTitle>
            <div className="space-y-4">
              {[
                { label: "Frontend Roles", count: "+12", trend: "up" },
                { label: "Remote Jobs", count: "+5", trend: "up" },
                { label: "AI Engineering", count: "New", trend: "new" },
              ].map((trend, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-gray-50">
                  <span className="text-xs font-bold text-black">{trend.label}</span>
                  <Badge variant={trend.trend === 'new' ? 'purple' : 'success'} className="text-[8px]">{trend.count}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
