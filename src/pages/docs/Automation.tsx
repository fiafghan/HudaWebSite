import React from 'react'
import DocsLayout from '../../layouts/DocsLayout'

function VisualCard({ title, columns, rows }:{ title:string; columns:string[]; rows:(string|number)[][] }) {
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">{title}</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className={`grid font-medium px-3 py-2`} style={{gridTemplateColumns:`repeat(${columns.length}, minmax(0,1fr))`}}>
          {columns.map((c,i)=>(<div key={i}>{c}</div>))}
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className={`grid px-3 py-1`} style={{gridTemplateColumns:`repeat(${columns.length}, minmax(0,1fr))`}}>
              {r.map((cell,j)=>(<div key={j}>{cell}</div>))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Automation() {
  return (
    <DocsLayout title="Phase: Automation & Workflows">
      <p className="text-gray-700">Automation intent specs for reports, dashboards, ETL, and governance. Each function returns a lightweight spec; execution is out of scope. Sections include What/When/Why, Parameters, Example, and Output.</p>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="monthly-report">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>automate_monthly_report(report_name, data_sources, schedule="0 7 1 * *", deliver_to=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Schedule monthly report builds.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Regular situation reports.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Consistency and timeliness.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Send the report on the 1st every month, to the team email.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>report_name</code>: name of the report.</li>
          <li><code>data_sources</code>: list of files or URLs.</li>
          <li><code>schedule</code>: cron string (time to run).</li>
          <li><code>deliver_to</code>: list of emails.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Next run and recipients" columns={["report","schedule","to"]} rows={[["Monthly SITREP","0 7 1 * *","ops@org.org"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.automation import automate_monthly_report
spec = automate_monthly_report(
    report_name="Monthly SITREP",
    data_sources=["/data/indicators.csv", "/data/funding.csv"],
    schedule="0 7 1 * *",
    deliver_to=["ops@org.org"]
)
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "automation_monthly_report",
  "report_name": "Monthly SITREP",
  "data_sources": ["/data/indicators.csv", "/data/funding.csv"],
  "schedule": "0 7 1 * *",
  "deliver_to": ["ops@org.org"],
  "preview": {"will_generate": true, "assets": ["pdf", "html"], "sections": ["overview", "indicators", "annexes"]}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="snapshot-dashboards">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>automate_snapshot_dashboards(dashboard_name, charts, schedule="0 8 * * 1", deliver_to=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Weekly snapshot dashboard export.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Monday summaries.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Quick situational awareness.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Every Monday morning, send the dashboard link to the team.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>dashboard_name</code>: dashboard title.</li>
          <li><code>charts</code>: list of charts.</li>
          <li><code>schedule</code>: cron time.</li>
          <li><code>deliver_to</code>: list of emails.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Weekly snapshot" columns={["dashboard","schedule","charts"]} rows={[["Weekly Snapshot","0 8 * * 1",1]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.automation import automate_snapshot_dashboards
from huda.visualize import bar_chart
charts = [bar_chart({"a":[1],"b":[2]}, "a","b")]
spec = automate_snapshot_dashboards("Weekly Snapshot", charts, schedule="0 8 * * 1", deliver_to=["dash@org.org"])
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "automation_snapshot_dashboards",
  "dashboard_name": "Weekly Snapshot",
  "charts_count": 1,
  "schedule": "0 8 * * 1",
  "deliver_to": ["dash@org.org"],
  "preview": {"will_generate": true, "format": "html"}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="dataset-downloads">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>automate_dataset_downloads(sources, destination_dir, schedule="0 */6 * * *", auth_env_vars=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Scheduled API downloads.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Frequent updates (e.g., 6h).</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Keep data fresh.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Download new data every 6 hours into the cache folder.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>sources</code>: list of URLs.</li>
          <li><code>destination_dir</code>: folder to save files.</li>
          <li><code>schedule</code>: cron time.</li>
          <li><code>auth_env_vars</code>: env var names for tokens.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Dataset download" columns={["source","schedule","dest"]} rows={[["https://api.org/v1/data","0 */6 * * *","/data/cache"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.automation import automate_dataset_downloads
spec = automate_dataset_downloads(
    sources=["https://api.org/v1/data"],
    destination_dir="/data/cache",
    schedule="0 */6 * * *",
    auth_env_vars={"API_TOKEN":"ENV_API_TOKEN"}
)
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "automation_dataset_downloads",
  "sources": ["https://api.org/v1/data"],
  "destination_dir": "/data/cache",
  "schedule": "0 */6 * * *",
  "auth_env_vars": {"API_TOKEN": "ENV_API_TOKEN"},
  "preview": {"will_download": true, "count_sources": 1}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="scheduled-etl">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>scheduled_etl_pipeline(name, extract_steps, transform_steps, load_steps, schedule="0 2 * * *")</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Daily ETL orchestration for repeatable pipelines.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Regular indicator builds and dataset refreshes.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Reliability, auditability, and consistency.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Every night, pull data, clean it, and save to the database.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>name</code>: pipeline name.</li>
          <li><code>extract_steps</code>: list of extract actions.</li>
          <li><code>transform_steps</code>: list of transform actions.</li>
          <li><code>load_steps</code>: list of load actions.</li>
          <li><code>schedule</code>: cron time.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="ETL steps" columns={["extract","transform","load"]} rows={[[1,1,1]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.automation import scheduled_etl_pipeline
spec = scheduled_etl_pipeline(
    name="daily_indicators",
    extract_steps=[{"type":"download", "uri":"https://api.org/indicators"}],
    transform_steps=[{"type":"clean"}],
    load_steps=[{"type":"to_sql", "table":"indicators"}],
    schedule="0 2 * * *"
)
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "automation_scheduled_etl",
  "name": "daily_indicators",
  "schedule": "0 2 * * *",
  "etl": {"extract": [{"type": "download", "uri": "https://api.org/indicators"}], "transform": [{"type": "clean"}], "load": [{"type": "to_sql", "table": "indicators"}]},
  "preview": {"extract": 1, "transform": 1, "load": 1}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="dataset-vcs">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>dataset_version_control(dataset_id, storage_uri, strategy="snapshot", retain_versions=12)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Version datasets and keep prior copies.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Compliance, reproducibility, or rollback needs.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Traceability and governance.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Keep old copies so we can go back if needed.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>dataset_id</code>: dataset code.</li>
          <li><code>storage_uri</code>: where to store versions.</li>
          <li><code>strategy</code>: snapshot or diff.</li>
          <li><code>retain_versions</code>: how many to keep.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Dataset versioning" columns={["dataset","strategy","retain"]} rows={[["hhs2025","snapshot",12]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.automation import dataset_version_control
spec = dataset_version_control("hhs2025", storage_uri="s3://bucket/datasets/hhs2025", strategy="snapshot", retain_versions=12)
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "automation_dataset_version_control",
  "dataset_id": "hhs2025",
  "storage_uri": "s3://bucket/datasets/hhs2025",
  "options": {"strategy": "snapshot", "retain_versions": 12},
  "preview": {"enabled": true}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="data-lineage">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>data_lineage_tracking(dataset_id, sources, transformations, destinations)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Track where data came from and how it changed.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Audits, debugging, and dependency analysis.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Accountability and faster troubleshooting.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Show where data came from and what steps changed it.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>dataset_id</code>: dataset code.</li>
          <li><code>sources</code>: inputs list.</li>
          <li><code>transformations</code>: steps list.</li>
          <li><code>destinations</code>: outputs list.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Lineage" columns={["source","steps","dest"]} rows={[["raw.csv",2,"indicators.csv"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.automation import data_lineage_tracking
spec = data_lineage_tracking(
    dataset_id="hhs2025",
    sources=["raw.csv"],
    transformations=["clean","aggregate"],
    destinations=["indicators.csv"]
)
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "automation_data_lineage",
  "dataset_id": "hhs2025",
  "lineage": {"sources": ["raw.csv"], "transformations": ["clean", "aggregate"], "destinations": ["indicators.csv"]},
  "preview": {"sources": 1, "steps": 2, "destinations": 1}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="change-detection">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>change_detection_in_datasets(dataset_id, baseline_version, current_version, keys=None, threshold=0.0)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Compare two dataset versions and quantify differences.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> New waves, corrections, or updates are published.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Quality assurance and alerting on unexpected changes.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Compare v1.0 and v1.1 and alert if more than 5% changed.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>dataset_id</code>: dataset code.</li>
          <li><code>baseline_version</code>: old version.</li>
          <li><code>current_version</code>: new version.</li>
          <li><code>keys</code>: id columns to match.</li>
          <li><code>threshold</code>: change threshold (0-1).</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Change detection" columns={["dataset","baseline","current"]} rows={[["hhs2025","v1.0","v1.1"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.automation import change_detection_in_datasets
spec = change_detection_in_datasets(
    dataset_id="hhs2025", baseline_version="v1.0", current_version="v1.1", keys=["hh_id"], threshold=0.05
)
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "automation_change_detection",
  "dataset_id": "hhs2025",
  "versions": {"baseline": "v1.0", "current": "v1.1"},
  "options": {"keys": ["hh_id"], "threshold": 0.05},
  "preview": {"will_compare": true}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="auto-refresh">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>auto_refresh_visualizations(dashboard_name, refresh_interval_minutes=60, data_sources=None, notify_on_refresh=False)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Schedule dashboard refreshes.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Live reporting and near-real-time views.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Keeps visuals up to date without manual steps.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Refresh the dashboard every 30 minutes and notify on success.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>dashboard_name</code>: dashboard title.</li>
          <li><code>refresh_interval_minutes</code>: minutes between refresh.</li>
          <li><code>data_sources</code>: optional list.</li>
          <li><code>notify_on_refresh</code>: true/false.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Auto refresh" columns={["dashboard","interval_min","notify?"]} rows={[["Ops Dashboard",30,"yes"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.automation import auto_refresh_visualizations
spec = auto_refresh_visualizations("Ops Dashboard", refresh_interval_minutes=30, notify_on_refresh=True)
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "automation_auto_refresh_visualizations",
  "dashboard_name": "Ops Dashboard",
  "refresh_interval_minutes": 30,
  "data_sources": [],
  "options": {"notify_on_refresh": true},
  "preview": {"will_schedule": true}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="reusable-templates">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>save_reusable_templates(template_name, components, storage_uri, version=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Save and version reusable analysis components.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Standardize workflows across teams or projects.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Promotes reuse and consistency.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Save a standard chart pack so all teams use the same one.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>template_name</code>: template id.</li>
          <li><code>components</code>: list of items.</li>
          <li><code>storage_uri</code>: where to store.</li>
          <li><code>version</code>: optional version.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Template saved" columns={["name","components","version"]} rows={[["coverage_pack",1,"1.0.0"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.automation import save_reusable_templates
components = [{"type":"chart","name":"coverage_bar"}]
spec = save_reusable_templates("coverage_pack", components, storage_uri="s3://bucket/templates", version="1.0.0")
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "automation_reusable_templates",
  "template_name": "coverage_pack",
  "components_count": 1,
  "storage_uri": "s3://bucket/templates",
  "version": "1.0.0",
  "preview": {"saved": true}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="batch-processing">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>batch_processing_datasets(job_name, inputs, processing_steps, parallelism=4, retry_on_fail=True)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Run the same processing steps across multiple inputs.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Backfills and bulk updates.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Efficiency and throughput for large jobs.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Run clean+dedupe on many files at once with 8 workers.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>job_name</code>: job id.</li>
          <li><code>inputs</code>: list of files.</li>
          <li><code>processing_steps</code>: steps list.</li>
          <li><code>parallelism</code>: number of workers.</li>
          <li><code>retry_on_fail</code>: true/false.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Batch job" columns={["job","inputs","parallel"]} rows={[["backfill_q3",2,8]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.automation import batch_processing_datasets
steps = [{"type":"clean"}, {"type":"dedupe"}]
spec = batch_processing_datasets("backfill_q3", inputs=["a.csv","b.csv"], processing_steps=steps, parallelism=8)
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "automation_batch_processing",
  "job_name": "backfill_q3",
  "inputs_count": 2,
  "parallelism": 8,
  "options": {"retry_on_fail": true},
  "steps": [{"type": "clean"}, {"type": "dedupe"}],
  "preview": {"will_process": true}
}`}</code></pre>
      </section>
    </DocsLayout>
  )
}

