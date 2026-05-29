import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Quote } from 'lucide-react';
import { getCommentary } from '../content/loader';
import MarkdownContent from '../components/MarkdownContent';

export default function CommentaryDetail() {
  const { id } = useParams<{ id: string }>();
  const entry = id ? getCommentary(id) : undefined;

  if (!entry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold gold-gradient-text mb-4">Not Found</h1>
          <p className="text-void-400 mb-6">This commentary entry doesn't exist.</p>
          <Link to="/commentary" className="text-accent-400 hover:text-accent-300 transition-colors">
            Back to Commentary
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
            to="/commentary"
            className="inline-flex items-center gap-1.5 text-void-400 hover:text-accent-400 text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Commentary
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
              <Quote className="w-5 h-5 text-rose-400" />
            </div>
            <p className="text-void-500 text-xs font-mono">
              On &ldquo;{entry.paperTitle}&rdquo;
            </p>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-starlight mb-4">
            {entry.headline}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-void-500 text-xs font-mono">{entry.date}</span>
            {entry.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-void-950">
        <div className="section-container max-w-3xl">
          <MarkdownContent content={entry.content} />
        </div>
      </section>
    </div>
  );
}
