import { Link } from 'react-router-dom';
import { ExternalLink, Github, Pin } from 'lucide-react';
import { projects } from '../content/loader';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <div>
      <section className="page-header cosmic-gradient">
        <div className="section-container">
          <p className="text-void-400 text-sm font-mono tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gold-gradient-text">Projects</span>
          </h1>
          <p className="text-void-300 text-lg max-w-xl mx-auto">
            A collection of things I&apos;ve built, from quantum simulators to distributed systems.
          </p>
        </div>
      </section>

      <section className="py-16 bg-void-950">
        <div className="section-container">
          {featured.length > 0 && (
            <>
              <h2 className="font-serif text-xl font-semibold text-void-300 mb-6 flex items-center gap-2">
                <Pin className="w-4 h-4 text-accent-400" /> Featured
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {featured.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.id}`}
                    className="group rounded-xl border border-void-800 bg-void-900/50 overflow-hidden card-hover"
                  >
                    <div className="h-40 bg-gradient-to-br from-cosmos-900/50 to-void-800/50 flex items-center justify-center border-b border-void-800">
                      <div className="w-12 h-12 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center">
                        <span className="font-mono text-accent-400 text-lg font-bold">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-serif text-lg font-semibold text-starlight group-hover:text-accent-300 transition-colors">
                          {project.title}
                        </h3>
                        <span className="tag-pill text-accent-400 border-accent-500/20 bg-accent-500/10 shrink-0 ml-2">
                          Featured
                        </span>
                      </div>
                      <p className="text-void-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="tag-pill">{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-accent-400 hover:text-accent-300 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                          </a>
                        )}
                        {project.sourceUrl && (
                          <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-void-400 hover:text-starlight transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" /> Source
                          </a>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {other.length > 0 && (
            <>
              <h2 className="font-serif text-xl font-semibold text-void-300 mb-6">
                More Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {other.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.id}`}
                    className="group rounded-xl border border-void-800 bg-void-900/50 p-6 card-hover"
                  >
                    <h3 className="font-serif text-lg font-semibold text-starlight group-hover:text-accent-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-void-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-accent-400 hover:text-accent-300 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                        </a>
                      )}
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-void-400 hover:text-starlight transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" /> Source
                        </a>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
