import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { getProject } from '../content/loader';
import MarkdownContent from '../components/MarkdownContent';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProject(id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold gold-gradient-text mb-4">Not Found</h1>
          <p className="text-void-400 mb-6">This project doesn't exist.</p>
          <Link to="/projects" className="text-accent-400 hover:text-accent-300 transition-colors">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="page-header cosmic-gradient">
        <div className="section-container">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-void-400 hover:text-accent-400 text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-starlight mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-500/10 border border-accent-500/30 text-accent-400 text-sm font-medium hover:bg-accent-500/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-void-800/50 border border-void-700 text-void-300 text-sm font-medium hover:bg-void-800 hover:text-starlight transition-all"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-void-950">
        <div className="section-container max-w-3xl">
          <MarkdownContent content={project.content} />
        </div>
      </section>
    </div>
  );
}
