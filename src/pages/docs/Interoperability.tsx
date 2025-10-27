import React from 'react'
import DocsLayout from '../../layouts/DocsLayout'

function VisualCard({ title, columns, rows }:{ title:string; columns:string[]; rows:(string|number|boolean)[][] }) {
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
              {r.map((cell,j)=>(<div key={j}>{String(cell)}</div>))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Interoperability() {
  return (
    <DocsLayout title="Phase: Interoperability">
      <p className="text-gray-700">Export and sharing interfaces. Each function returns a lightweight intent spec; no files are written. Use these specs with your renderer/uploader. Every card includes What/When/Why/Parameters, a Python example, and the returned Output preview.</p>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="export-csv">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">export_csv(data, path, include_header=True, delimiter=",", encoding="utf-8")</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Prepare a CSV export intent.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Sharing tabular data across tools.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Universal, simple format.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Save a simple table to a .csv file to share by email.</p>
        <h3 className="text-sm font-semibold mt-2">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>path</code>: output file path.</li>
          <li><code>include_header</code>: include column names.</li>
          <li><code>delimiter</code>: separator, default ",".</li>
          <li><code>encoding</code>: text encoding.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="CSV export" columns={["path","header","delim"]} rows={[["/tmp/data.csv", true, ","]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.Interoperability import export_csv
import polars as pl

df = pl.DataFrame({"a":[1,2], "b":["x","y"]})
spec = export_csv(df, path="/tmp/data.csv")
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "export_csv",
  "path": "/tmp/data.csv",
  "options": {"include_header": true, "delimiter": ",", "encoding": "utf-8"},
  "preview": {"rows": 2, "columns": ["a", "b"]}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="export-excel">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">export_excel(data, path, sheet_name="Sheet1", include_header=True)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Prepare an Excel export intent.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Analysts using Excel workflows.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Multi-sheet, formatting-friendly.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Save a table to an Excel file with a sheet name.</p>
        <h3 className="text-sm font-semibold mt-2">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>path</code>: output xlsx path.</li>
          <li><code>sheet_name</code>: tab name.</li>
          <li><code>include_header</code>: include columns.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Excel export" columns={["path","sheet","header"]} rows={[["/tmp/data.xlsx","Summary", true]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.Interoperability import export_excel
spec = export_excel(df, path="/tmp/data.xlsx", sheet_name="Summary")
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "export_excel",
  "path": "/tmp/data.xlsx",
  "options": {"sheet_name": "Summary", "include_header": true},
  "preview": {"rows": 2, "columns": ["a", "b"]}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="export-json">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">export_json(data, path, orient="records", indent=2)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Prepare a JSON export intent.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> APIs, web apps, pipelines.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Flexible and widely supported.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Export records to JSON for a web app.</p>
        <h3 className="text-sm font-semibold mt-2">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>orient</code>: layout, like records.</li>
          <li><code>indent</code>: pretty spaces.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="JSON export" columns={["path","orient","indent"]} rows={[["/tmp/data.json","records",2]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.Interoperability import export_json
spec = export_json(df, path="/tmp/data.json", orient="records", indent=2)
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "export_json",
  "path": "/tmp/data.json",
  "options": {"orient": "records", "indent": 2},
  "preview": {"rows": 2, "columns": ["a", "b"]}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="export-parquet">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">export_parquet(data, path, compression="snappy")</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Prepare a Parquet export intent.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Columnar analytics and storage.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Efficient and typed.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Save a big table to Parquet for faster analysis.</p>
        <h3 className="text-sm font-semibold mt-2">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>compression</code>: like snappy.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Parquet export" columns={["path","compression"]} rows={[["/tmp/data.parquet","snappy"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.Interoperability import export_parquet
spec = export_parquet(df, path="/tmp/data.parquet", compression="snappy")
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "export_parquet",
  "path": "/tmp/data.parquet",
  "options": {"compression": "snappy"},
  "preview": {"rows": 2, "columns": ["a", "b"]}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="export-sql">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">export_sql_database(data, connection_uri, table_name, if_exists="replace")</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Prepare a SQL export intent.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Data marts, dashboards, integration.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Centralize and query at scale.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Load cleaned data to a SQL table for dashboards.</p>
        <h3 className="text-sm font-semibold mt-2">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>connection_uri</code>: database URI.</li>
          <li><code>table_name</code>: table name.</li>
          <li><code>if_exists</code>: replace/append.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="SQL export" columns={["uri","table","if_exists"]} rows={[["postgres://...","huda_export","replace"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.Interoperability import export_sql_database
spec = export_sql_database(df, connection_uri="postgresql://user:pass@host:5432/db", table_name="huda_export", if_exists="replace")
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "export_sql",
  "connection_uri": "postgresql://user:pass@host:5432/db",
  "table_name": "huda_export",
  "options": {"if_exists": "replace"},
  "preview": {"rows": 2, "columns": ["a", "b"]}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="export-stata-spss">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">export_stata(data, path, version=118) | export_spss(data, path)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Prepare Stata/SPSS export intents.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Household microdata analysis.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Compatibility with statistical tools.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Share microdata with teams using Stata/SPSS.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Stata/SPSS" columns={["format","path"]} rows={[["stata","/tmp/data.dta"],["spss","/tmp/data.sav"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.Interoperability import export_stata, export_spss
spec1 = export_stata(df, path="/tmp/data.dta", version=118)
spec2 = export_spss(df, path="/tmp/data.sav")
print(spec1) ; print(spec2)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "export_stata",
  "path": "/tmp/data.dta",
  "options": {"version": 118},
  "preview": {"rows": 2, "columns": ["a", "b"]}
}
{
  "type": "export_spss",
  "path": "/tmp/data.sav",
  "options": {},
  "preview": {"rows": 2, "columns": ["a", "b"]}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="export-gis">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">export_shapefile(data, path, geometry_col="geometry", crs_epsg=4326) | export_geojson(data, path, geometry_col="geometry", crs_epsg=4326)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Prepare GIS export intents.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Sharing spatial datasets.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Integrate with GIS software.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Export spatial data to Shapefile/GeoJSON for map teams.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="GIS export" columns={["format","path"]} rows={[["shapefile","/tmp/data.shp"],["geojson","/tmp/data.geojson"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.Interoperability import export_shapefile, export_geojson
spec1 = export_shapefile(df, path="/tmp/data.shp", geometry_col="geom")
spec2 = export_geojson(df, path="/tmp/data.geojson", geometry_col="geom")
print(spec1) ; print(spec2)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "export_shapefile",
  "path": "/tmp/data.shp",
  "options": {"geometry_col": "geom", "crs_epsg": 4326},
  "preview": {"rows": 2, "columns": ["a", "b"]}
}
{
  "type": "export_geojson",
  "path": "/tmp/data.geojson",
  "options": {"geometry_col": "geom", "crs_epsg": 4326},
  "preview": {"rows": 2, "columns": ["a", "b"]}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="export-hdx">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">export_hdx_dataset(data, dataset_name, organization, license_name="cc-by", private=False)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Prepare HDX dataset upload intent.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Publishing on HDX.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Share humanitarian data widely.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Upload a dataset to HDX with org and license info.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="HDX dataset" columns={["name","org","license"]} rows={[["huda-afg","huda-org","cc-by"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.Interoperability import export_hdx_dataset
spec = export_hdx_dataset(df, dataset_name="huda-afg", organization="huda-org")
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "export_hdx",
  "dataset_name": "huda-afg",
  "organization": "huda-org",
  "options": {"license": "cc-by", "private": false},
  "preview": {"rows": 2, "columns": ["a", "b"]}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="share-html">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">share_dashboard_html(dashboard_spec, path, embed_assets=True, title=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Prepare a static HTML dashboard export intent.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Offline sharing or hosting.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Zero dependencies for recipients.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Share a dashboard as a single HTML file.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Dashboard HTML" columns={["path","embed_assets"]} rows={[["/tmp/dashboard.html", true]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.Interoperability import share_dashboard_html
from huda.visualize import bar_chart, interactive_dashboard
charts = [bar_chart(df, "a","a")]
dashboard = interactive_dashboard(charts=charts)
spec = share_dashboard_html(dashboard, path="/tmp/dashboard.html", embed_assets=True)
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "share_dashboard_html",
  "path": "/tmp/dashboard.html",
  "title": "HuDa Dashboard",
  "options": {"embed_assets": true},
  "preview": {"charts": 1, "widgets": 0}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="api-integration">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">api_integration_output(endpoint_url, method="POST", headers=None, auth_type=None, auth_token_env=None)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Prepare an API call intent to push outputs.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Automating pipelines and syncs.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Integrate with external systems.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> POST the result JSON to an external API endpoint.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="API call" columns={["url","method","auth"]} rows={[["https://api.example.org/upload","POST","Bearer"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.Interoperability import api_integration_output
spec = api_integration_output(
    endpoint_url="https://api.example.org/upload",
    method="POST",
    headers={"Content-Type":"application/json"},
    auth_type="Bearer",
    auth_token_env="API_TOKEN"
)
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "api_integration",
  "endpoint_url": "https://api.example.org/upload",
  "method": "POST",
  "headers": {"Content-Type":"application/json"},
  "auth": {"type": "Bearer", "token_env": "API_TOKEN"},
  "preview": {"will_send_payload": true}
}`}</code></pre>
      </section>
    </DocsLayout>
  )
}
