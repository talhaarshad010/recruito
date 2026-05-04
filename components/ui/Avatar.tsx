"use client";

import React from "react";

interface AvatarProps {
  initials: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  className?: string;
}

const sizeStyles = {
  sm: "w-7 h-7 text-[10px]",
  md: "w-9 h-9 text-xs",
  lg: "w-11 h-11 text-sm",
  xl: "w-16 h-16 text-lg",
};

const colors = [
  "bg-indigo-100 text-indigo-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-sky-100 text-sky-700",
  "bg-violet-100 text-violet-700",
  "bg-teal-100 text-teal-700",
  "bg-orange-100 text-orange-700",
];

function getColor(initials: string): string {
  let hash = 0;
  for (let i = 0; i < initials.length; i++) {
    hash = initials.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export default function Avatar({ initials, size = "md", className = "" }: AvatarProps) {
  const colorClass = getColor(initials);

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full font-semibold flex-shrink-0 ${sizeStyles[size]} ${colorClass} ${className}`}
    >
      {initials}
    </div>
  );
}
