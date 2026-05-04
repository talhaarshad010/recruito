"use client";

import React from "react";
import Link from "next/link";
import { 
  Briefcase, 
  FileText, 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Card, { CardHeader, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { myApplications, browseJobs } from "@/lib/dummy-data";

export default function CandidateDashboard() {
  const activeApplications = myApplications.filter(app => app.status !== "Rejected" && app.status !== "Offered");

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Header */}
      <div className="pb-8 border-b border-gray-100">
        <h1 className="text-3xl font-black text-black tracking-tight uppercase">Dashboard</h1>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">
          Welcome back, Sarah · Next Session: Tomorrow, 10:00 AM
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Stats & Applications */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="bg-black text-white border-black relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-white/20 transition-all" />
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 relative z-10">Active Pipeline</p>
              <h3 className="text-3xl font-black relative z-10">{activeApplications.length}</h3>
            </Card>
            <Card hover>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Interviews</p>
              <h3 className="text-3xl font-black text-black">2</h3>
            </Card>
            <Card hover>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Saved Jobs</p>
              <h3 className="text-3xl font-black text-black">12</h3>
            </Card>
          </div>

          {/* Current Applications */}
          <Card padding="none">
            <CardHeader className="p-6 border-b border-gray-50">
              <CardTitle className="uppercase tracking-widest text-xs">Active Applications</CardTitle>
              <Link href="/candidate/applications">
                <button className="text-[10px] font-black text-gray-400 hover:text-black uppercase tracking-widest flex items-center gap-1">
                  All Applications <ArrowRight size={10} />
                </button>
              </Link>
            </CardHeader>
            <div className="divide-y divide-gray-50">
              {myApplications.slice(0, 3).map((app) => (
                <div key={app.id} className="p-6 flex items-center justify-between group hover:bg-gray-50/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center font-black text-black border border-gray-100">
                      {app.logo}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-black uppercase tracking-tight">{app.jobTitle}</h4>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">{app.company} · Applied {app.appliedDate}</p>
                    </div>
                  </div>
                  <Badge variant={app.status === 'Rejected' ? 'danger' : app.status === 'Offered' ? 'success' : 'info'} dot>
                    {app.status}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Recommended Jobs */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Recommended Positions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {browseJobs.slice(0, 2).map((job) => (
                <Card key={job.id} hover className="flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="default" className="bg-gray-50 text-gray-900 border-gray-200">New</Badge>
                    <span className="text-[10px] font-bold text-gray-400">{job.posted}</span>
                  </div>
                  <h4 className="text-sm font-black text-black uppercase tracking-tight mb-1">{job.title}</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">{job.department} · {job.location}</p>
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[10px] font-black text-black tracking-widest">{job.salary}</span>
                    <Button variant="ghost" size="xs" icon={<ArrowRight size={10} />}>View</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right: AI & Tasks */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-gray-50 border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={18} className="text-black" />
              <h4 className="font-bold text-black uppercase tracking-widest text-xs">AI Matching Score</h4>
            </div>
            <div className="flex items-center gap-6 mb-6">
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-200" />
                  <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-black" 
                    strokeDasharray={213.5}
                    strokeDashoffset={213.5 - (213.5 * 92) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute text-lg font-black text-black">92%</span>
              </div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Your profile has an exceptional match rate for **3 new positions** posted today.
              </p>
            </div>
            <Button variant="primary" fullWidth size="sm">Review Matches</Button>
          </Card>

          <Card>
            <CardTitle className="uppercase tracking-widest text-[10px] mb-6">Action Items</CardTitle>
            <div className="space-y-4">
              {[
                { label: "Technical Interview", time: "Tomorrow, 10:00 AM", type: "urgent" },
                { label: "Portfolio Update", time: "Pending Review", type: "normal" },
                { label: "Complete Assessment", time: "Due in 2 days", type: "urgent" },
              ].map((task, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 group">
                  {task.type === 'urgent' ? (
                    <AlertCircle size={14} className="text-black shrink-0 mt-0.5" />
                  ) : (
                    <Clock size={14} className="text-gray-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="text-xs font-bold text-black group-hover:underline cursor-pointer">{task.label}</p>
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">{task.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
