import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const items = [
    {
      type: 'experience',
      icon: Briefcase,
      title: 'QA Engineer',
      subtitle: 'Sune Solutions Pvt. Ltd.',
      date: 'Aug 2022 – Present',
      bullets: [
        'Perform Functional, Regression, Smoke, UAT, Integration, and End-to-End Testing across Web, Mobile, POS, Kiosk, and KDS platforms for enterprise platforms.',
        'Developed and maintained Playwright with TypeScript automation scripts for critical workflows including Login, Cart, Checkout, and Payment Validation.',
        'Designed, reviewed, and executed detailed test cases and test scenarios based on complex business requirements.',
        'Identified, reported, tracked, and validated defects using Jira and Azure DevOps.',
        'Conducted Release Validation Testing, Production Verification, and Post-Deployment Smoke Testing.',
        'Validated integrations involving payment gateways, CRM systems, delivery tracking solutions, inventory management, loyalty programs, and reporting dashboards.',
        'Collaborated closely with developers, business analysts, product owners, and stakeholders within Agile Scrum sprints.'
      ]
    },
    {
      type: 'experience',
      icon: Briefcase,
      title: 'QA Engineer Intern',
      subtitle: 'Sune Solutions Pvt. Ltd.',
      date: 'Mar 2022 – Aug 2022',
      bullets: [
        'Executed manual functional, smoke, and regression test cases for food ordering applications.',
        'Participated in production verification activities and defect reproduction across multi-platform customer entry points.',
        'Assisted the QA team in test documentation and defect lifecycle logging using Jira.'
      ]
    },
    {
      type: 'achievement',
      icon: Award,
      title: 'Key Professional Achievements',
      subtitle: 'Career Milestones & Delivery Impact',
      date: '4.8 YOE Milestones',
      bullets: [
        'Successfully delivered multiple major production releases for Pizza Hut India and Papa Johns India platforms.',
        'Implemented Playwright automation test scripts for critical customer-facing revenue workflows.',
        'Performed thorough testing across 6+ diverse platforms including Web, Mobile (iOS/Android), POS, KDS, Admin, and Kiosks.',
        'Consistently collaborated with cross-functional teams to ensure high-quality and stable production deployments.'
      ]
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Bachelor of Technology [E.C.E]',
      subtitle: 'Mahatma Gandhi Institute of Technology (MGIT)',
      date: 'Graduated: 2022',
      bullets: []
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <h2 className="section-header-title">Experience & Education</h2>
          <div className="section-header-line"></div>
          <p className="section-header-subtitle">
            A chronological timeline of my professional career, educational benchmarks, and growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-list">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="timeline-card reveal-on-scroll"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Connecting Dot */}
                <div className="timeline-dot"></div>

                <div className="glass-card hover-lift">
                  <div className="timeline-card-header">
                    <div>
                      <h3 className="timeline-card-title">{item.title}</h3>
                      <span className="timeline-card-subtitle">{item.subtitle}</span>
                    </div>
                    <span className="timeline-card-date">{item.date}</span>
                  </div>

                  <ul className="timeline-bullets">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="timeline-bullet">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
