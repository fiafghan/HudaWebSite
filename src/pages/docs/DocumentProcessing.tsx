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

export default function DocumentProcessing() {
  return (
    <DocsLayout title="Phase: Text & Document Processing">
      <p className="text-gray-700">Each function returns a lightweight intent spec; it does not perform extraction or NLP itself. Use with your preferred tools. Every card includes What/When/Why/Parameters, a Python Example and the returned Output preview.</p>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="pdf-tables">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">process_pdf_tables(pdf_path, pages=None, table_engine="camelot", output_format="csv")</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Extract tabular data from PDFs.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Situation reports and annexes.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Convert tables to data.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Pull a table from a PDF report into a CSV file.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>pdf_path</code>: path to PDF.</li>
          <li><code>pages</code>: e.g., "1-3".</li>
          <li><code>table_engine</code>: camelot/tabula.</li>
          <li><code>output_format</code>: csv/json.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="PDF tables" columns={["file","pages","engine","format"]} rows={[["/reports/sitrep.pdf","1-3","camelot","csv"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.document_processing import process_pdf_tables
spec = process_pdf_tables("/reports/sitrep.pdf", pages="1-3", table_engine="camelot", output_format="csv")
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "doc_process_pdf_tables",
  "pdf_path": "/reports/sitrep.pdf",
  "options": {"pages": "1-3", "table_engine": "camelot", "output_format": "csv"},
  "preview": {"will_extract_tables": true}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="word-reports">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">process_word_reports(docx_path, extract_tables=True, extract_paragraphs=True, output_format="json")</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Extract text and tables from DOCX.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Shared partner reports.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Structure unstructured content.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Turn a Word report into JSON with text and tables.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>docx_path</code>: file path.</li>
          <li><code>extract_tables</code>: True/False.</li>
          <li><code>extract_paragraphs</code>: True/False.</li>
          <li><code>output_format</code>: json/csv.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Word reports" columns={["file","tables?","paras?","format"]} rows={[["/reports/partner.docx",true,true,"json"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.document_processing import process_word_reports
spec = process_word_reports("/reports/partner.docx", extract_tables=True, extract_paragraphs=True, output_format="json")
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "doc_process_word_reports",
  "docx_path": "/reports/partner.docx",
  "options": {"extract_tables": true, "extract_paragraphs": true, "output_format": "json"},
  "preview": {"will_extract": true}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="extract-indicators">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">extract_indicators_from_text(texts, indicators=None, language="en", use_regex=True)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Find indicator mentions.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Parsing narrative reports.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Build indicator datasets.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Find words like coverage or FCS in text.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>texts</code>: list of text.</li>
          <li><code>indicators</code>: list to search.</li>
          <li><code>language</code>: language code.</li>
          <li><code>use_regex</code>: True/False.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Indicator mentions" columns={["texts","indicators","lang"]} rows={[[2,2,"en"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.document_processing import extract_indicators_from_text
texts = ["Coverage reached 60% in province A.", "FCS median 45."]
spec = extract_indicators_from_text(texts, indicators=["coverage","fcs"], language="en")
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "doc_extract_indicators",
  "language": "en",
  "inputs": 2,
  "options": {"use_regex": true, "indicators": ["coverage","fcs"]},
  "preview": {"will_extract_mentions": true}
}`}</code></pre>
      </section>
      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="nl-search">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">dataset_natural_language_search(query, datasets, top_k=5, use_embeddings=True, language="en")</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Query datasets in natural language.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Exploratory analysis.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Faster discovery.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Ask a question and get the best matching datasets.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>query</code>: question.</li>
          <li><code>datasets</code>: list of paths.</li>
          <li><code>top_k</code>: how many results.</li>
          <li><code>use_embeddings</code>: True/False.</li>
          <li><code>language</code>: language code.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="NL search" columns={["query","datasets","top_k"]} rows={[["lowest coverage?",1,3]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.document_processing import dataset_natural_language_search
spec = dataset_natural_language_search("Which districts have lowest coverage?", ["/data/coverage.csv"], top_k=3)
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "doc_dataset_nl_search",
  "query": "Which districts have lowest coverage?",
  "datasets": ["/data/coverage.csv"],
  "options": {"top_k": 3, "use_embeddings": true, "language": "en"},
  "preview": {"will_search": true}
}`}</code></pre>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="translate-indicators">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">translate_indicators(texts, source_lang="en", target_langs=["fa","ps","ar","fr"], domain="humanitarian")</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Translate indicator terms.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Multilingual reporting.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Consistent terminology.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Translate key indicator words to Dari/Pashto.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>texts</code>: list of terms.</li>
          <li><code>source_lang</code>: source code.</li>
          <li><code>target_langs</code>: list of codes.</li>
          <li><code>domain</code>: e.g., humanitarian.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Translate" columns={["source","targets","count"]} rows={[["en","fa,ps",2]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.document_processing import translate_indicators
spec = translate_indicators(["coverage","needs"], source_lang="en", target_langs=["fa","ps"]) 
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "doc_translate_indicators",
  "source_lang": "en",
  "target_langs": ["fa","ps"],
  "inputs": 2,
  "options": {"domain": "humanitarian"},
  "preview": {"will_translate": true}
}`}</code></pre>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="ner">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">named_entity_recognition(texts, language="en", entity_types=None, model_type="transformer")</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Tag orgs and locations.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Extract structured entities.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Build knowledge bases.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Mark names of organizations and places in text.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>texts</code>: list of texts.</li>
          <li><code>language</code>: code.</li>
          <li><code>entity_types</code>: list like ORG, LOC.</li>
          <li><code>model_type</code>: model.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="NER" columns={["lang","types","inputs"]} rows={[["en","ORG,LOC",1]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.document_processing import named_entity_recognition
spec = named_entity_recognition(["WFP delivered in Kandahar"], language="en", entity_types=["ORG","LOC"])
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "doc_named_entity_recognition",
  "language": "en",
  "inputs": 1,
  "options": {"entity_types": ["ORG","LOC"], "model_type": "transformer"},
  "preview": {"will_tag_entities": true}
}`}</code></pre>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="sentiment">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">sentiment_analysis_reports(texts, language="en", model_type="transformer", aggregate=True)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Score sentiment in reports.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Field reporting, community feedback.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Monitor perception and risk.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Check if reports sound positive or negative.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>texts</code>: list of texts.</li>
          <li><code>language</code>: code.</li>
          <li><code>model_type</code>: model.</li>
          <li><code>aggregate</code>: True/False.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Sentiment" columns={["lang","aggregate","inputs"]} rows={[["en",true,1]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.document_processing import sentiment_analysis_reports
spec = sentiment_analysis_reports(["Access improved but gaps remain."], language="en", aggregate=True)
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "doc_sentiment_analysis",
  "language": "en",
  "inputs": 1,
  "options": {"model_type": "transformer", "aggregate": true},
  "preview": {"will_score_sentiment": true}
}`}</code></pre>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="needs-classification">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">classify_needs_by_sector(texts, label_set=["food","wash","health","shelter","protection","education"], language="en", model_type="transformer")</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Classify needs text to sectors.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Needs assessments.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Rapid thematic tagging.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Tag a sentence as WASH or Health.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>texts</code>: list.</li>
          <li><code>label_set</code>: sectors list.</li>
          <li><code>language</code>: code.</li>
          <li><code>model_type</code>: model.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Needs classification" columns={["labels","lang","inputs"]} rows={[["wash,health","en",1]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.document_processing import classify_needs_by_sector
spec = classify_needs_by_sector(["Households lack access to safe water."], label_set=["wash","health"]) 
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "doc_classify_needs_by_sector",
  "language": "en",
  "labels": ["wash","health"],
  "inputs": 1,
  "options": {"model_type": "transformer"},
  "preview": {"will_classify": true}
}`}</code></pre>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="crisis-keywords">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">extract_crisis_keywords(texts, language="en", method="textrank", top_k=20)</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Key phrases from text.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Thematic analysis.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Summarize large volumes.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Extract main words from many reports.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>texts</code>: list.</li>
          <li><code>language</code>: code.</li>
          <li><code>method</code>: textrank etc.</li>
          <li><code>top_k</code>: how many.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Keywords" columns={["method","top_k","inputs"]} rows={[["textrank",10,1]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.document_processing import extract_crisis_keywords
spec = extract_crisis_keywords(["Roads blocked due to floods; aid delayed."], method="textrank", top_k=10)
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "doc_extract_crisis_keywords",
  "language": "en",
  "inputs": 1,
  "options": {"method": "textrank", "top_k": 10},
  "preview": {"will_extract_keywords": true}
}`}</code></pre>
      </section>

      <section className="mt-8 rounded-lg border border-gray-200 bg-white p-5" id="knowledge-graph">
        <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-1">build_humanitarian_knowledge_graph(entities, relations, schema=None, export_format="graphml")</div>
        <p className="text-gray-700 text-sm"><strong>What:</strong> Build entity-relation graphs.</p>
        <p className="text-gray-700 text-sm"><strong>When:</strong> Linking orgs, places, events.</p>
        <p className="text-gray-700 text-sm"><strong>Why:</strong> Reasoning and discovery.</p>
        <p className="text-gray-700 text-sm mt-1"><strong>Everyday example:</strong> Draw links: org operates in place.</p>
        <h3 className="text-sm font-semibold mt-3">Parameters</h3>
        <ul className="text-sm text-gray-700 list-disc pl-6">
          <li><code>entities</code>: nodes list.</li>
          <li><code>relations</code>: edges list.</li>
          <li><code>schema</code>: optional schema.</li>
          <li><code>export_format</code>: graphml etc.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mt-3">
          <div>
            <h3 className="text-sm font-semibold">How it looks (visual)</h3>
            <VisualCard title="Knowledge graph" columns={["entities","relations","format"]} rows={[[2,1,"graphml"]]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Example</h3>
            <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`from huda.document_processing import build_humanitarian_knowledge_graph
entities = [{"id":"org1","type":"ORG","name":"WFP"},{"id":"loc1","type":"LOC","name":"Kandahar"}]
relations = [("org1","operates_in","loc1")]
spec = build_humanitarian_knowledge_graph(entities, relations, export_format="graphml")
print(spec)`}</code></pre>
          </div>
        </div>
        <h3 className="text-sm font-semibold mt-2">Output</h3>
        <pre className="rounded-md bg-gray-900 text-gray-100 p-3 overflow-auto"><code>{`{
  "type": "doc_build_knowledge_graph",
  "counts": {"entities": 2, "relations": 1},
  "export_format": "graphml",
  "schema": {},
  "preview": {"will_construct_graph": true}
}`}</code></pre>
      </section>
    </DocsLayout>
  )
}
