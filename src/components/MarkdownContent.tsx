import ReactMarkdown from 'react-markdown';

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose-cosmos">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-starlight mt-10 mb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-starlight mt-8 mb-3">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-serif text-lg font-semibold text-starlight mt-6 mb-2">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-void-300 leading-relaxed mb-4 text-sm sm:text-base">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-1.5 mb-4 text-void-300 text-sm sm:text-base">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-1.5 mb-4 text-void-300 text-sm sm:text-base">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-void-300 leading-relaxed">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="text-accent-300 font-semibold">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="text-void-200 italic">{children}</em>
          ),
          code: ({ children }) => (
            <code className="font-mono text-xs sm:text-sm bg-void-800 px-1.5 py-0.5 rounded text-accent-300">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-void-900 border border-void-800 rounded-lg p-4 mb-4 overflow-x-auto">
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-accent-500/40 pl-4 my-4 text-void-400 italic">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-400 hover:text-accent-300 underline underline-offset-2 transition-colors"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
