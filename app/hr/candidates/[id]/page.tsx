"use client";

import React, { use } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Calendar,
  Sparkles,
  Download,
  Share2,
  MoreVertical,
  CheckCircle2,
  Clock,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import Card, { CardHeader, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";
import { candidates } from "@/lib/dummy-data";

export default function CandidateDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const candidate = candidates.find(c => c.id === id);

  if (!candidate) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-bold text-black mb-4 uppercase">Candidate Not Found</h2>
        <Link href="/hr/candidates">
          <Button variant="outline">Return to Talent Index</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-100">
        <div className="flex items-center gap-6">
          <Link href="/hr/candidates" className="p-2 rounded-xl border border-gray-100 hover:border-black transition-all group">
            <ChevronLeft size={20} className="text-gray-400 group-hover:text-black" />
          </Link>
          <div className="flex items-center gap-5">
            <Avatar initials={candidate.avatar} size="xl" className="bg-gray-100 text-gray-900 font-black text-xl border border-gray-100" />
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl font-black text-black tracking-tight uppercase">{candidate.name}</h1>
                <Badge variant="success" dot>{candidate.status}</Badge>
              </div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{candidate.appliedFor} · Applied {candidate.appliedDate}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" icon={<Share2 size={14} />}>Share Report</Button>
          <Button variant="outline" size="sm" icon={<Download size={14} />}>Download PDF</Button>
          <Button variant="primary" size="sm">Move to Next Stage</Button>
          <button className="p-2.5 rounded-xl border border-gray-100 text-gray-400 hover:text-black transition-all">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Evaluation & Skills */}
        <div className="lg:col-span-8 space-y-8">
          {/* AI Score Breakdown */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-[100px] -mr-32 -mt-32 opacity-50" />
            <CardHeader>
              <CardTitle className="uppercase tracking-widest text-xs flex items-center gap-2">
                <Sparkles size={14} className="text-black" />
                AI Intelligence Report
              </CardTitle>
            </CardHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6 relative z-10">
              {[
                { label: "Resume Analysis", score: candidate.resumeScore, desc: "Technical alignment & clarity" },
                { label: "Interview Performance", score: candidate.interviewScore, desc: "Communication & problem solving" },
                { label: "Aggregate Fit", score: candidate.finalScore, desc: "Overall suitability for the role" },
              ].map((s, i) => (
                <div key={i} className="text-center space-y-4">
                  <div className="relative inline-flex items-center justify-center">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-gray-100" />
                      <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-black" 
                        strokeDasharray={251.2}
                        strokeDashoffset={251.2 - (251.2 * s.score) / 100}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-xl font-black text-black">{s.score}%</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-900 mb-1">{s.label}</p>
                    <p className="text-[10px] text-gray-400 font-medium">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-[24px] bg-gray-50 border border-gray-100">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-black mb-3">AI Verdict Summary</h4>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                {candidate.name} demonstrates exceptional proficiency in core frontend technologies, particularly React and TypeScript. 
                Her experience at previous high-growth startups aligns perfectly with our velocity requirements. 
                Strong recommendation for the **Final Protocol** stage.
              </p>
            </div>
          </Card>

          {/* Technical Index */}
          <Card>
            <CardHeader>
              <CardTitle className="uppercase tracking-widest text-xs">Technical Skill Matrix</CardTitle>
            </CardHeader>
            <div className="flex flex-wrap gap-3">
              {candidate.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 group hover:border-black transition-all">
                  <span className="text-xs font-bold text-gray-900">{skill}</span>
                  <CheckCircle2 size={12} className="text-emerald-500" />
                </div>
              ))}
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-dashed border-gray-200 text-gray-400 hover:text-black hover:border-black transition-all">
                <span className="text-xs font-bold uppercase tracking-widest">Verify More</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </Card>

          {/* Experience Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="uppercase tracking-widest text-xs">Professional Trajectory</CardTitle>
            </CardHeader>
            <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
              {[
                { role: "Senior Frontend Engineer", company: "MetaStream AI", period: "2021 - Present", desc: "Leading the core platform redesign and implementing high-performance visualization components." },
                { role: "Frontend Developer", company: "CloudLink Solutions", period: "2018 - 2021", desc: "Developed responsive SaaS dashboards and integrated real-time data streaming." },
              ].map((exp, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-black" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-black uppercase tracking-tight">{exp.role}</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">{exp.company} · {exp.period}</p>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column: Meta Info */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="bg-gray-50/50">
            <CardTitle className="uppercase tracking-widest text-[10px] mb-6">Identity Meta</CardTitle>
            <div className="space-y-6">
              {[
                { icon: <Mail size={16} />, label: "Electronic Mail", value: candidate.email },
                { icon: <Phone size={16} />, label: "Mobile Terminal", value: candidate.phone },
                { icon: <MapPin size={16} />, label: "Geographic Location", value: candidate.location },
                { icon: <Briefcase size={16} />, label: "Experience Level", value: candidate.experience },
                { icon: <GraduationCap size={16} />, label: "Educational Index", value: candidate.education },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-gray-400 shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-xs font-bold text-gray-900 truncate">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-6 border-t border-gray-100">
              <Button variant="outline" fullWidth icon={<ExternalLink size={14} />}>View Resume PDF</Button>
            </div>
          </Card>

          <Card>
            <CardTitle className="uppercase tracking-widest text-[10px] mb-6">Activity Transcript</CardTitle>
            <div className="space-y-6">
              {[
                { icon: <CheckCircle2 size={12} className="text-emerald-500" />, text: "Resume Screening Passed", time: "Jan 16, 14:20" },
                { icon: <Clock size={12} className="text-gray-400" />, text: "Technical Interview Completed", time: "Jan 20, 10:00" },
                { icon: <Clock size={12} className="text-gray-400" />, text: "Culture Fit Assesment Pending", time: "Scheduled" },
              ].map((act, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-0.5">{act.icon}</div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">{act.text}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{act.time}</p>
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
