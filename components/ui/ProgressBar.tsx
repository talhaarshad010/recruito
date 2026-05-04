"use client";

import React from "react";

interface ProgressBarProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  color?: "indigo" | "green" | "amber" | "red" | "blue";
  showLabel?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: "h-1.5",
  md: "h-2",
  lg: "h-3",
};

const colorStyles = {
  indigo: "bg-indigo-500",
  green: "bg-emerald-500",
  amber: "bg-amber-500",
  red: "bg-red-500",
  blue: "bg-blue-500",
};

const bgColorStyles = {
  indigo: "bg-indigo-100",
  green: "bg-emerald-100",
  amber: "bg-amber-100",
  red: "bg-red-100",
  blue: "bg-blue-100",
};

export default function ProgressBar({
  value,
  max = 100,
  size = "md",
  color = "indigo",
  showLabel = false,
  className = "",
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-medium text-gray-600">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`w-full rounded-full ${bgColorStyles[color]} ${sizeStyles[size]} overflow-hidden`}>
        <div
          className={`${sizeStyles[size]} rounded-full ${colorStyles[color]} transition-all duration-700 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
