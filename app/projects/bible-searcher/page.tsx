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
                title={${project.title} Demo}
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
