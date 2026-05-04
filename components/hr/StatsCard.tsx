"use client";

import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import Card from "@/components/ui/Card";

interface StatsCardProps {
  label: string;
  value: string | number;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
  iconBg: string;
}

const StatsCard = ({ label, value, change, trend, icon, iconBg }: StatsCardProps) => {
  return (
    <Card hover className="group">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{label}</p>
          <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-2">{value}</h3>
          
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
              trend === "up" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
            }`}>
              {trend === "up" ? "+" : "-"}{change}
            </span>
            <span className="text-[10px] text-gray-400 font-medium lowercase">vs last month</span>
          </div>
        </div>
        
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-gray-100 shadow-sm transition-all group-hover:scale-110 group-hover:bg-black group-hover:text-white group-hover:border-black ${iconBg.replace('bg-', 'text-').replace('/10', '')}`}>
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;
