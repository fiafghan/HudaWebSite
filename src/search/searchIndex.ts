// Auto-generated simple search index using Vite raw imports
// It indexes docs pages and basic site pages by importing their TSX source as raw text.

import openingRaw from '../pages/docs/Opening.tsx?raw'
import cleaningRaw from '../pages/docs/Cleaning.tsx?raw'
import transformationRaw from '../pages/docs/Transformation.tsx?raw'
import validationRaw from '../pages/docs/Validation.tsx?raw'
import geospatialRaw from '../pages/docs/Geospatial.tsx?raw'
import analysisRaw from '../pages/docs/Analysis.tsx?raw'
import automationRaw from '../pages/docs/Automation.tsx?raw'
import interoperabilityRaw from '../pages/docs/Interoperability.tsx?raw'
import visualizationRaw from '../pages/docs/Visualization.tsx?raw'
import mlRaw from '../pages/docs/ML4Humanitarian.tsx?raw'
import docProcRaw from '../pages/docs/DocumentProcessing.tsx?raw'
import metricsRaw from '../pages/docs/HumanitarianMetrics.tsx?raw'

import homeRaw from '../pages/Home.tsx?raw'
import aboutRaw from '../pages/About.tsx?raw'
import contactRaw from '../pages/Contact.tsx?raw'

export type SearchEntry = {
  title: string
  path: string
  content: string
}

function stripJsx(src: string): string {
  // remove code blocks quickly and JSX tags to approximate text search
  return src
    .replace(/`[\s\S]*?`/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase()
}

export const SEARCH_ENTRIES: SearchEntry[] = [
  { title: 'Home', path: '/', content: stripJsx(homeRaw) },
  { title: 'About', path: '/about', content: stripJsx(aboutRaw) },
  { title: 'Contact', path: '/contact', content: stripJsx(contactRaw) },
  { title: 'Opening', path: '/docs/opening', content: stripJsx(openingRaw) },
  { title: 'Cleaning', path: '/docs/cleaning', content: stripJsx(cleaningRaw) },
  { title: 'Transformation', path: '/docs/transformation', content: stripJsx(transformationRaw) },
  { title: 'Validation & Quality', path: '/docs/validation-quality', content: stripJsx(validationRaw) },
  { title: 'Geospatial', path: '/docs/geospatial', content: stripJsx(geospatialRaw) },
  { title: 'Analysis', path: '/docs/analysis', content: stripJsx(analysisRaw) },
  { title: 'Automation', path: '/docs/automation', content: stripJsx(automationRaw) },
  { title: 'Interoperability', path: '/docs/interoperability', content: stripJsx(interoperabilityRaw) },
  { title: 'Visualization', path: '/docs/visualization', content: stripJsx(visualizationRaw) },
  { title: 'ML for Humanitarian Data', path: '/docs/ml4humanitarian', content: stripJsx(mlRaw) },
  { title: 'Document Processing', path: '/docs/document-processing', content: stripJsx(docProcRaw) },
  { title: 'Humanitarian Metrics', path: '/docs/humanitarian-metrics', content: stripJsx(metricsRaw) },
]

export function searchEntries(query: string, limit = 8) {
  const q = query.trim().toLowerCase()
  if (!q) return [] as Array<{ title: string; path: string; snippet: string }>
  const scores = SEARCH_ENTRIES.map((e) => {
    const idx = e.content.indexOf(q)
    let score = -1
    if (idx >= 0) score = 1000 - idx // earlier match, higher score
    // small boost if title includes query
    if (e.title.toLowerCase().includes(q)) score += 2000
    return { e, idx, score }
  })
  const results = scores
    .filter((s) => s.score >= 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ e, idx }) => {
      const start = Math.max(0, idx - 60)
      const end = Math.min(e.content.length, idx + 120)
      const snippet = e.content.substring(start, end)
      return { title: e.title, path: e.path, snippet }
    })
  return results
}
