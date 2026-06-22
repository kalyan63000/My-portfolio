import React from 'react';
import { Code, ExternalLink, Shield } from 'lucide-react';

const ProjectsTab = () => {
  const projects = [
    {
      title: 'Pizza Hut Ordering Ecosystem',
      description: 'Managed system-wide regression updates and core functional coverage ensuring frictionless checkout architectures. Verified real-time operational state synchronization between digital store customer entry points, backend microservices, and POS hardware.',
      tags: ['POS Synchronization', 'E2E Workflows', 'Regression Testing', 'FoodTech', 'Checkout Systems'],
      accentIndex: 0
    },
    {
      title: 'Papa Johns India Digital Platform',
      description: 'Executed validation criteria mapping for integrated multi-platform delivery tracking APIs, user administration control panels, and mobile apps. Successfully verified custom-trained conversational feedback analytics matrices for reporting anomalies.',
      tags: ['Admin Panel', 'Tracking API', 'AI Dashboards', 'Mobile Apps', 'Conversational Analytics'],
      accentIndex: 1
    }
  ];

  return (
    <div className="tab-content projects-grid">
      {projects.map((project, idx) => (
        <div key={idx} className="glass-card hover-lift project-card">
          <div className="flex justify-between items-start mb-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <h3 className="project-title">{project.title}</h3>
            <div className="contact-icon-wrapper" style={{ flexShrink: 0 }}>
              <Shield size={16} style={{ color: 'var(--accent-secondary)' }} />
            </div>
          </div>
          <p className="project-desc">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag, tIdx) => (
              <span 
                key={tIdx} 
                className={`project-tag ${tIdx % 2 === 0 ? '' : 'project-tag-accent'}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsTab;
