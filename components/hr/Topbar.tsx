"use client";

import React from "react";
import { Bell, Search, ChevronDown, Command } from "lucide-react";
import Avatar from "@/components/ui/Avatar";
import SearchInput from "@/components/ui/SearchInput";

const Topbar = () => {
  return (
    <header className="h-20 px-8 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
      <div className="flex-1 max-w-md">
        <SearchInput
          placeholder="Search for candidates, jobs..."
          className="bg-gray-50 border-gray-100 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-black"
        />
      </div>

      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative p-2 rounded-xl text-gray-400 hover:text-black hover:bg-gray-50 transition-all cursor-pointer">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full ring-2 ring-white" />
        </button>

        <div className="w-px h-6 bg-gray-100" />

        {/* Profile */}
        <button className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-50 transition-all cursor-pointer">
          <Avatar initials="JW" size="sm" className="bg-gray-100 text-gray-900 font-bold" />
          <div className="text-left hidden sm:block">
            <p className="text-sm font-bold text-gray-900 leading-tight">James Wilson</p>
            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">HR Manager</p>
          </div>
          <ChevronDown size={14} className="text-gray-400 hidden sm:block" />
        </button>
      </div>
    </header>
  );
};

export default Topbar;
