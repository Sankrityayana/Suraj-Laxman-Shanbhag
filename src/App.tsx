import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { CorePillars } from './components/home/CorePillars';
import { ProjectsView } from './components/projects/ProjectsView';
import { ProjectDetailView } from './components/projects/ProjectDetailView';
import { SkillMatrix } from './components/skills/SkillMatrix';
import { CredentialsView } from './components/credentials/CredentialsView';
import { ResumeViewer } from './components/resume/ResumeViewer';
import { ContactView } from './components/contact/ContactView';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const navigate = (path: string) => {
    if (path === currentPath) return;
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Route matching logic
  const renderRoute = () => {
    if (currentPath === '/') {
      return (
        <div className="space-y-10">
          <HeroSection navigate={navigate} />
          <CorePillars navigate={navigate} />
        </div>
      );
    }

    if (currentPath === '/projects') {
      return <ProjectsView navigate={navigate} />;
    }

    if (currentPath.startsWith('/projects/')) {
      const slug = currentPath.replace('/projects/', '').split('/')[0];
      return <ProjectDetailView slug={slug} navigate={navigate} />;
    }

    if (currentPath === '/skills') {
      return <SkillMatrix />;
    }

    if (currentPath === '/credentials') {
      return <CredentialsView navigate={navigate} />;
    }

    if (currentPath === '/resume') {
      return <ResumeViewer />;
    }

    if (currentPath === '/contact') {
      return <ContactView />;
    }

    // Default Fallback
    return (
      <div className="py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-100">Page Not Found</h1>
        <p className="text-sm text-slate-400">
          The requested page route does not exist.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500 text-slate-950"
        >
          Return to Overview
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100">
      <Navbar currentPath={currentPath} navigate={navigate} />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        {renderRoute()}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}
