import { Search, Menu, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-[#1a1a1a] text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl">My Travel</Link>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="hover:text-orange-500 transition-colors">关于</Link>
            <Link href="/article" className="hover:text-orange-500 transition-colors">文章</Link>
            <Link href="/design" className="hover:text-orange-500 transition-colors">设计</Link>
            <Link href="/project" className="hover:text-orange-500 transition-colors">项目</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-white/10 rounded-full px-4 py-2 gap-2">
            <Search className="w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search destinations..."
              className="bg-transparent border-none outline-none text-sm w-48"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
