import React from 'react'
import DocsLayout from '../../layouts/DocsLayout'

function VisualPoints() {
  const rows = [
    { name: 'Clinic A', lat: 34.50, lon: 69.10 },
    { name: 'Clinic B', lat: 34.30, lon: 62.20 },
  ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Points on map (mock table)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>name</div><div>lat</div><div>lon</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-3 px-3 py-1">
              <div>{r.name}</div><div>{r.lat.toFixed(2)}°</div><div>{r.lon.toFixed(2)}°</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualOverlayIndicators() {
  const rows = [
    { name: 'Site1', in_need: 200, reached: 120 },
    { name: 'Site2', in_need: 500, reached: 300 },
  ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Indicators as circles (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-3 font-medium px-3 py-2"><div>site</div><div>in_need</div><div>reached</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-3 px-3 py-1">
              <div>{r.name}</div><div className="text-rose-600">{r.in_need}</div><div className="text-emerald-600">{r.reached}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualChoropleth() {
  const rows = [ { province: 'Kabul', rate: 20.5 }, { province: 'Herat', rate: 15.0 } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Color by value (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>province</div><div>rate</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className={`grid grid-cols-2 px-3 py-1 ${r.rate>18?'bg-emerald-50 dark:bg-emerald-900/20':''}`}>
              <div>{r.province}</div><div className="text-emerald-700">{r.rate}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualHeatmap() {
  const bars = [20,40,80,30,60]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Heat (mock)</div>
      <div className="grid grid-cols-5 gap-1 p-3">
        {bars.map((v,i)=> (
          <div key={i} className="h-6 rounded" style={{background: `linear-gradient(90deg, #ef4444 ${v}%, #e5e7eb ${v}%)`}} />
        ))}
      </div>
    </div>
  )
}

function VisualClusters() {
  const rows = [
    { name:'Clinic A', cluster: 1 }, { name:'Clinic B', cluster: 1 }, { name:'Clinic C', cluster: 2 }
  ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Clusters (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>name</div><div>cluster</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{r.name}</div><div className={r.cluster===1?'text-indigo-600':'text-amber-600'}>#{r.cluster}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualBuffers() {
  const rows = [ { name:'Site1', radius_m: 500 }, { name:'Site2', radius_m: 500 } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Buffers (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>site</div><div>radius</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{r.name}</div><div className="text-emerald-600">{r.radius_m} m</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualHazards() {
  const rows = [ { type:'flood zone', area:'District A' }, { type:'landslide', area:'District B' } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">Hazard areas (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>type</div><div>area</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div className="text-rose-600">{r.type}</div><div>{r.area}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VisualOSM() {
  const rows = [ { amenity:'clinic', name:'Clinic 1' }, { amenity:'school', name:'School A' } ]
  return (
    <div className="rounded-lg ring-1 ring-gray-200 bg-white text-gray-900 overflow-hidden dark:ring-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="px-3 py-2 text-sm font-medium dark:text-gray-100">OpenStreetMap features (mock)</div>
      <div className="border-t border-gray-200 text-xs dark:border-gray-700">
        <div className="grid grid-cols-2 font-medium px-3 py-2"><div>amenity</div><div>name</div></div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {rows.map((r,i)=> (
            <div key={i} className="grid grid-cols-2 px-3 py-1">
              <div>{r.amenity}</div><div>{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Geospatial() {
  return (
    <DocsLayout title="Phase: Geospatial">
      <p className="text-gray-700">We make simple maps. Very simple words. Afghan examples. Each block shows visual + code + easy words.</p>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="plot-data">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>plot_data_on_map(df, lat_col, lon_col, popup_cols=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Show points on a map.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> You have places with latitude/longitude.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> See where the sites are.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Put clinics as dots so you see which district they are in.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualPoints />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.geospatial.plot_data_on_map import plot_data_on_map
import polars as pl

df = pl.DataFrame({"name":["Clinic A","Clinic B"], "lat":[34.5,34.3], "lon":[69.1,62.2]})
map_ = plot_data_on_map(df, lat_col="lat", lon_col="lon", popup_cols=["name"])  # returns a Folium map
map_.save("map_points.html")`}</code></pre>
          </div>
        </div>
        <p className="text-gray-700 text-sm mt-2"><strong>Output:</strong> A Folium map object you can <code>save("file.html")</code>.</p>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="overlay-indicators">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>overlay_multiple_indicators_on_map(df, lat_col, lon_col, indicators, popup_cols=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Show many numbers at each point.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> You compare in_need and reached at sites.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Size/color shows intensity.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Big red = big need. Green = people helped.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualOverlayIndicators />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.geospatial.overlay_multiple_indicators_on_map import overlay_multiple_indicators_on_map
import polars as pl

df = pl.DataFrame({
  "name":["Site1","Site2"], "lat":[34.5,34.7], "lon":[69.1,69.2],
  "in_need":[200,500], "reached":[120,300]
})
map_ = overlay_multiple_indicators_on_map(df, "lat", "lon", indicators=["in_need","reached"], popup_cols=["name"])
map_.save("map_indicators.html")`}</code></pre>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="choropleth">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>choropleth_maps_by_region(geojson_path, df, region_key, value_col)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Color each province by a number.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> You have values per province (rate, percent).</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> See which places are high/low.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Darker green = higher coverage.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualChoropleth />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.geospatial.choropleth_maps_by_region import choropleth_maps_by_region
import polars as pl

df = pl.DataFrame({"province":["Kabul","Herat"], "rate":[20.5,15.0]})
map_ = choropleth_maps_by_region("data/afg_provinces.geojson", df, region_key="province", value_col="rate")
map_.save("map_choropleth.html")`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>geojson_path</code>: GeoJSON file with region polygons.</li>
          <li><code>df</code>: table with a region column and a numeric value column.</li>
          <li><code>region_key</code>: column matching the GeoJSON property (like province name).</li>
          <li><code>value_col</code>: numeric column to color by.</li>
        </ul>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="heatmap">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>heatmap_crisis_intensity(df, lat_col, lon_col, intensity_col)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Show hot areas by color heat.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Many reports in one area.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Hotspots appear fast.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Many complaints in one bazaar show a bright red bar.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualHeatmap />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.geospatial.heatmap_crisis_intensity import heatmap_crisis_intensity
import polars as pl

df = pl.DataFrame({"lat":[34.5,34.7], "lon":[69.1,69.2], "score":[5,10]})
map_ = heatmap_crisis_intensity(df, "lat", "lon", "score")
map_.save("map_heat.html")`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>lat_col</code>, <code>lon_col</code>: coordinates columns.</li>
          <li><code>intensity_col</code>: numeric weight per point.</li>
        </ul>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="cluster-facilities">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>cluster_humanitarian_facilities(df, lat_col, lon_col, name_col=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Group close points together.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Many sites are on top of each other.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Clean map; click to expand.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Many clinics in city center become one bubble until you click.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualClusters />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.geospatial.cluster_humanitarian_facilities import cluster_humanitarian_facilities
import polars as pl

df = pl.DataFrame({"name":["Clinic A","Clinic B"], "lat":[34.5,34.5005], "lon":[69.1,69.1005]})
map_ = cluster_humanitarian_facilities(df, "lat", "lon", name_col="name")
map_.save("map_facilities.html")`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>name_col</code>: optional label for popups.</li>
        </ul>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="buffers">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>generate_buffer_zones(df, lat_col, lon_col, distance_meters)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Draw a circle around each point (e.g., 500 m).</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> You show service area of a clinic.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Easy to see coverage.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> A 500 m circle shows which houses are near the clinic.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualBuffers />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.geospatial.generate_buffer_zones import generate_buffer_zones
import polars as pl

df = pl.DataFrame({"name":["Site1"], "lat":[34.5], "lon":[69.1]})
map_ = generate_buffer_zones(df, "lat", "lon", distance_meters=500)
map_.save("map_buffer.html")`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>distance_meters</code>: radius in meters (example: 500).</li>
        </ul>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="hazards">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>visualize_hazard_areas(geojson_or_df, hazard_type_col=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Draw hazard polygons.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> You have flood or landslide areas.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Plan and avoid risk.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Mark flood zone so new wells are placed outside danger.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualHazards />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.geospatial.visualize_hazard_areas import visualize_hazard_areas
# See module docstring for details; pass GeoJSON path or a table as supported.`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>geojson_or_df</code>: GeoJSON path or compatible table.</li>
          <li><code>hazard_type_col</code>: optional column to style by type.</li>
        </ul>
   
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="camps">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>display_refugee_camp_locations(df, lat_col, lon_col, name_col=None)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Show camps as points.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Partners share camp coordinates.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Plan and coordinate.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>name_col</code>: optional column for camp name in popup.</li>
        </ul>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="conflict-zones">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>conflict_zones_polygons(geojson_or_df, level="district")</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Draw conflict zones.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> You have polygons per district/province.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> See situation on the map.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>geojson_or_df</code>: polygons source.</li>
          <li><code>level</code>: area level (e.g., <code>"district"</code>).</li>
        </ul>
        <div className="relative mt-2">
          <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.geospatial.conflict_zones_polygons import conflict_zones_polygons
# See module docstring for usage based on your inputs.`}</code></pre>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="osm">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-2">
          <span>connect_with_openstreetmap(bbox, tags)</span>
        </div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Get roads/clinics/schools from OpenStreetMap.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> You need base data for your map.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Free global data (OSM).</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualOSM />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`# Python
from huda.geospatial.connect_with_openstreetmap import connect_with_openstreetmap

bbox = (34.2, 69.0, 34.8, 69.5)  # south, west, north, east for Kabul area
features = connect_with_openstreetmap(bbox=bbox, tags={"amenity": "clinic"})
print(features)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>bbox</code>: (south, west, north, east) tuple.</li>
          <li><code>tags</code>: dict filter (example: <code>{`{"amenity": "clinic"}`}</code>).</li>
        </ul>
      </section>
    </DocsLayout>
  )
}
