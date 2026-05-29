import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tag, Quote } from 'lucide-react';
import { commentary } from '../content/loader';

const allTags = [...new Set(commentary.flatMap((c) => c.tags))].sort();

export default function Commentary() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? commentary.filter((c) => c.tags.includes(activeTag))
    : commentary;

  return (
    <div>
      <section className="page-header cosmic-gradient">
        <div className="section-container">
          <p className="text-void-400 text-sm font-mono tracking-widest uppercase mb-4">
            Perspectives
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gold-gradient-text">Commentary</span>
          </h1>
          <p className="text-void-300 text-lg max-w-xl mx-auto">
            Deeper analyses and opinions on technical papers, ideas, and trends that caught my attention.
          </p>
        </div>
      </section>

      <section className="py-16 bg-void-950">
        <div className="section-container">
          {/* Filter bar */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-void-500" />
              <span className="text-void-400 text-sm font-medium">Filter by topic</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTag(null)}
                className={`tag-pill cursor-pointer transition-all ${
                  activeTag === null
                    ? 'bg-accent-500/10 text-accent-400 border-accent-500/30'
                    : 'hover:bg-void-700 hover:text-starlight'
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                  className={`tag-pill cursor-pointer transition-all ${
                    activeTag === tag
                      ? 'bg-accent-500/10 text-accent-400 border-accent-500/30'
                      : 'hover:bg-void-700 hover:text-starlight'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Commentary entries */}
          <div className="space-y-6">
            {filtered.map((item) => (
              <Link
                key={item.id}
                to={`/commentary/${item.id}`}
                className="block rounded-xl border border-void-800 bg-void-900/50 p-6 lg:p-8 card-hover group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                    <Quote className="w-5 h-5 text-rose-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-void-500 text-xs font-mono mb-1">
                      On &ldquo;{item.paperTitle}&rdquo;
                    </p>
                    <h3 className="font-serif text-xl font-semibold text-starlight group-hover:text-accent-300 transition-colors">
                      {item.headline}
                    </h3>
                  </div>
                </div>

                <div className="pl-14">
                  <p className="text-void-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.body}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-void-600 text-xs font-mono">{item.date}</span>
                    <span className="text-void-700">&middot;</span>
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-void-500 text-center py-12">
              No commentary found with this filter.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
