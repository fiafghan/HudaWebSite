import React from 'react'
import { Home, Info, Mail, FolderOpen, Brush, Workflow, ShieldCheck, Map, LineChart, Share2, BarChart3, Bot, FileSearch, Activity, Brain } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { getTheme, onThemeChange, type Theme } from '../theme'

type Item = { to: string; label: string; icon: React.ReactNode; isActive?: boolean }

function NavItem({ to, label, icon, isActive }: Item) {
  const [theme, setThemeState] = React.useState<Theme>(() => getTheme())
  React.useEffect(() => onThemeChange((t) => setThemeState(t)), [])
  const isDark = theme === 'dark'
  const base = 'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-150'
  const active = isActive
    ? (isDark
        ? ' bg-slate-600/60 text-white ring-1 ring-white/10 shadow-sm shadow-black/20'
        : ' bg-slate-900/5 text-slate-900 ring-1 ring-slate-900/10')
    : (isDark
        ? ' text-white/90 hover:text-white hover:bg-slate-600/40 ring-1 ring-transparent hover:ring-white/10 hover:shadow'
        : ' text-slate-700 hover:text-slate-900 hover:bg-slate-900/5 ring-1 ring-transparent hover:ring-slate-900/10')
  return (
    <Link to={to} className={base + ' ' + active}>
      <span className={isDark ? 'inline-grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-slate-700 to-slate-500' : 'inline-grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-slate-700 to-slate-500'}>
        {/* force icon color to contrast */}
        <span className="text-white">{icon}</span>
      </span>
      {label}
    </Link>
  )
}

export default function Sidebar() {
  const { pathname } = useLocation()
  const is = (p: string) => pathname === p
  const [theme, setThemeState] = React.useState<Theme>(() => getTheme())
  React.useEffect(() => onThemeChange((t) => setThemeState(t)), [])
  const isDark = theme === 'dark'
  return (
    <aside className={'hidden md:block fixed top-16 left-0 h-[calc(100vh-64px)] w-72 overflow-y-auto'}>
      <div className={isDark ? 'relative overflow-hidden h-full text-white border-r shadow-2xl shadow-black/40 backdrop-blur-2xl backdrop-saturate-150 backdrop-brightness-110 bg-slate-900/20 border-white/20 ring-1 ring-white/10' : 'h-full bg-white text-slate-900 border-r border-slate-900/10 shadow-xl shadow-black/5'}>
        {isDark && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
        )}
        <div className="relative z-10 p-4">
          <nav className="space-y-1 text-sm">
            <a href="/#overview" className={isDark ? 'flex items-center gap-3 px-3 py-2 rounded-md text-sm text-white/90 hover:text-white hover:bg-slate-600/40 ring-1 ring-transparent hover:ring-white/10 transition-all duration-150' : 'flex items-center gap-3 px-3 py-2 rounded-md text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-900/5 ring-1 ring-transparent hover:ring-slate-900/10 transition-all duration-150'}>
              <span className="inline-grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-slate-700 to-slate-500">
                <Home className="w-3.5 h-3.5 text-white" />
              </span>
              Overview
            </a>
            <div className={isDark ? 'pt-2 pb-1 text-[10px] uppercase tracking-wider text-white/70' : 'pt-2 pb-1 text-[10px] uppercase tracking-wider text-slate-500'}>Pages</div>
            <NavItem to="/about" label={'About'} icon={<Info className="w-3.5 h-3.5" />} isActive={is('/about')} />
            <NavItem to="/contact" label={'Contact'} icon={<Mail className="w-3.5 h-3.5" />} isActive={is('/contact')} />
            <div className={isDark ? 'pt-2 pb-1 text-[10px] uppercase tracking-wider text-white/70' : 'pt-2 pb-1 text-[10px] uppercase tracking-wider text-slate-500'}>Phases</div>
            <NavItem to="/docs/opening" label={'Opening'} icon={<FolderOpen className="w-3.5 h-3.5" />} isActive={is('/docs/opening')} />
            <NavItem to="/docs/cleaning" label={'Cleaning'} icon={<Brush className="w-3.5 h-3.5" />} isActive={is('/docs/cleaning')} />
            <NavItem to="/docs/transformation" label={'Transformation'} icon={<Workflow className="w-3.5 h-3.5" />} isActive={is('/docs/transformation')} />
            <NavItem to="/docs/validation-quality" label={'Validation & Quality'} icon={<ShieldCheck className="w-3.5 h-3.5" />} isActive={is('/docs/validation-quality')} />
            <NavItem to="/docs/geospatial" label={'Geospatial'} icon={<Map className="w-3.5 h-3.5" />} isActive={is('/docs/geospatial')} />
            <NavItem to="/docs/analysis" label={'Analysis'} icon={<LineChart className="w-3.5 h-3.5" />} isActive={is('/docs/analysis')} />
            <NavItem to="/docs/automation" label={'Automation'} icon={<Workflow className="w-3.5 h-3.5" />} isActive={is('/docs/automation')} />
            <NavItem to="/docs/interoperability" label={'Interoperability'} icon={<Share2 className="w-3.5 h-3.5" />} isActive={is('/docs/interoperability')} />
            <NavItem to="/docs/visualization" label={'Visualization'} icon={<BarChart3 className="w-3.5 h-3.5" />} isActive={is('/docs/visualization')} />
            <NavItem to="/docs/ml4humanitarian" label={'ML for Humanitarian Data'} icon={<Bot className="w-3.5 h-3.5" />} isActive={is('/docs/ml4humanitarian')} />
            <NavItem to="/docs/document-processing" label={'Document Processing'} icon={<FileSearch className="w-3.5 h-3.5" />} isActive={is('/docs/document-processing')} />
            <NavItem to="/docs/humanitarian-metrics" label={'Humanitarian Metrics'} icon={<Activity className="w-3.5 h-3.5" />} isActive={is('/docs/humanitarian-metrics')} />
            <div className={isDark ? 'pt-2 pb-1 text-[10px] uppercase tracking-wider text-white/70' : 'pt-2 pb-1 text-[10px] uppercase tracking-wider text-slate-500'}>AI for Humanity</div>
            <Link to="/docs/aidmind" className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-150 ${is('/docs/aidmind') ? (isDark ? 'bg-slate-600/60 text-white ring-1 ring-white/10 shadow-sm shadow-black/20' : 'bg-slate-900/5 text-slate-900 ring-1 ring-slate-900/10') : (isDark ? 'text-white/90 hover:text-white hover:bg-slate-600/40 ring-1 ring-transparent hover:ring-white/10 hover:shadow' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-900/5 ring-1 ring-transparent hover:ring-slate-900/10')}`}>
              <span className="inline-grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 animate-pulse">
                <Brain className="w-3.5 h-3.5 text-white" />
              </span>
              AidMind
            </Link>
          </nav>
        </div>
      </div>
    </aside>
  )
}
