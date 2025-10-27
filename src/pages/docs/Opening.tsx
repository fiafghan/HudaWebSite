import React from 'react'
import DocsLayout from '../../layouts/DocsLayout'

function VisualCSVDemo() {
  const [filtered, setFiltered] = React.useState(false)
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 flex items-center justify-between">
        <div className="text-sm font-medium">data/afg_survey.csv</div>
        <button
          onClick={() => setFiltered((v) => !v)}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs bg-gray-900 text-white hover:opacity-90 active:scale-95 transition"
        >
          {filtered ? 'Clear filters' : 'Apply filters'}
        </button>
      </div>
      <div className="px-3 pb-2 text-xs text-gray-700">
        Filters:
        {" "}{filtered ? '{ province: "Kabul", year: 2025 }' : 'none'}
      </div>
      <div className="border-t border-gray-200">
        <div className="grid grid-cols-4 text-xs font-medium px-3 py-2">
          <div>province</div>
          <div>year</div>
          <div>households</div>
          <div>note</div>
        </div>
        <div className="divide-y divide-gray-200 text-xs">
          {[
            { p: 'Kabul', y: 2025, h: 120, n: 'kept' },
            { p: 'Herat', y: 2024, h: 90, n: 'hidden' },
            { p: 'Bamyan', y: 2025, h: 60, n: 'hidden' },
            { p: 'Kabul', y: 2025, h: 45, n: 'kept' },
          ].map((r, i) => {
            const keep = r.p === 'Kabul' && r.y === 2025
            const show = filtered ? keep : true
            return (
              <div
                key={i}
                className={`grid grid-cols-4 px-3 py-2 transition-all ${filtered && !keep ? 'opacity-30 blur-[1px]' : 'opacity-100'}`}
              >
                <div>{r.p}</div>
                <div>{r.y}</div>
                <div>{r.h}</div>
                <div className={`inline-flex items-center gap-1 ${keep ? 'text-emerald-600' : 'text-gray-500'}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${keep ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`}></span>
                  {keep ? 'match' : 'no match'}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function VisualFlatFileDemo({ kind }: { kind: 'spss' | 'stata' | 'xml' }) {
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium">{kind === 'spss' ? 'household.sav' : kind === 'stata' ? 'household.dta' : 'old_system.xml'}</div>
      <div className="p-3 text-xs border-t border-gray-200">
        <div className="mb-2">As table</div>
        <div className="grid grid-cols-3 font-medium">
          <div>id</div><div>province</div><div>value</div>
        </div>
        <div className="divide-y divide-gray-200">
          {[1,2,3].map(i => (
            <div key={i} className="grid grid-cols-3 py-1">
              <div>{i}</div><div>{i%2 ? 'Kabul' : 'Herat'}</div><div>{(i*10)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualExcelDemo() {
  const [sheet, setSheet] = React.useState<'data' | 'summary'>('data')
  const rows = sheet === 'data'
    ? [
        { id: 1, province: 'Kabul', households: 120 },
        { id: 2, province: 'Herat', households: 90 },
      ]
    : [
        { id: 1, item: 'Total provinces', value: 2 },
        { id: 2, item: 'Total households', value: 210 },
      ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 flex items-center gap-2">
        <div className="text-sm font-medium">data/afg_survey.xlsx</div>
        <div className="ml-auto flex items-center gap-2 text-xs">
          <span>Sheet:</span>
          <button
            onClick={() => setSheet('data')}
            className={`rounded-md px-2 py-1 ${sheet==='data' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black dark:text-black'}`}
          >data</button>
          <button
            onClick={() => setSheet('summary')}
            className={`rounded-md px-2 py-1 ${sheet==='summary' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black dark:text-black'}`}
          >summary</button>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="grid grid-cols-3 text-xs font-medium px-3 py-2">
          {sheet==='data' ? (<>
            <div>province</div><div>households</div><div>note</div>
          </>) : (<>
            <div>item</div><div>value</div><div>note</div>
          </>)}
        </div>
        <div className="divide-y divide-gray-200 text-xs">
          {rows.map((r) => (
            <div key={r.id} className="grid grid-cols-3 px-3 py-2 transition-colors hover:bg-gray-50">
              {'province' in r ? (<>
                <div>{(r as any).province}</div>
                <div>{(r as any).households}</div>
                <div className="text-gray-500">from sheet: {sheet}</div>
              </>) : (<>
                <div>{(r as any).item}</div>
                <div>{(r as any).value}</div>
                <div className="text-gray-500">from sheet: {sheet}</div>
              </>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualJSONDemo() {
  const [filtered, setFiltered] = React.useState(true)
  const data = [
    { id: 1, province: 'Kabul', persons: 5 },
    { id: 2, province: 'Herat', persons: 3 },
    { id: 3, province: 'Kabul', persons: 2 },
  ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 flex items-center justify-between">
        <div className="text-sm font-medium">data/afg_households.json</div>
        <button
          onClick={() => setFiltered((v)=>!v)}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs bg-gray-900 text-white hover:opacity-90 active:scale-95 transition"
        >
          {filtered ? 'Show all' : 'Keep only "Kabul"'}
        </button>
      </div>
      <div className="grid grid-cols-2">
        <div className="p-3 border-t border-gray-200 text-xs">
          <div className="font-medium mb-1">Raw JSON</div>
          <pre className="rounded bg-gray-900 text-gray-100 p-2 overflow-auto text-[11px]">{JSON.stringify(data, null, 2)}</pre>
        </div>
        <div className="p-3 border-t border-l border-gray-200 text-xs">
          <div className="font-medium mb-1">As table</div>
          <div className="grid grid-cols-3 text-xs font-medium mb-1">
            <div>id</div><div>province</div><div>persons</div>
          </div>
          <div className="divide-y divide-gray-200">
            {data.map(r => {
              const keep = r.province === 'Kabul'
              if (filtered && !keep) return null
              return (
                <div key={r.id} className="grid grid-cols-3 py-1">
                  <div>{r.id}</div>
                  <div className={keep ? 'text-emerald-600' : ''}>{r.province}</div>
                  <div>{r.persons}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function VisualGeoJSONDemo() {
  const [highlight, setHighlight] = React.useState('Kabul')
  const regions = ['Kabul', 'Herat', 'Bamyan', 'Kandahar']
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 flex items-center justify-between">
        <div className="text-sm font-medium">data/afg_provinces.geojson</div>
        <div className="text-xs flex items-center gap-2">
          <span>Highlight:</span>
          <select className="rounded border px-2 py-1 text-xs bg-white text-black dark:bg-white dark:text-black" value={highlight} onChange={(e)=>setHighlight(e.target.value)}>
            {regions.map(r=> <option key={r}>{r}</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="p-3 text-xs">
          <div className="font-medium mb-1">Mini map (boxes)</div>
          <div className="grid grid-cols-2 gap-2">
            {regions.map(r => (
              <div key={r} className={`h-14 rounded-md grid place-items-center text-[11px] border ${r===highlight ? 'bg-emerald-100 text-emerald-700 border-emerald-300' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>{r}</div>
            ))}
          </div>
        </div>
        <div className="p-3 text-xs border-l border-gray-200">
          <div className="font-medium mb-1">Attributes table</div>
          <div className="grid grid-cols-2 font-medium text-xs mb-1"><div>province</div><div>population</div></div>
          <div className="divide-y divide-gray-200">
            {regions.map(r => (
              <div key={r} className={`grid grid-cols-2 py-1 ${r===highlight ? 'text-emerald-700' : ''}`}>
                <div>{r}</div>
                <div>...</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function VisualParquetDemo() {
  const [cols, setCols] = React.useState<string[]>(['province','population'])
  const toggle = (c: string) => setCols(s => s.includes(c) ? s.filter(x=>x!==c) : [...s, c])
  const all = ['province','population','households']
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium flex items-center gap-2">data/humanitarian.parquet
        <span className="ml-auto text-xs">Keep columns:</span>
        {all.map(c => (
          <button key={c} onClick={()=>toggle(c)} className={`text-xs rounded-md px-2 py-1 ${cols.includes(c) ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black dark:text-black'}`}>{c}</button>
        ))}
      </div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid" style={{gridTemplateColumns: `repeat(${cols.length||1}, minmax(0,1fr))`}}>
          <div className="px-3 py-2 font-medium col-span-full">Preview</div>
          {[0,1,2].map(i => (
            <div key={i} className="contents">
              {cols.length===0 ? <div className="px-3 py-1 text-gray-500">(no columns)</div> : cols.map(c => (
                <div key={c} className="px-3 py-1 border-t border-gray-200">{c}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualDBDemo({ kind }: { kind: 'sqlite' | 'postgres' | 'mysql' }) {
  const [connected, setConnected] = React.useState(false)
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium flex items-center gap-2">
        {kind === 'sqlite' ? 'afg.db' : kind === 'postgres' ? 'PostgreSQL — needs_table' : 'MySQL — needs_table'}
        <button onClick={()=>setConnected(true)} className="ml-auto text-xs rounded-md px-2 py-1 bg-gray-900 text-white active:scale-95">Connect</button>
      </div>
      <div className="p-3 text-xs border-t border-gray-200">
        {!connected ? (
          <div className="text-gray-600">Press Connect to fetch the table...</div>
        ) : (
          <div>
            <div className="font-medium mb-1">Table: needs_table</div>
            <div className="grid grid-cols-3 font-medium">
              <div>province</div><div>in_need</div><div>reached</div>
            </div>
            <div className="divide-y divide-gray-200">
              {[['Kabul',100,80],['Herat',70,40]].map((r,i)=> (
                <div key={i} className="grid grid-cols-3 py-1">
                  <div>{r[0]}</div><div>{r[1]}</div><div>{r[2]}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function VisualNetCDFDemo() {
  const cells = Array.from({length: 20}, (_,i)=> i)
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium">data/rainfall.nc</div>
      <div className="grid grid-cols-5 gap-1 p-3">
        {cells.map(i => (
          <div key={i} className="h-6 rounded" style={{background: `linear-gradient(90deg, #0ea5e9 ${i*5}%, #e2e8f0 ${i*5}%)`}} />
        ))}
      </div>
      <div className="px-3 pb-3 text-[11px] text-gray-600">Each bar = a grid cell value (example).</div>
    </div>
  )
}


function VisualEncodingDemo() {
  const [fixed, setFixed] = React.useState(false)
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium flex items-center gap-2">
        data/afg_survey.csv — text encoding
        <button onClick={()=>setFixed(true)} className="ml-auto text-xs rounded-md px-2 py-1 bg-gray-900 text-white active:scale-95">Detect</button>
      </div>
      <div className="p-3 text-sm">
        <div className="font-mono">
          {fixed ? 'Kabul, Herat, Bamyan' : 'KÃbul, HerÃt, Bamyan'}
        </div>
        <div className="text-xs text-gray-600 mt-1">Green text = fixed spelling (example).</div>
      </div>
    </div>
  )
}

function VisualAPIDemo() {
  const [filterOn, setFilterOn] = React.useState(true)
  const url = 'https://jsonplaceholder.typicode.com/comments'
  const all = [
    { id: 1, postId: 1, email: 'ali@example.com' },
    { id: 2, postId: 2, email: 'fatima@example.com' },
    { id: 3, postId: 1, email: 'zahir@example.com' },
  ]
  const rows = filterOn ? all.filter(r=>r.postId===1) : all
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium flex items-center gap-2">
        <span className="truncate">{url}</span>
        <button onClick={()=>setFilterOn(v=>!v)} className="ml-auto text-xs rounded-md px-2 py-1 bg-gray-900 text-white active:scale-95">
          {filterOn ? 'Show all' : 'Keep postId = 1'}
        </button>
      </div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-3 font-medium px-3 py-2">
          <div>id</div><div>postId</div><div>email</div>
        </div>
        <div className="divide-y divide-gray-200">
          {rows.map(r => (
            <div key={r.id} className="grid grid-cols-3 px-3 py-1">
              <div>{r.id}</div>
              <div className={r.postId===1 ? 'text-emerald-600' : ''}>{r.postId}</div>
              <div>{r.email}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualAdminBoundariesDemo() {
  const [clean, setClean] = React.useState(false)
  const rows = [
    { country: 'Afghanistan', province: 'Kabul', district: 'Kabul' },
    { country: 'Afganistan', province: 'Kabol', district: 'Kabool' },
    { country: 'Afghanistan', province: 'Herat', district: 'Herat' },
  ]
  const std = (v: string) => {
    if (!clean) return v
    if (v === 'Afganistan') return 'Afghanistan'
    if (v === 'Kabol' || v === 'Kabool') return 'Kabul'
    return v
  }
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium flex items-center gap-2">
        Names standardization (ADM0–ADM2)
        <button onClick={()=>setClean(v=>!v)} className="ml-auto text-xs rounded-md px-2 py-1 bg-gray-900 text-white active:scale-95">
          {clean ? 'Show original' : 'Clean names'}
        </button>
      </div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-3 font-medium px-3 py-2">
          <div>country</div><div>province</div><div>district</div>
        </div>
        <div className="divide-y divide-gray-200">
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-3 px-3 py-1">
              <div className={clean && std(r.country)!==r.country ? 'text-emerald-600' : ''}>{std(r.country)}</div>
              <div className={clean && std(r.province)!==r.province ? 'text-emerald-600' : ''}>{std(r.province)}</div>
              <div className={clean && std(r.district)!==r.district ? 'text-emerald-600' : ''}>{std(r.district)}</div>
            </div>
          ))}
        </div>
        <div className="px-3 py-2 text-[11px] text-gray-600">Green text = fixed spelling (example).</div>
      </div>
    </div>
  )
}

export default function Opening() {
  return (
    <DocsLayout title="Phase: Opening">
      <p className="text-gray-700 text-[15px]">Open files, APIs, and maps safely. Simple steps with visual previews. Each card shows What, When, Why, Example, and Result.</p>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>open_csv(file_path, initial_filters=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>In simple words:</strong> Open a <em>comma file</em> (CSV) and show it as a clean table.</p>
        <p className="text-gray-700 text-sm"><strong>When to use:</strong> You have survey results or lists saved as <code>.csv</code>.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Fast and safe. It also finds text encoding for you.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <div className="text-xs text-gray-600 mb-2">Hint: Use Apply filters to keep only Kabul 2025 (example).</div>
            <VisualCSVDemo />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.opening.csv import open_csv

df = open_csv(
    "data/afg_survey.csv",
    initial_filters={"province": "Kabul", "year": 2025}
)
# df is the table you can use`}</code></pre>
            <p className="text-xs text-gray-700 mt-2">Change the filters to your need. Example: province, district, year.</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> A table with only the rows you asked for.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>open_excel(file_path, initial_filters=None, sheet_name=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>In simple words:</strong> Open an Excel file and pick the sheet you want.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Your file has many sheets like <code>data</code>, <code>summary</code>.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualExcelDemo />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.opening.excel import open_excel

df = open_excel(
    "data/afg_survey.xlsx",
    sheet_name="data",
    initial_filters={"province": "Kabul"}
)
# df is a table from the "data" sheet, only Kabul rows`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> A table from your chosen sheet, with optional filters.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>open_json(file_path, initial_filters=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>In simple words:</strong> Open a JSON file. If it looks like a table, we show a table. If not, we show the JSON.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> You have <code>.json</code> from a phone app or website API.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualJSONDemo />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.opening.json import open_json

# Table-like JSON
df_or_data = open_json(
    "data/afg_households.json",
    initial_filters={"district": "Herat"}
)
# If it is a table, you get a Polars table.
# If not a table, you get Python JSON data.`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> A table (if possible) or the JSON as-is.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>open_api(url, filters=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>In simple words:</strong> Read data from a website API link and make a table. You can also filter.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualAPIDemo />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.opening.API import open_api

# Load all comments
df = open_api("https://jsonplaceholder.typicode.com/comments")

# Keep only postId = 1
df_filtered = open_api("https://jsonplaceholder.typicode.com/comments", {"postId": 1})
print(df_filtered)`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> A table from the API (and only the rows you asked for, if you pass filters).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>open_geojson(file_path)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>In simple words:</strong> Open a map file. See regions and a plain table.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualGeoJSONDemo />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.opening.geojson import open_geojson

gdf, df = open_geojson("data/afg_provinces.geojson")
# gdf = map with geometry, df = table without geometry`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> Map + attributes table.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>open_parquet(file_path, columns=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>In simple words:</strong> Open a fast file. Pick only the columns you want to keep.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualParquetDemo />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.opening.parquet import open_parquet

df_all = open_parquet("data/humanitarian.parquet")
df_some = open_parquet("data/humanitarian.parquet", columns=["province","population"])`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> A table with all or only selected columns.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>open_sqlite(db_path, table_name)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>In simple words:</strong> Open a small database file and read a table.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualDBDemo kind="sqlite" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.opening.sqlite import open_sqlite

df = open_sqlite("data/afg.db", "needs_table")`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> A table with the rows from that database table.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>open_postgres(host, port, user, password, database, table_name)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>In simple words:</strong> Connect to a Postgres server and fetch a table.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualDBDemo kind="postgres" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.opening.postgres import open_postgres

df = open_postgres(host="localhost", port=5432, user="postgres", password="1234", database="humanitarian_db", table_name="needs_table")`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> A table with rows from the server.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>open_mysql(host, port, user, password, database, table_name)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>In simple words:</strong> Connect to MySQL and fetch a table.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualDBDemo kind="mysql" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.opening.mysql import open_mysql

df = open_mysql("localhost", 3306, "root", "1234", "humanitarian_mysql", "needs_table")`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> A table with rows from the server.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>open_netcdf(file_path)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>In simple words:</strong> Open a climate file and see values per small area.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualNetCDFDemo />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.opening.netcdf import open_netcdf

df = open_netcdf("data/rainfall.nc")`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> A table of grid values (example).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>open_spss(file_path)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>In simple words:</strong> Open an SPSS file and see a normal table.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualFlatFileDemo kind="spss" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.opening.spss import open_spss

df = open_spss("data/household.sav")`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> A table you can use.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>open_stata(file_path)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>In simple words:</strong> Open a Stata file and see a normal table.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualFlatFileDemo kind="stata" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.opening.stata import open_stata

df = open_stata("data/household.dta")`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> A table you can use.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>open_xml(file_path)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>In simple words:</strong> Open an old XML file. If possible, show it as a table.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualFlatFileDemo kind="xml" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.opening.xml import open_xml

df_or_tree = open_xml("data/old_system.xml")`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> A table or the XML structure (depends on the file).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>detect_encoding(file_path)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>In simple words:</strong> Fix strange letters by finding correct text encoding.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualEncodingDemo />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.opening.encoding_detector import detect_encoding

enc = detect_encoding("data/afg_survey.csv")
print(enc)  # e.g., "utf-8"`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> Clean text without weird characters.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>admin_boundaries(df, country_col="country", adm1_col="province", adm2_col="district", threshold=80)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>In simple words:</strong> Fix spelling differences for province/district names. Make one clean name for each.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualAdminBoundariesDemo />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.cleaning.admin_boundaries import admin_boundaries

import polars as pl
df = pl.DataFrame({
    "country": ["Afghanistan", "Afganistan", "Afghanistan"],
    "province": ["Kabul", "Kabol", "Herat"],
    "district": ["Kabul", "Kabool", "Herat"],
})

df_clean = admin_boundaries(df, country_col="country", adm1_col="province", adm2_col="district", threshold=80)`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Result:</strong> New standardized columns (adm0, adm1, adm2) with fixed names.</p>
      </section>
    </DocsLayout>
  )
}
