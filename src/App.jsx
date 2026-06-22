import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Mail, Phone, MapPin } from 'lucide-react';

const LinkedinIcon = ({ size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-linkedin"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  // Mouse position tracker for the glassmorphic spotlights
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.glass-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Simple scroll animation trigger
  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-on-scroll');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1,
    });

    const revealItems = document.querySelectorAll('.glass-card, .section-header, .timeline-card');
    revealItems.forEach((item) => {
      // Initialize items as hidden first
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(item);
    });

    // Custom CSS class animation trigger helper
    const handleScrollReveal = () => {
      revealItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        if (rect.top <= viewHeight * 0.9) {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', handleScrollReveal);
    // Initial run
    handleScrollReveal();

    return () => {
      window.removeEventListener('scroll', handleScrollReveal);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Background ambient glowing blobs */}
      <div className="ambient-glow-container">
        <div className="glow-blob glow-blob-1"></div>
        <div className="glow-blob glow-blob-2"></div>
        <div className="glow-blob glow-blob-3"></div>
      </div>

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section & Footer */}
      <footer id="contact" className="footer-sec">
        <div className="container footer-grid">
          {/* Section Header */}
          <div className="section-header reveal-on-scroll" style={{ marginBottom: '1rem' }}>
            <h2 className="section-header-title">Get In Touch</h2>
            <div className="section-header-line"></div>
            <p className="section-header-subtitle">
              Have a testing challenge, release checklist, or AI output integration? Connect with me.
            </p>
          </div>

          {/* Social icons row */}
          <div className="footer-socials reveal-on-scroll">
            <a 
              href="mailto:banavathkalyannayak19@gmail.com" 
              className="footer-social-btn" 
              title="Send Email"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Mail size={20} />
            </a>
            
            <a 
              href="tel:+916300681493" 
              className="footer-social-btn" 
              title="Call Phone"
            >
              <Phone size={20} />
            </a>

            <a 
              href="https://www.linkedin.com/in/kalyan-banavath/" 
              className="footer-social-btn" 
              title="LinkedIn Connect"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>

          <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'center', marginTop: '0.5rem' }}>
            📍 Hyderabad, India
          </div>

          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Banavath Kalyan. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
