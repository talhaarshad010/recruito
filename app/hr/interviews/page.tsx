"use client";

import React, { useState } from "react";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  MoreVertical, 
  Plus, 
  Filter, 
  ChevronLeft, 
  ChevronRight,
  Search,
  User
} from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";
import SearchInput from "@/components/ui/SearchInput";
import { interviews } from "@/lib/dummy-data";

const statusVariant: Record<string, "success" | "warning" | "danger" | "info" | "default"> = {
  Scheduled: "info",
  Completed: "success",
  Cancelled: "danger",
  "In Progress": "warning",
};

export default function InterviewsPage() {
  const [view, setView] = useState<"list" | "calendar">("list");
  const [search, setSearch] = useState("");

  const filteredInterviews = interviews.filter(i => 
    i.candidateName.toLowerCase().includes(search.toLowerCase()) ||
    i.jobTitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between pb-8 border-b border-gray-100">
        <div>
          <h1 className="text-3xl font-black text-black tracking-tight uppercase">Session Pipeline</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">
            Active Cycles: {interviews.length} · Syncing with Calendar...
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button 
              onClick={() => setView("list")}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${view === "list" ? "bg-white text-black shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
            >
              List View
            </button>
            <button 
              onClick={() => setView("calendar")}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${view === "calendar" ? "bg-white text-black shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
            >
              Calendar
            </button>
          </div>
          <Button variant="primary" size="sm" icon={<Plus size={14} />}>Schedule Session</Button>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <SearchInput 
            placeholder="Search candidates or roles..." 
            value={search}
            onChange={setSearch}
            className="w-full lg:w-80" 
          />
          <button className="p-2.5 rounded-xl border border-gray-200 text-gray-400 hover:text-black hover:border-black transition-all">
            <Filter size={18} />
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-black transition-all">
              <ChevronLeft size={18} />
            </button>
            <span className="text-[10px] font-black uppercase tracking-widest text-black">May 4 - May 10, 2024</span>
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-black transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="w-px h-6 bg-gray-100 mx-2" />
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            Today
          </span>
        </div>
      </div>

      {/* Interview List */}
      <div className="space-y-4">
        {filteredInterviews.length > 0 ? (
          filteredInterviews.map((interview) => (
            <Card key={interview.id} padding="none" hover className="overflow-hidden group">
              <div className="flex flex-col lg:flex-row lg:items-center">
                {/* Date/Time Column */}
                <div className="lg:w-48 p-6 lg:border-r border-gray-50 bg-gray-50/30">
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarIcon size={12} className="text-gray-400" />
                    <span className="text-xs font-bold text-gray-900">{interview.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-gray-400" />
                    <span className="text-xs font-bold text-gray-900">{interview.time}</span>
                  </div>
                </div>

                {/* Candidate Column */}
                <div className="flex-1 p-6 flex items-center gap-4">
                  <Avatar initials={interview.candidateName.split(' ').map(n => n[0]).join('')} size="md" className="bg-gray-100 text-gray-900 font-bold border border-gray-200" />
                  <div className="min-w-0">
                    <h3 className="text-sm font-black text-black group-hover:underline cursor-pointer">{interview.candidateName}</h3>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">{interview.jobTitle}</p>
                  </div>
                </div>

                {/* Status Column */}
                <div className="px-6 py-4 lg:w-40 flex items-center justify-start lg:justify-center">
                  <Badge variant={statusVariant[interview.status]} dot>{interview.status}</Badge>
                </div>

                {/* Actions Column */}
                <div className="p-6 lg:w-64 flex items-center justify-between lg:justify-end gap-3 border-t lg:border-t-0 lg:border-l border-gray-50">
                  {interview.status === "Scheduled" && (
                    <Button variant="outline" size="sm" className="rounded-lg h-9 text-[10px] font-black uppercase tracking-widest">
                      Prepare Notes
                    </Button>
                  )}
                  <Button variant={interview.status === "Scheduled" ? "primary" : "ghost"} size="sm" className="rounded-lg h-9 text-[10px] font-black uppercase tracking-widest">
                    <Video size={14} className="mr-2" />
                    Join Link
                  </Button>
                  <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-black transition-all">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="py-20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-6">
              <CalendarIcon size={32} className="text-gray-200" />
            </div>
            <h3 className="text-lg font-bold text-black mb-2 uppercase tracking-tight">No sessions found</h3>
            <p className="text-sm text-gray-500 max-w-xs mx-auto">Try adjusting your search or filters to find what you&apos;re looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
}
