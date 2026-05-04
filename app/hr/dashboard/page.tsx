"use client";

import React from "react";
import {
  Briefcase,
  Users,
  UserCheck,
  Video,
  TrendingUp,
  Clock,
  UserPlus,
  Calendar,
  CheckCircle,
  Sparkles,
  ArrowUpRight,
  Activity,
  Plus,
  ChevronRight,
} from "lucide-react";
import StatsCard from "@/components/hr/StatsCard";
import Card, { CardHeader, CardTitle } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { dashboardStats, recentActivities } from "@/lib/dummy-data";

const iconMap: Record<string, React.ReactNode> = {
  "user-plus": <UserPlus size={14} />,
  calendar: <Calendar size={14} />,
  "check-circle": <CheckCircle size={14} />,
  sparkles: <Sparkles size={14} />,
  briefcase: <Briefcase size={14} />,
};

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between pb-8 border-b border-gray-100">
        <div>
          <h1 className="text-3xl font-black text-black tracking-tight uppercase">Overview</h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">
            Recruito Intelligence Hub · System Status: <span className="text-emerald-500">Live</span>
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" icon={<Plus size={14} />}>Add Candidate</Button>
          <Button variant="primary" size="sm" className="px-6">Create Job</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          label="Total Jobs"
          value={dashboardStats.totalJobs}
          change="2.4%"
          trend="up"
          icon={<Briefcase size={20} />}
          iconBg="bg-gray-50"
        />
        <StatsCard
          label="Total Candidates"
          value={dashboardStats.totalCandidates.toLocaleString()}
          change="14.2%"
          trend="up"
          icon={<Users size={20} />}
          iconBg="bg-gray-50"
        />
        <StatsCard
          label="Shortlisted"
          value={dashboardStats.shortlisted}
          change="8.1%"
          trend="up"
          icon={<UserCheck size={20} />}
          iconBg="bg-gray-50"
        />
        <StatsCard
          label="Interviews"
          value={dashboardStats.interviewsThisWeek}
          change="3.2%"
          trend="down"
          icon={<Video size={20} />}
          iconBg="bg-gray-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          <Card padding="none">
            <CardHeader className="p-6 border-b border-gray-50">
              <CardTitle className="uppercase tracking-widest text-xs">Recent Intelligence Feed</CardTitle>
              <button className="text-[10px] font-black text-gray-400 hover:text-black uppercase tracking-widest flex items-center gap-1">
                View All <ChevronRight size={10} />
              </button>
            </CardHeader>
            <div className="divide-y divide-gray-50">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center gap-4 p-5 hover:bg-gray-50/50 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-black group-hover:text-white transition-all">
                    {iconMap[activity.icon] || <Activity size={14} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{activity.message}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{activity.time}</p>
                  </div>
                  <Badge variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity">Record #8241</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar Panel */}
        <div className="space-y-8">
          <Card className="bg-black text-white border-black">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={18} className="text-white" />
              <h4 className="font-bold text-white uppercase tracking-widest text-xs">AI Insights</h4>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-6 font-medium">
              We&apos;ve detected a 24% increase in candidate dropout at the "Final Interview" stage. Consider shortening the feedback loop.
            </p>
            <Button variant="secondary" fullWidth className="bg-white text-black hover:bg-gray-100 text-xs py-2 rounded-lg">
              Review Analytics
            </Button>
          </Card>

          <Card>
            <CardTitle className="uppercase tracking-widest text-[10px] mb-6">Upcoming Sessions</CardTitle>
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl border border-gray-50 hover:border-gray-200 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-[10px] font-black">
                    0{i}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-gray-900">Final Protocol #{402 + i}</p>
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">14:00 Today</p>
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
