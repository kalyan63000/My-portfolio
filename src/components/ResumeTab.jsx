import React from 'react';
import { Briefcase, GraduationCap, ClipboardCheck, Smartphone, Cpu, Database } from 'lucide-react';

const ResumeTab = () => {
  const experiences = [
    {
      title: 'QA Engineer / Software Tester',
      company: 'Sune Solutions Pvt Ltd',
      date: 'Aug 2022 - Present',
      points: [
        'Owned end-to-end user workflow execution, defect lifecycle documentation, and platform releases for highly complex customer food-ordering environments.',
        'Designed test scripts tracking multi-platform application states across Web, Mobile (iOS/Android), custom physical Kiosks, and POS hardware.',
        'Conducted REST API testing via Postman to validate integration endpoints and backend microservices.',
        'Tested AI-powered customer sentiment dashboards for data accuracy and reporting anomalies.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      major: 'Electronics and Communication Engineering (ECE)',
      institution: 'Mahatma Gandhi Institute of Technology',
      location: 'Hyderabad',
      date: 'Graduated',
      grade: '72% Aggregate'
    }
  ];

  const toolkit = [
    {
      title: 'Core QA Methodologies',
      icon: ClipboardCheck,
      skills: ['Functional Testing', 'Regression Testing', 'Smoke & Sanity', 'Integration Testing', 'End-to-End (E2E)', 'UAT']
    },
    {
      title: 'Platforms Tested',
      icon: Smartphone,
      skills: ['Web Applications', 'Mobile (Android/iOS)', 'Point of Sale (POS)', 'Custom Kiosks', 'Kitchen Display Systems (KDS)']
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
    <div className="tab-content">
      {/* Experience Section */}
      <h2 className="section-title">
        <Briefcase size={20} />
        <span>Professional Experience</span>
      </h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-card">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-title">{exp.title}</h3>
                <span className="timeline-subtitle">{exp.company}</span>
              </div>
              <span className="timeline-date">{exp.date}</span>
            </div>
            <ul className="timeline-list">
              {exp.points.map((pt, pIdx) => (
                <li key={pIdx} className="timeline-item">{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <h2 className="section-title">
        <GraduationCap size={20} />
        <span>Education</span>
      </h2>
      <div className="timeline">
        {education.map((edu, idx) => (
          <div key={idx} className="timeline-card">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-title">{edu.degree} in {edu.major}</h3>
                <span className="timeline-subtitle">{edu.institution}, {edu.location}</span>
              </div>
              <span className="timeline-date">{edu.grade}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Toolkit Section */}
      <div className="toolkit-section">
        <h2 className="section-title">
          <Database size={20} />
          <span>Technical Toolkit</span>
        </h2>
        <div className="toolkit-grid">
          {toolkit.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="tool-category-card">
                <h3 className="tool-category-title">
                  <Icon size={16} />
                  <span>{category.title}</span>
                </h3>
                <div className="tool-tags-container">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tool-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumeTab;
