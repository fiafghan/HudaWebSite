import React from 'react'
import { Home, Download, Info, Mail, ChartAreaIcon, Menu, X, Search, ArrowUpRight, Sun, Moon } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { searchEntries } from '../search/searchIndex'
import { getTheme, setTheme, onThemeChange, type Theme } from '../theme'

export default function Header() {
  const { pathname } = useLocation()
  const isActive = (to: string) => pathname === to
  const [open, setOpen] = React.useState(false)
  const [q, setQ] = React.useState('')
  const [results, setResults] = React.useState<Array<{ title: string; path: string; snippet: string }>>([])
  const [showDrop, setShowDrop] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const navigate = useNavigate()
  const [theme, setThemeState] = React.useState<Theme>(() => getTheme())

  React.useEffect(() => {
    const unsub = onThemeChange((t) => setThemeState(t))
    setThemeState(getTheme())
    return () => { unsub() }
  }, [])

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase()
      if (e.key === '/' && tag !== 'input' && tag !== 'textarea') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  React.useEffect(() => {
    if (!q.trim()) {
      setResults([])
      return
    }
    const r = searchEntries(q, 8)
    setResults(r)
  }, [q])

  const isDark = theme === 'dark'
  const linkBase = 'relative inline-flex items-center gap-1 px-2 py-1.5 rounded-md transition-all duration-200'
  const activeCls = isDark
    ? 'text-white after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-6 after:-translate-x-1/2 after:rounded-full after:bg-white/80'
    : 'text-slate-900 after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-6 after:-translate-x-1/2 after:rounded-full after:bg-slate-900/70'
  const idleCls = isDark
    ? 'text-white/80 hover:text-white hover:bg-white/10 hover:shadow hover:shadow-white/10'
    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-900/5'

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className={isDark ? 'backdrop-blur-2xl backdrop-saturate-150 backdrop-brightness-110 bg-slate-900/20 text-white ring-1 ring-white/10' : 'backdrop-blur-xl bg-white/90 text-slate-900 ring-1 ring-slate-900/10'}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-3">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-500 shadow-md ring-1 ring-white/10">
                <ChartAreaIcon className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold tracking-tight leading-none">HuDa — Humanitarian Data Analytics Project</span>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-4 text-sm">
              <a href="/#overview" className={`${linkBase} ${isActive('/') ? activeCls : idleCls}`}>
                <Home className="w-4 h-4" />Overview
              </a>
              <a href="/#installation" className={`${linkBase} ${isActive('/') ? 'text-white/90' : idleCls}`}>
                <Download className="w-4 h-4" />Installation
              </a>
              <Link to="/about" className={`${linkBase} ${isActive('/about') ? activeCls : idleCls}`}>
                <Info className="w-4 h-4" />About
              </Link>
              <Link to="/contact" className={`${linkBase} ${isActive('/contact') ? activeCls : idleCls}`}>
                <Mail className="w-4 h-4" />Contact
              </Link>

              {/* Search */}
              <div className={`ml-2 hidden lg:flex items-center gap-2 rounded-lg px-2.5 py-1.5 relative ${isDark ? 'bg-white/10 ring-1 ring-white/10 text-white/80' : 'bg-slate-900/5 ring-1 ring-slate-900/10 text-slate-600'}`}>
                <Search className="h-4 w-4" />
                <input
                  ref={inputRef}
                  value={q}
                  onChange={(e) => {
                    setQ(e.target.value)
                    setShowDrop(true)
                  }}
                  onFocus={() => setShowDrop(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && results[0]) {
                      navigate(results[0].path)
                      setShowDrop(false)
                    }
                    if (e.key === 'Escape') {
                      setShowDrop(false)
                    }
                  }}
                  placeholder={'Search code or description…'}
                  className={isDark ? 'bg-transparent outline-none text-sm placeholder-white/50 w-44' : 'bg-transparent outline-none text-sm placeholder-slate-500 w-44'}
                />
                <kbd className={isDark ? 'rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white/60' : 'rounded bg-slate-900/5 px-1.5 py-0.5 text-[10px] text-slate-600'}>/</kbd>

                {showDrop && q && results.length > 0 && (
                  <div className={`absolute top-10 right-0 z-50 w-[30rem] rounded-lg overflow-hidden shadow-xl ${isDark ? 'border border-white/10 bg-slate-800/95 backdrop-blur' : 'border border-slate-900/10 bg-white/95'}`}>
                    <div className={`max-h-80 overflow-auto ${isDark ? 'divide-y divide-white/5' : 'divide-y divide-slate-900/10'}`}>
                      {results.map((r) => (
                        <button
                          key={r.path}
                          onClick={() => {
                            navigate(r.path)
                            setShowDrop(false)
                          }}
                          className={`w-full text-left px-3 py-2 transition-colors group ${isDark ? 'hover:bg-white/5' : 'hover:bg-slate-900/5'}`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className={isDark ? 'text-sm text-white/90' : 'text-sm text-slate-900'}>{r.title}</div>
                            <ArrowUpRight className={isDark ? 'w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors' : 'w-4 h-4 text-slate-500 group-hover:text-slate-800 transition-colors'} />
                          </div>
                          <div className={isDark ? 'mt-0.5 text-[11px] text-white/60 overflow-hidden text-ellipsis' : 'mt-0.5 text-[11px] text-slate-600 overflow-hidden text-ellipsis'}>{r.snippet}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Language removed */}

              {/* CTA */}
              <a href="/#installation" className={isDark ? 'ml-2 inline-flex items-center rounded-md bg-white px-3 py-1.5 text-sm font-medium text-slate-900 shadow hover:shadow-md active:scale-[0.98] transition-all' : 'ml-2 inline-flex items-center rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white shadow hover:shadow-md active:scale-[0.98] transition-all'}>
                Learn
              </a>

              <button
                aria-label="Toggle theme"
                onClick={() => {
                  const next = theme === 'dark' ? 'light' : 'dark'
                  setTheme(next)
                }}
                className={isDark ? 'ml-1 inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10 hover:bg-white/15 transition' : 'ml-1 inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-900/5 ring-1 ring-slate-900/10 hover:bg-slate-900/10 transition'}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </nav>

            {/* Mobile menu button */}
            <button onClick={() => setOpen(!open)} className={isDark ? 'md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10 active:scale-95 transition' : 'md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900/5 ring-1 ring-slate-900/10 active:scale-95 transition'}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className={isDark ? 'md:hidden border-t border-white/10' : 'md:hidden border-t border-slate-900/10'}>
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 space-y-2 text-sm">
              <a href="/#overview" className={`${linkBase} ${isActive('/') ? activeCls : idleCls} w-full`} onClick={() => setOpen(false)}>
                <Home className="w-4 h-4" />Overview
              </a>
              <a href="/#installation" className={`${linkBase} ${idleCls} w-full`} onClick={() => setOpen(false)}>
                <Download className="w-4 h-4" />Installation
              </a>
              <Link to="/about" className={`${linkBase} ${isActive('/about') ? activeCls : idleCls} w-full`} onClick={() => setOpen(false)}>
                <Info className="w-4 h-4" />About
              </Link>
              <Link to="/contact" className={`${linkBase} ${isActive('/contact') ? activeCls : idleCls} w-full`} onClick={() => setOpen(false)}>
                <Mail className="w-4 h-4" />Contact
              </Link>
              <div className="pt-2" />
              {/* Language (mobile) removed */}
              <div className={isDark ? 'flex items-center gap-2 rounded-lg bg-white/10 ring-1 ring-white/10 px-2.5 py-1.5 text-white/80' : 'flex items-center gap-2 rounded-lg bg-slate-900/5 ring-1 ring-slate-900/10 px-2.5 py-1.5 text-slate-600'}>
                <Search className="h-4 w-4" />
                <input
                  ref={inputRef}
                  value={q}
                  onChange={(e) => {
                    setQ(e.target.value)
                    setShowDrop(true)
                  }}
                  onFocus={() => setShowDrop(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && results[0]) {
                      navigate(results[0].path)
                      setOpen(false)
                      setShowDrop(false)
                    }
                    if (e.key === 'Escape') setShowDrop(false)
                  }}
                  placeholder={'Search…'}
                  className={isDark ? 'bg-transparent outline-none text-sm placeholder-white/50 w-full' : 'bg-transparent outline-none text-sm placeholder-slate-500 w-full'}
                />
              </div>
              {showDrop && q && results.length > 0 && (
                <div className={isDark ? 'border border-white/10 rounded-lg overflow-hidden' : 'border border-slate-900/10 rounded-lg overflow-hidden'}>
                  {results.map((r) => (
                    <button
                      key={r.path}
                      onClick={() => {
                        navigate(r.path)
                        setOpen(false)
                        setShowDrop(false)
                      }}
                      className={isDark ? 'w-full text-left px-3 py-2 bg-slate-800/60 hover:bg-white/5 transition-colors' : 'w-full text-left px-3 py-2 bg-white hover:bg-slate-900/5 transition-colors'}
                    >
                      <div className={isDark ? 'text-sm text-white/90' : 'text-sm text-slate-900'}>{r.title}</div>
                      <div className={isDark ? 'mt-0.5 text-[11px] text-white/60 overflow-hidden text-ellipsis' : 'mt-0.5 text-[11px] text-slate-600 overflow-hidden text-ellipsis'}>{r.snippet}</div>
                    </button>
                  ))}
                </div>
              )}
              <a href="/#installation" className={isDark ? 'inline-flex items-center rounded-md bg-white px-3 py-1.5 text-sm font-medium text-slate-900 shadow' : 'inline-flex items-center rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white shadow'}>
                Learn
              </a>
              <button
                aria-label="Toggle theme"
                onClick={() => {
                  const next = theme === 'dark' ? 'light' : 'dark'
                  setTheme(next)
                }}
                className={isDark ? 'inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10 hover:bg-white/15 transition' : 'inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-900/5 ring-1 ring-slate-900/10 hover:bg-slate-900/10 transition'}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
