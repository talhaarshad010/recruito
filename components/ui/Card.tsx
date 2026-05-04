"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

const Card = ({ children, className = "", padding = "md", hover = false }: CardProps) => {
  const paddingStyles = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-10",
  };

  return (
    <div
      className={`bg-white border border-gray-200 rounded-2xl transition-all duration-300 ${
        hover ? "hover:border-black hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]" : "shadow-sm"
      } ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex items-center justify-between mb-6 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-base font-bold text-gray-900 tracking-tight ${className}`}>{children}</h3>
);

export default Card;
