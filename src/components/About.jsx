import React from 'react';
import { ShieldCheck, Sparkles, Award, Layers } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <h2 className="section-header-title">About Me</h2>
          <div className="section-header-line"></div>
          <p className="section-header-subtitle">
            A look into my engineering background, core domain specializations, and future-ready focus.
          </p>
        </div>

        {/* About Content Grid */}
        <div className="about-grid">
          {/* Bio Summary Left */}
          <div className="reveal-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
                Professional Biography
              </h3>
              <p className="paragraph" style={{ marginBottom: 0 }}>
                I am a results-driven Quality Assurance Engineer with 3.8 years of experience in manual 
                testing, functional validation, and mitigation of technical release quality risks. My 
                career is built on ensuring comprehensive system integrity across complex, multi-channel 
                software ecosystems.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="glass-card hover-lift" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-secondary)', lineHeight: 1 }}>3.8+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  Years in QA
                </div>
              </div>
              <div className="glass-card hover-lift" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1 }}>5+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  Channels Tested
                </div>
              </div>
            </div>
          </div>

          {/* Specializations Right */}
          <div className="about-features reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="about-feature-box">
              <h4 className="about-feature-title">
                <Layers size={18} />
                <span>Multi-Channel Testing Expert</span>
              </h4>
              <p className="about-feature-desc">
                Proven ability to design test plans tracking application states across Web, native Mobile (iOS/Android), 
                custom in-store digital Kiosks, Point of Sale (POS) terminals, and kitchen dispatch frameworks.
              </p>
            </div>

            <div className="about-feature-box">
              <h4 className="about-feature-title">
                <ShieldCheck size={18} />
                <span>FoodTech & QSR Sector Depth</span>
              </h4>
              <p className="about-feature-desc">
                Deep specialization in QSR systems, verifying multi-channel payment methods, checkout loops, and operations synchronization. I possess the capability to test and certify any web and mobile application.
              </p>
            </div>

            <div className="about-feature-box">
              <h4 className="about-feature-title">
                <Sparkles size={18} />
                <span>AI & Next-Gen QA Specialist</span>
              </h4>
              <p className="about-feature-desc">
                Verifying system alignment: I validate prompt inputs, test against prompt injection exploit vectors, control LLM hallucination limits, and verify CRM push notifications, in-app messaging, and sentiment metrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
