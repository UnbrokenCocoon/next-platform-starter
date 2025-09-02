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
              href="/CV & Portfolio.pdf"
              download
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
            >
              Download CV
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

        {/* Publications & Writing */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Publications & Writing</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <a
                href="/Service, Solidarity, and Self-Help.pdf"
                target="_blank"
                className="text-indigo-600 hover:underline font-medium"
              >
                Service, Solidarity, and Self-Help: Samuel Smiles and the Rhetoric of Self-Improvement
              </a>
            </li>
            <li>
              <a
                href="/RAG_LLM_Dialogue.pdf"
                target="_blank"
                className="text-indigo-600 hover:underline font-medium"
              >
                RAG & LLM Dialogue Systems: Designing Agentic Conversations
              </a>
            </li>
            <li>
              <a
                href="https://arxiv.org/abs/2508.19099"
                target="_blank"
                className="text-indigo-600 hover:underline font-medium"
              >
                Beyond the black box: Integrating lexical and semantic methods in quantitative discourse analysis with BERTopic
              </a>
            </li>
            <li>
              <a
                href="https://arxiv.org/abs/2507.23364"
                target="_blank"
                className="text-indigo-600 hover:underline font-medium"
              >
                Holistic evaluations of topic models
              </a>
            </li>
          </ul>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Certifications</h2>
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Hugging Face Beginner Certificate</h3>
            <p className="text-gray-600 mb-4">
              Completed Stage 1 of Hugging Face's LLM Course, covering fundamentals of transformers, prompting, and fine-tuning.
            </p>
            <img
              src="/image.webp"
              alt="Hugging Face Beginner Certificate"
              className="border rounded-lg max-w-xs mx-auto"
            />
            <p className="text-sm text-gray-500 mt-4 text-center">
              <a
                href="/image.webp"
                target="_blank"
                className="text-indigo-600 hover:underline"
              >
                View full-size
              </a>
            </p>
          </div>
        </section>

        {/* Links */}
        <section className="text-center mb-12">
          <p className="text