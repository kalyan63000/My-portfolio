import React from 'react';
import { ClipboardCheck, Smartphone, Cpu, Database } from 'lucide-react';

const Skills = () => {
  const toolkit = [
    {
      title: 'Core QA Methodologies',
      icon: ClipboardCheck,
      skills: ['Functional Testing', 'Regression Testing', 'Smoke & Sanity', 'Integration Testing', 'End-to-End (E2E)', 'UAT', 'Defect Lifecycle Management']
    },
    {
      title: 'Platforms Tested',
      icon: Smartphone,
      skills: ['Web Applications', 'Mobile (Android/iOS)', 'Point of Sale (POS)', 'Custom Kiosks', 'Kitchen Display Systems (KDS)', 'Kitchen Dispatch']
    },
    {
      title: 'AI & Next-Gen QA',
      icon: Cpu,
      skills: ['Prompt Engineering', 'LLM Output Validation', 'Hallucination Control', 'Prompt Injection Defenses', 'AI Sentiment Tracking']
    },
    {
      title: 'Data & Developer Tools',
      icon: Database,
      skills: ['Postman', 'REST API Testing', 'SQL Basics', 'Jira', 'Git & GitHub', 'Playwright & Selenium basics']
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
