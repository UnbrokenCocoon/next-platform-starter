// components/NavBar.tsx
import Link from 'next/link';

export function NavBar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Logo / Name */}
          <div className="font-bold text-xl text-gray-900">
            <Link href="/" className="hover:text-indigo-600 transition">
              Thomas Compton
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap gap-6 sm:gap-8 text-sm md:text-base">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition">
              Home
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-indigo-600 transition">
              Projects
            </Link>
            <Link href="/demos" className="text-gray-700 hover:text-indigo-600 transition">
              Demos
            </Link>
            <a
              href="/CV & Portfolio.pdf"
              download
              className="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              CV
            </a>
            <a
              href="https://github.com/ThomasCompton"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/thomascompton"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}