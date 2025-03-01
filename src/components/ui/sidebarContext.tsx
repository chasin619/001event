"use client";

import { createContext, useContext, useState } from "react";

const SidebarContext = createContext({
  isOpen: false,
  toggleSidebar: () => {},
});

export function SidebarProvider({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
