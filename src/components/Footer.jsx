import { ArrowUp } from 'lucide-react';
import { navLinks, profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <a href="#home" className="brand">
            <span className="brand-mark">AS</span>
            <span className="brand-text">
              Ayush <span>Singh</span>
            </span>
          </a>
          <nav className="footer-links" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <a href="#home" className="back-to-top" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Made with care, precision &amp; a little bit of gold.</p>
        </div>
      </div>
    </footer>
  );
}
