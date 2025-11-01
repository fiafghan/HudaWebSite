import React from 'react'
import DocsLayout from '../../layouts/DocsLayout'

export default function AidMind() {
  return (
    <DocsLayout title="AidMind: Unsupervised ML for Humanitarian Needs Assessment" titleClassName="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-orange-500 to-emerald-500">
      <div className="prose prose-slate max-w-none dark:prose-invert">
        {/* Header */}
        <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500">
          <strong>Unsupervised machine learning for humanitarian needs assessment at ANY geographic level</strong>
        </p>
        <p className="text-base text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
          AidMind is a production-ready Python tool that enables humanitarian data analysts to quickly identify areas with the highest need for aid using unsupervised machine learning. Works with <strong>provinces, districts, villages, refugee camps, neighborhoods, or any custom geographic units</strong>. It automatically clusters geographic units, ranks them by need level, and generates interactive choropleth maps with discrete color-coded need levels.
        </p>
        <p className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
          <strong>Fully generalized</strong>: Works with any CSV structure and any GeoJSON boundaries.
        </p>

        {/* Features Section */}
        <section className="mt-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Features</h2>
          <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-6 space-y-2">
            <li><strong>Works at ANY geographic level</strong>: Provinces, districts, villages, refugee camps, neighborhoods, or any custom zones</li>
            <li><strong>Completely generalized</strong>: Works with ANY CSV structure and ANY column names</li>
            <li><strong>Easy to use</strong>: Single function call with dataset path</li>
            <li><strong>Flexible inputs</strong>: Works with any numeric indicators (any column names accepted)</li>
            <li><strong>Custom boundaries</strong>: Use your own GeoJSON for villages or custom units</li>
            <li><strong>Automatic preprocessing</strong>: Handles missing values, duplicates, and name variations</li>
            <li><strong>Intelligent clustering</strong>: Uses KMeans to identify need patterns across indicators</li>
            <li><strong>Geographic visualization</strong>: Generates interactive HTML maps with 4 discrete need levels (high, medium, low, lowest)</li>
            <li><strong>Online or offline</strong>: Use GeoBoundaries or custom GeoJSON files</li>
            <li><strong>International ready</strong>: Works with any country, any admin level (ADM1, ADM2, ADM3, custom)</li>
            <li><strong>CSV export</strong>: Outputs structured data with need scores, ranks, and levels</li>
            <li><strong>Professional logging</strong>: Transparent processing with diagnostic information</li>
          </ul>
        </section>

        {/* Installation Section */}
        <section className="mt-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Installation</h2>
          
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">Option 1: Pip install (recommended)</h3>
          <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>pip install aidmind</code></pre>
          
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">Option 2: From source</h3>
          <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`git clone https://github.com/fiafghan/aidmind.git
cd aidmind
pip install -r requirements.txt
pip install -e .`}</code></pre>

          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">Requirements</h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-6">
            <li>Python 3.8+</li>
            <li>pandas &gt;= 2.0</li>
            <li>numpy &gt;= 1.24</li>
            <li>scikit-learn &gt;= 1.3</li>
            <li>folium &gt;= 0.15</li>
            <li>requests &gt;= 2.31</li>
            <li>pycountry &gt;= 22.3.5</li>
            <li>branca &gt;= 0.7</li>
            <li>shapely &gt;= 2.0</li>
          </ul>
        </section>

        {/* Quick Start Section */}
        <section className="mt-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Start</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">Province-level (with GeoBoundaries)</h3>
              <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from aidmind import analyze_needs

# Analyze provinces
output = analyze_needs("provinces.csv", "Afghanistan", admin_level="ADM1")
print(f"Map saved to: {output}")`}</code></pre>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">District-level (with GeoBoundaries)</h3>
              <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Analyze districts
output = analyze_needs(
    "districts.csv",
    "Afghanistan",
    admin_level="ADM2",
    admin_col="district"
)`}</code></pre>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">Village-level (with custom boundaries)</h3>
              <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Analyze villages using your own GeoJSON
output = analyze_needs(
    "villages.csv",
    local_geojson="village_boundaries.geojson",
    admin_col="village_name"
)`}</code></pre>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">Any custom geographic unit</h3>
              <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Works with refugee camps, neighborhoods, health zones, etc.
output = analyze_needs(
    "refugee_camps.csv",
    local_geojson="camp_boundaries.geojson",
    admin_col="camp_name",
    fixed_thresholds=(0.25, 0.50, 0.75)  # Optional: fixed thresholds
)`}</code></pre>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">Command line</h3>
              <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Province-level
python -m aidmind provinces.csv "Afghanistan" --admin-level ADM1

# District-level
python -m aidmind districts.csv "Kenya" --admin-level ADM2 --admin-col district

# Village-level with custom boundaries
python -m aidmind villages.csv --geojson villages.geojson --admin-col village_name`}</code></pre>
            </div>
          </div>
        </section>

        {/* Data Requirements Section */}
        <section className="mt-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Data Requirements</h2>
          
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">Required</h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-6">
            <li><strong>One geographic unit column</strong>: Any column with location names (province, district, village, camp, zone, etc.)</li>
            <li><strong>At least one numeric indicator</strong>: Any metric columns with numeric values</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">Supported formats</h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-6">
            <li><strong>CSV files</strong> with UTF-8 encoding</li>
            <li><strong>ANY column names</strong>: Tool auto-detects geographic column and uses all numeric columns</li>
            <li><strong>GeoJSON boundaries</strong>: Either from GeoBoundaries or your own custom file</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">Example: Province-level</h3>
          <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`province,health_index,education_index,income_index,food_security,water_access
Kabul,0.75,0.80,0.70,0.85,0.78
Kandahar,0.45,0.40,0.50,0.35,0.44
Herat,0.60,0.65,0.55,0.60,0.63`}</code></pre>

          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">Example: Village-level</h3>
          <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`village_name,health_access,school_access,water_quality,food_availability
Qala-e-Fatullah,0.30,0.25,0.40,0.35
Deh-e-Bagh,0.45,0.40,0.55,0.50
Karez-e-Mir,0.25,0.20,0.35,0.30`}</code></pre>

          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">Example: Refugee camps</h3>
          <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`camp_name,shelter,water,sanitation,food,health
Camp Dadaab 1,0.40,0.35,0.30,0.45,0.50
Camp Kakuma,0.55,0.50,0.45,0.60,0.65
Camp Nyarugusu,0.30,0.25,0.20,0.35,0.40`}</code></pre>
        </section>

        {/* How It Works Section */}
        <section className="mt-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">How It Works</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">1. Preprocessing</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-6">
                <li>Auto-detects admin column or uses specified <code>admin_col</code></li>
                <li>Aggregates duplicate admin records by averaging</li>
                <li>Imputes missing numeric values with median</li>
                <li>Standardizes all indicators (zero mean, unit variance)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">2. Need Assessment</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-6">
                <li>Computes composite need score (mean of standardized indicators)</li>
                <li>Applies KMeans clustering (3-5 clusters depending on data size)</li>
                <li>Ranks clusters by mean need score</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">3. Name Harmonization</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-6">
                <li>Normalizes admin names (lowercase, remove special characters)</li>
                <li>Applies fuzzy matching to align with GeoBoundaries names</li>
                <li>Logs match rate and coverage improvements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">4. Visualization</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-6">
                <li>Fetches admin boundaries from GeoBoundaries (or uses local file)</li>
                <li>Assigns discrete color levels based on quartiles or fixed thresholds:
                  <ul className="list-disc pl-6 mt-1">
                    <li><strong>High</strong> (red-700): Top 25% need scores</li>
                    <li><strong>Medium</strong> (red-400): 50th-75th percentile</li>
                    <li><strong>Low</strong> (green-300): 25th-50th percentile</li>
                    <li><strong>Lowest</strong> (green-600): Bottom 25%</li>
                  </ul>
                </li>
                <li>Generates interactive Folium map with tooltips</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">5. Output</h3>
              <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-6">
                <li>HTML map: <code>output/needs_map_&lt;ISO3&gt;.html</code></li>
                <li>CSV scores: <code>output/needs_scores_&lt;ISO3&gt;.csv</code></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mt-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Use Cases</h2>
          
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">Humanitarian Organizations</h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-6">
            <li><strong>Rapid needs assessment</strong>: Identify priority areas for intervention</li>
            <li><strong>Resource allocation</strong>: Visualize where aid is most needed</li>
            <li><strong>Monitoring & evaluation</strong>: Track changes in need levels over time</li>
            <li><strong>Reporting</strong>: Generate maps and data exports for donors</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">Example Organizations</h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-6">
            <li>UN agencies (UNHCR, UNICEF, WFP)</li>
            <li>International NGOs (MSF, Oxfam, Save the Children)</li>
            <li>National disaster management agencies</li>
            <li>Research institutions studying humanitarian crises</li>
          </ul>
        </section>

        {/* API Reference Section */}
        <section className="mt-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">API Reference</h2>
          
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">analyze_needs()</h3>
          <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`def analyze_needs(
    dataset_path: str,
    country_name: Optional[str] = None,
    output_html_path: Optional[str] = None,
    *,
    admin_level: Optional[str] = None,
    admin_col: Optional[str] = None,
    local_geojson: Optional[str] = None,
    fixed_thresholds: Optional[Tuple[float, float, float]] = None,
) -> str`}</code></pre>

          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">Parameters:</h4>
          <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-6 space-y-1">
            <li><code>dataset_path</code> (str): Path to CSV file with geographic units and indicators</li>
            <li><code>country_name</code> (str, optional): Country name (e.g., "Afghanistan", "Kenya"). Required only if using GeoBoundaries</li>
            <li><code>output_html_path</code> (str, optional): Custom output path for HTML</li>
            <li><code>admin_level</code> (str, optional): Admin level ("ADM1", "ADM2", "ADM3", or any custom)</li>
            <li><code>admin_col</code> (str, optional): Name of geographic unit column (auto-detected if None)</li>
            <li><code>local_geojson</code> (str, optional): Path to local GeoJSON boundaries</li>
            <li><code>fixed_thresholds</code> (tuple, optional): (q25, q50, q75) for color levels</li>
          </ul>

          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">Returns:</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 pl-6"><code>str</code>: Path to generated HTML file</p>
        </section>

        {/* Best Practices Section */}
        <section className="mt-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Best Practices</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">Data Quality</h3>
              <ol className="text-sm text-gray-700 dark:text-gray-300 list-decimal pl-6">
                <li>Use official admin names from GeoBoundaries or national sources</li>
                <li>Include multiple indicators (3-5+) for robust assessment</li>
                <li>Check for outliers and data quality issues before analysis</li>
                <li>Document data sources and collection methodology</li>
              </ol>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">Interpretation</h3>
              <ol className="text-sm text-gray-700 dark:text-gray-300 list-decimal pl-6">
                <li>Need scores are relative within the dataset (0-1 scale)</li>
                <li>Clustering is unsupervised: No ground truth labels used</li>
                <li>Combine with qualitative data for complete picture</li>
                <li>Validate results with local experts and stakeholders</li>
              </ol>
            </div>

            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">Production Deployment</h3>
              <ol className="text-sm text-gray-700 dark:text-gray-300 list-decimal pl-6">
                <li>Use fixed thresholds for consistent cross-country comparison</li>
                <li>Cache boundaries locally for offline or restricted environments</li>
                <li>Version control datasets and track changes over time</li>
                <li>Automate workflows with CI/CD pipelines</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="mt-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Support & Resources</h2>
          
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>GitHub Repository</strong>: <a href="https://github.com/fiafghan/aidmind" className="text-blue-600 dark:text-blue-400 hover:underline">https://github.com/fiafghan/aidmind</a></li>
            <li><strong>Issues</strong>: Report bugs and feature requests on GitHub Issues</li>
            <li><strong>Documentation</strong>: Full usage examples available in USAGE_EXAMPLES.md</li>
            <li><strong>Contributing</strong>: See CONTRIBUTING.md for guidelines</li>
          </ul>
        </section>

        {/* License Section */}
        <section className="mt-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">License & Citation</h2>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            <strong>License</strong>: MIT License - see LICENSE file for details.
          </p>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            <strong>Citation</strong>: If you use AidMind in your research or reports, please cite:
          </p>
          <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`AidMind: Unsupervised Machine Learning for Humanitarian Needs Assessment
Version 1.0.0
https://github.com/fiafghan/aidmind`}</code></pre>
        </section>
      </div>
    </DocsLayout>
  )
}
