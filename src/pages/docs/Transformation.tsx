import React from 'react'
import DocsLayout from '../../layouts/DocsLayout'

function VisualPivotUnpivot() {
  const [mode, setMode] = React.useState<'unpivot'|'pivot'>('unpivot')
  const wide = [
    { province: 'Kabul', beneficiaries_jan: 120, beneficiaries_feb: 150 },
    { province: 'Herat', beneficiaries_jan: 200, beneficiaries_feb: 180 },
  ]
  const long = [
    { province: 'Kabul', variable: 'beneficiaries_jan', value: 120 },
    { province: 'Kabul', variable: 'beneficiaries_feb', value: 150 },
    { province: 'Herat', variable: 'beneficiaries_jan', value: 200 },
    { province: 'Herat', variable: 'beneficiaries_feb', value: 180 },
  ]
  const rows = mode==='unpivot' ? long : wide
  const cols = mode==='unpivot' ? ['province','variable','value'] : ['province','beneficiaries_jan','beneficiaries_feb']
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium flex items-center gap-2">Change table shape
        <div className="ml-auto text-xs flex items-center gap-1">
          <button onClick={()=>setMode('unpivot')} className={`rounded-md px-2 py-1 ${mode==='unpivot'?'bg-gray-900 text-white':'bg-gray-100 text-black'}`}>Unpivot</button>
          <button onClick={()=>setMode('pivot')} className={`rounded-md px-2 py-1 ${mode==='pivot'?'bg-gray-900 text-white':'bg-gray-100 text-black'}`}>Pivot</button>
        </div>
      </div>
      <div className="border-t border-gray-200 text-xs">
        <div className={`grid ${cols.length===3?'grid-cols-3':'grid-cols-3 md:grid-cols-3'} font-medium px-3 py-2`}>{cols.map(c=> <div key={c}>{c}</div>)}</div>
        <div className="divide-y divide-gray-200">
          {rows.map((r,i)=> (
            <div key={i} className={`grid ${cols.length===3?'grid-cols-3':'grid-cols-3'} px-3 py-1`}>
              {cols.map(c=> <div key={c}>{(r as any)[c]}</div>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualPercentage() {
  const data = [
    { province:'Kabul', population: 4_500_000, in_need: 900_000 },
    { province:'Herat', population: 1_000_000, in_need: 150_000 },
  ]
  const pct = (n: number, d: number) => d ? (n/d*100) : 0
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium">Percentages</div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-4 font-medium px-3 py-2"><div>province</div><div>population</div><div>in_need</div><div>in_need_pct</div></div>
        <div className="divide-y divide-gray-200">
          {data.map((r,i)=> (
            <div key={i} className="grid grid-cols-4 px-3 py-1">
              <div>{r.province}</div><div>{r.population.toLocaleString()}</div><div>{r.in_need.toLocaleString()}</div><div className="text-emerald-600">{pct(r.in_need, r.population).toFixed(1)}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualPerPopulation() {
  const [per, setPer] = React.useState(1000)
  const data = [
    { province:'Kabul', population: 4_500_000, patients: 23_000 },
    { province:'Herat', population: 1_000_000, patients: 5_000 },
  ]
  const rate = (v: number, pop: number) => pop ? (v/pop*per) : 0
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium flex items-center gap-2">Rates per population
        <label className="ml-auto text-xs flex items-center gap-2"><span className="text-black">per:</span><input type="number" className="w-20 border rounded px-1 py-0.5 text-black" value={per} onChange={e=>setPer(parseInt(e.target.value||'0'))} /></label>
      </div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-4 font-medium px-3 py-2"><div>province</div><div>population</div><div>patients</div><div>rate</div></div>
        <div className="divide-y divide-gray-200">
          {data.map((r,i)=> (
            <div key={i} className="grid grid-cols-4 px-3 py-1">
              <div>{r.province}</div><div>{r.population.toLocaleString()}</div><div>{r.patients.toLocaleString()}</div><div className="text-emerald-600">{rate(r.patients, r.population).toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualTimeSeries() {
  const rows = [
    { date:'2024-01-01', beneficiaries:100 },
    { date:'2024-02-01', beneficiaries:150 },
    { date:'2024-03-01', beneficiaries:200 },
  ]
  const ma2 = rows.map((r,i)=> ({...r, ma: i? ((rows[i-1].beneficiaries + r.beneficiaries)/2) : r.beneficiaries}))
  const growth = rows.map((r,i)=> ({...r, mom: i? ((r.beneficiaries-rows[i-1].beneficiaries)/rows[i-1].beneficiaries*100) : 0}))
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium">Moving average and growth</div>
      <div className="grid md:grid-cols-2 text-xs">
        <div className="border-t border-gray-200">
          <div className="grid grid-cols-3 font-medium px-3 py-2"><div>date</div><div>beneficiaries</div><div>MA(2)</div></div>
          <div className="divide-y divide-gray-200">
            {ma2.map((r,i)=> (
              <div key={i} className="grid grid-cols-3 px-3 py-1">
                <div>{r.date}</div><div>{r.beneficiaries}</div><div className="text-emerald-600">{r.ma.toFixed(1)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t md:border-l border-gray-200">
          <div className="grid grid-cols-3 font-medium px-3 py-2"><div>date</div><div>beneficiaries</div><div>MoM %</div></div>
          <div className="divide-y divide-gray-200">
            {growth.map((r,i)=> (
              <div key={i} className="grid grid-cols-3 px-3 py-1">
                <div>{r.date}</div><div>{r.beneficiaries}</div><div className="text-emerald-600">{r.mom.toFixed(1)}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function VisualStandardization() {
  const age = [2,17,35,70]
  const gender = ['M','F','Male','female']
  const sector = [1,2,1,3]
  const agebin = (a:number)=> a<5?'0-4':a<18?'5-17':a<60?'18-59':'60+'
  const gstd = (g:string)=> /^f/i.test(g)?'Female':'Male'
  const map = (c:number)=> ({1:'Food',2:'Shelter',3:'Education'} as any)[c]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium">Standardize categories</div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-6 font-medium px-3 py-2"><div>age</div><div>age_group</div><div>gender</div><div>gender_std</div><div>sector</div><div>label</div></div>
        <div className="divide-y divide-gray-200">
          {age.map((a,i)=> (
            <div key={i} className="grid grid-cols-6 px-3 py-1">
              <div>{a}</div><div className="text-emerald-600">{agebin(a)}</div><div>{gender[i]}</div><div className="text-emerald-600">{gstd(gender[i])}</div><div>{sector[i]}</div><div className="text-emerald-600">{map(sector[i])}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualIndices() {
  const rows = [
    { population:5_000_000, needs:1000, provided:800 },
    { population:2_000_000, needs:800, provided:500 },
  ]
  const coverage = (n:number,p:number)=> p? (p/n*100):0
  const zscores = (()=>{
    const arr = rows.map(r=> r.needs)
    const mean = arr.reduce((a,b)=>a+b,0)/arr.length
    const std = Math.sqrt(arr.reduce((a,b)=>a+(b-mean)**2,0)/arr.length)
    return arr.map(v => (v-mean)/std)
  })()
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium">Coverage and z-scores</div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-6 font-medium px-3 py-2"><div>population</div><div>needs</div><div>provided</div><div>coverage %</div><div>z (needs)</div><div>flag</div></div>
        <div className="divide-y divide-gray-200">
          {rows.map((r,i)=> {
            const z = zscores[i]
            const flag = Math.abs(z)>1.0
            return (
              <div key={i} className={`grid grid-cols-6 px-3 py-1 ${flag? 'bg-rose-50':''}`}>
                <div>{r.population.toLocaleString()}</div><div>{r.needs}</div><div>{r.provided}</div>
                <div className="text-emerald-600">{coverage(r.needs, r.provided).toFixed(1)}%</div>
                <div>{z.toFixed(2)}</div>
                <div className={flag? 'text-rose-600':'text-gray-600'}>{flag?'outlier':''}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function VisualACMFRatios() {
  const total = 1000
  const adults = 600, children = 400, male = 520, female = 480
  const ratios = [
    { name:'adults/total', value: adults/total },
    { name:'children/total', value: children/total },
    { name:'male/total', value: male/total },
    { name:'female/total', value: female/total },
  ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium">Adults/Children/Male/Female ratios</div>
      <div className="border-t border-gray-200 text-xs">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>metric</div><div>ratio</div></div>
        <div className="divide-y divide-gray-200">
          {ratios.map((r)=> (
            <div key={r.name} className="grid grid-cols-2 px-3 py-1">
              <div>{r.name}</div>
              <div className="text-emerald-600">{(r.value*100).toFixed(1)}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualRegionAggregation() {
  const rows = [
    { region:'Central', province:'Kabul', value: 10 },
    { region:'West', province:'Herat', value: 5 },
    { region:'Central', province:'Parwan', value: 3 },
  ]
  const regions = Array.from(new Set(rows.map(r=>r.region)))
  const agg = regions.map(reg => ({ region: reg, sum: rows.filter(r=>r.region===reg).reduce((a,b)=>a+b.value,0) }))
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden">
      <div className="px-3 py-2 text-sm font-medium">Aggregate by region</div>
      <div className="grid md:grid-cols-2 text-xs">
        <div className="border-t border-gray-200">
          <div className="grid grid-cols-3 font-medium px-3 py-2"><div>region</div><div>province</div><div>value</div></div>
          <div className="divide-y divide-gray-200">
            {rows.map((r,i)=> (
              <div key={i} className="grid grid-cols-3 px-3 py-1">
                <div>{r.region}</div><div>{r.province}</div><div>{r.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t md:border-l border-gray-200">
          <div className="grid grid-cols-2 font-medium px-3 py-2"><div>region</div><div>sum</div></div>
          <div className="divide-y divide-gray-200">
            {agg.map((r,i)=> (
              <div key={i} className="grid grid-cols-2 px-3 py-1">
                <div>{r.region}</div><div className="text-emerald-600">{r.sum}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Transformation() {
  return (
    <DocsLayout title="Phase: Transformation">
      <p className="text-gray-700">We change the table or numbers. Very simple words. Afghan examples.</p>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="pivot-unpivot">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>pivot_unpivot(data, index, columns, values, operation="pivot|unpivot")</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Change table shape. Wide (many columns) ↔ Long (few columns).</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Your data has one column per month, or you want one "month" column with all months.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Makes the table simple. Charts and filters work better.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> You write wheat bags for Jan and Feb in two columns. We put them under one column called "month" with two rows. Same information, easier to see.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualPivotUnpivot />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.transformation.pivot_unpivot import pivot_unpivot
import polars as pl

df = pl.DataFrame({
  "province": ["Kabul","Herat","Kandahar"],
  "beneficiaries_jan": [120,200,250],
  "beneficiaries_feb": [150,180,300],
})

long_df = pivot_unpivot(df, index=["province"], values=["beneficiaries_jan","beneficiaries_feb"], operation="unpivot")
print(long_df)`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> A Polars table in the new shape. For unpivot, you get columns like <code>variable</code> and <code>value</code>.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="percentage">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>percentage_calculation(data, numerator_columns, denominator_column, suffix="_pct")</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Make percent columns (like <em>in_need_pct</em> = part ÷ total × 100).</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> You have a total (population) and a part (people in need or helped).</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Provinces are different sizes. Percent is fair to compare.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> From 100 animals, 20 are sick → 20%. From 10 animals, 2 are sick → 20%. Same situation, even if numbers are small or big.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualPercentage />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.transformation.percentage_calculation import percentage_calculation
import polars as pl

df = pl.DataFrame({
  "province": ["Kabul","Herat","Kandahar"],
  "population": [4500000,1000000,1200000],
  "people_in_need": [900000,150000,200000],
})
print(percentage_calculation(df, ["people_in_need"], "population"))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Same table plus new columns like <code>people_in_need_pct</code> with percentages.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="per-pop">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>population_based_normalization(data, value_columns, population_column, per=1000)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Turn counts into rates per people (for example, per 1,000 people).</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Provinces have different population sizes and you want fair rates.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> One big province and one small province can be compared fairly.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> 100 sick out of 100,000 people = 1 per 1,000. 50 sick out of 50,000 people = also 1 per 1,000. Same rate.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualPerPopulation />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.transformation.population_based_normalization import population_based_normalization
import polars as pl

df = pl.DataFrame({
  "province": ["Kabul","Herat","Kandahar"],
  "population": [4500000,1000000,1200000],
  "patients": [23000,5000,8000],
})
print(population_based_normalization(df, ["patients"], "population", per=1000))`}</code></pre>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="time-series">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>average_rolling(...) & monthly_yearly_growth(...)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Make a smooth line (moving average). Also measure growth between months/years.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> You track numbers by date (beneficiaries, cases, price).</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> See the real trend, not just up‑down noise.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Milk sold each month jumps up and down. Average of two months shows the direction slowly and clearly.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualTimeSeries />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.transformation.average_rolling import average_rolling
from huda.transformation.monthly_yearly_growth import monthly_yearly_growth
import polars as pl

df = pl.DataFrame({"date":["2024-01-01","2024-02-01","2024-03-01"], "beneficiaries":[100,150,200]})
print(average_rolling(df, value_columns=["beneficiaries"], window=2))
print(monthly_yearly_growth(df, value_column="beneficiaries", date_column="date", period="monthly"))`}</code></pre>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="standardization">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>age_group_standardization(...) • gender_group_standardization(...) • categorical_code_to_label(...)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Use the same age groups (0‑4, 5‑17, 18‑59, 60+). Use the same gender words. Turn codes into clear names.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Data uses different spellings or styles from different forms.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Then we can group, count, and draw charts correctly.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> "F", "Female", and "زن" all mean the same. We make them one word so counting is right.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualStandardization />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.transformation.age_group_standardization import age_group_standardization
from huda.transformation.gender_group_standardization import gender_group_standardization
from huda.transformation.categorical_code_to_label import categorical_code_to_label
import polars as pl

df = pl.DataFrame({"age":[2,17,35,70], "gender":["M","F","Male","female"], "sector":[1,2,1,3]})
print(age_group_standardization(df, age_column="age"))
print(gender_group_standardization(df, gender_column="gender"))
print(categorical_code_to_label(df, code_column="sector", mapping={1:"Food",2:"Shelter",3:"Education"}))`}</code></pre>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="indices">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>needs_coverage_calculation(...) • averages_weighted_population(...) • severity_index_calculation(...) • z_score_calculation(...)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Make coverage percent (helped ÷ need). Build one score (index). Find very high/low values (z‑score).</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> You want small, clear indicators for reports.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Easy to see if coverage is good, and if any number looks wrong.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> If normal egg price is 10–12 and one day shows 30, we flag it as unusual (outlier).</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualIndices />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.transformation.needs_coverage_calculation import needs_coverage_calculation
from huda.transformation.averages_weighted_population import averages_weighted_population
from huda.transformation.severity_index_calculation import severity_index_calculation
from huda.transformation.z_score_calculation import z_score_calculation
import polars as pl

df = pl.DataFrame({
  "population":[5_000_000,2_000_000],
  "food_needs":[1000,800], "food_provided":[800,500],
  "water_needs":[5000,4000], "water_provided":[4000,2500],
})
print(needs_coverage_calculation(df, ["food_needs","water_needs"], ["food_provided","water_provided"]))
print(z_score_calculation(df.with_columns(pl.col("food_needs").alias("amount")), column="amount"))`}</code></pre>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="acmf-ratios">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>adults_children_male_female_ratios(df, ...)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Show shares for adults/children and male/female in the group.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Quick picture of people mix for planning.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> In a village of 1000 people: 600 adults (60%), 400 children (40%). 520 male (52%), 480 female (48%).</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualACMFRatios />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.transformation.adults_children_male_female_ratios import adults_children_male_female_ratios
import polars as pl

df = pl.DataFrame({"age":[2,17,35,70], "gender":["M","F","Male","Female"]})
print(adults_children_male_female_ratios(df, age_column="age", gender_column="gender"))`}</code></pre>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="region-aggregation">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>region_based_data_aggregation(df, region_column, value_columns, method="sum|mean")</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Add up numbers by region (Central, West, East...).</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Region reports and maps need totals by area.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Sum wheat bags from Kabul and Parwan to get the Central region total.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualRegionAggregation />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.transformation.region_based_data_aggregation import region_based_data_aggregation
import polars as pl

df = pl.DataFrame({
  "region":["Central","West","Central"],
  "province":["Kabul","Herat","Parwan"],
  "value":[10,5,3],
})
print(region_based_data_aggregation(df, region_column="region", value_columns=["value"], method="sum"))`}</code></pre>
          </div>
        </div>
      </section>
    </DocsLayout>
  )
}
