import React from 'react';
import { ClipboardCheck, Smartphone, Cpu, Database } from 'lucide-react';

const Skills = () => {
  const toolkit = [
    {
      title: 'Core QA Methodologies',
      icon: ClipboardCheck,
      skills: ['Functional Testing', 'Regression Testing', 'Smoke & Sanity', 'Integration Testing', 'End-to-End (E2E)', 'UAT', 'Defect Lifecycle Management'],
      role: 'Role & Verification:',
      description: 'Manage the defect lifecycle in Jira, mitigate release quality risks, and verify functional regressions to ensure smooth software checkouts.'
    },
    {
      title: 'Platforms Tested',
      icon: Smartphone,
      skills: ['Web Applications', 'Mobile (Android/iOS)', 'Point of Sale (POS)', 'Custom Kiosks', 'Kitchen Display Systems (KDS)', 'Kitchen Dispatch'],
      role: 'Role & Verification:',
      description: 'Fully capable of testing any web and mobile application, verifying payment gateways, transaction loops, CRM push notifications, and in-app alerts.'
    },
    {
      title: 'Gen AI & Automation QA',
      icon: Cpu,
      skills: ['Tricentis Tosca', 'Gen AI Testing', 'Prompt Engineering', 'Hallucination Control', 'Prompt Injection Defenses', 'AI Sentiment Tracking'],
      role: 'Role & Verification:',
      description: 'My role is to develop automated test scripts using Tricentis Tosca, verify prompt output accuracy, detect model hallucinations, and audit security boundaries.'
    },
    {
      title: 'Data & Developer Tools',
      icon: Database,
      skills: ['Postman', 'REST API Testing', 'SQL Basics', 'Jira', 'Git & GitHub', 'Playwright & Selenium basics'],
      role: 'Role & Verification:',
      description: 'Write API endpoint validation scripts using Postman, run SQL queries for database verification, and trace version control in Git.'
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <h2 className="section-header-title">Technical Toolkit</h2>
          <div className="section-header-line"></div>
          <p className="section-header-subtitle">
            A comprehensive overview of my testing methodologies, platform expertise, and modern AI engineering skills.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {toolkit.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="glass-card hover-lift skill-card reveal-on-scroll" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="skill-card-title">
                  <Icon size={18} />
                  <span>{category.title}</span>
                </h3>
                <div className="skill-pills">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
                {category.description && (
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid var(--card-border)', lineHeight: '1.5' }}>
                    <strong style={{ color: 'var(--accent-secondary)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.25rem' }}>
                      {category.role}
                    </strong>
                    {category.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
