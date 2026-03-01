"use client";
import React, { useEffect, useRef, useState } from "react";
import { Search, ChevronDown } from "lucide-react";

export type StatusFilter = "Tất cả" | "Đã xuất bản" | "Chưa xuất bản" | "Đã xóa" | "Chuyển hướng 301";

interface FilterBarProps {
  selectedStatus: StatusFilter;
  onStatusChange: (status: StatusFilter) => void;
  selectedMember: string;
  onMemberChange: (member: string) => void;
  memberOptions: string[];
}

const STATUS_OPTIONS: StatusFilter[] = ["Tất cả", "Đã xuất bản", "Chưa xuất bản", "Đã xóa", "Chuyển hướng 301"];

export const FilterBar = ({ selectedStatus, onStatusChange, selectedMember, onMemberChange, memberOptions }: FilterBarProps) => {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isMemberOpen, setIsMemberOpen] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);
  const memberRef = useRef<HTMLDivElement>(null);
  const statusLabel = selectedStatus === "Tất cả" ? "Trạng thái" : selectedStatus;
  const memberLabel = selectedMember === "Tất cả" ? "Thành viên" : selectedMember;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!statusRef.current?.contains(event.target as Node)) {
        setIsStatusOpen(false);
      }
      if (!memberRef.current?.contains(event.target as Node)) {
        setIsMemberOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Ô tìm kiếm - Ép về 13px */}
      <div className="relative flex-1 min-w-[300px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
        <input 
          type="text" 
          placeholder="Tìm kiếm Landing Page theo tên hoặc ID..." 
          className="w-full bg-white border border-neutral-200 rounded-xl py-2 pl-11 pr-4 text-[13px] outline-none focus:border-[#4F46E5] transition-all"
        />
      </div>
      
      {/* Các bộ lọc - Ép về 13px */}
      <div className="flex items-center gap-2">
        <div className="relative" ref={statusRef}>
          <button
            onClick={() => {
              setIsStatusOpen((prev) => !prev);
              setIsMemberOpen(false);
            }}
            className={`flex min-w-[200px] items-center justify-between gap-3 bg-white border px-4 py-2 rounded-xl text-[13px] transition-all ${isStatusOpen ? "border-[#4F46E5] text-neutral-800" : "border-neutral-200 text-neutral-600 hover:bg-neutral-50"}`}
          >
            <span className="truncate">{statusLabel}</span>
            <ChevronDown size={16} className={`text-neutral-400 transition-transform ${isStatusOpen ? "rotate-180" : ""}`} />
          </button>

          {isStatusOpen && (
            <div className="absolute left-0 mt-2 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white py-2 shadow-lg z-20">
              {STATUS_OPTIONS.map((status) => (
                <button
                  key={status}
                  onClick={() => {
                    onStatusChange(status);
                    setIsStatusOpen(false);
                  }}
                  className={`w-full px-5 py-3 text-left text-[13px] transition-all ${selectedStatus === status ? "bg-indigo-50 text-indigo-600 font-semibold" : "text-neutral-700 hover:bg-neutral-50"}`}
                >
                  {status}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="relative" ref={memberRef}>
          <button
            onClick={() => {
              setIsMemberOpen((prev) => !prev);
              setIsStatusOpen(false);
            }}
            className={`flex min-w-[200px] items-center justify-between gap-3 bg-white border px-4 py-2 rounded-xl text-[13px] transition-all ${isMemberOpen ? "border-[#4F46E5] text-neutral-800" : "border-neutral-200 text-neutral-600 hover:bg-neutral-50"}`}
          >
            <span className="truncate">{memberLabel}</span>
            <ChevronDown size={16} className={`text-neutral-400 transition-transform ${isMemberOpen ? "rotate-180" : ""}`} />
          </button>

          {isMemberOpen && (
            <div className="absolute left-0 mt-2 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white py-2 shadow-lg z-20">
              {memberOptions.map((member) => (
                <button
                  key={member}
                  onClick={() => {
                    onMemberChange(member);
                    setIsMemberOpen(false);
                  }}
                  className={`w-full px-5 py-3 text-left text-[13px] transition-all ${selectedMember === member ? "bg-indigo-50 text-indigo-600 font-semibold" : "text-neutral-700 hover:bg-neutral-50"}`}
                >
                  {member}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};