import React, { useState } from 'react';
import { ClipboardCheck, Smartphone, Cpu, Database, Code2, GitBranch, Bot } from 'lucide-react';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillDetails = {
    'Playwright': {
      test: 'Automated end-to-end user workflows across Web and Mobile: Login, Menu Browsing, Cart Management, Checkout, Payment Validation, and Order Tracking.',
      verify: 'Cross-browser execution stability, resilient locator strategies, automated regression suites, assertion verification, and detailed test execution reports.'
    },
    'TypeScript': {
      test: 'Automation test script logic, typed Page Object Models (POM), custom test fixtures, and modular test data management.',
      verify: 'Type safety, async/await Promise handling, reusable utility helper functions, and compilation-level error prevention.'
    },
    'Postman': {
      test: 'RESTful API endpoints, request bodies, query parameters, auth tokens, and integration microservices for delivery tracking and ordering.',
      verify: 'HTTP response status codes (200, 201, 400, 500), JSON response schema structures, response latencies, and payload data integrity.'
    },
    'SQL': {
      test: 'Backend transactional data flows, order placement records, inventory status deductions, and payment status updates.',
      verify: 'Database state consistency, table constraints, query performance, and synchronization between customer entry points, POS, and backend DB.'
    },
    'Jira & Azure DevOps': {
      test: 'End-to-end defect tracking lifecycle, sprint user story acceptance criteria, and release validation checklists.',
      verify: 'Bug severity/priority categorization, reproduction steps, sprint traceability, and deployment readiness.'
    },
    'Gen AI (ChatGPT, Claude, Copilot)': {
      test: 'AI-assisted test case generation, boundary value analysis, complex edge-case formulation, and automation script optimization.',
      verify: 'Test scenario coverage accuracy, syntax precision, prompt optimization, and productivity gains across QA workflows.'
    },
    'Regression Testing': {
      test: 'Full platform regression updates across Web, Android, iOS, POS, Kiosks, and Kitchen Display Systems (KDS) prior to production releases.',
      verify: 'Zero regression defects, payment gateway checkout stability, order synchronization, and release confidence.'
    }
  };

  const toolkit = [
    {
      title: 'Automation Testing',
      icon: Code2,
      skills: ['Playwright', 'TypeScript', 'Selenium (Basic)', 'Cross-Browser Testing'],
      role: 'Role & Verification:',
      description: 'Develop and maintain robust automation test suites with Playwright & TypeScript for critical workflows (Login, Menu, Cart, Checkout, Payments).'
    },
    {
      title: 'Manual & Functional QA',
      icon: ClipboardCheck,
      skills: ['Functional Testing', 'Regression Testing', 'Smoke & Sanity', 'User Acceptance (UAT)', 'Integration Testing', 'End-to-End (E2E)', 'Release Validation'],
      role: 'Role & Verification:',
      description: 'Design, review, and execute detailed test scenarios, conduct release validation testing, and ensure frictionless customer checkout architectures.'
    },
    {
      title: 'Platforms & Systems',
      icon: Smartphone,
      skills: ['Web Applications', 'Android Apps', 'iOS Apps', 'POS Systems', 'Kiosk Systems', 'Kitchen Display Systems (KDS)', 'Inventory Management'],
      role: 'Role & Verification:',
      description: 'Test and certify multi-platform application states, validating real-time synchronization between digital store entry points, microservices, and POS hardware.'
    },
    {
      title: 'API, Database & Tools',
      icon: Database,
      skills: ['Postman', 'SQL', 'Jira', 'Azure DevOps', 'Git', 'Gen AI (ChatGPT, Claude, Copilot)'],
      role: 'Role & Verification:',
      description: 'Conduct REST API testing via Postman, SQL database query validations, track defects in Jira & Azure DevOps, and leverage Gen AI tools for testing productivity.'
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
            A comprehensive overview of my testing methodologies, automation frameworks, platforms, and modern AI tools.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', marginTop: '0.5rem', fontStyle: 'italic' }}>
            💡 Click on any highlighted badge (Playwright, TypeScript, Postman, SQL, Jira/Azure DevOps, Gen AI, Regression Testing) for a QA deep-dive.
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
                  Senior QA Engineer • Role & Verification Guidelines
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
