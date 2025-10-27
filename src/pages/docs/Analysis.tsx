import React from 'react'
import DocsLayout from '../../layouts/DocsLayout'

function VisualTrend() {
  const rows = [
    { month: 'Jan', value: 100, trend: 100 },
    { month: 'Feb', value: 150, trend: 125 },
    { month: 'Mar', value: 200, trend: 175 },
  ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Smooth line (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>month</div><div>value</div><div>trend</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-3 px-3 py-1">
              <div>{r.month}</div><div>{r.value}</div><div className="text-emerald-600">{r.trend}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualClusterRegions() {
  const rows = [ { region:'Kabul', cluster:1 }, { region:'Herat', cluster:2 }, { region:'Nangarhar', cluster:1 } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Province groups (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>region</div><div>cluster</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{r.region}</div><div className={r.cluster===1?'text-indigo-600':'text-amber-600'}>#{r.cluster}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualPCA() {
  const rows = [ { comp:'pc1', meaning:'need high' }, { comp:'pc2', meaning:'coverage low' } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Two main pieces (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>component</div><div>short meaning</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{r.comp}</div><div className="text-emerald-600">{r.meaning}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualInequality() {
  const rows = [ { group:'Province A', value: 80 }, { group:'Province B', value: 20 } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Not equal (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>group</div><div>value</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className={`grid grid-cols-2 px-3 py-1 ${i===0?'bg-emerald-50 dark:bg-emerald-900/20':''}`}>
              <div>{r.group}</div><div>{r.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualImpact() {
  const rows = [ { time:'before', value: 50 }, { time:'after', value: 70 } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Before vs after (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>time</div><div>value</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{r.time}</div><div className={r.time==='after'?'text-emerald-600':'text-gray-900 dark:text-gray-100'}>{r.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualCoverageGap() {
  const rows = [ { need:100, reached:60 }, { need:80, reached:80 } ]
  const gap = (r:any) => r.need - r.reached
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Need vs reached (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>need</div><div>reached</div><div>gap</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className={`grid grid-cols-3 px-3 py-1 ${gap(r)>0?'bg-rose-50 dark:bg-rose-900/20':''}`}>
              <div>{r.need}</div><div>{r.reached}</div><div className={gap(r)>0?'text-rose-600':'text-emerald-600'}>{gap(r)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualNeedsFunding() {
  const rows = [ { need:100, money:70 }, { need:60, money:80 } ]
  const gap = (r:any) => r.money - r.need
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Need vs money (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>need</div><div>money</div><div>gap</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className={`grid grid-cols-3 px-3 py-1 ${gap(r)<0?'bg-rose-50 dark:bg-rose-900/20':'bg-emerald-50 dark:bg-emerald-900/20'}`}>
              <div>{r.need}</div><div>{r.money}</div><div className={gap(r)<0?'text-rose-600':'text-emerald-600'}>{gap(r)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualSeasonality() {
  const rows = [ { month:'Jan', repeat:'no' }, { month:'Feb', repeat:'yes' }, { month:'Mar', repeat:'no' } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Repeat by season (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>month</div><div>repeat?</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className={`grid grid-cols-2 px-3 py-1 ${r.repeat==='yes'?'bg-emerald-50 dark:bg-emerald-900/20':''}`}>
              <div>{r.month}</div><div className={r.repeat==='yes'?'text-emerald-700':'text-gray-600'}>{r.repeat}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualAnomaly() {
  const rows = [ { month:'Apr', value: 400, flag:'anomaly' }, { month:'May', value: 180, flag:'ok' } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Unusual points (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>month</div><div>value</div><div>flag</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className={`grid grid-cols-3 px-3 py-1 ${r.flag==='anomaly'?'bg-rose-50 dark:bg-rose-900/20':''}`}>
              <div>{r.month}</div><div>{r.value}</div><div className={r.flag==='anomaly'?'text-rose-600':'text-emerald-600'}>{r.flag}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualDisplacement() {
  const rows = [ { from:'A', to:'B', next:'yes' }, { from:'B', to:'C', next:'no' } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Move next (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>from</div><div>to</div><div>next?</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className={`grid grid-cols-3 px-3 py-1 ${r.next==='yes'?'bg-emerald-50 dark:bg-emerald-900/20':''}`}>
              <div>{r.from}</div><div>{r.to}</div><div className={r.next==='yes'?'text-emerald-700':'text-gray-600'}>{r.next}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualMortality() {
  const rows = [ { area:'A', death_rate: 2.5, illness_rate: 15.0 } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Rates per 10,000 (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>area</div><div>death_rate</div><div>illness_rate</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-3 px-3 py-1">
              <div>{r.area}</div><div className="text-rose-600">{r.death_rate}</div><div className="text-amber-600">{r.illness_rate}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualFoodSecurity() {
  const rows = [ { region:'A', phase: 3 }, { region:'B', phase: 2 } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Phase by area (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>region</div><div>phase</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className={`grid grid-cols-2 px-3 py-1 ${r.phase>=3?'bg-rose-50 dark:bg-rose-900/20':''}`}>
              <div>{r.region}</div><div className={r.phase>=3?'text-rose-600':'text-emerald-600'}>{r.phase}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualShelter() {
  const rows = [ { place:'A', condition:'bad', ppr: 5 }, { place:'B', condition:'ok', ppr: 2 } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Shelter check (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>place</div><div>condition</div><div>persons/room</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className={`grid grid-cols-3 px-3 py-1 ${r.condition==='bad' || r.ppr>3 ? 'bg-rose-50 dark:bg-rose-900/20' : ''}`}>
              <div>{r.place}</div><div className={r.condition==='bad'?'text-rose-600':'text-emerald-600'}>{r.condition}</div><div>{r.ppr}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualHealthAccess() {
  const rows = [ { area:'A', time_min: 40 }, { area:'B', time_min: 90 } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Travel time (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>area</div><div>time_min</div><div>ok?</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> {
            const ok = r.time_min<=60
            return (
              <div key={i} className={`grid grid-cols-3 px-3 py-1 ${ok?'bg-emerald-50 dark:bg-emerald-900/20':'bg-rose-50 dark:bg-rose-900/20'}`}>
                <div>{r.area}</div><div>{r.time_min}</div><div className={ok?'text-emerald-700':'text-rose-600'}>{ok?'yes':'no'}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function VisualEducation() {
  const rows = [ { area:'A', enrolled: 80, attended: 70, school_age: 100 } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">School coverage (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-4 font-medium px-3 py-2"><div>area</div><div>enrolled</div><div>attended</div><div>school_age</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-4 px-3 py-1">
              <div>{r.area}</div><div>{r.enrolled}</div><div>{r.attended}</div><div>{r.school_age}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualGender() {
  const rows = [ { gender:'female', reached: 120 }, { gender:'male', reached: 100 } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">By gender (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>gender</div><div>reached</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div className={r.gender==='female'?'text-indigo-600':'text-amber-600'}>{r.gender}</div><div>{r.reached}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualLivelihoods() {
  const rows = [ { area:'A', assets: 3, shocks: 1, score:'+ good' }, { area:'B', assets: 1, shocks: 3, score:'- weak' } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Resilience (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-4 font-medium px-3 py-2"><div>area</div><div>assets</div><div>shocks</div><div>score</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className={`grid grid-cols-4 px-3 py-1 ${r.score.includes('good')?'bg-emerald-50 dark:bg-emerald-900/20':'bg-rose-50 dark:bg-rose-900/20'}`}>
              <div>{r.area}</div><div>{r.assets}</div><div>{r.shocks}</div><div className={r.score.includes('good')?'text-emerald-700':'text-rose-600'}>{r.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualForecast() {
  const rows = [ { month: 'Apr', forecast: 220 }, { month: 'May', forecast: 240 } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Next months (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>month</div><div>forecast</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{r.month}</div><div className="text-indigo-600">{r.forecast}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualCorrelation() {
  const rows = [ { a: 'in_need', b: 'funded', corr: 0.7 }, { a: 'in_need', b: 'reached', corr: 0.6 } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Move together (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>col A</div><div>col B</div><div>corr</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className={`grid grid-cols-3 px-3 py-1 ${r.corr>0.65?'bg-emerald-50 dark:bg-emerald-900/20':''}`}>
              <div>{r.a}</div><div>{r.b}</div><div className="text-emerald-700">{r.corr}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualRegression() {
  const rows = [ { x: 'in_need', y: 'reached', effect: '+ strong' }, { x: 'funding', y: 'reached', effect: '+ medium' } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Effect (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>X</div><div>Y</div><div>effect</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-3 px-3 py-1">
              <div>{r.x}</div><div>{r.y}</div><div className="text-indigo-600">{r.effect}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Analysis() {
  return (
    <DocsLayout title="Phase: Analysis">
      <p className="text-gray-700">We analyze the data for planning and decisions. Simple words. Afghan examples. Each block has What, When, Why, Parameters, Example, Output.</p>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="trend">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>time_series_trend_analysis(data, value_column, date_column="date", group_by=None, method="moving_average", window=3)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Smooth the line to see the real trend.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Monthly/weekly beneficiaries, cases.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Reduce noise, clearer decisions.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> The line jumps a lot. We make it smooth to see the real road.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>value_column</code>: numbers to smooth (e.g., <code>"beneficiaries"</code>).</li>
          <li><code>date_column</code>: date as text <code>YYYY-MM-DD</code>.</li>
          <li><code>group_by</code>: optional grouping (e.g., <code>["province"]</code>).</li>
          <li><code>method</code>: <code>"moving_average"</code>.</li>
          <li><code>window</code>: number of periods to average.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualTrend />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.time_series_trend_analysis import time_series_trend_analysis
import polars as pl

df = pl.DataFrame({"date":["2024-01-01","2024-02-01","2024-03-01"], "beneficiaries":[100,150,200]})
print(time_series_trend_analysis(df, value_column="beneficiaries", window=2))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> New column like <code>beneficiaries_trend_ma2</code>.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="forecast">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>forecasting_needs(data, value_column, date_column="date", model="arima", forecast_periods=3)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Predict future months.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Planning proposals and allocations.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Prepare resources early.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> We guess next months to plan for winter or Ramadan.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>value_column</code>: values to forecast.</li>
          <li><code>model</code>: <code>"arima"</code> or <code>"prophet"</code>-style.</li>
          <li><code>forecast_periods</code>: months ahead.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualForecast />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.forecasting_needs import forecasting_needs
print(forecasting_needs(df, value_column="beneficiaries", forecast_periods=6))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Adds a <code>forecast_model</code> column (placeholder).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="correlation">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>correlation_analysis(data, columns, method="pearson")</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> How indicators move together.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Exploring relationships.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Find strong links to focus.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> When one number goes up, do we see the other go up too?</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>columns</code>: numeric columns to compare.</li>
          <li><code>method</code>: <code>pearson</code> or <code>spearman</code>.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCorrelation />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.correlation_analysis import correlation_analysis
print(correlation_analysis(df, columns=["in_need","funded"]))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Correlation matrix (placeholder).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="regression">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>regression_models(data, y, X, kind="linear|logistic", add_intercept=True)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Fit simple linear/logistic relationships.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Measure effect size of drivers.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Evidence-based planning.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> How much does money or need push the result up?</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>y</code>: dependent variable (0/1 for logistic).</li>
          <li><code>X</code>: list of predictors.</li>
          <li><code>kind</code>: <code>linear</code> or <code>logistic</code>.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualRegression />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.regression_models import regression_models
print(regression_models(df, y="reached", X=["in_need","funding"], kind="linear"))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Placeholder dict of model inputs.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="clusters">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>cluster_analysis_regions(data, feature_columns, n_clusters=5, region_col=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Group similar provinces/districts.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Targeting strategies and typologies.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Simplify complex data.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> We put provinces into simple groups: like group 1, group 2.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>feature_columns</code>: numeric columns to cluster.</li>
          <li><code>n_clusters</code>: number of groups (k).</li>
          <li><code>region_col</code>: optional region name column.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualClusterRegions />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.cluster_analysis_regions import cluster_analysis_regions
print(cluster_analysis_regions(df, feature_columns=["need","access"], n_clusters=4, region_col="province"))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Adds <code>cluster</code> label (placeholder).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="pca">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>pca_dimensionality_reduction(data, feature_columns, n_components=2)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Reduce many indicators to a few components.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Before clustering, mapping, dashboards.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Easier to visualize and understand.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> We shrink many columns into 2 simple pieces.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>feature_columns</code>: numeric indicators.</li>
          <li><code>n_components</code>: number of components (2 by default).</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualPCA />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.pca_dimensionality_reduction import pca_dimensionality_reduction
print(pca_dimensionality_reduction(df, feature_columns=["need","coverage"], n_components=2))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Adds <code>pc1</code>, <code>pc2</code> (placeholders).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="inequality">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>inequality_measures(data, value_column, group_by=None, measures=["gini","theil"])</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Measure inequality across groups.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Equity analysis by province, district, group.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Find disparities to address.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Some areas get a lot, some get little. We measure that gap.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>value_column</code>: numeric values to analyze.</li>
          <li><code>group_by</code>: optional groups (e.g., <code>["province"]</code>).</li>
          <li><code>measures</code>: <code>gini</code>, <code>theil</code>.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualInequality />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.inequality_measures import inequality_measures
print(inequality_measures(df, value_column="coverage", group_by=["province"]))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Table of measures (placeholders).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="impact">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>impact_analysis(data, outcome_col, treatment_col, covariates=None, method="diff_in_diff")</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Estimate intervention effects.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Program evaluation.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Know what worked.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Did the project help? We compare before and after.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>outcome_col</code>: result variable (e.g., income).</li>
          <li><code>treatment_col</code>: treated vs control flag.</li>
          <li><code>covariates</code>: optional adjustment columns.</li>
          <li><code>method</code>: estimation approach (default <code>diff_in_diff</code>).</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualImpact />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.impact_analysis import impact_analysis
print(impact_analysis(df, outcome_col="income", treatment_col="program"))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Effect estimate (placeholder).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="coverage-gap">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>coverage_gap_analysis(data, needs_columns, reached_columns, group_by=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Compare needs vs reached.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Monitoring and dashboards.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> See where assistance is low.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Many need help, fewer get help. The gap shows where to act.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>needs_columns</code>: list of needs indicators.</li>
          <li><code>reached_columns</code>: matching reached indicators.</li>
          <li><code>group_by</code>: optional groups (province, etc.).</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCoverageGap />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.coverage_gap_analysis import coverage_gap_analysis
print(coverage_gap_analysis(df, ["need"],["reached"], group_by=["province"]))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Coverage % and gap (placeholders).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="needs-funding-gap">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>needs_vs_funding_gap_analysis(data, needs_col, funding_col, group_by=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Compare needs and funding.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Allocation and advocacy.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Show funding gaps.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Is money enough for the need? If not, we show the shortfall.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>needs_col</code>: total needs value.</li>
          <li><code>funding_col</code>: funding amount.</li>
          <li><code>group_by</code>: optional grouping.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualNeedsFunding />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.needs_vs_funding_gap_analysis import needs_vs_funding_gap_analysis
print(needs_vs_funding_gap_analysis(df, needs_col="need", funding_col="funding"))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Gap metric (placeholder).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="seasonality">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>seasonality_detection(data, value_column, date_column="date", group_by=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Find repeating seasonal patterns.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> At least 12 months of data.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Plan by season.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Some months are busy every year. We catch that pattern.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>value_column</code>: values to analyze.</li>
          <li><code>group_by</code>: optional per-province analysis.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualSeasonality />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.seasonality_detection import seasonality_detection
print(seasonality_detection(df, value_column="beneficiaries"))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Seasonality flag/summary (placeholder).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="anomaly">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>anomaly_detection(data, value_column, date_column="date", group_by=None, method="zscore", threshold=3.0)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Detect unusual spikes or drops.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Monitoring dashboards.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Early warning and QC.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> A sudden big jump or drop is a red flag.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>method</code>: detection method (e.g., <code>zscore</code>).</li>
          <li><code>threshold</code>: sensitivity value (higher = fewer alerts).</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualAnomaly />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.anomaly_detection import anomaly_detection
print(anomaly_detection(df, value_column="beneficiaries"))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> <code>is_anomaly_placeholder</code> flag.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="displacement">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>predicting_displacement_flows(data, source_cols=None, target_cols=None, features=None, horizon_periods=3)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Predict future movement between locations.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Anticipate new arrivals.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Better preparedness.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> From where to where will people go next?</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>source_cols</code>/<code>target_cols</code>: from-to fields.</li>
          <li><code>features</code>: drivers like conflict index.</li>
          <li><code>horizon_periods</code>: steps ahead.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualDisplacement />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.predicting_displacement_flows import predicting_displacement_flows
print(predicting_displacement_flows(df, horizon_periods=3))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Adds <code>pred_horizon_placeholder</code>.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="mortality">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>mortality_morbidity_analysis(data, death_col=None, illness_col=None, population_col=None, per=10000)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Compute death/illness rates per population.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Health monitoring.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Comparable indicators.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> We count deaths and illness per people to compare places.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>death_col</code>/<code>illness_col</code>: counts columns.</li>
          <li><code>population_col</code>: denominator.</li>
          <li><code>per</code>: per N people (e.g., 10,000).</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualMortality />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.mortality_morbidity_analysis import mortality_morbidity_analysis
print(mortality_morbidity_analysis(df, death_col="deaths", illness_col="cases", population_col="population"))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Rate columns (placeholders).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="food-security">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>food_security_phase_classification(data, indicator_columns, scheme="IPC-like")</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Assign simple phases based on indicators.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Food security assessments.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Communicate complexity simply.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> We give a simple phase number to areas.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>indicator_columns</code>: columns used for phase.</li>
          <li><code>scheme</code>: classification scheme name.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualFoodSecurity />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.food_security_phase_classification import food_security_phase_classification
print(food_security_phase_classification(df, indicator_columns=["rCSI","FCS"]))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Adds <code>food_security_phase_placeholder</code>.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="shelter">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>shelter_adequacy_analysis(data, condition_col, occupancy_col=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Assess shelter condition and overcrowding.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Shelter needs assessments.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Identify inadequate housing.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Is the house bad or crowded? We flag it.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>condition_col</code>: quality of shelter.</li>
          <li><code>occupancy_col</code>: persons per room (optional).</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualShelter />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.shelter_adequacy_analysis import shelter_adequacy_analysis
print(shelter_adequacy_analysis(df, condition_col="shelter_condition", occupancy_col="ppr"))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> <code>shelter_adequacy_score_placeholder</code>.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="health-access">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>health_facility_accessibility_analysis(data, travel_time_col=None, distance_col=None, thresholds_minutes=60)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Access by time/distance to facility.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Health access studies.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Find underserved areas.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> If the clinic is far, it is a problem.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>travel_time_col</code>/<code>distance_col</code>: access measures.</li>
          <li><code>thresholds_minutes</code>: acceptable time threshold.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualHealthAccess />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.health_facility_accessibility_analysis import health_facility_accessibility_analysis
print(health_facility_accessibility_analysis(df, travel_time_col="time_to_facility"))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> <code>has_acceptable_access_placeholder</code>.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="education">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>education_access_analysis(data, enrollment_col=None, attendance_col=None, population_school_age_col=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Enrollment/attendance vs school-age population.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Education monitoring.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Find gaps for children.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> We see if children enroll and attend compared to school-age.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>enrollment_col</code>/<code>attendance_col</code>: counts.</li>
          <li><code>population_school_age_col</code>: denominator.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualEducation />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.education_access_analysis import education_access_analysis
print(education_access_analysis(df, enrollment_col="enrolled", attendance_col="attended", population_school_age_col="school_age"))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Enrollment/attendance rates (placeholders).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="livelihoods">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>livelihood_resilience_analysis(data, asset_columns=None, shock_columns=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Summarize resilience from assets and shocks.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Early recovery and resilience programming.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Identify vulnerable households/areas.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> More assets and fewer shocks means stronger life.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>asset_columns</code>: list of asset indicators.</li>
          <li><code>shock_columns</code>: list of shock indicators.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualLivelihoods />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.livelihood_resilience_analysis import livelihood_resilience_analysis
print(livelihood_resilience_analysis(df, asset_columns=["owns_land","livestock"], shock_columns=["drought","flood"]))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> <code>resilience_score_placeholder</code>.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="gender">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>gender_disaggregated_analysis(data, gender_col="gender", value_columns=None, group_by=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Compare indicators by gender.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Gender mainstreaming and reporting.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Ensure equitable assistance.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> We check female and male numbers side by side.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>gender_col</code>: column name with gender values.</li>
          <li><code>value_columns</code>: numeric columns to summarize.</li>
          <li><code>group_by</code>: additional grouping.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualGender />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.analysis.gender_disaggregated_analysis import gender_disaggregated_analysis
print(gender_disaggregated_analysis(df, gender_col="gender", value_columns=["reached"], group_by=["province"]))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Gender breakdown table (placeholder).</p>
      </section>
    </DocsLayout>
  )
}
