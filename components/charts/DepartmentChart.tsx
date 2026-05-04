"use client";

import React from "react";
import { departmentHiringData } from "@/lib/dummy-data";

export default function DepartmentChart() {
  const total = departmentHiringData.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="space-y-4">
      {departmentHiringData.map((dept) => {
        const percentage = Math.round((dept.value / total) * 100);
        return (
          <div key={dept.name} className="group">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: dept.fill }} />
                <span className="text-sm text-gray-700 font-medium">{dept.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">{dept.value}</span>
                <span className="text-xs text-gray-400">({percentage}%)</span>
              </div>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out group-hover:opacity-80"
                style={{ width: `${percentage}%`, backgroundColor: dept.fill }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
