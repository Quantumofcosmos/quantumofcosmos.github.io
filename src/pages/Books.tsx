import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, Tag } from 'lucide-react';
import { books } from '../content/loader';

type Status = 'all' | 'read' | 'reading' | 'want';

const statusOptions: { value: Status; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'read', label: 'Read' },
  { value: 'reading', label: 'Reading' },
  { value: 'want', label: 'Want to Read' },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating ? 'text-accent-400 fill-accent-400' : 'text-void-700'
          }`}
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
    status === 'read'
      ? 'Read'
      : status === 'reading'
      ? 'Reading'
      : 'Want to Read';

  return (
    <span className={`inline-block text-xs font-mono px-2 py-0.5 rounded-full ${styles}`}>
      {label}
    </span>
  );
}

export default function Books() {
  const [statusFilter, setStatusFilter] = useState<Status>('all');

  const filtered =
    statusFilter === 'all' ? books : books.filter((b) => b.status === statusFilter);

  const readCount = books.filter((b) => b.status === 'read').length;
  const readingCount = books.filter((b) => b.status === 'reading').length;
  const wantCount = books.filter((b) => b.status === 'want').length;

  return (
    <div>
      <section className="page-header cosmic-gradient">
        <div className="section-container">
          <p className="text-void-400 text-sm font-mono tracking-widest uppercase mb-4">
            Library
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gold-gradient-text">Reading Log</span>
          </h1>
          <p className="text-void-300 text-lg max-w-xl mx-auto">
            Books that shaped my thinking, with reviews and takeaways.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm">
            <span className="text-void-400">
              <span className="text-emerald-400 font-semibold">{readCount}</span> Read
            </span>
            <span className="text-void-600">&middot;</span>
            <span className="text-void-400">
              <span className="text-accent-400 font-semibold">{readingCount}</span> Reading
            </span>
            <span className="text-void-600">&middot;</span>
            <span className="text-void-400">
              <span className="text-void-300 font-semibold">{wantCount}</span> Want to Read
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-void-950">
        <div className="section-container">
          {/* Filter bar */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-void-500" />
              <span className="text-void-400 text-sm font-medium">Filter by status</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {statusOptions.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setStatusFilter(value)}
                  className={`tag-pill cursor-pointer transition-all ${
                    statusFilter === value
                      ? 'bg-accent-500/10 text-accent-400 border-accent-500/30'
                      : 'hover:bg-void-700 hover:text-starlight'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Books grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((book) => (
              <Link
                key={book.id}
                to={`/books/${book.id}`}
                className="rounded-xl border border-void-800 bg-void-900/50 p-6 card-hover group"
              >
                <div className="flex gap-5">
                  <div className="w-20 h-28 rounded-lg bg-gradient-to-br from-cosmos-800 to-void-800 shrink-0 flex items-center justify-center border border-void-700 group-hover:border-cosmos-600/50 transition-colors shadow-lg">
                    <BookOpen className="w-7 h-7 text-cosmos-400" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-serif text-base font-semibold text-starlight group-hover:text-accent-300 transition-colors line-clamp-2">
                        {book.title}
                      </h3>
                      <StatusBadge status={book.status} />
                    </div>
                    <p className="text-void-500 text-xs mb-2">{book.author}</p>

                    {book.rating > 0 && (
                      <div className="mb-2">
                        <StarRating rating={book.rating} />
                      </div>
                    )}

                    {book.review && (
                      <p className="text-void-400 text-sm leading-relaxed line-clamp-3">
                        {book.review}
                      </p>
                    )}

                    {book.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {book.tags.map((tag) => (
                          <span key={tag} className="tag-pill">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-void-500 text-center py-12">
              No books found with this filter.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
