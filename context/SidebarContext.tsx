"use client";
import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext<any>(null);

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(true); // Cột 1
  const [isSubOpen, setIsSubOpen] = useState(true);   // Cột 2
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SidebarContext.Provider value={{ 
      isExpanded, setIsExpanded, 
      isSubOpen, setIsSubOpen,
      isHovered, setIsHovered 
    }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);