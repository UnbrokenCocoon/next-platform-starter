// app/layout.tsx
import { NavBar } from '../components/NavBar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <NavBar />

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Optional Footer */}
        <footer className="py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Thomas Compton | Built with Next.js & Netlify
        </footer>
      </body>
    </html>
  );
}