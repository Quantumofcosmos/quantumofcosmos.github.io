import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FolderOpen, FileText, MessageSquare, BookOpen, Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { to: '/projects', label: 'Projects', icon: FolderOpen },
  { to: '/papers', label: 'Papers', icon: FileText },
  { to: '/commentary', label: 'Commentary', icon: MessageSquare },
  { to: '/books', label: 'Books', icon: BookOpen },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void-950/80 backdrop-blur-xl border-b border-void-800/50">
      <div className="section-container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
          <Sparkles className="w-5 h-5 text-accent-400 group-hover:text-accent-300 transition-colors" />
          <span className="font-serif font-semibold text-lg tracking-tight">
            <span className="gold-gradient-text">Quantumofcosmos</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(to)
                  ? 'text-accent-400 bg-accent-400/10'
                  : 'text-void-300 hover:text-starlight hover:bg-void-800/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-void-300 hover:text-starlight transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-void-950/95 backdrop-blur-xl border-b border-void-800/50 animate-fade-in">
          <div className="section-container py-4 space-y-1">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive(to)
                    ? 'text-accent-400 bg-accent-400/10'
                    : 'text-void-300 hover:text-starlight hover:bg-void-800/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
