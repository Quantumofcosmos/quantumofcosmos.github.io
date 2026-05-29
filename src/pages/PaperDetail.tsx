import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Calendar } from 'lucide-react';
import { getPaper } from '../content/loader';
import MarkdownContent from '../components/MarkdownContent';

export default function PaperDetail() {
  const { id } = useParams<{ id: string }>();
  const paper = id ? getPaper(id) : undefined;

  if (!paper) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold gold-gradient-text mb-4">Not Found</h1>
          <p className="text-void-400 mb-6">This paper doesn't exist in the reading log.</p>
          <Link to="/papers" className="text-accent-400 hover:text-accent-300 transition-colors">
            Back to Papers
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
            to="/papers"
            className="inline-flex items-center gap-1.5 text-void-400 hover:text-accent-400 text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Papers
          </Link>
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-starlight mb-3 max-w-3xl mx-auto">
            {paper.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-void-500 text-sm mb-3">
            <span>{paper.authors}</span>
            <span>&middot;</span>
            <span>{paper.venue} {paper.year}</span>
            <span>&middot;</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Read {paper.dateRead}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {paper.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-void-950">
        <div className="section-container max-w-3xl">
          <MarkdownContent content={paper.content} />
        </div>
      </section>
    </div>
  );
}
