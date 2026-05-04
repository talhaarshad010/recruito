"use client";

import React from "react";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circle" | "rect";
  width?: string;
  height?: string;
}

export default function Skeleton({ className = "", variant = "rect", width, height }: SkeletonProps) {
  const baseStyles = "skeleton";
  const variantStyles = {
    text: "h-4 rounded",
    circle: "rounded-full",
    rect: "rounded-lg",
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={{ width, height }}
    />
  );
}

// Pre-built skeleton compositions
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-200/80 p-5 space-y-4">
      <div className="flex items-center gap-3">
        <Skeleton variant="circle" className="w-10 h-10" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <div className="flex items-center gap-4 py-3 px-4">
      <Skeleton variant="circle" className="w-8 h-8" />
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-4 w-24 ml-auto" />
      <Skeleton className="h-6 w-16 rounded-full" />
      <Skeleton className="h-4 w-12" />
    </div>
  );
}

export function StatCardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-200/80 p-5">
      <div className="flex items-center justify-between mb-3">
        <Skeleton className="h-4 w-24" />
        <Skeleton variant="circle" className="w-8 h-8" />
      </div>
      <Skeleton className="h-8 w-20 mb-2" />
      <Skeleton className="h-3 w-32" />
    </div>
  );
}
