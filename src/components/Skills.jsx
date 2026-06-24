import React, { useState } from 'react';
import { ClipboardCheck, Smartphone, Cpu, Database } from 'lucide-react';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillDetails = {
    'Tricentis Tosca': {
      test: 'Verify end-to-end user transactions, payment checkouts, and navigation paths across both Web and native Mobile (iOS/Android) interfaces.',
      verify: 'Verify test step assertions, dynamic buffer variables, database synchronizations, and regression reports for defect mitigation.'
    },
    'Gen AI Testing': {
      test: 'Test model responsiveness across multi-channel integrations, performance under load, and API latencies.',
      verify: 'Verify formatting compliance (JSON/XML structures), system failover constraints, and token usage metrics.'
    },
    'Prompt Engineering': {
      test: 'Test system prompt constraints, template variables, system parameters (temperature, top_p), and multi-turn chat memory states.',
      verify: 'Verify prompt response alignment with business rules, persona consistency, and contextual relevance of the output.'
    },
    'Hallucination Control': {
      test: 'Test factual boundaries of LLM models under out-of-domain queries and complex retrieval contexts.',
      verify: 'Verify grounding scores (faithfulness of output to input text) and proper safe fallback refusaIs (e.g., "I don\'t know").'
    },
    'Prompt Injection Defenses': {
      test: 'Test model vulnerabilities against jailbreaks, instruction overrides, indirect injections, and character code bypasses.',
      verify: 'Verify model refusal rates for malicious prompts and containment of system-defined prompt boundaries.'
    },
    'AI Sentiment Tracking': {
      test: 'Test classifications across positive/negative/neutral customer inputs, model scoring thresholds, and data pipelines.',
      verify: 'Verify data synchronization on the analytics reporting dashboards and alert triggers for anomaly metrics.'
    }
  };

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
          <p style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', marginTop: '0.5rem', fontStyle: 'italic' }}>
            💡 Click on any Gen AI or Automation skill badge to deep-dive into what I test and verify as a QA Engineer.
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
                  {category.skills.map((skill, sIdx) => {
                    const isClickable = skillDetails[skill] !== undefined;
                    const isActive = selectedSkill === skill;
                    
                    return (
                      <span 
                        key={sIdx} 
                        onClick={() => isClickable && setSelectedSkill(isActive ? null : skill)}
                        className={`skill-pill ${isClickable ? 'clickable' : ''} ${isActive ? 'active' : ''}`}
                        style={{
                          cursor: isClickable ? 'pointer' : 'default',
                          borderColor: isActive ? 'var(--accent-secondary)' : '',
                          backgroundColor: isActive ? 'rgba(0, 245, 255, 0.15)' : '',
                          color: isActive ? '#fff' : '',
                          boxShadow: isActive ? '0 0 10px rgba(0, 245, 255, 0.25)' : '',
                          borderStyle: isClickable ? 'dashed' : 'solid'
                        }}
                        title={isClickable ? 'Click for QA details' : ''}
                      >
                        {skill}
                        {isClickable && (
                          <span style={{ fontSize: '0.65rem', marginLeft: '0.25rem', color: isActive ? '#fff' : 'var(--accent-secondary)' }}>
                            ●
                          </span>
                        )}
                      </span>
                    );
                  })}
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

        {/* Selected Skill QA Deep-Dive Drawer */}
        {selectedSkill && skillDetails[selectedSkill] && (
          <div className="glass-card reveal-on-scroll" style={{ marginTop: '2rem', borderLeft: '4px solid var(--accent-secondary)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 800 }}>
                  QA Deep-Dive: {selectedSkill}
                </h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  QA Engineer Role & Verification Guidelines
                </span>
              </div>
              <button 
                onClick={() => setSelectedSkill(null)}
                style={{ 
                  background: 'transparent', 
                  border: 'none', 
                  color: 'var(--text-secondary)', 
                  cursor: 'pointer', 
                  fontSize: '1.2rem',
                  lineHeight: '1',
                  padding: '0.25rem'
                }}
                aria-label="Close details"
              >
                ✕
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="md:grid-cols-2">
              <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.25rem' }}>
                <h5 style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  🔍 What I Test
                </h5>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {skillDetails[selectedSkill].test}
                </p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.25rem' }}>
                <h5 style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  ✓ What I Verify
                </h5>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {skillDetails[selectedSkill].verify}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
