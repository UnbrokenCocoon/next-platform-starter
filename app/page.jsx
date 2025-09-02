// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thomas Compton
          </h1>
          <p className="text-xl md:text-2xl text-indigo-700 font-medium mb-6">
            Senior Data Scientist | NLP & LLM Engineer
          </p>
          <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed">
            Specializing in RAG pipelines, agentic AI, and scalable LLM workflows. 
            Experienced in fine-tuning topic models, automating OCR, and building multi-agent systems.
            Built open-source tools for literature review, debate simulation, and document accessibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              View Projects
            </a>
            <a
              href="/cv"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
            >
              Download CV (PDF)
            </a>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Database Debate Simulator"
              desc="RAG-based multi-agent system where LLMs debate using retrieved evidence from structured databases."
              link="/projects/debate-simulator"
              skills="LangChain, FAISS, Hugging Face, Python"
            />
            <ProjectCard
              title="OCR Accuracy Evaluation"
              desc="Benchmarked WER/CER across EasyOCR, PaddleOCR, Tesseract, and LLM-assisted OCR on historical documents."
              link="/projects/ocr-evaluation"
              skills="EasyOCR, PaddleOCR, Tesseract, Jiwer, Gemini"
            />
            <ProjectCard
              title="BERTopic Evaluation Pipeline"
              desc="Developed stability metrics and automated model selection for large-scale topic modeling."
              link="/projects/bertopic-evaluation"
              skills="BERTopic, Sentence Transformers, UMAP, scipy"
            />
            <ProjectCard
              title="PDF-to-Speech Reader"
              desc="Automated workflow converting PDFs into audio for accessibility and review."
              link="/projects/pdf-to-speech"
              skills="pypdf, pyttsx3, pydub, AWS"
            />
          </div>
        </section>

        {/* Publications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent Publications</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a
                href="https://arxiv.org/abs/2508.19099"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline font-medium"
              >
                Beyond the black box: Integrating lexical and semantic methods in quantitative discourse analysis with BERTopic
              </a>
            </li>
            <li>
              <a
                href="https://arxiv.org/abs/2507.23364"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline font-medium"
              >
                Holistic evaluations of topic models
              </a>
            </li>
          </ul>
        </section>

        {/* Links */}
        <section className="text-center">
          <p className="text-gray-600">
            <a href="https://github.com/ThomasCompton" target="_blank" className="text-indigo-600 hover:underline">GitHub</a> │
            <a href="https://linkedin.com/in/thomascompton" target="_blank" className="text-indigo-600 hover:underline"> LinkedIn</a> │
            <a href="https://medium.com/@thomascompton" target="_blank" className="text-indigo-600 hover:underline"> Medium</a>
          </p>
        </section>
      </div>
    </div>
  );
}

function ProjectCard({ title, desc, link, skills }) {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      <p className="text-sm text-gray-500 mb-4">
        <strong>Skills:</strong> {skills}
      </p>
      <a href={link} className="text-indigo-600 hover:underline text-sm">
        Explore project →
      </a>
    </div>
  );
}