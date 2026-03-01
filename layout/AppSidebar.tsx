"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import { MAIN_NAV, APP_NAV } from "../constants/navigation";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const AppSidebar = () => {
  const { isExpanded, setIsExpanded } = useSidebar();
  const pathname = usePathname();

  const normalizePath = (value: string) => value.toLowerCase();
  const isPathMatch = (basePath: string) => normalizePath(pathname).startsWith(normalizePath(basePath));

  const hasMatchingSubPath = (item: (typeof MAIN_NAV)[number]) => {
    if (!item.subItems) {
      return false;
    }

    return item.subItems.some((subItem) => {
      if (isPathMatch(subItem.path)) {
        return true;
      }

      return (subItem.children ?? []).some((child) => isPathMatch(child.path));
    });
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-50 flex h-screen flex-col border-r border-neutral-200 bg-white transition-all duration-300
        ${isExpanded ? "w-[220px]" : "w-[72px]"}`}
    >
      {/* NÚT TOGGLE SIDEBAR CHÍNH */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-3 top-1/2 z-50 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition-all hover:text-indigo-600"
        aria-label={isExpanded ? "Thu gọn sidebar" : "Mở rộng sidebar"}
      >
        {isExpanded ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
      </button>

      {/* 1. USER PROFILE SECTION - Text 13px */}
      <div className="p-4">
        <div className={`flex items-center rounded-xl border border-neutral-100 p-2 shadow-sm ${isExpanded ? "gap-3" : "justify-center"}`}>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 font-bold text-[14px]">
            C
          </div>
          {isExpanded && (
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-[13px] font-bold text-neutral-900 leading-none">cong</p>
              <p className="truncate text-[10px] text-neutral-400 mt-1">thecong2610@g...</p>
            </div>
          )}
          {isExpanded && <ChevronDown size={14} className="text-neutral-400 shrink-0" />}
        </div>
      </div>

      <div className="no-scrollbar flex-1 overflow-y-auto px-3 py-2">
        {/* 2. MAIN NAVIGATION - Text 13px */}
        <ul className="space-y-1">
          {MAIN_NAV.map((nav) => {
            const isActive = isPathMatch(nav.path) || hasMatchingSubPath(nav);
            
            return (
              <li key={nav.name}>
                <Link
                  href={nav.path}
                  className={`flex items-center rounded-xl py-2.5 transition-all duration-200 
                    ${isExpanded ? "gap-4 px-4" : "justify-center px-0"}
                    ${isActive 
                      ? "bg-indigo-50 text-indigo-600 font-bold shadow-sm" 
                      : "text-neutral-900 hover:bg-neutral-50 "
                    }`}
                >
                  <span className={`shrink-0 ${isActive ? "text-indigo-600" : "text-neutral-400"}`}>
                    {React.cloneElement(nav.icon, { 
                      size: 20,
                      strokeWidth: isActive ? 2.5 : 2 
                    })}
                  </span>
                  {isExpanded && (
                    <span className="text-[13px] leading-none truncate">{nav.name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* 3. APPLICATIONS SECTION - Title 18px */}
        <div className="mt-8 border-t border-neutral-50 pt-6">
          <div className="mb-4 flex items-center justify-between px-2">
            {isExpanded ? (
              <h2 className="text-[18px] font-bold text-neutral-900 tracking-tight">Ứng dụng</h2>
            ) : (
              <div className="h-px w-full bg-neutral-200" />
            )}
          </div>

          <ul className="space-y-1">
            {APP_NAV.map((app) => (
              <li key={app.name}>
                <button 
                  className={`group flex w-full items-center rounded-xl py-2.5 transition-all hover:bg-neutral-50 
                    ${isExpanded ? "gap-4 px-4" : "justify-center px-0"}`}
                >
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg shadow-sm ${app.color}`}>
                    {React.cloneElement(app.icon, { size: 16 })}
                  </div>
                  {isExpanded && (
                    <span className="text-[13px] font-medium text-neutral-600 group-hover:text-neutral-900 truncate">
                      {app.name}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;