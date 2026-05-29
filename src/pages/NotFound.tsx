import { Link } from 'react-router-dom';
import { Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center cosmic-gradient">
      <div className="section-container text-center py-32">
        <Sparkles className="w-12 h-12 text-accent-400/40 mx-auto mb-6 animate-pulse-glow" />
        <h1 className="font-serif text-6xl sm:text-7xl font-bold mb-4">
          <span className="gold-gradient-text">404</span>
        </h1>
        <p className="text-void-300 text-xl mb-2">Lost in the cosmos.</p>
        <p className="text-void-500 text-sm mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has drifted into another dimension.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-500/10 border border-accent-500/30 text-accent-400 font-medium hover:bg-accent-500/20 hover:border-accent-500/50 transition-all duration-300"
        >
          <Home className="w-4 h-4" /> Return Home
        </Link>
      </div>
    </div>
  );
}
