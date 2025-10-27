import React from 'react'
import { Info, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getTheme, onThemeChange, type Theme } from '../theme'

export default function Footer() {
  const year = new Date().getFullYear()
  const [theme, setThemeState] = React.useState<Theme>(() => getTheme())
  React.useEffect(() => onThemeChange((t) => setThemeState(t)), [])
  const isDark = theme === 'dark'
  return (
    <footer className={isDark ? 'border-t border-white/10 bg-slate-800/80 backdrop-blur text-white' : 'border-t border-slate-900/10 bg-white/80 backdrop-blur text-slate-900'}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className={isDark ? 'text-sm text-white/80' : 'text-sm text-slate-600'}>© <span>{year}</span> HuDa. Built for humanitarian analysts.</div>
        <div className={isDark ? 'flex items-center gap-4 text-white/80' : 'flex items-center gap-4 text-slate-600'}>
          <Link to="/about" className={isDark ? 'inline-flex items-center gap-1 hover:text-white' : 'inline-flex items-center gap-1 hover:text-slate-900'}><Info className="w-4 h-4" />About</Link>
          <Link to="/contact" className={isDark ? 'inline-flex items-center gap-1 hover:text-white' : 'inline-flex items-center gap-1 hover:text-slate-900'}><Mail className="w-4 h-4" />Contact</Link>
        </div>
      </div>
    </footer>
  )
}
