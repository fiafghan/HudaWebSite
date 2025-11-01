import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import CodeEnhancer from '../components/CodeEnhancer'
import { getTheme, onThemeChange, type Theme } from '../theme'

export default function DocsLayout({ title, children, titleClassName }: { title: string; children: React.ReactNode; titleClassName?: string }) {
  const [theme, setThemeState] = React.useState<Theme>(() => getTheme())
  React.useEffect(() => onThemeChange((t) => setThemeState(t)), [])
  const isDark = theme === 'dark'
  return (
    <div className="min-h-screen pt-16">
      <Header />
      <Sidebar />
      <div className={'md:pl-72'}>
        <main className="docs-theme max-w-7xl mx-auto px-4 md:px-6 py-8">
          <h1 className={titleClassName ?? (isDark ? 'text-3xl font-bold tracking-tight mb-4 text-white' : 'text-3xl font-bold tracking-tight mb-4 text-slate-900')}>{title}</h1>
          {children}
        </main>
        <Footer />
        <CodeEnhancer />
      </div>
    </div>
  )
}

