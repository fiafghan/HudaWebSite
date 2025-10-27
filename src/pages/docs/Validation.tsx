import React from 'react'
import DocsLayout from '../../layouts/DocsLayout'

function VisualCountryCodeValidation() {
  const rows = [
    { province: 'Kabul', country: 'AF' },
    { province: 'Herat', country: 'XX' },
  ]
  const valid = (c:string) => /^[A-Z]{2}$/.test(c) && ['AF','US','PK','IR'].includes(c)
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Country codes check</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>province</div><div>country</div><div>valid?</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-3 px-3 py-1">
              <div>{r.province}</div>
              <div>{r.country}</div>
              <div className={valid(r.country)?'text-emerald-600':'text-rose-600'}>{valid(r.country)?'Valid':'Invalid'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualDateRangeValidation() {
  const rows = [ '2023-01-01', '1800-01-01', '2099-12-31' ]
  const ok = (d:string) => {
    const year = parseInt(d.slice(0,4))
    const now = new Date().getFullYear()
    return year >= 1900 && year <= now
  }
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Date in allowed range</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>date</div><div>valid?</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((d,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{d}</div>
              <div className={ok(d)?'text-emerald-600':'text-rose-600'}>{ok(d)?'Valid':'Invalid'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualMandatoryFields() {
  const rows = [ {hh_id:1, province:'Kabul'}, {hh_id:2, province:null as any} ]
  const req = ['hh_id','province']
  const hasAll = (r:any) => req.every(k => r[k]!=null)
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Required fields present?</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>hh_id</div><div>province</div><div>ok?</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-3 px-3 py-1">
              <div>{r.hh_id}</div>
              <div>{r.province ?? <span className="text-gray-500">(missing)</span>}</div>
              <div className={hasAll(r)?'text-emerald-600':'text-rose-600'}>{hasAll(r)?'OK':'Missing'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualNegativeValues() {
  const values = [25,-2,30]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">No negatives allowed</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>value</div><div>ok?</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {values.map((v,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{v}</div>
              <div className={v>=0?'text-emerald-600':'text-rose-600'}>{v>=0?'OK':'Invalid'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualTargetedReached() {
  const rows = [ {targeted:100, reached:150}, {targeted:200, reached:180} ]
  const bad = (r:{targeted:number,reached:number}) => r.reached>r.targeted
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Reached vs Targeted</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>targeted</div><div>reached</div><div>flag</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className={`grid grid-cols-3 px-3 py-1 ${bad(r)?'bg-rose-50 dark:bg-rose-900/20':''}`}>
              <div>{r.targeted}</div>
              <div>{r.reached}</div>
              <div className={bad(r)?'text-rose-600':'text-emerald-600'}>{bad(r)?'Reached > Targeted':'OK'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualSummaryStats() {
  const rows = [ {x:1,y:10}, {x:2,y:20}, {x:3,y:30}, {x:4,y:40} ]
  const col = (k:'x'|'y') => rows.map(r=>r[k])
  const sum = (a:number[]) => a.reduce((m,v)=>m+v,0)
  const avg = (a:number[]) => sum(a)/a.length
  const min = (a:number[]) => Math.min(...a)
  const max = (a:number[]) => Math.max(...a)
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Quick stats</div>
      <div className="grid md:grid-cols-2 text-xs">
        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="px-3 py-2 font-medium">x</div>
          <div className="grid grid-cols-4 px-3 py-1"><div>count</div><div>avg</div><div>min</div><div>max</div></div>
          <div className="grid grid-cols-4 px-3 pb-2">
            <div>{col('x').length}</div><div className="text-emerald-600">{avg(col('x')).toFixed(1)}</div><div>{min(col('x'))}</div><div>{max(col('x'))}</div>
          </div>
        </div>
        <div className="border-t md:border-l border-gray-200 dark:border-gray-700">
          <div className="px-3 py-2 font-medium">y</div>
          <div className="grid grid-cols-4 px-3 py-1"><div>count</div><div>avg</div><div>min</div><div>max</div></div>
          <div className="grid grid-cols-4 px-3 pb-2">
            <div>{col('y').length}</div><div className="text-emerald-600">{avg(col('y')).toFixed(1)}</div><div>{min(col('y'))}</div><div>{max(col('y'))}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function VisualStandards() {
  const rows = [ {name:'water_access', value:70, min:60, max:100, good_is_high:true}, {name:'malnutrition', value:15, min:0, max:10, good_is_high:false} ]
  const pass = (r:any) => r.good_is_high ? r.value>=r.min : r.value<=r.max
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Check against standards</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-5 font-medium px-3 py-2"><div>indicator</div><div>value</div><div>min</div><div>max</div><div>pass?</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-5 px-3 py-1">
              <div>{r.name}</div><div>{r.value}</div><div>{r.min}</div><div>{r.max}</div>
              <div className={pass(r)?'text-emerald-600':'text-rose-600'}>{pass(r)?'Pass':'Fail'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Validation() {
  return (
    <DocsLayout title="Phase: Validation & Quality">
      <p className="text-gray-700">We check the data. Very simple words. Clear colors. Afghan survey style.</p>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="country-code">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>country_code_validation(data, country_column, group_by_cols=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Check country codes are real (AF, US, ...).</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Forms have a column with country codes.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Wrong codes break joins and reports.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> AF is fine. XX is not a real code.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCountryCodeValidation />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.validation_and_quality.country_code_validation import country_code_validation
import polars as pl

df = pl.DataFrame({"province":["Kabul","Herat"], "country":["AF","XX"]})
print(country_code_validation(df, country_column="country"))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Same table plus <code>valid_flag</code> (= Valid/Invalid). If grouped, a count table.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="date-range">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>date_range_validation(data, date_columns, group_by_cols=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Check dates are not before 1900 and not in the future.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Date field looks too old or from the future.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Keep time lines clean.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> 1800 is too old. A date in next year is too new.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualDateRangeValidation />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.validation_and_quality.date_range_validation import date_range_validation
import polars as pl

df = pl.DataFrame({"survey_date":["2023-01-01","1800-01-01"]})
print(date_range_validation(df, date_columns=["survey_date"]))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Adds <code>{`{column}_valid_flag`}</code> for each date column; or grouped counts.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="mandatory">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>mandatory_fields_check(data, required_columns)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Check must-have columns exist and are filled.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Before you join or export.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Missing IDs break analysis.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Household ID and province must be filled. If empty, we flag it.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualMandatoryFields />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.validation_and_quality.mandatory_fields_check import mandatory_fields_check
import polars as pl

df = pl.DataFrame({"hh_id":[1,2], "province":["Kabul", None]})
print(mandatory_fields_check(df, required_columns=["hh_id","province"]))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> A result table or flags depending on module design (see function docstring).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="negative-values">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>negative_values_detection_where_they_should_not_exist(data, columns)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Find negative numbers where they must not exist (age, counts).</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> After collection, before sums/averages.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Stop bad math results.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Age cannot be -2. We mark it red.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualNegativeValues />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.validation_and_quality.negative_values_detection_where_they_should_not_exist import negative_values_detection_where_they_should_not_exist
import polars as pl

df = pl.DataFrame({"age":[25,-2,30]})
print(negative_values_detection_where_they_should_not_exist(df, columns=["age"]))`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> Flags or a filtered table of invalid rows (see function docstring).</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="targeted-reached">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>targeted_vs_reached_inconsistency_detection(data, targeted_col, reached_col)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Mark when reached is greater than targeted.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Fix over-reporting.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> You planned 100 bags, but report 150 given. We flag it.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualTargetedReached />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.validation_and_quality.targeted_vs_reached_inconsistency_detection import targeted_vs_reached_inconsistency_detection
import polars as pl

df = pl.DataFrame({"targeted":[100,200], "reached":[150,180]})
print(targeted_vs_reached_inconsistency_detection(df, targeted_col="targeted", reached_col="reached"))`}</code></pre>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="summary-profile">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>generate_summary_statistics_per_dataset(...) • automatic_data_profiling_report(...)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Quick stats table. Auto profiling report for quality checks.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Count, average, min, max for your numbers in one small report.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualSummaryStats />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.validation_and_quality.generate_summary_statistics_per_dataset import generate_summary_statistics_per_dataset
from huda.validation_and_quality.automatic_data_profiling_report import automatic_data_profiling_report
import polars as pl

df = pl.DataFrame({"x":[1,2,3,4], "y":[10,20,30,40]})
print(generate_summary_statistics_per_dataset(df))
# profiling = automatic_data_profiling_report(df)  # returns a structure/report per module design`}</code></pre>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="standards">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>humanatarian_index_validation_against_standards(data, ...)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Check indicators against standard limits (min/max).</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Water access should be above 60%. If it is 70% → Pass.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualStandards />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.validation_and_quality.humanatarian_index_validation_against_standards import humanatarian_index_validation_against_standards
# Example depends on your column names and thresholds; see module docstring.`}</code></pre>
          </div>
        </div>
      </section>
    </DocsLayout>
  )
}
