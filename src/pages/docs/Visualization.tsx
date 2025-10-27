import React from 'react'
import DocsLayout from '../../layouts/DocsLayout'

function VisualCard({ title, columns, rows }:{ title:string; columns:string[]; rows:(string|number)[][] }) {
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">{title}</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid font-medium px-3 py-2" style={{gridTemplateColumns:`repeat(${columns.length}, minmax(0,1fr))`}}>
          {columns.map((c,i)=>(<div key={i}>{c}</div>))}
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid px-3 py-1" style={{gridTemplateColumns:`repeat(${columns.length}, minmax(0,1fr))`}}>
              {r.map((cell,j)=>(<div key={j}>{cell}</div>))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Visualization() {
  return (
    <DocsLayout title="Phase: Visualization">
      <p className="text-gray-700">Lightweight placeholder chart specs for common visuals. Each function returns a minimal spec dict. Rendering/export is left to frontend or a renderer. Data inputs accept CSV path, Pandas DataFrame, or Polars DataFrame.</p>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="bar-chart">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">bar_chart(data, category_col, value_col, orientation="vertical", stacked=False, color_col=None, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Categorical bar chart.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Compare categories.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Simple comparison, optionally stacked or colored.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Show reached by province as bars.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>category_col</code>: name for bars.</li>
          <li><code>value_col</code>: bar height.</li>
          <li><code>orientation</code>: vertical/horizontal.</li>
          <li><code>stacked</code>: True/False.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Bar chart" columns={["category","value","stacked"]} rows={[["A",1200,"no"],["B",900,"no"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import bar_chart
import polars as pl

df = pl.DataFrame({"province":["A","B"], "reached":[1200,900]})
spec = bar_chart(df, category_col="province", value_col="reached")`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="line-chart">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">line_chart(data, x_col, y_col, series_col=None, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Time/sequence line.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Draw a line for values by month.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>x_col</code>: time column.</li>
          <li><code>y_col</code>: value column.</li>
          <li><code>series_col</code>: optional series.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Line chart" columns={["x","y","series"]} rows={[["2025-01",10,"A"],["2025-02",12,"A"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import line_chart
spec = line_chart(df, x_col="date", y_col="value", series_col="cluster")`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="pie-chart">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">pie_chart(data, category_col, value_col, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Part-to-whole distribution.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Show how funding splits by sector.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>category_col</code>: slice name.</li>
          <li><code>value_col</code>: slice size.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Pie chart" columns={["category","value"]} rows={[["Health",40],["Food",60]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import pie_chart
spec = pie_chart(df, category_col="cluster", value_col="funding")`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="histogram">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">histogram(data, value_col, bins=10, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Distribution of a numeric variable.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> See how FCS values spread.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>value_col</code>: numeric column.</li>
          <li><code>bins</code>: number of bars.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Histogram" columns={["bin","count"]} rows={[["0-10",2],["10-20",5]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import histogram
spec = histogram(df, value_col="fcs", bins=20)`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="box-plot">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">box_plot(data, category_col, value_col, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Spread across categories.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Compare FCS spread by province.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>category_col</code>: group name.</li>
          <li><code>value_col</code>: numeric values.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Box plot" columns={["category","median","iqr"]} rows={[["A",45,"10-20"],["B",40,"8-18"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import box_plot
spec = box_plot(df, category_col="province", value_col="fcs")`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="stacked-bar">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">stacked_bar_chart(data, category_col, value_col, stack_col, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Stacked composition per category.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> See how sectors add up per province.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>category_col</code>: x groups.</li>
          <li><code>value_col</code>: amount.</li>
          <li><code>stack_col</code>: stack series.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Stacked bar" columns={["category","stack","value"]} rows={[["A","Food",40],["A","Health",20]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import stacked_bar_chart
spec = stacked_bar_chart(df, category_col="province", value_col="value", stack_col="cluster")`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="multi-line">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">multi_series_line_chart(data, x_col, y_col, series_col, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Multiple lines by series.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Lines per cluster across months.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>x_col</code>: time.</li>
          <li><code>y_col</code>: value.</li>
          <li><code>series_col</code>: series.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Multi-line" columns={["x","y","series"]} rows={[["Jan",10,"Food"],["Jan",8,"Health"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import multi_series_line_chart
spec = multi_series_line_chart(df, x_col="date", y_col="value", series_col="cluster")`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="heatmap">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">heatmap(data, x_col, y_col, value_col, title=None, scale="sequential")</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Correlation or intensity matrix.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Colors show high or low scores.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>x_col</code>: labels on x.</li>
          <li><code>y_col</code>: labels on y.</li>
          <li><code>value_col</code>: color value.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Heatmap" columns={["x","y","value"]} rows={[["A","FCS",0.8],["B","FCS",0.3]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import heatmap
spec = heatmap(df, x_col="province", y_col="indicator", value_col="score")`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="bubble">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">bubble_chart(data, x_col, y_col, size_col, color_col=None, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Scatter with size and color.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Each bubble is a province, size=people, color=cluster.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>x_col</code>: x value.</li>
          <li><code>y_col</code>: y value.</li>
          <li><code>size_col</code>: bubble size.</li>
          <li><code>color_col</code>: bubble color.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Bubble chart" columns={["x","y","size","color"]} rows={[[10,20,100000,"Food"],[15,25,80000,"Health"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import bubble_chart
spec = bubble_chart(df, x_col="needs", y_col="funding", size_col="population", color_col="cluster")`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="sankey">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">sankey_diagram(source_col, target_col, value_col, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Flow of aid/resources.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Show money from donor to sector.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>source_col</code>: from.</li>
          <li><code>target_col</code>: to.</li>
          <li><code>value_col</code>: amount.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Sankey" columns={["source","target","value"]} rows={[["Donor","Food",100],["Donor","Health",50]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import sankey_diagram
spec = sankey_diagram(source_col="donor", target_col="cluster", value_col="amount")`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="treemap">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">treemap(category_col, value_col, group_col=None, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Sector allocations.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Boxes show bigger value for bigger amount.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>category_col</code>: name.</li>
          <li><code>value_col</code>: size.</li>
          <li><code>group_col</code>: optional group.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Treemap" columns={["category","value","group"]} rows={[["Food",60,"A"],["Health",40,"A"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import treemap
spec = treemap(category_col="sector", value_col="amount", group_col="province")`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="radar">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">radar_chart(axis_cols, series_col=None, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Multi-sector needs profile.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> A web shape shows strong or weak sides.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>axis_cols</code>: list of indicators.</li>
          <li><code>series_col</code>: optional group.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Radar" columns={["axis","value"]} rows={[["fcs",45],["wash",30]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import radar_chart
spec = radar_chart(axis_cols=["fcs","rcsi","wash","health"])`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="dashboard">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">interactive_dashboard(widgets=None, charts=None, layout="grid", title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Combine charts and filters.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> One page with filters and charts.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>widgets</code>: list of inputs.</li>
          <li><code>charts</code>: list of chart specs.</li>
          <li><code>layout</code>: grid or other.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Dashboard" columns={["widgets","charts","layout"]} rows={[[1,1,"grid"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import interactive_dashboard, bar_chart
widgets = [{"type":"select","field":"province"}]
charts = [bar_chart(df, "province","reached")]
spec = interactive_dashboard(widgets=widgets, charts=charts)`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="time-slider">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">time_slider(time_col, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Interactive time control.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Slide to change month.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>time_col</code>: time field.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Time slider" columns={["time_col"]} rows={[["date"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import time_slider
spec = time_slider(time_col="date")`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="animated-crisis-map">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">animated_crisis_map(geojson_col, time_col, value_col, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Animated map over time.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Play incidents by date on a map.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>geojson_col</code>: geometry field.</li>
          <li><code>time_col</code>: time field.</li>
          <li><code>value_col</code>: intensity.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Animated map" columns={["geom","time","value"]} rows={[["geom","date","incidents"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import animated_crisis_map
spec = animated_crisis_map(geojson_col="geom", time_col="date", value_col="incidents")`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="compare-countries">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">compare_countries(country_col, metric_cols, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Compare multiple countries.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Put countries side by side.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>country_col</code>: country field.</li>
          <li><code>metric_cols</code>: list of numbers.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Compare countries" columns={["country","needs","funding"]} rows={[["A",10,7],["B",8,9]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import compare_countries
spec = compare_countries(country_col="country", metric_cols=["needs","funding"])`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="funding-vs-needs">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">plot_funding_vs_needs(funding_col, needs_col, group_col=None, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Compare funding to needs.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> See if money matches the need.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>funding_col</code>: funding field.</li>
          <li><code>needs_col</code>: needs field.</li>
          <li><code>group_col</code>: optional group.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Funding vs needs" columns={["group","needs","funding"]} rows={[["A",10,7],["B",8,9]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import plot_funding_vs_needs
spec = plot_funding_vs_needs(funding_col="funding", needs_col="needs", group_col="province")`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="targeted-vs-reached">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">plot_targeted_vs_reached(targeted_col, reached_col, group_col=None, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Target vs actual reached.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Show target and reached for each group.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>targeted_col</code>: target.</li>
          <li><code>reached_col</code>: reached.</li>
          <li><code>group_col</code>: group.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Target vs reached" columns={["group","target","reached"]} rows={[["Food",100,80],["Health",90,95]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import plot_targeted_vs_reached
spec = plot_targeted_vs_reached(targeted_col="target", reached_col="reached", group_col="cluster")`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="gaps-colored">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">show_gaps_colored(need_col, reached_col, color_scheme="red-yellow-green", title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Color-coded gaps.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Red is big gap, green is small gap.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>need_col</code>: need value.</li>
          <li><code>reached_col</code>: reached value.</li>
          <li><code>color_scheme</code>: color ramp.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Gaps colored" columns={["group","need","reached","color"]} rows={[["A",100,60,"red"],["B",90,85,"yellow"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import show_gaps_colored
spec = show_gaps_colored(need_col="needs", reached_col="reached")`}</code></pre>
          </div>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="export-plots">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">export_plots(chart_spec, formats=["png"], filename_base="chart")</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Export chart spec (placeholder).</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Save the chart as PNG or PDF.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>formats</code>: list like png, svg.</li>
          <li><code>filename_base</code>: base name.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Export plots" columns={["formats","file"]} rows={[["png,pdf","my_chart"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.visualize import export_plots, bar_chart
spec = bar_chart(df, category_col="province", value_col="reached")
export = export_plots(spec, formats=["png","svg","pdf"], filename_base="my_chart")`}</code></pre>
          </div>
        </div>
      </section>
    </DocsLayout>
  )
}
