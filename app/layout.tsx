"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import AppSidebar from "../layout/AppSidebar";
import { SubSidebar } from "../layout/SubSidebar";
import { MAIN_NAV } from "../constants/navigation";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isExpanded, isSubOpen } = useSidebar();
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

  const activeSection = MAIN_NAV.find((item) => isPathMatch(item.path) || hasMatchingSubPath(item));
  
  // Tính toán lề trái cho Cột 2 & 3
  const mainWidth = isExpanded ? "ml-[220px]" : "ml-[72px]";

  return (
    <div className="flex min-h-screen bg-white">
      {/* CỘT 1 */}
      <AppSidebar />

      <div className={`flex flex-1 transition-all duration-300 ${mainWidth}`}>
        {/* CỘT 2: Đóng mở bằng cách thay đổi chiều rộng w-0 hoặc w-[224px] */}
        <div className={`transition-all duration-300 overflow-hidden ${activeSection?.subItems ? (isSubOpen ? "w-[224px]" : "w-[72px]") : "w-0"}`}>
          {activeSection?.subItems && (
            <SubSidebar title={activeSection.name} items={activeSection.subItems} />
          )}
        </div>
        
        {/* CỘT 3: Nội dung chính */}
        <main className="flex-1 bg-white overflow-x-auto relative">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <SidebarProvider>
          <LayoutContent>{children}</LayoutContent>
        </SidebarProvider>
      </body>
    </html>
  );
}