export type Theme = 'light' | 'dark'

const THEME_KEY = 'huda_theme'
const ev = new EventTarget()

export function getTheme(): Theme {
  const saved = localStorage.getItem(THEME_KEY) as Theme | null
  if (saved === 'light' || saved === 'dark') return saved
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export function setTheme(theme: Theme) {
  localStorage.setItem(THEME_KEY, theme)
  document.documentElement.setAttribute('data-theme', theme)
  ev.dispatchEvent(new CustomEvent('themechange', { detail: theme }))
}

export function onThemeChange(cb: (t: Theme) => void) {
  const handler = (e: Event) => cb((e as CustomEvent).detail as Theme)
  ev.addEventListener('themechange', handler)
  return () => ev.removeEventListener('themechange', handler)
}
