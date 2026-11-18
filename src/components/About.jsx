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
                Senior QA Engineer with 4.8 years of hands-on experience in Manual and Automation Testing 
                across Web, Mobile, POS, Kiosk, and Enterprise Applications. Proven track record in Functional, 
                Regression, UAT, and End-to-End Testing for enterprise platforms like Pizza Hut and Papa Johns India. 
                Skilled in Agile methodologies, defect management in Jira & Azure DevOps, and building automated 
                test suites using Playwright with TypeScript, backed by solid API (Postman) and Database (SQL) testing.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="glass-card hover-lift" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-secondary)', lineHeight: 1 }}>4.8</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  Years in QA
                </div>
              </div>
              <div className="glass-card hover-lift" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1 }}>6+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontWeight: 600, textTransform: 'uppercase' }}>
                  Platforms Tested
                </div>
              </div>
            </div>
          </div>

          {/* Specializations Right */}
          <div className="about-features reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="about-feature-box">
              <h4 className="about-feature-title">
                <Layers size={18} />
                <span>Playwright Automation Specialist</span>
              </h4>
              <p className="about-feature-desc">
                Developing and maintaining automation test suites using Playwright with TypeScript for critical user journeys: Login, Menu, Cart, Checkout, Payments, and Order Tracking.
              </p>
            </div>

            <div className="about-feature-box">
              <h4 className="about-feature-title">
                <ShieldCheck size={18} />
                <span>Multi-Platform Enterprise QA</span>
              </h4>
              <p className="about-feature-desc">
                Testing across diverse platforms including Web, Android & iOS Apps, POS Systems, Self-Service Kiosks, Kitchen Display Systems (KDS), and Inventory Management modules.
              </p>
            </div>

            <div className="about-feature-box">
              <h4 className="about-feature-title">
                <Sparkles size={18} />
                <span>API, Database & Modern AI Tools</span>
              </h4>
              <p className="about-feature-desc">
                REST API validation with Postman, SQL database testing, defect management via Jira & Azure DevOps, and leveraging Gen AI tools (ChatGPT, Claude, Copilot) to accelerate test workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
