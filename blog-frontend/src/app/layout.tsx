import './globals.css'
import { Navbar } from '../components/Navbar'

export const metadata = {
  title: 'Auspiow的博客',
  description: 'man, what can I say?',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="p-4 border-t text-center text-sm text-gray-500">
          © 2025 Auspiow Design. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
