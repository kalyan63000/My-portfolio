import { Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Pizza Hut Ordering Ecosystem',
      description: 'Managed system-wide regression updates and core functional coverage ensuring frictionless checkout architectures. Verified real-time operational state synchronization between web/mobile entry points, backend microservices, and POS hardware. Tested integrated payment methods (credit cards, transaction loops) and performed web SEO optimization testing.',
      tags: ['POS Synchronization', 'Payment Testing', 'SEO Optimization', 'FoodTech QA', 'E2E Workflows'],
      accentIndex: 0
    },
    {
      title: 'Papa Johns India Digital Platform',
      description: 'Executed validation criteria mapping for integrated multi-platform delivery tracking APIs, user administration control panels, and native mobile apps. Successfully tested CRM push notifications, in-app messaging delivery parameters, and verified conversational feedback dashboards reporting anomalies.',
      tags: ['CRM Notifications', 'In-App Messaging', 'Tracking API', 'AI Dashboards', 'Mobile QA'],
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
                <h3 className="project-card-title">{project.title}</h3>
                <div className="project-card-icon">
                  <Shield size={18} style={{ color: 'var(--accent-secondary)' }} />
                </div>
              </div>
              
              <p className="project-card-desc">{project.description}</p>
              
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
