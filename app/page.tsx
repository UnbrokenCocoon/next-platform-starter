import React from 'react';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

// This is the complete, single-file React application.
// All components, styles, and logic are contained within this file.

// Updated project data based on the provided CV and portfolio, with corrected and new links.
const projectsData = [
  {
    title: "Database Debate Simulator (Agentic AI)",
    description: "A RAG-based system to simulate multi-agent debates using short LLM-driven conversations, demonstrating the integration of embeddings, retrieval, and generative AI for interactive reasoning.",
    skills: ["LangChain", "FAISS", "Hugging Face", "Python", "Gradio", "Google Gemini"],
    link: "https://huggingface.co/spaces/ovrelord/union-debate-sim",
    github: "https://github.com/thomasocompton/database-debate-simulator"
  },
  {
    title: "Bible Vector Searcher",
    description: "A powerful RAG-based search engine that allows users to find verses within the Bible using semantic queries. It leverages a vector database for efficient and contextually relevant results.",
    skills: ["RAG", "Vector Search", "Hugging Face", "Gradio", "Python"],
    link: "https://huggingface.co/spaces/ovrelord/Bible_searcher",
    github: "#"
  },
  {
    title: "OCR Accuracy Evaluation",
    description: "Benchmarked Word Error Rate (WER) and Character Error Rate (CER) across various OCR engines (EasyOCR, PaddleOCR, Tesseract) and LLM-assisted OCR pipelines. Developed a batched workflow with backoff to handle high-volume jobs.",
    skills: ["EasyOCR", "PaddleOCR", "Tesseract", "Google Gemini", "Jiwer", "Deepseek", "Qwen"],
    github: "https://github.com/thomasocompton/OCR-evaluation"
  },
  {
    title: "BERTopic Evaluation and Fine-Tuning",
    description: "Developed stability metrics and evaluation pipelines for repeated BERTopic runs on large-scale corpora. Implemented a randomized parameter search to generate diverse, high-quality topic models.",
    skills: ["BERTopic", "Sentence Transformers", "scipy", "matplotlib", "UMAP"],
    github: "https://github.com/thomasocompton/bertopic-evaluation"
  },
  {
    title: "Literature Review Tools",
    description: "Modular RAG tools for literature reviews using embeddings and FAISS for efficient semantic search over a document corpus.",
    skills: ["RAG", "FAISS", "Sentence Transformers", "spaCy", "scikit-learn"],
    github: "https://github.com/thomasocompton/literature-review-tools"
  },
  {
    title: "PDF-to-Speech Reader",
    description: "A Python tool that converts PDF files into audio using a repeatable text-to-speech workflow.",
    skills: ["pypdf", "pyttsx3", "pydub", "AWS"],
    github: "https://github.com/thomasocompton/pdf-to-speech-reader"
  },
  {
    title: "Hansard OCR Dataset",
    description: "A curated dataset of historical UK parliamentary debates prepared specifically for OCR training and evaluation.",
    skills: ["TrOCR", "torch", "BeautifulSoup", "transformers"],
    github: "https://github.com/thomasocompton/hansard-ocr-dataset"
  }
];

// Skills data structured into categories
const skillsData = [
  {
    category: "LLMs & Vector Search",
    items: ["LangChain", "FAISS", "Hugging Face", "Google Gemini"]
  },
  {
    category: "Programming",
    items: ["Python", "PyTorch", "scikit-learn"]
  },
  {
    category: "NLP & ML",
    items: ["spaCy", "NLTK", "BERTopic", "LDA", "Sentence Transformers"]
  },
  {
    category: "Data & Tools",
    items: ["AWS", "Docker", "Git", "Gradio", "pandas", "matplotlib", "SQL"]
  }
];

// Education data
const educationData = [
  {
    degree: "MSc Social Research",
    school: "University of York",
    dates: "2022 - 2023",
    logoUrl: "https://placehold.co/100x100/A00000/ffffff?text=UoY"
  },
  {
    degree: "BA Philosophy",
    school: "University of Nottingham",
    dates: "2019 - 2022",
    logoUrl: "https://placehold.co/100x100/003463/ffffff?text=UoN"
  }
];

// Reusable component for project cards
const ProjectCard = ({ title, description, skills, link, github }) => {
  const hasLink = link && link !== '#';
  const hasGithub = github && github !== '#';
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex justify-start gap-4">
        {hasLink && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 group transition"
          >
            View Demo
            <ArrowUpRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        )}
        {hasGithub && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 font-medium flex items-center gap-1 transition"
          >
            <Github className="w-8 h-8" />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

// Main App component
export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      {/* Tailwind CSS CDN to ensure all styling works */}
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-24 px-4 sm:px-8 md:py-32 rounded-b-3xl shadow-xl">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            I'm Thomas Compton
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8 opacity-90">
            Senior Data Scientist and NLP researcher building intelligent solutions with data.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I am a Senior Data Scientist and ML Engineer specializing in NLP, RAG pipelines, and scalable LLM workflows. My research applies computational methods to historical and policy texts, with a strong focus on OCR, topic modeling, and RAG-based analysis. I have hands-on experience in fine-tuning and evaluating topic models, embedding search, and automating data preparation. I'm skilled in Python, PyTorch, Hugging Face, FAISS, LangChain, AWS, and Docker, with a strong academic background and applied open-source contributions.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                {edu.logoUrl && (
                  <div className="w-20 h-20 md:mr-6 mb-4 md:mb-0 flex-shrink-0">
                    <img src={edu.logoUrl} alt={`${edu.school} logo`} className="rounded-full shadow-md" />
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-lg text-gray-600">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.dates}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.category}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {section.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                skills={project.skills}
                link={project.link}
                github={project.github}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Data Analysis Section */}
      <section id="data-analysis" className="py-20 px-4 sm:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Data Analysis & Visualisation</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            My research combines both lexical and semantic methods to ensure robust, transparent, and reproducible results. This approach allows for multi-layered analysis that mitigates the limitations of either method in isolation, as described in my paper "Beyond the Black Box".
          </p>
          <div className="space-y-16">
            {/* UMAP Graph Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                {/* PLEASE REPLACE THIS URL WITH THE PUBLIC URL OF YOUR UMAP PLOT */}
                <img src="https://placehold.co/500x300/e2e8f0/1a202c?text=Your+UMAP+Plot+Here" alt="UMAP dimensionality reduction plot" className="rounded-2xl shadow-lg border border-gray-200 w-full h-auto" />
              </div>
              <div className="text-left md:text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">UMAP for Textual Data</h3>
                <p className="text-lg text-gray-600 mb-4">
                  This plot illustrates the output of a **UMAP dimensionality reduction** on text embeddings. Each point represents a document, and its proximity to other points indicates semantic similarity. The clusters of different colors show how the BERTopic model groups related documents into distinct topics, providing a visual representation of the textual data's underlying structure.
                </p>
                <div className="flex flex-wrap md:justify-end gap-2">
                  {["UMAP", "Python", "matplotlib", "Sentence Transformers"].map(
                    (skill, index) => (
                      <span
                        key={index}
                        className="bg-white text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-300 shadow-md"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Gini Score Graph Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center md:order-2">
                {/* PLEASE REPLACE THIS URL WITH THE PUBLIC URL OF YOUR GINI SCORE GRAPH */}
                <img src="https://placehold.co/500x300/e2e8f0/1a202c?text=Your+Gini+Score+Graph+Here" alt="Graph showing the relationship between Gini score and sentence coverage." className="rounded-2xl shadow-lg border border-gray-200 w-full h-auto" />
              </div>
              <div className="text-left md:text-left md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Topic Distribution vs. Coverage</h3>
                <p className="text-lg text-gray-600 mb-4">
                  This graph shows the inverse relationship between **Gini score (topic distribution inequality)** and **sentence coverage**. As the model's topic coverage increases, the distribution of sentences among topics becomes more equitable (lower Gini score). This visualization helps in finding the optimal balance between a broad-reaching model and one with clearly defined topics.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Gini Score", "Topic Modeling", "BERTopic", "Python"].map(
                    (skill, index) => (
                      <span
                        key={index}
                        className="bg-white text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-300 shadow-md"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-8 bg-indigo-600 text-white rounded-t-3xl shadow-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-8 opacity-90">
            I'm currently seeking new opportunities. Feel free to connect!
          </p>
          <div className="flex justify-center items-center space-x-6">
            <a
              href="mailto:thomasocompton@outlook.com"
              className="text-white hover:text-indigo-200 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/thomasocompton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-200 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/thomasocompton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
          <p className="text-sm mt-16 opacity-70">
            &copy; {currentYear} Thomas Compton Portfolio
          </p>
        </div>
      </section>
    </div>
  );
}
