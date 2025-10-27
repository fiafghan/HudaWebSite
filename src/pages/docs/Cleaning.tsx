import React from 'react'
import DocsLayout from '../../layouts/DocsLayout'

function VisualNormalizeColumns() {
  const headers = [
    'Country Name ',
    'Population(2025)',
    'Food-Security',
  ]
  const clean = (h: string) => h
    .trim()
    .replace(/[^A-Za-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .toLowerCase()
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium">Headers → Clean headers</div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>original</div><div>clean</div></div>
        <div className="divide-y divide-gray-200">
          {headers.map((h,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{h}</div>
              <div className="text-emerald-600">{clean(h)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualTranslateCategories() {
  const mixed = {
    response: ['Yes','بلی','نخیر','Y','N'],
    gender: ['زن','مرد','Female','Male','F']
  }
  const mapResp = (v: string) => (/^y(es)?$/i.test(v) || v==='بلی') ? 'Yes' : 'No'
  const mapGen = (v: string) => (/^f(emale)?$/i.test(v) || v==='زن') ? 'Female' : 'Male'
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium">Mixed text → Unified categories</div>
      <div className="grid md:grid-cols-2">
        <div className="border-t border-gray-200 text-xs">
          <div className="px-3 py-2 font-medium">response</div>
          <div className="divide-y divide-gray-200">
            {mixed.response.map((v,i)=> (
              <div key={i} className="grid grid-cols-2 px-3 py-1">
                <div>{v}</div>
                <div className="text-emerald-600">{mapResp(v)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t md:border-l border-gray-200 text-xs">
          <div className="px-3 py-2 font-medium">gender</div>
          <div className="divide-y divide-gray-200">
            {mixed.gender.map((v,i)=> (
              <div key={i} className="grid grid-cols-2 px-3 py-1">
                <div>{v}</div>
                <div className="text-emerald-600">{mapGen(v)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
function VisualCountryStandardization() {
  const [mode, setMode] = React.useState<'iso3'|'iso2'|'name'>('iso3')
  const rows = [
    { country: 'Afghanistan' },
    { country: 'AF' },
    { country: 'afg' },
    { country: 'United States' },
    { country: 'us' },
  ]
  const convert = (v: string) => {
    if (mode==='name') return v.toLowerCase().startsWith('af') ? 'Afghanistan' : 'United States'
    if (mode==='iso2') return v.toLowerCase().startsWith('af') ? 'AF' : 'US'
    return v.toLowerCase().startsWith('af') ? 'AFG' : 'USA'
  }
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium flex items-center gap-2">
        Country codes
        <div className="ml-auto text-xs flex items-center gap-1">
          <button onClick={()=>setMode('iso3')} className={`rounded-md px-2 py-1 ${mode==='iso3'?'bg-gray-900 text-white':'bg-gray-100 text-black'}`}>ISO3</button>
          <button onClick={()=>setMode('iso2')} className={`rounded-md px-2 py-1 ${mode==='iso2'?'bg-gray-900 text-white':'bg-gray-100 text-black'}`}>ISO2</button>
          <button onClick={()=>setMode('name')} className={`rounded-md px-2 py-1 ${mode==='name'?'bg-gray-900 text-white':'bg-gray-100 text-black'}`}>Name</button>
        </div>
      </div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>input</div><div>standard</div></div>
        <div className="divide-y divide-gray-200">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{r.country}</div>
              <div className="text-emerald-600">{convert(r.country)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualNumbersStandardization() {
  const messy = ["1,200", "۱٬۵۰۰", "2.000,50", "500k", "1.2 B", "N/A"]
  const parse = (s: string) => {
    if (/k$/i.test(s)) return 1000 * parseFloat(s)
    if (/m$/i.test(s)) return 1_000_000 * parseFloat(s)
    if (/b$/i.test(s)) return 1_000_000_000 * parseFloat(s)
    const arabic = s.replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
    const cleaned = arabic.replace(/[^0-9.,]/g, '')
    if (cleaned.includes(',') && cleaned.includes('.')) {
      const lastDot = cleaned.lastIndexOf('.')
      const lastComma = cleaned.lastIndexOf(',')
      if (lastComma > lastDot) {
        return parseFloat(cleaned.replace(/\./g, '').replace(',', '.'))
      }
      return parseFloat(cleaned.replace(/,/g, ''))
    }
    return parseFloat(cleaned.replace(/,/g, ''))
  }
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium">Messy → Number</div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>input</div><div>parsed</div></div>
        <div className="divide-y divide-gray-200">
          {messy.map((s,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{s}</div>
              <div className="text-emerald-600">{isNaN(parse(s)) ? 'NaN' : parse(s).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualDatesStandardization() {
  const [style, setStyle] = React.useState<'iso'|'us'|'eu'>('iso')
  const row = ["2025/10/05", "05-10-2025", "2025.10.05"]
  const fmt = (d: string) => {
    const parts = d.replace(/[./]/g,'-').split('-')
    let y=parts[0], m=parts[1], day=parts[2]
    if (y.length !== 4) { // assume d-m-y
      day = parts[0]; m = parts[1]; y = parts[2]
    }
    if (style==='us') return `${m}-${day}-${y}`
    if (style==='eu') return `${day}-${m}-${y}`
    return `${y}-${m}-${day}`
  }
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium flex items-center gap-2">Date format
        <div className="ml-auto text-xs flex items-center gap-1">
          <button onClick={()=>setStyle('iso')} className={`rounded-md px-2 py-1 ${style==='iso'?'bg-gray-900 text-white':'bg-gray-100 text-black'}`}>ISO</button>
          <button onClick={()=>setStyle('us')} className={`rounded-md px-2 py-1 ${style==='us'?'bg-gray-900 text-white':'bg-gray-100 text-black'}`}>US</button>
          <button onClick={()=>setStyle('eu')} className={`rounded-md px-2 py-1 ${style==='eu'?'bg-gray-900 text-white':'bg-gray-100 text-black'}`}>EU</button>
        </div>
      </div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>input</div><div>format: {style.toUpperCase()}</div></div>
        <div className="divide-y divide-gray-200">
          {row.map((d,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{d}</div>
              <div className="text-emerald-600">{fmt(d)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualMissingDuplicates() {
  const [drop, setDrop] = React.useState(true)
  const [keep, setKeep] = React.useState<'first'|'last'|'none'>('first')
  const rows = [
    { name: 'Ali', year: 2025 },
    { name: null as any, year: 2025 },
    { name: 'Ali', year: 2025 },
  ]
  const visible = rows.filter(r => drop ? r.name !== null : true)
  const markDup = (i: number) => {
    const key = `${visible[i].name}-${visible[i].year}`
    const firstIdx = visible.findIndex(v=>`${v.name}-${v.year}`===key)
    const matches = visible.map((v,ix)=>({v,ix})).filter(x=>`${x.v.name}-${x.v.year}`===key)
    const lastIdx = matches.length ? matches[matches.length - 1].ix : firstIdx
    if (keep==='first') return i!==firstIdx
    if (keep==='last') return i!==lastIdx
    return true // none means drop all duplicates
  }
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium flex items-center gap-2">Missing & Duplicates
        <label className="ml-auto text-xs flex items-center gap-1">Drop missing<input type="checkbox" checked={drop} onChange={()=>setDrop(v=>!v)} /></label>
        <select className="text-xs border rounded px-1 py-0.5" value={keep} onChange={e=>setKeep(e.target.value as any)}>
          <option value="first">keep first</option>
          <option value="last">keep last</option>
          <option value="none">drop all</option>
        </select>
      </div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>row</div><div>name</div><div>year</div></div>
        <div className="divide-y divide-gray-200">
          {visible.map((r,i)=> (
            <div key={i} className={`grid grid-cols-3 px-3 py-1 ${markDup(i)?'opacity-40 line-through':''}`}>
              <div>#{i+1}</div><div>{r.name ?? <span className="text-gray-500">(missing)</span>}</div><div>{r.year}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualFillStats() {
  const [method, setMethod] = React.useState<'mean'|'median'|'mode'|'ffill'|'bfill'>('mean')
  const raw = [20, null as any, 30, null as any, 25]
  const fill = () => {
    const arr = [...raw]
    if (method==='mean') {
      const nums = arr.filter(x=>x!=null) as number[]
      const m = nums.reduce((a,b)=>a+b,0)/nums.length
      return arr.map(x=>x??m)
    }
    if (method==='median') {
      const nums = (arr.filter(x=>x!=null) as number[]).sort((a,b)=>a-b)
      const mid = nums.length%2? nums[(nums.length-1)/2] : (nums[nums.length/2-1]+nums[nums.length/2])/2
      return arr.map(x=>x??mid)
    }
    if (method==='mode') {
      const nums = arr.filter(x=>x!=null) as number[]
      const freq = Object.entries(nums.reduce((m:any,v)=>((m[v]=(m[v]||0)+1),m),{})).sort((a:any,b:any)=>b[1]-a[1])[0][0]
      return arr.map(x=>x??Number(freq))
    }
    if (method==='ffill') {
      let last = arr[0]
      return arr.map(x=> (last = (x?? last)))
    }
    // bfill
    let next: number|null = null
    for (let i=arr.length-1;i>=0;i--) {
      if (arr[i]!=null) next = arr[i] as number
      else arr[i] = next
    }
    return arr
  }
  const out = fill()
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium flex items-center gap-2">Fill missing
        <select className="ml-auto text-xs border rounded px-1 py-0.5" value={method} onChange={e=>setMethod(e.target.value as any)}>
          <option value="mean">mean</option>
          <option value="median">median</option>
          <option value="mode">mode</option>
          <option value="ffill">forward fill</option>
          <option value="bfill">backward fill</option>
        </select>
      </div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>raw</div><div>filled</div></div>
        <div className="divide-y divide-gray-200">
          {raw.map((v,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{v ?? <span className="text-gray-500">(missing)</span>}</div>
              <div className="text-emerald-600">{(out[i] as number).toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualOutliers() {
  const [threshold, setThreshold] = React.useState(2)
  const vals = [20,22,19,100,21,23]
  const mean = vals.reduce((a,b)=>a+b,0)/vals.length
  const std = Math.sqrt(vals.reduce((a,b)=>a+(b-mean)**2,0)/vals.length)
  const z = vals.map(v => (v-mean)/std)
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium flex items-center gap-2">Outliers (z-score)
        <label className="ml-auto text-xs flex items-center gap-1">threshold<input type="number" className="w-14 border rounded px-1 py-0.5" step="0.1" value={threshold} onChange={e=>setThreshold(parseFloat(e.target.value))} /></label>
      </div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>value</div><div>z</div><div>kept?</div></div>
        <div className="divide-y divide-gray-200">
          {vals.map((v,i)=> {
            const zi = z[i]
            const keep = Math.abs(zi) <= threshold
            return (
              <div key={i} className={`grid grid-cols-3 px-3 py-1 ${keep?'':'opacity-40 line-through'}`}>
                <div>{v}</div><div>{zi.toFixed(2)}</div><div className={keep?'text-emerald-600':'text-rose-600'}>{keep?'yes':'no'}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function VisualCombine() {
  const left = [{country:'Afghanistan', population:39_000_000},{country:'Syria', population:18_000_000}]
  const right = [{country:'Afghanistan', gdp:20.1},{country:'Pakistan', gdp:310.0}]
  const all = ['inner','left','right','outer'] as const
  const [how, setHow] = React.useState<typeof all[number]>('outer')
  const merge = () => {
    const lkeys = left.map(l=>l.country)
    const rkeys = right.map(r=>r.country)
    const keys = how==='inner'? lkeys.filter(k=>rkeys.includes(k))
      : how==='left'? lkeys
      : how==='right'? rkeys
      : Array.from(new Set([...lkeys, ...rkeys]))
    return keys.map(k=> ({country:k, population: left.find(l=>l.country===k)?.population ?? '-', gdp: right.find(r=>r.country===k)?.gdp ?? '-' }))
  }
  const rows = merge()
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium flex items-center gap-2">Combine datasets
        <select className="ml-auto text-xs border rounded px-1 py-0.5" value={how} onChange={e=>setHow(e.target.value as any)}>
          {all.map(h=> <option key={h} value={h}>{h}</option>)}
        </select>
      </div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>country</div><div>population</div><div>gdp</div></div>
        <div className="divide-y divide-gray-200">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-3 px-3 py-1">
              <div>{r.country}</div><div>{r.population.toLocaleString?.() ?? '-'}</div><div>{typeof r.gdp==='number'? r.gdp.toFixed(1): '-'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualAutoTextCleaner() {
  const [clean, setClean] = React.useState(true)
  const data = [
    { text: ' Kabul  ' },
    { text: 'HERAT!' },
    { text: '  bamyan- ' },
  ]
  const fix = (v: string) => v.trim().toLowerCase().replace(/[^a-z\s]/g,'')
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium flex items-center gap-2">
        Auto text cleaner
        <button onClick={()=>setClean(v=>!v)} className="ml-auto text-xs rounded-md px-2 py-1 bg-gray-900 text-white active:scale-95">{clean?'Show raw':'Clean text'}</button>
      </div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>input</div><div>output</div></div>
        <div className="divide-y divide-gray-200">
          {data.map((r,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{r.text}</div>
              <div className="text-emerald-600">{clean? fix(r.text): r.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualFillConstant() {
  const [value, setValue] = React.useState('Unknown')
  const rows = [ {name:'Ali'}, {name:null}, {name:'Sara'}, {name:null} ] as Array<{name:string|null}>
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium flex items-center gap-2">
        Fill constant
        <input value={value} onChange={e=>setValue(e.target.value)} className="ml-auto text-xs rounded-md px-2 py-1 border" />
      </div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>name (raw)</div><div>name (filled)</div></div>
        <div className="divide-y divide-gray-200">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{r.name ?? <span className="text-gray-500">(missing)</span>}</div>
              <div className="text-emerald-600">{r.name ?? value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualGeocode() {
  const places = ['Kabul','Herat','Bamyan']
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium">Geocode preview</div>
      <div className="grid grid-cols-2">
        <div className="p-3 text-xs">
          <div className="font-medium mb-1">Places</div>
          <ul className="list-disc pl-5">
            {places.map(p=> <li key={p}>{p}</li>)}
          </ul>
        </div>
        <div className="p-3 text-xs border-l border-gray-200">
          <div className="font-medium mb-1">Lat/Lon (example)</div>
          <div className="divide-y divide-gray-200">
            {places.map((p,i)=> (
              <div key={p} className="grid grid-cols-3 py-1">
                <div>{p}</div><div>{(34.5+i).toFixed(2)}°</div><div>{(69.0+i).toFixed(2)}°</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Cleaning() {
  return (
    <DocsLayout title="Phase: Cleaning">
      <p className="text-gray-700">We clean the data. Very simple English. Short steps. Afghan survey examples. Each block shows: What, When, Why, Parameters, Example, Output.</p>

      {/* normalize_columns */}
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="normalize-columns">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>normalize_columns(df)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Make column names clean (lowercase, underscores, no symbols).</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Columns are messy like <em>"Country Name ", "Population(2025)"</em>.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Easy to use in code and merging.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualNormalizeColumns />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.cleaning.normalize_columns import normalize_columns

import polars as pl
df = pl.DataFrame({
    "Country Name ": ["Afghanistan", "Syria"],
    "Population(2025)": [12345, 67890],
    "Food-Security": ["High", "Low"],
})

df_clean = normalize_columns(df)
print(df_clean)`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> New column names are simple, like <code>country_name</code>, <code>population2025</code>, <code>food_security</code>.</p>
      </section>

      {/* country_standardization */}
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="country-standardization">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>country_standardization(df, column, output="iso3|iso2|name")</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Make country names/codes standard (ISO).</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Safe joining with other datasets and maps.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCountryStandardization />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.cleaning.country_standardization import country_standardization

import polars as pl
df = pl.DataFrame({"country": ["Afghanistan", "AF", "afg", "United States", "us"]})
df_clean = country_standardization(df, "country", output="iso3")`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Same column but standardized to the format you choose.</p>
      </section>

      {/* auto_text_cleaner */}
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="auto-text-cleaner">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>auto_text_cleaner(df, columns=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Trim spaces, lowercase, remove symbols to make text clean.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualAutoTextCleaner />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.cleaning.auto_text_cleaner import auto_text_cleaner

import polars as pl
df = pl.DataFrame({"place":[" Kabul  ", "HERAT!", "  bamyan- "]})
df_clean = auto_text_cleaner(df, columns=["place"])`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Clean text values ready for matching/joins.</p>
      </section>

      {/* fill_constant */}
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="fill-constant">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>fill_constant(df, column, value)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Replace missing values with a fixed value you choose.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualFillConstant />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.cleaning.fill_constant import fill_constant

import polars as pl
df = pl.DataFrame({"name": ["Ali", None, "Sara", None]})
df_filled = fill_constant(df, "name", value="Unknown")`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> No missing values in that column.</p>
      </section>

      {/* geocode dedicated demo */}
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="geocode">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>geocode(df, location_col=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Add latitude/longitude for place names.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualGeocode />
          </div>
          <div>
            <h3 className="text-sm font-semibold">How to write it (code)</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.cleaning.geocode import geocode

import polars as pl
df = pl.DataFrame({"province":["Kabul","Herat"]})
df_geo = geocode(df, location_col="province")`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> New columns with coordinates.</p>
      </section>

      {/* translate_categories */}
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="translate-categories">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>translate_categories(df, columns=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Make categories same (Yes/No, Male/Female, Active/Inactive) from multi-language forms (Dari/Pashto/English).</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Values are mixed like “بلی/Yes/Y/نخیر/No”.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Easy analysis and charts.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualTranslateCategories />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.cleaning.translate_categories import translate_categories

import polars as pl
df = pl.DataFrame({
    "response": ["Yes", "بلی", "نخیر", "Y", "N"],
    "gender": ["زن", "مرد", "Female", "Male", "F"],
})

df_clean = translate_categories(df, columns=["response", "gender"])
print(df_clean)`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Clean text like <code>Yes/No</code>, <code>Male/Female</code>.</p>
      </section>

      {/* numbers_standardization */}
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="standardize-numbers">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>standardize_numbers(df, columns=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Turn messy numbers ("1,200", "۱٬۲۰۰", "3.5M", "2k") into real numbers.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Data from many sources/languages.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Correct sums/averages and plots.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualNumbersStandardization />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.cleaning.numbers_standardization import standardize_numbers

import polars as pl
df = pl.DataFrame({
    "price": ["1,200", "۱٬۵۰۰", "2.000,50", "N/A"],
    "population": ["2,345,000", "۳٬۴۵۶٬۷۸۹", "500k", "1.2 B"],
})

df_clean = standardize_numbers(df)
print(df_clean)`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Floats like <code>1200.0</code>, <code>3456789.0</code>.</p>
      </section>

      {/* dates_standardization */}
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="standardize-dates">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>dates_standardization(df, column, style="iso|us|eu|full|short")</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Make date formats the same (like 2025-10-05).</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Your dates look different ("05-10-2025", "2025/10/05").</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Safe sorting, joining, and time series.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualDatesStandardization />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.cleaning.dates_standardization import dates_standardization

import polars as pl
df = pl.DataFrame({"date": ["2025/10/05", "05-10-2025", "2025.10.05"]})

print(dates_standardization(df, "date", style="iso"))
print(dates_standardization(df, "date", style="eu"))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Date strings in the format you pick.</p>
      </section>

      {/* drop_missing / duplicate */}
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="missing-duplicates">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>drop_missing(df, column=None) & duplicate(df, columns=None, keep="first|last|False")</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Remove empty rows; remove or keep duplicates.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualMissingDuplicates />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.cleaning.drop_missing import drop_missing
from huda.cleaning.duplicate import duplicate

import polars as pl
df = pl.DataFrame({"name": ["Ali", None, "Sara"], "year": [2025, 2025, 2025]})

df1 = drop_missing(df, column="name")
df2 = duplicate(df1, columns=["name","year"], keep="first")
print(df2)`}</code></pre>
          </div>
        </div>
      </section>

      {/* fill_* and forward/backward */}
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="fill-values">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>fill_mean/median/mode & forward_fill/backward_fill</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Fill missing values using simple rules.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Few gaps in numeric or text columns.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualFillStats />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.cleaning.fill_mean import fill_mean
from huda.cleaning.fill_median import fill_median
from huda.cleaning.fill_mode import fill_mode
from huda.cleaning.forward_fill import forward_fill
from huda.cleaning.backward_fill import backward_fill

import polars as pl
df = pl.DataFrame({"age": [20, None, 30], "temp": [20, None, 25]})

print(fill_mean(df, "age"))
print(fill_median(df, "age"))
print(fill_mode(pl.DataFrame({"city":["Kabul", None, "Kabul"]}), "city"))
print(forward_fill(df, "temp"))
print(backward_fill(df, "temp"))`}</code></pre>
          </div>
        </div>
      </section>

      {/* outlier_handler / outlier_isolation */}
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="outliers">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>outlier_handler(df, columns=None, method="iqr|zscore", factor=1.5) & outlier_isolation(df, columns=None, contamination=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Detect and remove extreme values.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Numbers look wrong (like 100 years old = 1000).</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Stop bad numbers from breaking stats.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualOutliers />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.cleaning.outlier_handler import outlier_handler
from huda.cleaning.outlier_isolation import outlier_isolation

import polars as pl
df = pl.DataFrame({"age": [20,22,19,100,21,23], "income":[3000,3200,3100,99999,3050,3150]})

print(outlier_handler(df))
print(outlier_isolation(df))`}</code></pre>
          </div>
        </div>
      </section>

      {/* combine_datasets / admin_boundaries / geocode */}
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="combine-admin-geocode">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>combine_datasets(df1, df2, on, how) — admin_boundaries(...) — geocode(df, location_col=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Merge tables, fix province/district spellings, find lat/lon for places.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCombine />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.cleaning.combine_datasets import combine_datasets
from huda.cleaning.admin_boundaries import admin_boundaries
from huda.cleaning.geocode import geocode

import polars as pl
df1 = pl.DataFrame({"country":["Afghanistan","Syria"], "population":[39_000_000,18_000_000]})
df2 = pl.DataFrame({"country":["Afghanistan","Pakistan"], "gdp":[20.1,310.0]})
print(combine_datasets(df1, df2, on="country", how="outer"))

adm = pl.DataFrame({"country":["Afghanistan","Afganistan"], "province":["Kabul","Kabol"], "district":["Kabul","Kabool"]})
print(admin_boundaries(adm))

places = pl.DataFrame({"province":["Kabul","Herat"]})
print(geocode(places, location_col="province"))`}</code></pre>
          </div>
        </div>
      </section>
    </DocsLayout>
  )
}
