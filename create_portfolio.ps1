# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host "Creating new, organized Next.js portfolio structure..."

# 1. Define project data
# This data will be written to projects.json
$ProjectsData = @(
    @{
        slug = "debate-simulator"
        title = "Database Debate Simulator"
        tagline = "RAG-based multi-agent system with LLMs."
        description = "This project is a multi-agent system where LLMs are assigned roles and debate a topic using retrieved evidence from a structured database. It showcases advanced RAG techniques and agentic workflows."
        skills = @("LangChain", "FAISS", "Hugging Face", "Python")
        demoUrl = "https://huggingface.co/spaces/ovrelord/debate-simulator"
        githubUrl = "https://github.com/ThomasCompton/debate-simulator"
    },
    @{
        slug = "ocr-evaluation"
        title = "OCR Accuracy Evaluation"
        tagline = "Benchmarking OCR models on historical documents."
        description = "This project benchmarks WER/CER across popular OCR libraries like EasyOCR and Tesseract, including a method for LLM-assisted OCR correction. The evaluation is conducted on a dataset of historical documents."
        skills = @("EasyOCR", "PaddleOCR", "Tesseract", "Jiwer", "Gemini")
        demoUrl = $null
        githubUrl = "https://github.com/ThomasCompton/ocr-evaluation"
    },
    @{
        slug = "bertopic-evaluation"
        title = "BERTopic Evaluation Pipeline"
        tagline = "Automated model selection for topic modeling."
        description = "This project developed stability metrics and automated model selection for large-scale topic modeling with BERTopic, improving reproducibility and reliability."
        skills = @("BERTopic", "Sentence Transformers", "UMAP", "scipy")
        demoUrl = $null
        githubUrl = "https://github.com/ThomasCompton/bertopic-evaluation-pipeline"
    },
    @{
        slug = "pdf-to-speech"
        title = "PDF-to-Speech Reader"
        tagline = "Automated workflow for document accessibility."
        description = "This automated workflow converts PDFs into audio files for accessibility and easy literature review on the go."
        skills = @("pypdf", "pyttsx3", "pydub", "AWS")
        demoUrl = $null
        githubUrl = "https://github.com/ThomasCompton/pdf-to-speech"
    },
    @{
        slug = "bible-searcher"
        title = "Bible Searcher"
        tagline = "A semantic search engine for the Bible."
        description = "This project, built on Hugging Face Spaces, allows users to search the Bible based on the meaning of a query rather than just keywords. It utilizes an embedding model to find semantically similar verses."
        skills = @("Hugging Face", "Streamlit", "Sentence Transformers")
        demoUrl = "https://huggingface.co/spaces/ovrelord/Bible_searcher"
        githubUrl = "https://github.com/ovrelord/Bible_searcher"
    }
)

# 2. Create directory structure
Write-Host "Creating folders..."
New-Item -ItemType Directory -Force -Path "app\projects" | Out-Null
New-Item -ItemType Directory -Force -Path "app\projects\debate-simulator" | Out-Null
New-Item -ItemType Directory -Force -Path "app\projects\ocr-evaluation" | Out-Null
New-Item -ItemType Directory -Force -Path "app\projects\bertopic-evaluation" | Out-Null
New-Item -ItemType Directory -Force -Path "app\projects\pdf-to-speech" | Out-Null
New-Item -ItemType Directory -Force -Path "app\projects\bible-searcher" | Out-Null
New-Item -ItemType Directory -Force -Path "data" | Out-Null

# 3. Write file contents
Write-Host "Creating files..."

# a) Write projects.json
$json = $ProjectsData | ConvertTo-Json -Depth 3 -Compress
Set-Content -Path "data\projects.json" -Value $json
Write-Host "  -> Created data\projects.json"

# b) Write app/page.tsx
$homePageContent = @"
// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 animate-fade-in-down">
          Thomas Compton
        </h1>
        <p className="text-2xl md:text-3xl text-indigo-700 font-medium mb-8 animate-fade-in-up">
          Senior Data Scientist | NLP & LLM Engineer
        </p>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Specializing in RAG pipelines, agentic AI, and scalable LLM workflows. I build open-source tools for literature review, debate simulation, and document accessibility.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
          <Link href="/projects" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition transform hover:scale-105">
            View Projects
          </Link>
          <a href="/CV & Portfolio.pdf" download className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition transform hover:scale-105">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
"@
Set-Content -Path "app\page.tsx" -Value $homePageContent
Write-Host "  -> Created app\page.tsx"

# c) Write app/projects/page.tsx
$projectsPageContent = @"
// app/projects/page.tsx
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import projectsData from '../../data/projects.json';

const ProjectCard = ({ title, desc, link, skills }) => (
  <div className="border rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full">
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {skill.trim()}
          </span>
        ))}
      </div>
    </div>
    <Link href={link} className="mt-4 inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium transition">
      Learn More
      <ArrowUpRightIcon className="h-4 w-4" />
    </Link>
  </div>
);

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">Projects</h1>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          A collection of my work in NLP, machine learning, and data science. Each project page includes an in-depth description and a live demo hosted on Hugging Face Spaces.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              desc={project.tagline}
              link={`/projects/${project.slug}`}
              skills={project.skills.join(', ')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
"@
Set-Content -Path "app\projects\page.tsx" -Value $projectsPageContent
Write-Host "  -> Created app\projects\page.tsx"

# d) Write dynamic project page template
$projectPageTemplate = @"
// app/projects/[slug]/page.tsx
import Link from 'next/link';
import { ArrowLeftIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import projectsData from '../../../data/projects.json';

// The fetchProjectData function gets data for a specific project
function fetchProjectData(slug) {
  return projectsData.find(project => project.slug === slug);
}

export default function ProjectPage({ params }) {
  const project = fetchProjectData(params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-700">Project not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="inline-flex items-center gap-2 mb-8 text-indigo-600 hover:underline">
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Projects
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
        <p className="text-xl text-indigo-700 font-medium mb-6">{project.tagline}</p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">{project.description}</p>

        {/* Embedded Demo */}
        {project.demoUrl && (
          <div className="border rounded-lg p-6 bg-white shadow-sm mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Live Demo</h2>
            <div className="relative" style={{ paddingBottom: '75%', height: 0 }}>
              <iframe
                src={project.demoUrl}
                title={`${project.title} Demo`}
                className="absolute top-0 left-0 w-full h-full border-none rounded-lg"
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                View full screen on Hugging Face
              </a>
            </p>
          </div>
        )}

        {/* Key Technologies */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Call to action (e.g., GitHub link) */}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            View on GitHub
            <ArrowUpRightIcon className="h-4 w-4 ml-2" />
          </a>
        )}
      </div>
    </div>
  );
}
"@
Set-Content -Path "app\projects\bible-searcher\page.tsx" -Value $projectPageTemplate
Set-Content -Path "app\projects\debate-simulator\page.tsx" -Value $projectPageTemplate
Set-Content -Path "app\projects\ocr-evaluation\page.tsx" -Value $projectPageTemplate
Set-Content -Path "app\projects\bertopic-evaluation\page.tsx" -Value $projectPageTemplate
Set-Content -Path "app\projects\pdf-to-speech\page.tsx" -Value $projectPageTemplate
Write-Host "  -> Created project page templates"

Write-Host "Process complete. Your project structure is now set up."