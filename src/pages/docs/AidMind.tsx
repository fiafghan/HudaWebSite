import React from 'react'
import DocsLayout from '../../layouts/DocsLayout'
import { MapPin, Home, Users, TrendingUp, Package, FileText, Activity, Heart } from 'lucide-react'

// Typing Animation Component
function TypingText() {
  const [displayText, setDisplayText] = React.useState('')
  const fullText = 'pip install aidmind'
  
  React.useEffect(() => {
    let currentIndex = 0
    let isDeleting = false
    
    const typeChar = () => {
      if (!isDeleting) {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.substring(0, currentIndex + 1))
          currentIndex++
        } else {
          setTimeout(() => { isDeleting = true }, 3000)
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(fullText.substring(0, currentIndex - 1))
          currentIndex--
        } else {
          isDeleting = false
        }
      }
    }
    
    const interval = setInterval(typeChar, isDeleting ? 50 : 100)
    return () => clearInterval(interval)
  }, [])
  
  return <span className="font-mono">{displayText}<span className="animate-pulse">|</span></span>
}

// Animated Map Visualization Component
type NeedLevel = 'high' | 'medium' | 'low' | 'lowest'
type Region = { name: string; need: NeedLevel; x: number; y: number; w: number; h: number }
function MapVisualization({ level, isDark }: { level: 'province' | 'village' | 'camp'; isDark: boolean }) {
  const colors: Record<NeedLevel, string> = {
    high: isDark ? 'bg-red-500' : 'bg-red-600',
    medium: isDark ? 'bg-orange-400' : 'bg-orange-500',
    low: isDark ? 'bg-yellow-300' : 'bg-yellow-400',
    lowest: isDark ? 'bg-green-400' : 'bg-green-500'
  }
  
  const getRegions = (): Region[] => {
    if (level === 'province') {
      return [
        { name: 'Kabul', need: 'lowest', x: 60, y: 40, w: 30, h: 25 },
        { name: 'Kandahar', need: 'high', x: 40, y: 60, w: 35, h: 30 },
        { name: 'Herat', need: 'medium', x: 10, y: 35, w: 40, h: 35 },
        { name: 'Balkh', need: 'low', x: 55, y: 10, w: 35, h: 25 }
      ]
    } else if (level === 'village') {
      return [
        { name: 'Village A', need: 'high', x: 15, y: 20, w: 15, h: 15 },
        { name: 'Village B', need: 'medium', x: 40, y: 25, w: 18, h: 18 },
        { name: 'Village C', need: 'lowest', x: 70, y: 30, w: 12, h: 12 },
        { name: 'Village D', need: 'low', x: 25, y: 60, w: 20, h: 20 },
        { name: 'Village E', need: 'high', x: 60, y: 65, w: 15, h: 15 }
      ]
    } else {
      return [
        { name: 'Camp 1', need: 'high', x: 30, y: 40, w: 25, h: 20 },
        { name: 'Camp 2', need: 'medium', x: 65, y: 35, w: 20, h: 22 },
        { name: 'Camp 3', need: 'lowest', x: 45, y: 70, w: 18, h: 18 }
      ]
    }
  }
  
  return (
    <div className={`relative w-full h-64 rounded-lg ${isDark ? 'bg-slate-900' : ''} overflow-hidden`}>
      {getRegions().map((region, i) => (
        <div
          key={i}
          className={`absolute rounded-md ${colors[region.need]} opacity-70 hover:opacity-100 transition-all duration-300 animate-pulse cursor-pointer group`}
          style={{
            left: `${region.x}%`,
            top: `${region.y}%`,
            width: `${region.w}%`,
            height: `${region.h}%`,
            animationDelay: `${i * 200}ms`
          }}
        >
          <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center text-xs font-bold text-white bg-black/50 rounded-md transition-opacity">
            {region.name}
          </div>
        </div>
      ))}
      <div className={`absolute bottom-2 right-2 ${isDark ? 'bg-slate-900/80' : 'bg-white/80'} p-2 rounded text-xs space-y-1`}>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-600 rounded"></div><span className={isDark ? 'text-slate-200' : 'text-gray-800'}>High</span></div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-orange-500 rounded"></div><span className={isDark ? 'text-slate-200' : 'text-gray-800'}>Medium</span></div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-yellow-400 rounded"></div><span className={isDark ? 'text-slate-200' : 'text-gray-800'}>Low</span></div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded"></div><span className={isDark ? 'text-slate-200' : 'text-gray-800'}>Lowest</span></div>
      </div>
    </div>
  )
}

// Visual Use Case Card
function UseCaseCard({ icon: Icon, title, description, isDark }: { icon: any; title: string; description: string; isDark: boolean }) {
  return (
    <div className={`p-6 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'} hover:scale-105 transition-transform duration-300`}>
      <div className={`inline-flex p-3 rounded-full ${isDark ? 'bg-gradient-to-br from-purple-600 to-pink-600' : 'bg-gradient-to-br from-purple-500 to-pink-500'} mb-4 animate-bounce`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <p className={`text-sm ${isDark ? 'text-gray-100' : ''}`}>{description}</p>
    </div>
  )
}

export default function AidMind() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')
  
  React.useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark')
      setTheme(isDark ? 'dark' : 'light')
    }
    checkTheme()
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])
  
  const isDark = theme === 'dark'
  
  return (
    <DocsLayout title="AidMind: Unsupervised ML for Humanitarian Needs Assessment">
      <div className="max-w-none">
        {/* Hero Section */}
        <div className={`p-8 rounded-xl mb-8 ${isDark ? 'bg-slate-900 border border-slate-700' : 'bg-gradient-to-r from-slate-100 via-pink-100 to-orange-100 border border-slate-300'}`}>
          <p className={`text-xl font-bold mb-4 ${isDark ? 'text-white bg-gray-800 px-4 py-3 rounded-lg' : 'text-black'}`}>
            🤖 Unsupervised machine learning for humanitarian needs assessment at ANY geographic level
          </p>
          <p className={`text-base mb-4 ${isDark ? 'text-gray-100 bg-gray-800 px-4 py-3 rounded-lg' : 'text-black'}`}>
            AidMind is a production-ready Python tool that enables humanitarian data analysts to quickly identify areas with the highest need for aid using unsupervised machine learning. Works with <strong>provinces, districts, villages, refugee camps, neighborhoods, or any custom geographic units</strong>.
          </p>
          <p className={`text-base ${isDark ? 'text-gray-100 bg-gray-800 px-4 py-3 rounded-lg' : 'text-black'}`}>
            <strong>✨ Fully generalized</strong>: Works with any CSV structure and any GeoJSON boundaries.
          </p>
        </div>

        {/* Installation with Typing Animation */}
        <section className={`mt-8 rounded-lg border p-6 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>📦 Installation</h2>
          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-gray-900'} mb-4`}>
            <p className="text-green-400 text-lg">$ <TypingText /></p>
          </div>
          <p className={`text-sm ${isDark ? 'text-gray-200' : 'text-slate-500'}`}>
            Or install from source: <code className={`px-3 py-2 rounded-md font-mono ${isDark ? 'bg-slate-800 border border-slate-600 text-green-400' : 'bg-black border border-gray-300 text-white'}`}>git clone https://github.com/fiafghan/aidmind.git</code>
          </p>
        </section>

        {/* Map Examples with Animations */}
        <section className={`mt-8 rounded-lg border p-6 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>🗺️ Visual Examples: Multi-Level Analysis</h2>
          
          {/* Province Level */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className={`w-5 h-5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              <h3 className={`text-xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Province-Level Analysis</h3>
            </div>
            <p className={`text-sm mb-4 ${isDark ? 'text-gray-200' : ''}`}>
              Analyze need levels across provinces. Perfect for national-level planning and resource allocation.
            </p>
            <MapVisualization level="province" isDark={isDark} />
          </div>

          {/* Village Level */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Home className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
              <h3 className={`text-xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Village-Level Analysis</h3>
            </div>
            <p className={`text-sm mb-4 ${isDark ? 'text-gray-200' : ''}`}>
              Granular analysis at village level. Identify specific communities requiring targeted interventions.
            </p>
            <MapVisualization level="village" isDark={isDark} />
          </div>

          {/* Refugee Camp Level */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Users className={`w-5 h-5 ${isDark ? 'text-orange-400' : 'text-orange-600'}`} />
              <h3 className={`text-xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Refugee Camp Analysis</h3>
            </div>
            <p className={`text-sm mb-4 ${isDark ? 'text-gray-200' : ''}`}>
              Monitor need levels across refugee camps. Essential for humanitarian emergency response.
            </p>
            <MapVisualization level="camp" isDark={isDark} />
          </div>
        </section>

        {/* Use Cases with Visual Icons */}
        <section className={`mt-8 rounded-lg border p-6 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>💡 Use Cases for Humanitarian Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <UseCaseCard
              icon={TrendingUp}
              title="Rapid Assessment"
              description="Quickly identify priority areas needing immediate humanitarian intervention"
              isDark={isDark}
            />
            <UseCaseCard
              icon={Package}
              title="Resource Allocation"
              description="Visualize where aid resources are most needed for optimal distribution"
              isDark={isDark}
            />
            <UseCaseCard
              icon={Activity}
              title="Monitoring & Evaluation"
              description="Track changes in need levels over time to measure impact"
              isDark={isDark}
            />
            <UseCaseCard
              icon={FileText}
              title="Donor Reporting"
              description="Generate clear maps and data exports for transparent reporting"
              isDark={isDark}
            />
          </div>
        </section>

        {/* Features Section */}
        <section className={`mt-8 rounded-lg border p-6 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>✨ Key Features</h2>
          <ul className={`text-sm space-y-2 ${isDark ? 'text-slate-200' : 'text-gray-700'}`}>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong>Works at ANY geographic level</strong>: Provinces, districts, villages, refugee camps, neighborhoods, or any custom zones</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong>Completely generalized</strong>: Works with ANY CSV structure and ANY column names</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong>Easy to use</strong>: Single function call with dataset path</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong>Flexible inputs</strong>: Works with any numeric indicators (any column names accepted)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong>Custom boundaries</strong>: Use your own GeoJSON for villages or custom units</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong>Automatic preprocessing</strong>: Handles missing values, duplicates, and name variations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong>Intelligent clustering</strong>: Uses KMeans to identify need patterns across indicators</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong>Geographic visualization</strong>: Generates interactive HTML maps with 4 discrete need levels</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong>Online or offline</strong>: Use GeoBoundaries or custom GeoJSON files</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong>International ready</strong>: Works with any country, any admin level (ADM1, ADM2, ADM3, custom)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong>CSV export</strong>: Outputs structured data with need scores, ranks, and levels</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">✓</span>
              <span><strong>Professional logging</strong>: Transparent processing with diagnostic information</span>
            </li>
          </ul>
        </section>

        {/* Quick Start Examples */}
        <section className={`mt-8 rounded-lg border p-6 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>🚀 Quick Start Examples</h2>
          
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">Option 1: Pip install (recommended)</h3>
          <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>pip install aidmind</code></pre>
          
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">Option 2: From source</h3>
          <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`git clone https://github.com/fiafghan/aidmind.git
cd aidmind
pip install -r requirements.txt
pip install -e .`}</code></pre>

          <div className={`mt-4 p-4 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-600' : ''}`}>
            <h3 className={`text-sm font-semibold mb-2 ${isDark ? 'text-white' : ''}`}>📚 Requirements</h3>
            <p className={`text-sm font-mono ${isDark ? 'text-gray-100' : ''}`}>
              Python 3.8+ | pandas | numpy | scikit-learn | folium | requests | pycountry | branca | shapely
            </p>
          </div>
          
          <div className="mt-6 space-y-4">
            <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Code Examples</h3>
            <div>
              <p className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}><strong>Province Analysis:</strong></p>
              <pre className={`rounded-md p-3 overflow-auto text-sm ${isDark ? 'bg-gray-900' : 'bg-gray-900'}`}><code className="text-gray-100">{`from aidmind import analyze_needs
analyze_needs("provinces.csv", "Afghanistan", admin_level="ADM1")`}</code></pre>
            </div>
            <div>
              <p className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}><strong>Village Analysis:</strong></p>
              <pre className={`rounded-md p-3 overflow-auto text-sm ${isDark ? 'bg-gray-900' : 'bg-gray-900'}`}><code className="text-gray-100">{`analyze_needs("villages.csv", local_geojson="villages.geojson")`}</code></pre>
            </div>
            <div>
              <p className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}><strong>Refugee Camps:</strong></p>
              <pre className={`rounded-md p-3 overflow-auto text-sm ${isDark ? 'bg-gray-900' : 'bg-gray-900'}`}><code className="text-gray-100">{`analyze_needs("camps.csv", local_geojson="camps.geojson", admin_col="camp_name")`}</code></pre>
            </div>
          </div>
        </section>

        {/* How It Works - Visual Process */}
        <section className={`mt-8 rounded-lg border p-6 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>⚙️ How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: '1', title: 'Load Data', desc: 'CSV + Indicators', emoji: '📊' },
              { num: '2', title: 'Preprocess', desc: 'Clean & Normalize', emoji: '🧹' },
              { num: '3', title: 'Cluster', desc: 'KMeans Analysis', emoji: '🎯' },
              { num: '4', title: 'Visualize', desc: 'Generate Maps', emoji: '🗺️' },
              { num: '5', title: 'Export', desc: 'HTML + CSV', emoji: '💾' }
            ].map((step, i) => (
              <div key={i} className={`p-4 rounded-lg text-center border ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-200'} hover:scale-105 transition-transform`}>
                <div className={`text-3xl mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'} font-bold`}>{step.num}</div>
                <div className="text-2xl mb-1">{step.emoji}</div>
                <div className={`text-sm font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{step.title}</div>
                <div className={`text-xs ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>{step.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Support & Resources */}
        <section className={`mt-8 rounded-lg border p-6 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>🔗 Resources & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://github.com/fiafghan/aidmind" className={`p-4 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-600 hover:border-purple-400' : 'bg-white border-gray-200 hover:border-purple-400'} transition-colors`}>
              <div className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>📁 GitHub Repository</div>
              <div className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-600'}`}>Source code, issues, and contributions</div>
            </a>
            <div className={`p-4 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}>
              <div className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>📖 Documentation</div>
              <div className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-600'}`}>Full usage examples in USAGE_EXAMPLES.md</div>
            </div>
            <div className={`p-4 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}>
              <div className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>📝 License</div>
              <div className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-600'}`}>MIT License - Free for commercial & non-commercial use</div>
            </div>
            <div className={`p-4 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}>
              <div className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>🤝 Contributing</div>
              <div className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-600'}`}>See CONTRIBUTING.md for guidelines</div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className={`mt-8 p-8 rounded-xl text-center ${isDark ? 'bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900' : 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600'}`}>
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Transform Humanitarian Data?</h3>
          <p className="text-white/90 mb-6">Start analyzing needs at any geographic level with a single command</p>
          <div className={`inline-block px-6 py-3 rounded-lg ${isDark ? 'bg-white/10 backdrop-blur' : 'bg-white/20 backdrop-blur'} text-white font-mono text-lg`}>
            $ <TypingText />
          </div>
        </div>
      </div>
    </DocsLayout>
  )
}
