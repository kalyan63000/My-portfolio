import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Header scrolled style toggle
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section for indicator
      const sections = ['home', 'about', 'skills', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setDrawerOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <>
      <header className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="logo">
            Kalyan<span>.QA</span>
          </a>

          {/* Desktop Nav & Actions */}
          <div className="nav-desktop-wrapper">
            <nav>
              <ul className="nav-links">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => { e.preventDefault(); handleLinkClick(item.id); }}
                      className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <a 
              href="/Banavath_Kalyan_Resume.pdf" 
              download="Banavath_Kalyan_Resume.pdf"
              className="btn btn-secondary"
              style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', borderRadius: '8px', display: 'flex', gap: '0.35rem', borderColor: 'rgba(59, 130, 246, 0.3)', color: 'var(--accent-secondary)' }}
            >
              <Download size={14} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {drawerOpen && (
        <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)}></div>
      )}

      {/* Mobile Nav Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <button 
          onClick={() => setDrawerOpen(false)}
          className="mobile-drawer-close"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(item.id); }}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a 
          href="/Banavath_Kalyan_Resume.pdf" 
          download="Banavath_Kalyan_Resume.pdf"
          className="btn btn-primary"
          style={{ marginTop: '2rem', width: '100%', display: 'flex', gap: '0.5rem' }}
        >
          <Download size={16} />
          <span>Download Resume</span>
        </a>
      </div>
    </>
  );
};

export default Navbar;
