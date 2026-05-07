import { useState, useEffect } from 'react';
import { Menu, X, CreditCard, Calendar } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <nav className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="navbar__link">{label}</a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            href="https://cal.com/hugo-chambert-lhv2ko/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__action-btn navbar__action-btn--outline"
          >
            <Calendar size={14} />
            Book a Session
          </a>
          <a
            href="https://buy.stripe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__action-btn navbar__action-btn--red"
          >
            <CreditCard size={14} />
            Buy a Plan
          </a>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} className="navbar__mobile-link" onClick={close}>{label}</a>
        ))}
        <div className="navbar__mobile-actions">
          <a
            href="https://cal.com/hugo-chambert-lhv2ko/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__action-btn navbar__action-btn--outline"
            onClick={close}
          >
            <Calendar size={14} />
            Book a Session
          </a>
          <a
            href="https://buy.stripe.com"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__action-btn navbar__action-btn--red"
            onClick={close}
          >
            <CreditCard size={14} />
            Buy a Plan
          </a>
        </div>
      </div>
    </header>
  );
}
