import { Github, Twitter, Mail, Linkedin } from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/quantumofcosmos', icon: Github, label: 'GitHub' },
  { href: 'https://twitter.com/quantumofcosmos', icon: Twitter, label: 'Twitter' },
  { href: 'mailto:venkat@quantumofcosmos.com', icon: Mail, label: 'Email' },
  { href: 'https://linkedin.com/in/quantumofcosmos', icon: Linkedin, label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="border-t border-void-800/50 bg-void-950">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-semibold gold-gradient-text mb-1">
              Quantumofcosmos
            </p>
            <p className="text-void-400 text-sm max-w-md">
              Building things, reading papers, and sharing what I learn along the way.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-void-400 hover:text-accent-400 hover:bg-void-800/50 transition-all duration-200"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-void-800/30 text-center">
          <p className="text-void-500 text-xs">
            &copy; {new Date().getFullYear()} Venkat (Quantumofcosmos). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
