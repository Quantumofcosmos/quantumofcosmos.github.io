import { Link } from 'react-router-dom';
import { FolderOpen, FileText, MessageSquare, BookOpen, ArrowRight, ChevronRight } from 'lucide-react';
import { projects } from '../content/loader';
import { papers } from '../content/loader';
import { commentary } from '../content/loader';
import { books } from '../content/loader';

function StarField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-px h-px bg-starlight rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />
      ))}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cosmos-700/10 rounded-full blur-[100px]" />
    </div>
  );
}

const sectionCards = [
  {
    to: '/projects',
    label: 'Projects',
    icon: FolderOpen,
    description: 'Things I\'ve built and open-sourced.',
    color: 'from-amber-500/20 to-orange-600/10',
    borderColor: 'border-amber-500/20 hover:border-amber-500/40',
  },
  {
    to: '/papers',
    label: 'White Papers',
    icon: FileText,
    description: 'Research papers I\'ve read and summarized.',
    color: 'from-cyan-500/20 to-teal-600/10',
    borderColor: 'border-cyan-500/20 hover:border-cyan-500/40',
  },
  {
    to: '/commentary',
    label: 'Commentary',
    icon: MessageSquare,
    description: 'My takes on technical papers and ideas.',
    color: 'from-rose-500/20 to-pink-600/10',
    borderColor: 'border-rose-500/20 hover:border-rose-500/40',
  },
  {
    to: '/books',
    label: 'Books',
    icon: BookOpen,
    description: 'A reading log with reviews and takeaways.',
    color: 'from-emerald-500/20 to-green-600/10',
    borderColor: 'border-emerald-500/20 hover:border-emerald-500/40',
  },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const recentPapers = papers.slice(0, 3);
  const recentCommentary = commentary.slice(0, 3);
  const recentBooks = books.filter((b) => b.status === 'read' || b.status === 'reading').slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center cosmic-gradient overflow-hidden">
        <StarField />
        <div className="section-container relative z-10 text-center py-32">
          <div className="animate-fade-in">
            <p className="text-void-400 text-sm font-mono tracking-widest uppercase mb-6">
              Hello, I&apos;m
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="gold-gradient-text">Venkat</span>
            </h1>
            <p className="font-mono text-accent-400 text-lg sm:text-xl mb-8 tracking-wide">
              @Quantumofcosmos
            </p>
          </div>

          <div className="animate-slide-up stagger-2 opacity-0">
            <p className="text-void-300 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
              Engineer. Researcher. Curious Mind.
            </p>
            <p className="text-void-400 text-base max-w-xl mx-auto leading-relaxed mb-12">
              I build systems, read papers, and write about what I find interesting.
              This is my corner of the internet where I share my work and thinking.
            </p>
          </div>

          <div className="animate-slide-up stagger-3 opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/projects"
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-500/10 border border-accent-500/30 text-accent-400 font-medium hover:bg-accent-500/20 hover:border-accent-500/50 transition-all duration-300"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/papers"
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-void-800/50 border border-void-700 text-void-300 font-medium hover:bg-void-800 hover:text-starlight transition-all duration-300"
            >
              Read My Notes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-5 h-8 rounded-full border-2 border-void-600 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-accent-400/60" />
          </div>
        </div>
      </section>

      {/* Section Navigation Cards */}
      <section className="py-24 bg-void-950">
        <div className="section-container">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-4">
            Explore by Category
          </h2>
          <p className="text-void-400 text-center mb-12 max-w-lg mx-auto">
            Everything I create, read, and think about -- organized for easy browsing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectionCards.map((card, i) => (
              <Link
                key={card.to}
                to={card.to}
                className={`group relative rounded-xl border bg-void-900/50 p-6 card-hover border-${card.borderColor} overflow-hidden`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <card.icon className="w-8 h-8 text-void-400 group-hover:text-starlight transition-colors mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-starlight mb-2">
                    {card.label}
                  </h3>
                  <p className="text-void-400 text-sm mb-4">{card.description}</p>
                  <span className="flex items-center gap-1 text-accent-400 text-sm font-medium">
                    View all <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 bg-void-900/30">
        <div className="section-container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">Featured Projects</h2>
              <p className="text-void-400 text-sm">A few things I&apos;ve been working on.</p>
            </div>
            <Link to="/projects" className="flex items-center gap-1 text-accent-400 text-sm font-medium hover:text-accent-300 transition-colors">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="rounded-xl border border-void-800 bg-void-900/50 p-6 card-hover group"
              >
                <h3 className="font-serif text-lg font-semibold text-starlight group-hover:text-accent-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-void-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Papers Preview */}
      <section className="py-24 bg-void-950">
        <div className="section-container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">Recent Papers</h2>
              <p className="text-void-400 text-sm">What I&apos;ve been reading and learning from.</p>
            </div>
            <Link to="/papers" className="flex items-center gap-1 text-accent-400 text-sm font-medium hover:text-accent-300 transition-colors">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="space-y-3">
            {recentPapers.map((paper) => (
              <Link
                key={paper.id}
                to={`/papers/${paper.id}`}
                className="block rounded-lg border border-void-800 bg-void-900/50 p-5 card-hover group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base font-semibold text-starlight group-hover:text-accent-300 transition-colors mb-1">
                      {paper.title}
                    </h3>
                    <p className="text-void-500 text-xs mb-2">
                      {paper.authors} &middot; {paper.venue} {paper.year}
                    </p>
                    <p className="text-void-400 text-sm line-clamp-2">{paper.summary}</p>
                  </div>
                  <span className="tag-pill shrink-0">{paper.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Commentary Preview */}
      <section className="py-24 bg-void-900/30">
        <div className="section-container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">Latest Commentary</h2>
              <p className="text-void-400 text-sm">My thoughts on technical papers and ideas.</p>
            </div>
            <Link to="/commentary" className="flex items-center gap-1 text-accent-400 text-sm font-medium hover:text-accent-300 transition-colors">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="space-y-3">
            {recentCommentary.map((item) => (
              <Link
                key={item.id}
                to={`/commentary/${item.id}`}
                className="block rounded-lg border border-void-800 bg-void-900/50 p-5 card-hover group"
              >
                <p className="text-void-500 text-xs font-mono mb-1">
                  On &ldquo;{item.paperTitle}&rdquo;
                </p>
                <h3 className="font-serif text-lg font-semibold text-starlight group-hover:text-accent-300 transition-colors mb-2">
                  {item.headline}
                </h3>
                <p className="text-void-400 text-sm line-clamp-2">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Books Preview */}
      <section className="py-24 bg-void-950">
        <div className="section-container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">Reading Log</h2>
              <p className="text-void-400 text-sm">Books that shaped my thinking.</p>
            </div>
            <Link to="/books" className="flex items-center gap-1 text-accent-400 text-sm font-medium hover:text-accent-300 transition-colors">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {recentBooks.map((book) => (
              <Link
                key={book.id}
                to={`/books/${book.id}`}
                className="rounded-xl border border-void-800 bg-void-900/50 p-5 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-20 rounded bg-gradient-to-br from-cosmos-800 to-void-800 shrink-0 flex items-center justify-center border border-void-700">
                    <BookOpen className="w-6 h-6 text-cosmos-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-sm font-semibold text-starlight group-hover:text-accent-300 transition-colors mb-0.5 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-void-500 text-xs mb-2">{book.author}</p>
                    <span
                      className={`inline-block text-xs font-mono px-2 py-0.5 rounded-full ${
                        book.status === 'read'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : book.status === 'reading'
                          ? 'bg-accent-500/10 text-accent-400 border border-accent-500/20'
                          : 'bg-void-800 text-void-400 border border-void-700'
                      }`}
                    >
                      {book.status === 'read' ? 'Read' : book.status === 'reading' ? 'Reading' : 'Want to Read'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
