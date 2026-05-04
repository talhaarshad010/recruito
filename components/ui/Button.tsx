"use client";

import React from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "xs" | "sm" | "md" | "lg";
  icon?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  loading,
  fullWidth,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97]";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-900 shadow-sm",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "bg-white border border-gray-200 text-gray-900 hover:border-gray-900 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-100",
    danger: "bg-red-50 text-red-600 border border-red-100 hover:bg-red-600 hover:text-white",
  };

  const sizes = {
    xs: "px-2.5 py-1 text-[10px] rounded-md gap-1",
    sm: "px-4 py-2 text-xs rounded-lg gap-1.5",
    md: "px-6 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-8 py-4 text-base rounded-2xl gap-3",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="animate-spin" size={size === "lg" ? 20 : 16} />}
      {!loading && icon}
      {children}
    </button>
  );
};

export default Button;
