import { Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Pizza Hut India',
      subtitle: 'Large-Scale Food Ordering & Restaurant Management Platform',
      role: 'QA Engineer (Aug 2022 – Present) • QA Engineer Intern (Mar 2022 – Aug 2022)',
      description: 'Tested and certified a high-volume multi-channel ordering platform across Websites, Android & iOS Apps, POS Systems, Self-Service Kiosks, and Kitchen Display Systems (KDS). Validated payment gateway integrations, order fulfillment, pricing/coupon logic, menu management, and real-time backend synchronization.',
      testingTypes: 'Manual Testing, Functional, Regression, Smoke, Sanity, UAT, Integration, E2E',
      tags: ['Payment Gateways', 'Web & Mobile QA', 'POS & Kiosk Systems', 'KDS Platform', 'Postman & SQL', 'Release Validation'],
      accentIndex: 0
    },
    {
      title: 'Papa Johns India',
      subtitle: 'Comprehensive Food Delivery & Restaurant Operations Platform',
      role: 'QA Engineer (Feb 2024 – Present)',
      description: 'Engineered both manual and automated test suites for Website and Mobile Applications. Developed and maintained robust automation test scripts using Playwright with TypeScript covering critical business workflows (Login, Menu Browsing, Cart, Checkout, Payment, and Order Tracking). Verified CRM integrations, delivery tracking APIs, admin panels, inventory management, and customer feedback dashboards.',
      testingTypes: 'Playwright Automation, TypeScript, Functional, Regression, Cross-Browser, Integration, E2E',
      tags: ['Playwright Automation', 'TypeScript', 'Automated Regression', 'CRM Integrations', 'Delivery Tracking', 'Admin & Inventory'],
      accentIndex: 1
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <h2 className="section-header-title">Featured Projects</h2>
          <div className="section-header-line"></div>
          <p className="section-header-subtitle">
            A selection of multi-channel QA projects and validation systems built for global enterprises.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="glass-card hover-lift project-card reveal-on-scroll"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="project-card-header">
                <div>
                  <h3 className="project-card-title">{project.title}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', fontWeight: 600, display: 'block', marginTop: '0.2rem' }}>
                    {project.subtitle}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.15rem' }}>
                    {project.role}
                  </span>
                </div>
                <div className="project-card-icon">
                  <Shield size={18} style={{ color: 'var(--accent-secondary)' }} />
                </div>
              </div>
              
              <p className="project-card-desc">{project.description}</p>
              
              <div style={{ marginBottom: '1rem', padding: '0.65rem 0.85rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--card-border)' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>
                  Testing Types Executed
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  {project.testingTypes}
                </span>
              </div>
              
              <div className="project-card-tags">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className={`project-card-tag ${tIdx % 2 === 0 ? '' : 'project-card-tag-alt'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
