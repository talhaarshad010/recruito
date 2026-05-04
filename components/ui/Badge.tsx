"use client";

import React from "react";

type BadgeVariant = "success" | "warning" | "danger" | "info" | "purple" | "default" | "outline" | "black";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
  className?: string;
}

const Badge = ({ children, variant = "default", dot, className = "" }: BadgeProps) => {
  const variants = {
    success: "bg-emerald-50 text-emerald-700 border-emerald-100",
    warning: "bg-amber-50 text-amber-700 border-amber-100",
    danger: "bg-red-50 text-red-700 border-red-100",
    info: "bg-sky-50 text-sky-700 border-sky-100",
    purple: "bg-purple-50 text-purple-700 border-purple-100",
    default: "bg-gray-50 text-gray-600 border-gray-200",
    outline: "bg-transparent text-gray-600 border-gray-200",
    black: "bg-black text-white border-black",
  };

  const dotColors = {
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    danger: "bg-red-500",
    info: "bg-sky-500",
    purple: "bg-purple-500",
    default: "bg-gray-400",
    outline: "bg-gray-400",
    black: "bg-white",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg border ${variants[variant]} ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />
      )}
      {children}
    </span>
  );
};

export default Badge;
