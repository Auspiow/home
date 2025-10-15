"use client";

import { Search, Menu, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#1a1a1a]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight hover:text-orange-500 transition-colors"
          >
            首页
          </Link>

          <div className="hidden md:flex items-center gap-6 text-gray-200 text-lg">
            {[
              ["about", "关于"],
              ["article", "文章"],
              ["design", "设计"],
              ["project", "项目"],
            ].map(([path, label]) => {
              const active = pathname === `/${path}`;
              return (
                <Link
                  key={path}
                  href={`/${path}`}
                  className={`relative group transition ${
                    active ? "text-orange-400" : "text-gray-200"
                  }`}
                >
                  <span>{label}</span>
                  <span
                    className={`absolute left-0 bottom-[-4px] h-[2px] bg-orange-500 rounded-full transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 gap-2 border border-white/20 focus-within:ring-2 focus-within:ring-orange-500/50">
            <Search className="w-4 h-4 text-gray-300" />
            <Input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm w-48 text-gray-200 placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center shadow-md hover:shadow-orange-500/40 transition-shadow">
              <User className="w-4 h-4" />
            </div>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
