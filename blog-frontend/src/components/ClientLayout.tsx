"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <Navbar />
      <main className={isHome ? "" : "pt-24"}>{children}</main>
    </>
  );
}
