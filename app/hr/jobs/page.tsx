"use client";

import React, { useState } from "react";
import { Plus, MapPin, Clock, Users as UsersIcon, MoreHorizontal, Briefcase, DollarSign, Filter, Command } from "lucide-react";
import Card, { CardHeader, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import SearchInput from "@/components/ui/SearchInput";
import { jobs } from "@/lib/dummy-data";

const statusVariant: Record<string, "success" | "warning" | "danger" | "info" | "default"> = {
  Active: "success",
  Closed: "danger",
  Draft: "default",
  Paused: "warning",
};

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("All");

  const filtered = jobs.filter((job) => {
    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.department.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || job.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="flex items-center justify-between pb-8 border-b border-gray-100">
        <div>
          <h1 className="text-3xl font-black text-black tracking-tight uppercase">Position Archive</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">
            Active: {jobs.filter(j => j.status === "Active").length} · Total Reach: 142k
          </p>
        </div>
        <Button variant="primary" size="sm" icon={<Plus size={18} />} onClick={() => setShowModal(true)}>
          Create New Position
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <SearchInput
          placeholder="Filter by title, dept..."
          value={search}
          onChange={setSearch}
          className="w-full lg:w-96"
        />
        <div className="flex items-center gap-1 p-1 bg-gray-50 border border-gray-100 rounded-xl">
          {["All", "Active", "Paused", "Closed"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                filter === s
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-400 hover:text-black hover:bg-white/50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Job Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filtered.map((job) => (
          <Card key={job.id} hover className="group flex flex-col">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-black uppercase tracking-tight">{job.title}</h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">{job.department}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={statusVariant[job.status]} dot>{job.status}</Badge>
                <button className="p-2 rounded-lg hover:bg-gray-50 text-gray-400 hover:text-black transition-all cursor-pointer">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-8 line-clamp-2 leading-relaxed font-medium">
              {job.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-auto pt-6 border-t border-gray-50">
              {[
                { icon: <MapPin size={12} />, text: job.location, label: "Location" },
                { icon: <DollarSign size={12} />, text: job.salary, label: "Range" },
                { icon: <UsersIcon size={12} />, text: `${job.applicants} Applied`, label: "Volume" },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{item.label}</p>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-900">
                    <span className="text-gray-400">{item.icon}</span>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Modal redesign */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="New Position Specification" size="lg">
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Position Title</label>
              <input type="text" placeholder="e.g. Senior Frontend Engineer" className="input-premium w-full" />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Department Unit</label>
                <select className="input-premium w-full appearance-none">
                  <option>Engineering</option>
                  <option>Design</option>
                  <option>Marketing</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Geographic Protocol</label>
                <input type="text" placeholder="e.g. San Francisco, CA" className="input-premium w-full" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Core Mission & Requirements</label>
              <textarea rows={4} placeholder="Define the role requirements..." className="input-premium w-full resize-none" />
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
            <Button variant="ghost" size="sm" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button type="submit" size="sm" className="px-8">Deploy Position</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
