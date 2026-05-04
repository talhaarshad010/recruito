"use client";

import React, { useState } from "react";
import { Camera, Save, Upload, Mail, Phone, MapPin, Briefcase, GraduationCap, Globe, Link2, ChevronRight, Plus, MoreVertical, FileText } from "lucide-react";
import Card, { CardHeader, CardTitle } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";

export default function CandidateProfilePage() {
  const [editing, setEditing] = useState(false);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between pb-8 border-b border-gray-100">
        <div>
          <h1 className="text-3xl font-black text-black tracking-tight uppercase">My Profile</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">
            Global Talent Identifier: #SC-2024-814
          </p>
        </div>
        <Button
          variant={editing ? "primary" : "outline"}
          size="sm"
          icon={editing ? <Save size={14} /> : undefined}
          onClick={() => setEditing(!editing)}
        >
          {editing ? "Save Changes" : "Edit Profile"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Avatar & Resume */}
        <div className="space-y-8">
          <Card className="text-center group">
            <div className="relative inline-block mx-auto mb-6">
              <Avatar initials="SC" size="xl" className="mx-auto bg-gray-100 text-black border-2 border-gray-100 group-hover:border-black transition-all" />
              {editing && (
                <button className="absolute bottom-0 right-0 p-2 bg-black text-white rounded-full border-2 border-white shadow-lg hover:scale-110 transition-all cursor-pointer">
                  <Camera size={14} />
                </button>
              )}
            </div>
            <h3 className="text-xl font-black text-black uppercase tracking-tight">Sarah Chen</h3>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 mb-6">Senior Frontend Engineer</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="success" dot>Available</Badge>
              <Badge variant="outline">Remote</Badge>
            </div>
          </Card>

          <Card>
            <CardTitle className="uppercase tracking-widest text-[10px] mb-6">Core Documents</CardTitle>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl border border-gray-100 hover:border-black transition-all group cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-all">
                      <FileText size={16} />
                    </div>
                    <span className="text-xs font-bold text-black">Resume_Final_2024.pdf</span>
                  </div>
                  <Badge variant="default" className="text-[8px]">Current</Badge>
                </div>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Updated 2 days ago</p>
              </div>
              <Button variant="outline" fullWidth size="sm" icon={<Upload size={14} />}>Update Resume</Button>
            </div>
          </Card>
        </div>

        {/* Center/Right: Details */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="uppercase tracking-widest text-xs">Biographical Information</CardTitle>
            </CardHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Mail size={16} />, label: "Email Address", value: "sarah.chen@email.com", type: "email" },
                { icon: <Phone size={16} />, label: "Mobile Number", value: "+1 (555) 123-4567", type: "tel" },
                { icon: <MapPin size={16} />, label: "Current Location", value: "San Francisco, CA", type: "text" },
                { icon: <Globe size={16} />, label: "Digital Presence", value: "portfolio.sarahchen.dev", type: "url" },
              ].map((field, i) => (
                <div key={i} className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">{field.label}</label>
                  {editing ? (
                    <input type={field.type} defaultValue={field.value} className="input-premium w-full" />
                  ) : (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/50 border border-transparent">
                      <span className="text-gray-400">{field.icon}</span>
                      <span className="text-xs font-bold text-black">{field.value}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="uppercase tracking-widest text-xs">Technical Proficiency</CardTitle>
              {editing && <Button variant="ghost" size="xs" icon={<Plus size={10} />}>Add Skill</Button>}
            </CardHeader>
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Node.js", "GraphQL", "Framer Motion", "Tailwind CSS", "Next.js"].map((skill) => (
                <div key={skill} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-100 hover:border-black transition-all group cursor-default">
                  <span className="text-xs font-bold text-gray-900">{skill}</span>
                  {editing && <button className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer">×</button>}
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="uppercase tracking-widest text-xs">Professional History</CardTitle>
              {editing && <Button variant="ghost" size="xs" icon={<Plus size={10} />}>Add Experience</Button>}
            </CardHeader>
            <div className="space-y-6">
              {[
                { role: "Senior Frontend Engineer", company: "MetaStream AI", period: "2021 - Present" },
                { role: "Frontend Developer", company: "CloudLink Solutions", period: "2018 - 2021" },
              ].map((exp, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:border-gray-100 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-black uppercase tracking-tight">{exp.role}</h4>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">{exp.company} · {exp.period}</p>
                    </div>
                  </div>
                  {editing && <Button variant="ghost" size="xs" icon={<MoreVertical size={14} />} />}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}


