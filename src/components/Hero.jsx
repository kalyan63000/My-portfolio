import React, { useState } from 'react';
import { Mail, Phone, MapPin, Terminal, ArrowRight, Download, ShieldCheck } from 'lucide-react';

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

const Hero = () => {
  const [imgError, setImgError] = useState(false);
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-sec">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content reveal-on-scroll">
            <div className="hero-badge">
              <Terminal size={14} />
              <span>QA Engineer & Data-Driven SEO Specialist</span>
            </div>
            
            <h1 className="hero-title">
              Hi, I'm <br />
              <span>BANAVATH KALYAN</span>
            </h1>
            
            <h2 className="hero-subtitle">
              QA Engineer | <strong>AI & Data-Driven SEO Specialist</strong>
            </h2>
            
            <p className="hero-desc">
              With 3.8 years of hands-on QA expertise, I test and secure complex multi-channel ecosystems 
              covering Web, Mobile (iOS/Android), custom physical in-store Kiosks, and POS hardware. I specialize in testing 
              payment methods, CRM push notifications, and in-app messages. I can test any website and mobile application, 
              blending data-driven SEO optimization testing with next-generation AI and LLM validation.
            </p>
            
            <div className="hero-ctas">
              <a 
                href="#projects" 
                onClick={(e) => { e.preventDefault(); handleScrollTo('projects'); }}
                className="btn btn-primary"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </a>
              
              <a 
                href="/Banavath_Kalyan_Resume.pdf" 
                download="Banavath_Kalyan_Resume.pdf"
                className="btn btn-secondary"
                style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}
              >
                <Download size={16} />
                <span>Resume</span>
              </a>

              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}
                className="btn btn-secondary"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          {/* Hero Right Card (Quick Contact Details) */}
          <div className="cyber-card-wrapper reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card hover-lift">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div className="cyber-card-avatar" style={{ margin: 0 }}>
                  <div className="cyber-avatar-inner">
                    {!imgError ? (
                      <img 
                        src="/src/assets/avatar.png" 
                        alt="Banavath Kalyan" 
                        onError={() => setImgError(true)}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                      />
                    ) : (
                      <ShieldCheck className="cyber-avatar-svg" style={{ width: '55%', height: '55%', color: 'var(--accent-secondary)' }} />
                    )}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Banavath Kalyan</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>
                    QA & SEO Specialist
                  </span>
                </div>
              </div>

              <div className="contact-quick-list">
                <a href="mailto:banavathkalyannayak19@gmail.com" className="contact-quick-item" target="_blank" rel="noopener noreferrer">
                  <div className="contact-quick-icon">
                    <Mail size={16} />
                  </div>
                  <div className="contact-quick-text">
                    banavathkalyannayak19@gmail.com
                  </div>
                </a>

                <a href="tel:+916300681493" className="contact-quick-item">
                  <div className="contact-quick-icon">
                    <Phone size={16} />
                  </div>
                  <div className="contact-quick-text">
                    +91 6300681493
                  </div>
                </a>

                <div className="contact-quick-item">
                  <div className="contact-quick-icon">
                    <MapPin size={16} />
                  </div>
                  <div className="contact-quick-text">
                    Hyderabad, India
                  </div>
                </div>

                <a href="https://www.linkedin.com/in/kalyan-banavath01/" className="contact-quick-item" target="_blank" rel="noopener noreferrer">
                  <div className="contact-quick-icon">
                    <LinkedinIcon size={16} />
                  </div>
                  <div className="contact-quick-text">
                    linkedin.com/in/kalyan-banavath01
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
