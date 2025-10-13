import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Auspiow的博客',
  description: '记录设计与编程的点滴',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body className="bg-white text-black">
        {/* 导航栏 */}
        <nav className="p-4 border-b flex gap-6">
          <Link href="/">首页</Link>
          <Link href="/about">关于我</Link>
          <Link href="/article">文章</Link>
          <Link href="/design">设计</Link>
          <Link href="/project">项目</Link>
        </nav>

        {/* 页面内容 */}
        <main className="p-6">{children}</main>

        {/* 页脚 */}
        <footer className="p-4 border-t text-center text-sm text-gray-500">
          © 2025 Auspiow Design. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
