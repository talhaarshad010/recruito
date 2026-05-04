"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "Jan", applied: 400, hired: 24 },
  { name: "Feb", applied: 300, hired: 18 },
  { name: "Mar", applied: 600, hired: 35 },
  { name: "Apr", applied: 800, hired: 42 },
  { name: "May", applied: 500, hired: 30 },
  { name: "Jun", applied: 700, hired: 48 },
];

const HiringTrendsChart = () => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorApplied" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000000" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fill: "#9ca3af", fontWeight: 700 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fill: "#9ca3af", fontWeight: 700 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "#fff", 
              borderRadius: "12px", 
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              fontSize: "12px",
              fontWeight: "bold"
            }}
          />
          <Area
            type="monotone"
            dataKey="applied"
            stroke="#000000"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorApplied)"
            dot={{ r: 4, fill: "#000", strokeWidth: 2, stroke: "#fff" }}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HiringTrendsChart;
