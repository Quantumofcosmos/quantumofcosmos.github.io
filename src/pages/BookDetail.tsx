import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Star } from 'lucide-react';
import { getBook } from '../content/loader';
import MarkdownContent from '../components/MarkdownContent';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-accent-400 fill-accent-400' : 'text-void-700'}`}
        />
      ))}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles =
    status === 'read'
      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
      : status === 'reading'
      ? 'bg-accent-500/10 text-accent-400 border border-accent-500/20'
      : 'bg-void-800 text-void-400 border border-void-700';

  const label =
    status === 'read' ? 'Read' : status === 'reading' ? 'Reading' : 'Want to Read';

  return (
    <span className={`inline-block text-xs font-mono px-2.5 py-1 rounded-full ${styles}`}>
      {label}
    </span>
  );
}

export default function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const book = id ? getBook(id) : undefined;

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold gold-gradient-text mb-4">Not Found</h1>
          <p className="text-void-400 mb-6">This book doesn't exist in the reading log.</p>
          <Link to="/books" className="text-accent-400 hover:text-accent-300 transition-colors">
            Back to Books
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
            to="/books"
            className="inline-flex items-center gap-1.5 text-void-400 hover:text-accent-400 text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Books
          </Link>
          <div className="flex items-start gap-5 max-w-2xl mx-auto">
            <div className="w-24 h-36 rounded-lg bg-gradient-to-br from-cosmos-800 to-void-800 shrink-0 flex items-center justify-center border border-void-700 shadow-lg">
              <BookOpen className="w-8 h-8 text-cosmos-400" />
            </div>
            <div className="text-left flex-1 min-w-0">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-starlight mb-2">
                {book.title}
              </h1>
              <p className="text-void-400 text-lg mb-3">{book.author}</p>
              <div className="flex flex-wrap items-center gap-3">
                <StatusBadge status={book.status} />
                {book.rating > 0 && <StarRating rating={book.rating} />}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {book.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-void-950">
        <div className="section-container max-w-3xl">
          <MarkdownContent content={book.content} />
        </div>
      </section>
    </div>
  );
}
